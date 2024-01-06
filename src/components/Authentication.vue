<template>
  <transition name="fade">
    <div class="modal" v-if="authStore.isModalOpen">
      <div class="card">
        <div class="card-header">
          <h2>Your Account</h2>
          <span @click="closeAuthModal"><font-awesome-icon icon="fa-solid fa-xmark" /> </span>
        </div>

        <transition name="fade" mode="out-in" appear>
          <keep-alive>
            <login-form
              v-if="authStore.currentForm === 'login'"
              :isCurrent="authStore.currentForm"
            />
            <signup-form v-else :is-current="authStore.currentForm" />
          </keep-alive>
        </transition>
      </div>
    </div>
  </transition>
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
  min-width: 33%;
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

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.2s linear;
}

.fade-enter-to {
  opacity: 100%;
}

.fade-leave-to {
  transition: all 0.2s linear;
  opacity: 0;
}
</style>
