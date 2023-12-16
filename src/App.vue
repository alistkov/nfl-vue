<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="main max-w-full mx-auto w-container py-10 px-5">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped></style>
