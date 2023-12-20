<script setup lang='ts'>

</script>

<template>
  <div>
    <RouterLink :to="{ name: 'divisions-standings' }">division</RouterLink>
    <RouterLink :to="{ name: 'conferences-standings' }">Conferences</RouterLink>
  </div>
  <RouterView />
</template>

<style scoped></style>