<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { searchApiData } from '../api/api'

const route = useRoute()
const query = route.params.term
console.log(query)
const searchResults = ref(null)

const { results } = await searchApiData('movie', query)
console.log(results)
searchResults.value = results
</script>

<template>
  <div class="container">
    <h3>Search Results</h3>
  </div>
</template>

<style scoped></style>
