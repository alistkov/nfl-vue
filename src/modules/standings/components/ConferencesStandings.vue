<script setup lang='ts'>
import { CONFERENCES } from '@/common/constants';
import StandingsTable from '@/modules/standings/components/StandingsTable.vue';
import ErrorAlert from '@/common/components/ErrorAlert.vue';
</script>

<template>
  <ErrorAlert class="mb-5">
    <p class="font-bold">Warning!</p>
    <p>Tables do not take into account additional indicators in case of equal victories.</p>
    <p>The current standings can be found on the <a href="https://www.nfl.com/standings/conference/2023/REG"
        target="_blank"
        class="font-bold hover:border-b hover:border-red-600 transition-colors ease-in duration-200">official NFL
        website</a>.</p>
  </ErrorAlert>
  <div v-for="conference of CONFERENCES" :key="conference.title" class="mb-10">
    <StandingsTable standings-type="conference" :standings-title="conference.title" />
  </div>
</template>

<style scoped></style>