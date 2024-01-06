<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import Authentication from '@/components/Authentication.vue'
</script>

<template>
  <Authentication />

  <TheHeader />

  <RouterView />

  <TheFooter />
</template>

<style scoped></style>
