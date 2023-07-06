<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { fetchApiData } from '../api/api'
import TheDetails from '../components/TheDetails.vue'

const route = useRoute()
const showId = route.params.id
const show = ref({})

onMounted(async () => {
  const results = await fetchApiData(`tv/${showId}`)
  show.value = results
})
</script>

<template>
  <section class="container">
    <!-- Show Details Output -->
    <TheDetails :result="show" :isMovie="false"></TheDetails>
  </section>
</template>

<style scoped></style>
