<script setup lang='ts'>
import StandingsTable from '@/modules/standings/components/StandingsTable.vue';
import { CONFERENCES } from '@/common/constants';
</script>

<template>
  <div class="p-4 mb-5 border border-red-600 bg-red-50 rounded text-red-600">
    <p class="font-bold">Warning!</p>
    <p>Tables do not take into account additional indicators in case of equal victories.</p>
  </div>
  <div v-for="conference of CONFERENCES" :key="conference.title" class="mb-10">
    <StandingsTable standings-type="conference" :standings-title="conference.title" />
  </div>
</template>

<style scoped></style>