<script setup lang='ts'>
import StandingsTable from '@/modules/standings/components/StandingsTable.vue';
import { CONFERENCES } from '@/common/constants';
</script>

<template>
  <div v-for="conference of CONFERENCES" :key="conference.title" class="mb-10">
    <StandingsTable standings-type="conference" :standings-title="conference.title" />
  </div>
</template>

<style scoped></style>