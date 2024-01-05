<script setup lang='ts'>
import StandingsTable from '@/modules/standings/components/StandingsTable.vue';
import { CONFERENCES } from '@/common/constants';
</script>

<template>
  <div v-for="conference of CONFERENCES" :key="conference.title" class="mb-10">
    <div class="bg-gray-light text-sm py-3.5 px-[20px] border-b border-bg-gray-dark">{{ conference.title.toUpperCase() }}
    </div>
    <div v-for="division of conference.divisions" :key="division">
      <StandingsTable standings-type="division" :standings-title="division" />
    </div>
  </div>
</template>

<style scoped></style>