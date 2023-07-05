<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import { SwiperSlide } from 'swiper/vue'
import { register } from 'swiper/element/bundle'
import 'swiper/css'
import { fetchApiData } from '@/api/api.js'
import MovieShowCard from '@/components/MovieShowCard.vue'

// Swiper
register()

const popularMovies = ref(null)
const nowPlaying = ref(null)

onMounted(async () => {
  const { results } = await fetchApiData('movie/popular')
  popularMovies.value = results
})

onBeforeMount(async () => {
  const { results } = await fetchApiData('movie/now_playing')
  nowPlaying.value = results
})

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>

<template>
  <section id="now-playing">
    <div>
      <h2>Now Playing</h2>
    </div>
    <div class="swiper">
      <swiper-container
        :slidesPerView="1"
        :spaceBetween="30"
        :freeMode="true"
        :loop="true"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false
        }"
        :breakpoints="{
          500: {
            slidesPerView: 2
          },
          700: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4
          }
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide class="swiper-slide" v-for="movie in nowPlaying" :key="movie.id">
          <div>
            <router-link :to="`/movie-details/${movie.id}`">
              <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" />
            </router-link>
            <h4 class="swiper-rating">{{ movie.vote_average }} / 10</h4>
          </div>
        </SwiperSlide>
      </swiper-container>
    </div>
  </section>

  <section id="popular-movies" class="container">
    <h2>Popular Movies</h2>
    <div class="grid">
      <MovieShowCard v-for="movie in popularMovies" :key="movie.id" :res="movie" :isMovie="true" />
    </div>
  </section>
</template>

<style scoped>
/* Now Playing */
section#now-playing {
  background: url(../src/images/showcase-bg.jpg) no-repeat center center/cover;
  padding: 60px;
}

#now-playing .cards {
  display: flex;
}

.swiper {
  width: 100%;
  height: 50%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: var(--color-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-rating {
  padding: 10px;
}
</style>
