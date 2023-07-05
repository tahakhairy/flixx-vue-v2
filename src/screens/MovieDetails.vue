<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import fetchApiData from '../api/api'
import TheDetails from '../components/TheDetails.vue'

const route = useRoute()
const movieId = route.params.id
const movie = ref({})

onMounted(async () => {
  const results = await fetchApiData(`movie/${movieId}`)
  movie.value = results
})
</script>

<template>
  <!-- Movie Details -->
  <div class="container">
    <TheDetails :result="movie" :isMovie="true"></TheDetails>
  </div>
</template>

<style scoped></style>
