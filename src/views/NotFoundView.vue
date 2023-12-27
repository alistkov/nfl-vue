<script setup lang='ts'>
import notFoundImage from '@/assets/images/not-found.jpg';
</script>

<template>
  <div class="mb-5 md:mb-10 text-center">
    <h1 class="text-2xl font-bold mb-4 md:text-4xl md:mb-8 xl:text-6xl">Uh-oh!</h1>
    <p class="mb-2 font-medium md:text-xl">There's nothing here.</p>
    <p class="mb-6 font-medium md:mb-0 md:text-xl">Let's get you back to <RouterLink to="/"
        class="text-blue-light hover:text-blue-dark">
        our home page.
      </RouterLink>
    </p>
  </div>
  <div class="text-center">
    <img :src="notFoundImage" alt="Page not found" class="w-full">
  </div>
</template>

<style scoped></style>