<script setup lang='ts'>
import logo from '@/assets/images/svg/logo.svg';
</script>

<template>
  <footer class="footer bg-blue-dark px-[20px] py-[10px] mt-auto">
    <Router-Link :to="{ name: 'home' }" class="block footer__logo max-w-[48px] ml-auto mr-auto">
      <img :src="logo" alt="">
    </Router-Link>
  </footer>
</template>

<style scoped></style>