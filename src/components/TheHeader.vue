<script setup lang='ts'>
import Logo from '@/assets/svg/logo.svg';
</script>

<template>
  <header class="header bg-blue-dark p-container flex items-center">
    <div class="header__logo max-w-logo">
      <img :src="Logo" alt="">
    </div>
    <nav class="header__nav ml-auto">
      <ul class="flex">
        <li>
          <RouterLink :to="{ name: 'standings' }"
            class="text-white pb-2 border-b-2 border-transparent hover:border-white transition duration-500 text-sm sm:text-base">
            Standings
          </RouterLink>
        </li>
        <li class="sm:ml-8 ml-3">
          <RouterLink :to="{ name: 'games' }"
            class="text-white pb-2 border-b-2 border-transparent hover:border-white transition duration-500 text-sm sm:text-base">
            Games
          </RouterLink>
        </li>
        <li class="sm:ml-8 ml-3">
          <RouterLink :to="{ name: 'teams' }"
            class="text-white pb-2 border-b-2 border-transparent hover:border-white transition duration-300 text-sm sm:text-base">
            Teams
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
