<script setup lang='ts'>
import { ApiService } from '@/services/api';
import type { Team } from '@/common/types';
import { onMounted, ref } from 'vue';

const props = defineProps({
  division: {
    type: String,
    required: true,
  }
});

const standings = ref<Team[]>();
const error = ref<string | null>(null);
const apiService = new ApiService();

const calculatePtc = (won: number, lost: number, ties: number): number => {
  const totalGames = won + lost + ties;
  if (ties === 0) {
    return won / totalGames;
  }
  return (((won + ties) / totalGames + (won + ties) / totalGames) / 2);
};

const calculatePtcFromString = (result: string): number => {
  const [won = 0, lost = 0, ties = 0] = result.split('-');
  return calculatePtc(Number(won), Number(lost), Number(ties))
};


onMounted(async () => {
  try {
    standings.value = await apiService.getDivisionStandings(1, 2023, props.division);
  } catch (err) {
    if (err instanceof Error) {
      error.value = err.message;
    }
  }
})

</script>

<template>
  <table class="w-full bg-white mb-4">
    <tr class="font-normal text-xs">
      <th class="text-left font-normal border-b border-gray-mid px-[20px] py-[15px] border-r-2 w-[300px]">{{
        props.division.toUpperCase() }}
      </th>
      <th class="font-normal border-b border-gray-mid px-[20px] py-[15px]">W</th>
      <th class="font-normal border-b border-gray-mid px-[20px] py-[15px]">L</th>
      <th class="font-normal border-b border-gray-mid px-[20px] py-[15px]">T</th>
      <th class="font-normal border-b border-gray-mid px-[20px] py-[15px]">PCT</th>
      <th class="font-normal border-b border-gray-mid px-[20px] py-[15px]">PF</th>
      <th class="font-normal border-b border-gray-mid px-[20px] py-[15px]">PA</th>
      <th class="font-normal border-b border-gray-mid px-[20px] py-[15px] border-r">Net Pts</th>
      <th class="font-normal border-b border-gray-mid px-[20px] py-[15px]">Home</th>
      <th class="font-normal border-b border-gray-mid px-[20px] py-[15px] border-r">Road</th>
      <th class="font-normal border-b border-gray-mid px-[20px] py-[15px]">Div</th>
      <th class="font-normal border-b border-gray-mid px-[20px] py-[15px] border-r">Pct</th>
      <th class="font-normal border-b border-gray-mid px-[20px] py-[15px]">Conf</th>
      <th class="font-normal border-b border-gray-mid px-[20px] py-[15px] border-r">Pct</th>
      <th class="font-normal border-b border-gray-mid px-[20px] py-[15px]">Strk</th>
    </tr>
    <tr v-for="(team, index) of standings" :key="team.team.id" class="text-xs"
      :class="{ 'bg-gray-light': (index + 1) % 2 === 0 }">
      <template v-if="error">
        {{ error }}
      </template>
      <template v-else>
        <td class="font-normal border-b border-gray-mid px-[20px] py-[10px] border-r-2">
          <a href="#" class="flex items-center">
            <img :src="team.team.logo" :alt="team.team.name" class="w-[24px] mr-2">
            {{ team.team.name }}
          </a>
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">{{ team.won }}</td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">{{ team.lost }}</td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">{{ team.ties }}</td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">{{ calculatePtc(team.won,
          team.lost,
          team.ties).toFixed(3) }}</td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">{{ team.points.for }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">{{ team.points.against }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px] border-r">{{
          team.points.difference
        }}</td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">{{ team.records.home }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px] border-r">{{ team.records.road }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">{{ team.records.division
        }}</td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px] border-r">{{
          calculatePtcFromString(team.records.division).toFixed(3) }}</td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">{{
          team.records.conference }}</td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px] border-r">{{
          calculatePtcFromString(team.records.conference).toFixed(3) }}</td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">{{ team.streak }}</td>
      </template>
    </tr>
  </table>
</template>

<style scoped></style>