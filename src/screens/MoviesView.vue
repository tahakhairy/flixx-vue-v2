<script setup>
import { ref, onMounted } from 'vue'
import fetchApiData from '@/api/api.js'
import MovieShowCard from '@/components/MovieShowCard.vue'

const popularMovies = ref(null)

onMounted(async () => {
  const { results } = await fetchApiData('movie/popular')
  popularMovies.value = results
})
</script>

<template>
  <section id="now-playing">
    <div>
      <h2>Now Playing</h2>
    </div>
    <div class="swiper"></div>
  </section>

  <section id="popular-movies" class="container">
    <h2>Popular Movies</h2>
    <div class="grid">
      <MovieShowCard v-for="movie in popularMovies" :key="movie.id" :movie="movie" />
    </div>
  </section>
</template>

<style scoped>
/* Now Playing */
section#now-playing {
  background: url(../src/images/showcase-bg.jpg) no-repeat center center/cover;
  padding: 60px;
}

#now-playing .cards {
  display: flex;
}

.swiper {
  width: 100%;
  height: 50%;
}

/* Popular Movies */
/* section#popular-movies {
  margin: 30px 0;
} */
</style>
