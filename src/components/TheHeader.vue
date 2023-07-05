<script setup>
import { ref } from 'vue'

const query = ref('')
</script>

<template>
  <header id="main-heading">
    <div class="container">
      <div><router-link class="logo" to="/">FLIXX</router-link></div>
      <nav>
        <form>
          <select>
            <option selected value="movie">Movie</option>
            <option value="show">TV Show</option>
          </select>
          <input type="text" v-model.trim="query" placeholder="Search..." />
          <button type="button">Search</button>
        </form>
        <router-link class="link" active-class="active" to="/">Movies</router-link>
        <router-link class="link" active-class="active" to="/tv-shows">TV Shows</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
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
  text-decoration: none;
}

header nav {
  display: flex;
  justify-content: end;
  align-items: center;
}

header form {
  display: flex;
}

.link {
  padding: 12px;
  text-decoration: none;
  color: white;
  transition: 0.2s;
  margin: 0 10px;
  border-radius: 8px;
}

header nav .active {
  font-weight: bold;
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
}

header form select {
  border-radius: 8px 0 0 8px;
  padding: 10px 0 10px 10px;
  border: none;
}

header form select option {
  padding: 10px 20px;
  font-size: 16px;
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
</style>
