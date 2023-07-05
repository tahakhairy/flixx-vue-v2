<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import fetchApiData from '../api/api'
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
    <the-details :result="show" :isMovie="false"></the-details>
  </section>
</template>

<style scoped></style>
