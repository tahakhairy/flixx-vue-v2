<script setup>
import MovieCard from './components/MovieCard.vue'
</script>

<template>
  <header id="main-heading" class="container">
    <h1><a href="/">FLIXX</a></h1>

    <nav>
      <form action="">
        <input type="text" name="" id="" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
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

header form {
  padding: 10px;
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
  font-size: 40px;
  cursor: pointer;
  color: #fff;
  -webkit-text-stroke: 1px rgb(0, 0, 0);
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
