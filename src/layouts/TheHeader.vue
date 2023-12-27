<script setup lang='ts'>
import Logo from '@/assets/svg/logo.svg';
import { MAIN_NAVIGATION } from '@/common/constants';
</script>

<template>
  <header class="header bg-blue-dark px-[20px] py-[10px] flex items-center">
    <div class="header__logo max-w-[48px]">
      <img :src="Logo" alt="">
    </div>
    <nav class="header__nav ml-auto">
      <ul class="flex">
        <li v-for="link of MAIN_NAVIGATION" :key="link.label" class="sm:ml-8 ml-3">
          <RouterLink :to="{ name: link.routeName }" active-class="border-white"
            class="text-white pb-2 border-b-2 border-transparent hover:border-white transition duration-500 text-sm sm:text-base">
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
