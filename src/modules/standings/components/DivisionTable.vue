<script setup lang='ts'>
import type { Team } from '@/common/types';
import type { PropType } from 'vue';

const props = defineProps({
  teams: {
    type: Object as PropType<Team[]>,
    required: true,
  },
  conference: {
    type: String,
    required: true,
  }
});

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
}
</script>

<template>
  <table class="w-full">
    <tr class="text-left font-normal text-xs">
      <th class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px] border-r-2">{{ props.conference }}
      </th>
      <th class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">W</th>
      <th class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">L</th>
      <th class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">T</th>
      <th class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">PCT</th>
      <th class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">PF</th>
      <th class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">PA</th>
      <th class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px] border-r">Net Pts</th>
      <th class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">Home</th>
      <th class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px] border-r">Road</th>
      <th class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">Div</th>
      <th class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px] border-r">Pct</th>
      <th class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">Conf</th>
      <th class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px] border-r">Pct</th>
      <th class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">Strk</th>
    </tr>
    <tr v-for="team of props.teams" :key="team.team.id" class="text-xs">
      <td class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px] border-r-2">
        <a href="#" class="flex items-center">
          <img :src="team.team.logo" :alt="team.team.name" class="w-[24px] mr-2">
          {{ team.team.name }}
        </a>
      </td>
      <td class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">{{ team.won }}</td>
      <td class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">{{ team.lost }}</td>
      <td class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">{{ team.ties }}</td>
      <td class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">{{ calculatePtc(team.won,
        team.lost,
        team.ties).toFixed(3) }}</td>
      <td class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">{{ team.points.for }}
      </td>
      <td class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">{{ team.points.against }}
      </td>
      <td class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px] border-r">{{ team.points.difference
      }}</td>
      <td class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">{{ team.records.home }}
      </td>
      <td class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px] border-r">{{ team.records.road }}
      </td>
      <td class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">{{ team.records.division
      }}</td>
      <td class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px] border-r">{{
        calculatePtcFromString(team.records.division).toFixed(3) }}</td>
      <td class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">{{
        team.records.conference }}</td>
      <td class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px] border-r">{{
        calculatePtcFromString(team.records.conference) }}</td>
      <td class="text-left font-normal border-b border-gray-dark px-[20px] py-[10px]">{{ team.streak }}</td>
    </tr>
  </table>
</template>

<style scoped></style>