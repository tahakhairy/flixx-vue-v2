<script setup>
import MovieShowCard from './components/MovieShowCard.vue'
</script>

<template>
  <header id="main-heading">
    <div class="container">
      <div class="logo"><a href="/">FLIXX</a></div>
      <nav>
        <form action="">
          <input type="text" name="" id="" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
        <a href="/">Movies</a>
        <a href="/">TV Shows</a>
      </nav>
    </div>
  </header>

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
      <MovieShowCard />
      <MovieShowCard />
      <MovieShowCard />
      <MovieShowCard />
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

section h2 {
  margin: 20px 0;
  text-align: center;
  text-transform: uppercase;
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}

/* Heading */
#main-heading {
  padding: 15px 0;
  background-color: #000000c0;
}
#main-heading .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 20px 0; */
}

header .logo {
  color: #fff;
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
}

a {
  color: #fff;
  text-decoration: none;
}

header nav {
  display: flex;
  justify-content: end;
  align-items: center;
}

header nav a {
  padding: 12px;
  text-decoration: none;
  color: white;
  transition: 0.2s;
  margin: 0 10px;
  border-radius: 8px;
}

header nav a:hover {
  background-color: #979797;
}

header nav a:active {
  background-color: #979797;
  color: rgb(41, 147, 98);
}

#search {
  margin-top: 20px;
  padding: 24px;
  background-color: #656565;
  text-align: center;
}

header form input {
  width: 70%;
  padding: 10px 20px;
  border: none;
  border-radius: 8px 0 0 8px;
}

header form button {
  border: none;
  padding: 10px 20px;
  border-radius: 0 8px 8px 0;
  color: white;
  background-color: rgb(41, 147, 98);
  cursor: pointer;
}

#search form button:active {
  border: 1px solid #000000;
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
