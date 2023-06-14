<script setup>
import MovieCard from './components/MovieCard.vue'
</script>

<template>
  <header id="main-heading" class="container">
    <h1><a href="/">FLIXX</a></h1>
    <nav>
      <a href="/">Movies</a>
      <a href="/">TV Shows</a>
    </nav>
  </header>

  <main class="container">
    <section id="now-playing">
      <div>
        <h2>Now Playing</h2>
      </div>
      <div class="cards">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>

    <section id="search">
      <input type="radio" name="type" id="" value="movies" />
      <label for=""> Movies</label>
      <input type="radio" name="type" id="" value="shows" />
      <label for=""> TV Shows</label>

      <form action="">
        <input type="text" name="" id="" placeholder="Search..." />
      </form>
    </section>
  </main>
</template>

<style scoped>
.container {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

#now-playing {
  padding: 16px;
  margin-top: 20px;
  background-color: #656565;
}

#now-playing .cards {
  display: flex;
}

#search {
  margin-top: 20px;
  padding: 24px;
  background-color: #656565;
  text-align: center;
}

#now-playing div h2 {
  text-align: center;
  padding: 30px;
}

header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #656565;
  padding: 12px;
  margin-top: 30px;
}

header h1 a {
  font-size: 35px;
  cursor: pointer;
  color: #000;
  text-decoration: none;
}

header nav a {
  padding: 12px;
  text-decoration: none;
  font-size: 20px;
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
</style>
