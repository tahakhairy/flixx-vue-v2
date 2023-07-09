<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { fetchApiData } from '../api/api'
import TheDetails from '../components/TheDetails.vue'

const route = useRoute()
const movieId = route.params.id
const movie = ref({})
const movieCast = ref([])

onMounted(async () => {
  const results = await fetchApiData(`movie/${movieId}`)
  movie.value = results
  const { cast } = await fetchApiData(`movie/${movieId}/credits`)
  movieCast.value = cast
  console.log(cast)
})
</script>

<template>
  <!-- Movie Details -->
  <div class="container">
    <TheDetails :result="movie" :cast="movieCast" :isMovie="true"></TheDetails>
  </div>
</template>

<style scoped></style>
