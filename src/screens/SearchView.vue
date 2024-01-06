<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { searchApiData } from '../api/api'
import MovieShowCard from '@/components/MovieShowCard.vue'

const route = useRoute()
const query = route.params.term
const type = route.params.type
const currPage = ref(1)
const totalPages = ref(1)
const totalResults = ref(0)
const searchResults = ref([])

onMounted(async () => {
  const { results, total_pages, total_results } = await searchApiData(type, query, currPage.value)
  searchResults.value = results
  totalPages.value = total_pages
  totalResults.value = total_results
  console.log(searchResults.value)
})

async function nextPage() {
  currPage.value++
  const { results } = await searchApiData(type, query, currPage.value)
  searchResults.value = results
}
</script>

<template>
  <div class="container">
    <h3>{{ searchResults.length }} of {{ totalResults }} results for {{ query }}</h3>
    <div class="grid">
      <MovieShowCard
        v-for="(res, index) in searchResults"
        :key="index"
        :res="res"
        :isMovie="type === 'movie' ? true : false"
      ></MovieShowCard>
    </div>
    <div class="pagination">
      <button class="btn btn-primary" id="next" @click="nextPage">Next</button>
      <div class="page-counter">Page {{ currPage }} of {{ totalPages }}</div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  padding-top: 70px;
  padding-bottom: 20px;
  text-transform: uppercase;
  margin-top: 30px;
  font-size: 25px;
  text-align: center;
}
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-secondary);
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  background: transparent;
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  background: var(--color-secondary);
  color: #000;
}

.btn:disabled {
  border-color: #ccc;
  cursor: not-allowed;
}

.btn:disabled:hover {
  background: transparent;
  color: #fff;
}

.pagination {
  margin-top: 20px;
}

.page-counter {
  margin-top: 10px;
}
</style>
