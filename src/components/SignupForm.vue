<template>
  <vee-form
    v-show="props.isCurrent === 'signup'"
    :validation-schema="validationSchema"
    @submit="signup"
  >
    <h3>Sign Up</h3>

    <!-- Full Name -->
    <div class="input-field-div">
      <label for="name">Full Name</label>
      <vee-field type="text" placeholder="e.g. John Doe" id="name" name="name" />
      <error-message class="error-msg" name="name" />
    </div>

    <!-- Email -->
    <div class="input-field-div">
      <label for="email">Email</label>
      <vee-field type="email" placeholder="e.g. John@abc.com" id="email" name="email" />
      <error-message class="error-msg" name="email" />
    </div>

    <!-- Password -->
    <div class="input-field-div">
      <label for="password">Password</label>
      <vee-field name="password" :bails="false" #default="{ field, errors }">
        <input type="password" placeholder="Password" id="password" v-bind="field" />
        <div class="error-msg" v-for="error in errors" :key="error">{{ error }}</div>
      </vee-field>
      <error-message class="error-msg" name="password" />
    </div>

    <!-- Confirm Password -->
    <div class="input-field-div">
      <label for="confirm-password">Confirm Password</label>
      <vee-field
        type="password"
        placeholder="Confirm Password"
        id="confirm-password"
        name="confirmPassword"
      />
      <error-message class="error-msg" name="confirmPassword" />
    </div>

    <!-- Sign Up -->
    <button class="signup-btn" type="submit">Sign Up</button>

    <div class="log-in">
      <span>Already have an account? </span>
      <span @click="openLoginForm"> Login</span>
    </div>
  </vee-form>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/Auth'
const props = defineProps(['isCurrent'])

const authStore = useAuthStore()

const validationSchema = ref({
  name: 'required|min:3|max:100|alpha_spaces',
  email: 'required|min:3|max:100|email',
  password: 'required|min:6|max:100',
  confirmPassword: 'confirmed:@password'
})

function openLoginForm() {
  authStore.$patch({
    currentForm: 'login'
  })
}

function signup(values) {
  console.log(values)
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

form .input-field-div {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
  margin-top: 1rem;
}

input {
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 0.1rem;
  border: none;
  outline: 2px solid #299362;
  background-color: #141414;
  border-radius: 4px;
  color: #d6d6d6;
}

input:focus {
  outline: 4px solid #299362;
  border: none;
}

.signup-btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 2rem;
  background-color: #299362;
  font-size: 1rem;
  font-weight: bold;
  color: #141414;
  cursor: pointer;
  margin: 1rem auto;
  transition: all 0.2s ease;
}

button:hover {
  background-color: #1f704a;
  color: #d6d6d6;
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

.error-msg {
  color: rgb(175, 20, 20);
}
</style>
