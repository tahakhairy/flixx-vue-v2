<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps(['movie', 'show', 'isMovie'])
const { movie, show, isMovie } = toRefs(props)
</script>

<template>
  <div class="card">
    <div>
      <router-link :to="`/${isMovie ? 'movie' : 'show'}-details/${isMovie ? movie.id : show.id}`">
        <img
          :src="`https://image.tmdb.org/t/p/w500${isMovie ? movie.poster_path : show.poster_path}`"
        />
      </router-link>
      <!-- <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" /> -->
    </div>
    <div class="card-body">
      <h5>{{ isMovie ? movie.title : show.name }}</h5>
      <p>
        <small>Release: {{ isMovie ? movie.release_date : show.first_air_date }}</small>
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #04376b;
  padding: 5px;
}

.card img {
  width: 100%;
}

.card-body {
  padding: 10px;
  font-size: 20px;
}

.card:hover {
  transform: scale(1.05);
  transition: all 0.5s ease-in-out;
  background: #0a4b8f;
}
</style>
