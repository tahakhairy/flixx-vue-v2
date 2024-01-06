import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useAuthStore = defineStore('auth', () => {
  const isModalOpen = ref(false)
  const currentForm = ref('login')

  const hiddenClass = computed(() => {
    return isModalOpen.value ? '' : 'hidden'
  })

  return { currentForm, isModalOpen, hiddenClass }
})
