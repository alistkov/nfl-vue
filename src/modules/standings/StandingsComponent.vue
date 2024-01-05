<script setup lang='ts'>
import { STANDINGS_NAVIGATION } from '@/common/constants';
</script>

<template>
  <nav class="mb-5 md:mb-10">
    <ul class="flex justify-center w-full">
      <li v-for="link of STANDINGS_NAVIGATION" :key="link.label" class="w-[50%] md:w-[270px]">
        <Router-Link :to="{ name: link.routeName }"
          class="border border-solid border-blue-light w-full block text-center text-xs uppercase p-2 md:p-2.5 tracking-wide hover:text-white hover:bg-blue-light transition duration-300"
          active-class="bg-blue-light text-white">
          {{ link.label }}
        </Router-Link>
      </li>
    </ul>
  </nav>
  <RouterView />
</template>

<style scoped></style>