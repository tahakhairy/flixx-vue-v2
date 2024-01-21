import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useAuthStore = defineStore('auth', () => {
  const isModalOpen = ref(false)
  const currentForm = ref('login')

  return { currentForm, isModalOpen }
})
