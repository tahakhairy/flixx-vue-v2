<script setup>
import { ref, onMounted } from 'vue'
import { fetchApiData } from '../api/api'
import MovieShowCard from '../components/MovieShowCard.vue'

const popularShows = ref(null)

onMounted(async () => {
  const { results } = await fetchApiData('tv/popular')
  popularShows.value = results
  console.log(results)
})
</script>

<template>
  <section class="container">
    <h2>Popular TV Shows</h2>
    <div id="popular-shows" class="grid">
      <MovieShowCard
        v-for="show in popularShows"
        :key="show.id"
        :res="show"
        :isMovie="false"
      ></MovieShowCard>
    </div>
  </section>
</template>

<style scoped></style>
