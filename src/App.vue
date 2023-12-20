<script setup lang="ts">
import TheHeader from '@/layouts/TheHeader.vue'
import TheFooter from '@/layouts/TheFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="main max-w-full mx-auto w-[1400px] py-5 md:py-10 px-5 flex-grow">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped></style>
