<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import fetchApiData from '../api/api'

const route = useRoute()
const movieId = route.params.id
const movie = ref(null)

onMounted(async () => {
  const results = await fetchApiData(`movie/${movieId}`)
  movie.value = results
  console.log(results)
})
</script>

<template>
  <!-- Movie Details -->
  {{ movie }}
</template>

<style scoped>
.details-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0 30px;
}

.details-top img {
  width: 400px;
  height: 100%;
  margin-right: 60px;
  object-fit: cover;
}

.details-top p {
  margin: 20px 0;
}

.details-top .btn {
  margin-top: 20px;
}

.details-bottom li {
  margin: 15px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #fff;
  border-color: rgba(255, 255, 255, 0.1);
}
</style>
