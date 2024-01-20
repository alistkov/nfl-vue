<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { ApiService } from '@/services/api';
import type { TeamInfo } from '@/common/types';
import LoaderComponent from '@/common/components/LoaderComponent.vue'
import ErrorAlert from '@/common/components/ErrorAlert.vue';

const apiService = new ApiService();
const teams = ref<TeamInfo[]>();
const error = ref<string | null>(null);
const loading = ref<boolean>(false);

const fetchTeams = async (): Promise<void> => {
  loading.value = true;
  try {
    const response = await apiService.fetchData('/teams', { league: 1, season: 2023 }) as TeamInfo[];
    teams.value = response.filter((team: TeamInfo) => team.code !== null);
  } catch (err) {
    if (err instanceof Error) {
      error.value = err.message
    }
  }
  loading.value = false;
}

onMounted(async () => {
  fetchTeams();
})
</script>

<template>
  <LoaderComponent v-if="loading" />
  <ErrorAlert v-if="error">
    {{ error }}
  </ErrorAlert>
  <div class="flex flex-wrap mx-[-10px]">
    <div v-for="team in teams" :key="team.id" class="w-full lg:w-[25%] md:w-[50%] mb-2 px-[10px]">
      <RouterLink :to="{ name: 'team-detail', params: { id: team.id } }"
        class="block bg-gray-light border border-gray-dark p-2 text-sm hover:text-white hover:bg-blue-light transition-colors duration-300">
        {{ team.name }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>