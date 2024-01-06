<template>
  <form v-show="props.isCurrent === 'signup'">
    <h3>Sign Up</h3>
    <label for="name">Full Name</label>
    <input type="text" placeholder="e.g. John Doe" />
    <label for="email">Email</label>
    <input type="email" placeholder="e.g. John@abc.com" />
    <label for="password">Password</label>
    <input type="password" placeholder="Password" />
    <label for="confirm-password">Confirm Password</label>
    <input type="password" placeholder="Confirm Password" />
    <button @click.prevent="">Sign Up</button>

    <div class="log-in">
      <span>Already have an account? </span>
      <span @click="openLoginForm"> Login</span>
    </div>
  </form>
</template>

<script setup>
import { useAuthStore } from '../stores/Auth'
const props = defineProps(['isCurrent'])

const authStore = useAuthStore()

function openLoginForm() {
  authStore.$patch({
    currentForm: 'login'
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
  outline: 2px solid #299362;
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
  font-size: 1rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin: 1rem auto;
}

.log-in {
  text-align: center;
  font-size: 0.9rem;
  margin-top: 1rem;
}

.log-in span:last-child {
  color: #299362;
  font-weight: bold;
  cursor: pointer;
}

.log-in span:last-child:hover {
  text-decoration: underline;
}
</style>
