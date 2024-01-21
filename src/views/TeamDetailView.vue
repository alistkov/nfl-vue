<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { ApiService } from '@/services/api';
import LoaderComponent from '@/common/components/LoaderComponent.vue';
import ErrorAlert from '@/common/components/ErrorAlert.vue';

const team = ref<any>();
const loading = ref<boolean>(false);
const loaded = ref<boolean>(false);
const error = ref<string>();
const route = useRoute();
const apiService = new ApiService();

const getTeamInfo = async (): Promise<void> => {
  loading.value = true
  try {
    const response = await apiService.fetchData('teams', { id: route.params.id });
    team.value = response[0];
  } catch (err) {
    if (err instanceof Error) {
      error.value = err.message
    }
  }
  loaded.value = true
  loading.value = false
};

onMounted(() => {
  getTeamInfo();
});

</script>

<template>
  <LoaderComponent v-if="loading" />
  <div v-if="error">
    <ErrorAlert>
      {{ error }}
    </ErrorAlert>
  </div>
  <template v-if="team">
    <div class="md:flex items-start">
      <img :src="team.logo" :alt="team.name" class="shrink-0 mr-[40px]">
      <div class="text-[14px]">
        <h1 class="font-bold text-blue-dark text-[20px] mb-[10px]">{{ team.name }} ({{ team.code }})</h1>
        <p class="mb-[5px]"><b>City:</b> {{ team.city }}</p>
        <p class="mb-[5px]"><b>Year of foundation:</b> {{ team.established }}</p>
        <p class="mb-[5px]"><b>Stadium:</b> {{ team.stadium }}</p>
        <p class="mb-[5px]"><b>Coach:</b> {{ team.coach }}</p>
        <p class="mb-[5px]"><b>Owner:</b> {{ team.owner }}</p>
      </div>
    </div>
  </template>
</template>
<style scoped></style>