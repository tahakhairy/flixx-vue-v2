<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { fetchApiData } from '../api/api'
import TheDetails from '../components/TheDetails.vue'

const route = useRoute()
const showId = route.params.id
const show = ref({})
const showCast = ref([])

onMounted(async () => {
  const results = await fetchApiData(`tv/${showId}`)
  show.value = results
  const { cast } = await fetchApiData(`tv/${showId}/credits`)
  showCast.value = cast
})
</script>

<template>
  <section class="container">
    <!-- Show Details Output -->
    <TheDetails :result="show" :cast="showCast" :isMovie="false"></TheDetails>
  </section>
</template>

<style scoped></style>
