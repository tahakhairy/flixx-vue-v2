<template>
  <form v-show="props.isCurrent === 'login'">
    <h3>Login</h3>
    <label for="email">Email</label>
    <input type="email" placeholder="Email" />
    <label for="password">Password</label>
    <input type="password" placeholder="Password" />
    <button @click.prevent="">Login</button>
    <div class="sign-up">
      <span>Don't have an account? </span>
      <span @click="openSignupForm"> Sign Up</span>
    </div>
  </form>
</template>

<script setup>
import { useAuthStore } from '../stores/Auth'
const props = defineProps(['isCurrent'])
const authStore = useAuthStore()

function openSignupForm() {
  authStore.$patch({
    currentForm: 'signup'
  })
}
</script>

<style scoped>
h3 {
  text-align: center;
  margin-top: 2rem;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
}

input {
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  border: none;
  outline: 2.5px solid #299362;
  background-color: #141414;
  border-radius: 4px;
  margin-bottom: 0.7rem;
}

input:focus {
  outline: 4px solid #299362;
  border: none;
}

button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 2rem;
  background-color: #299362;
  color: #141414;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin: 1rem auto;
  transition: all 0.2s ease;
}

button:hover {
  background-color: #1f704a;
  color: #d6d6d6;
}

.sign-up {
  text-align: center;
  font-size: 0.9rem;
  margin-top: 1rem;
}

.sign-up span:last-child {
  color: #299362;
  font-weight: bold;
  cursor: pointer;
}

.sign-up span:last-child:hover {
  text-decoration: underline;
}
</style>
