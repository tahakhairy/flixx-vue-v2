<script setup>
import MovieShowCard from '@/components/MovieShowCard.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <TheHeader />

  <section id="now-playing">
    <div>
      <h2>Now Playing</h2>
    </div>
    <div class="swiper"></div>
  </section>

  <section id="popular-movies" class="container">
    <h2>Popular Movies</h2>
    <div class="grid">
      <MovieShowCard />
      <MovieShowCard />
      <MovieShowCard />
      <MovieShowCard />
    </div>
  </section>

  <TheFooter />
</template>

<style scoped>
/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}

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

/* Popular Movies */
/* section#popular-movies {
  margin: 30px 0;
} */
</style>
