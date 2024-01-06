<template>
  <footer class="main-footer">
    <div class="container">
      <div class="logo"><span>FLIXX</span></div>
      <div class="social-links">
        <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Footer */
.main-footer {
  background: #020d18;
  padding: 20px 0;
  margin-top: 20px;
}

.main-footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-footer .container .logo {
  color: #fff;
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
}

.main-footer .container .social-links {
  display: flex;
  font-size: 20px;
}

.main-footer .container .social-links a {
  margin-left: 10px;
  color: #fff;
}

.main-footer .container .social-links a:hover {
  color: var(--color-secondary);
}
</style>
