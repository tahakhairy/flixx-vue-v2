<script setup></script>

<template>
  <div class="card">
    <div>
      <a href="/">
        <img src="../images/no-image.jpg" />
      </a>
    </div>
    <div class="card-body">
      <h5>Fast X</h5>
      <p><small>Release: 2020-6-12</small></p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #04376b;
  padding: 5px;
}

.card img {
  width: 100%;
}

.card-body {
  padding: 10px;
  font-size: 20px;
}

.card:hover {
  transform: scale(1.05);
  transition: all 0.5s ease-in-out;
  background: #0a4b8f;
}
</style>
