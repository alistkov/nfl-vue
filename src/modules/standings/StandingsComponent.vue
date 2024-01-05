<script setup lang='ts'>
import { STANDINGS_NAVIGATION } from '@/common/constants';
</script>

<template>
  <nav class="mb-5 md:mb-10">
    <ul class="flex justify-center w-full">
      <li v-for="link of STANDINGS_NAVIGATION" :key="link.label" class="w-[50%] md:w-[270px] bg-white">
        <Router-Link :to="{ name: link.routeName }"
          class="block p-2 border border-blue-light text-center text-blue-light uppercase text-xs hover:bg-blue-light hover:text-white ease-in duration-200"
          active-class="text-white bg-blue-light">
          {{ link.label }}
        </Router-Link>
      </li>
    </ul>
  </nav>
  <RouterView />
</template>

<style scoped></style>