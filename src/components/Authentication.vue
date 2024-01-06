<template>
  <div class="modal" :class="authStore.hiddenClass">
    <div class="card">
      <div class="card-header">
        <h2>Your Account</h2>
        <span @click="closeAuthModal"><font-awesome-icon icon="fa-solid fa-xmark" /> </span>
      </div>

      <login-form :isCurrent="authStore.currentForm"></login-form>

      <signup-form :isCurrent="authStore.currentForm"></signup-form>
    </div>
  </div>
</template>

<script setup>
import LoginForm from './LoginForm.vue'
import SignupForm from './SignupForm.vue'
import { useAuthStore } from '../stores/Auth'

const authStore = useAuthStore()

function closeAuthModal() {
  authStore.$patch({
    isModalOpen: false
  })
}
</script>

<style scoped>
.modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.534);
}

.modal .card {
  min-width: 36%;
  background-color: black;
  border-radius: 1rem;
  padding: 1.5rem 2rem;
}

.modal .card .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal .card .card-header span {
  width: 2.4rem;
  height: 2.4rem;
  font-size: 1.3rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal .card .card-header span:hover {
  cursor: pointer;
  border: 2px solid #299362;
  color: #299362;
}

.hidden {
  display: none;
}
</style>
