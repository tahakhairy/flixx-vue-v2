<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { searchApiData } from '../api/api'
import MovieShowCard from '@/components/MovieShowCard.vue'

const route = useRoute()
const query = route.params.term
const type = route.params.type
const searchResults = ref(null)

onMounted(async () => {
  const { results, page, total_pages } = await searchApiData(type, query)
  searchResults.value = results
  console.log(searchResults.value)
})
</script>

<template>
  <div class="container">
    <h3>Search Results</h3>
    <div class="grid">
      <MovieShowCard
        v-for="(res, index) in searchResults"
        :key="index"
        :res="res"
        :isMovie="type === 'movie' ? true : false"
      ></MovieShowCard>
    </div>
  </div>
</template>

<style scoped></style>
