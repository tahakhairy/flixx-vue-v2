<script setup>
import genres from '@/assets/utils.js'
import { ref, defineProps, toRefs } from 'vue'

const props = defineProps(['result', 'isMovie', 'cast'])
const { result, cast, isMovie } = toRefs(props)

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
  <div class="details-bottom">
    <h2>Cast</h2>
    <div class="cast">
      <div class="cast-card" v-for="c in cast" :key="c.id">
        <img
          :src="
            c.profile_path !== null
              ? `https://image.tmdb.org/t/p/w500${c.profile_path}`
              : '../src/images/no-image.jpg'
          "
          alt=""
        />
        <p>{{ c.name }}</p>
        <span>{{ c.character }}</span>
      </div>
    </div>

    <h2>Movie Info</h2>
    <ul>
      <li><span class="text-secondary">Budget:</span> ${{ result.budget }}</li>
      <li><span class="text-secondary">Revenue:</span> ${{ result.revenue }}</li>
      <li><span class="text-secondary">Runtime:</span> {{ result.runtime }} minutes</li>
      <li><span class="text-secondary">Status:</span> {{ result.status }}</li>
    </ul>

    <h4>Production Companies</h4>
    <div>
      <span v-for="company in result.production_companies" :key="company.id">
        {{ company.name }},
      </span>
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

@media (max-width: 700px) {
  .details-top {
    display: block;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: #ccc solid 1px;
  }
}
.details-top img {
  width: 400px;
  height: 100%;
  margin-right: 60px;
  object-fit: cover;
}

.details-top .genre {
  display: flex;
  flex-wrap: wrap;
}
.details-top .genre span {
  padding: 10px 20px;
  border: 0.5px solid rgba(255, 255, 255, 0.258);
  margin: 10px;
  font-size: 14px;
  border-radius: 10px;
}

.details-top p {
  margin: 20px 0;
}

.details-top .btn {
  margin-top: 20px;
}

.details-bottom {
  margin: 40px;
  padding: 40px;
}

.details-bottom h2 {
  text-align: center;
  text-transform: uppercase;
  margin-top: 30px;
}

.details-bottom li {
  margin: 15px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #fff;
  border-color: rgba(255, 255, 255, 0.1);
}

.cast {
  display: flex;
  flex-wrap: nowrap;
  box-sizing: content-box;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: auto;
}
.cast .cast-card {
  margin: 10px;
  padding: 10px;
  border-radius: 6px;
  width: 200px;
  flex-shrink: 0;
  height: fit-content;
  background-color: #04376b;
}

.cast-card img {
  width: 100%;
}

.cast-card p {
  font-weight: bold;
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
