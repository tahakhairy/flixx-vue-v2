<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps(['movie'])
const { movie } = toRefs(props)
</script>

<template>
  <div class="card">
    <div>
      <router-link :to="`/movie-details/${movie.id}`">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" />
      </router-link>
      <!-- <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" /> -->
    </div>
    <div class="card-body">
      <h5>{{ movie.title }}</h5>
      <p>
        <small>Release: {{ movie.release_date }}</small>
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
