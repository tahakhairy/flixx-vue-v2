<script setup>
import genres from '@/assets/utils.js'
import { ref, defineProps, toRefs } from 'vue'

const props = defineProps(['result', 'isMovie'])
const { result, isMovie } = toRefs(props)

const isHovering = ref('')

function addGenreColor(id) {
  return genres.find((g) => g.id === id).color
}
</script>

<template>
  <div
    class="overlay"
    :style="{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${result.backdrop_path})`
    }"
  ></div>
  <div class="details-top">
    <img
      :src="`https://image.tmdb.org/t/p/w500${result.poster_path}`"
      :alt="isMovie ? result.title : result.name"
    />
    <div>
      <h2>{{ isMovie ? result.title : result.name }}</h2>
      <p>{{ result.vote_average }} / 10</p>
      <p>
        <strong>Release</strong><br />{{ isMovie ? result.release_date : result.first_air_date }}
      </p>
      <p>
        <strong>Overview</strong><br />
        {{ result.overview }}
      </p>
      <p><strong>Genres</strong></p>
      <div class="genre">
        <span
          v-for="g in result.genres"
          :key="g.id"
          :id="g.id"
          @mouseover="isHovering = g.id"
          @mouseleave="isHovering = ''"
          :style="[
            isHovering == g.id
              ? { backgroundColor: addGenreColor(g.id) }
              : { backgroundColor: '#00000000' }
          ]"
          >{{ g.name }}</span
        >
      </div>
    </div>
  </div>
</template>

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
  opacity: 0.22;
}
</style>
