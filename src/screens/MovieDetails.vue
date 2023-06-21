<template>
  <!-- Movie Details -->
  <div class="container">
    <div
      class="overlay"
      :style="{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
      }"
    ></div>
    <div class="details-top">
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
      <div>
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.vote_average }} / 10</p>
        <p><strong>Release</strong><br />{{ movie.release_date }}</p>
        <p>
          <strong>Overview</strong><br />
          {{ movie.overview }}
        </p>
        <p><strong>Genres</strong></p>
        <div class="genre">
          <span
            v-for="g in movie.genres"
            :key="g.id"
            :id="g.id"
            @mouseover="isHovering = g.id"
            @mouseleave="isHovering = ''"
            :style="[
              isHovering == g.id
                ? { backgroundColor: changeColor(g.id) }
                : { backgroundColor: '#00000000' }
            ]"
            >{{ g.name }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import genres from '@/assets/utils.js'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import fetchApiData from '../api/api'

const route = useRoute()
const movieId = route.params.id
const movie = ref({})
const isHovering = ref('')
// const genreStyle = ref({ backgroundColor: '#000' })

// const genreId = ref(0)

// const rgba2hex = (rgba) =>
//   `#${rgba
//     .match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/)
//     .slice(1)
//     .map((n, i) =>
//       (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n))
//         .toString(16)
//         .padStart(2, '0')
//         .replace('NaN', '')
//     )
//     .join('')}`
function changeColor(id) {
  return genres.find((o) => o.id === id).color
}
// function toggleHover(id) {
//   let myCurrentColor = genres.find((o) => o.id === id).color
//   let myDivObj = document.getElementById(id)
//   let myDivObjBgColor = window.getComputedStyle(myDivObj).backgroundColor
//   if (rgba2hex(myDivObjBgColor) === '#00000000') {
//     document.getElementById(id).style.backgroundColor = myCurrentColor
//   } else {
//     document.getElementById(id).style.backgroundColor = '#00000000'
//   }
// }

onMounted(async () => {
  const results = await fetchApiData(`movie/${movieId}`)
  movie.value = results
  console.log(movie.value)
})
</script>

<style scoped>
.details-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0 30px;
}

.details-top img {
  width: 400px;
  height: 100%;
  margin-right: 60px;
  object-fit: cover;
}

.details-top .genre span {
  padding: 10px 20px;
  border: 0.5px solid rgba(255, 255, 255, 0.258);
  margin: 0 10px;
  font-size: 14px;
  border-radius: 10px;
}

.action {
  background-color: rgb(113, 22, 22);
}

.details-top p {
  margin: 20px 0;
}

.details-top .btn {
  margin-top: 20px;
}

.details-bottom li {
  margin: 15px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #fff;
  border-color: rgba(255, 255, 255, 0.1);
}

.overlay {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.1;
}
</style>
