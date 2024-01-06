<script setup lang='ts'>
import { ref } from 'vue';
import type { TeamStandings } from '@/common/types';
import { ApiService } from '@/services/api';
import LoaderComponent from '@/common/components/LoaderComponent.vue'
import ErrorAlert from '@/common/components/ErrorAlert.vue'

type PropsType = {
  standingsTitle: string,
  standingsType: string,
}

type ReduceAccumulator = {
  winners: TeamStandings[],
  others: TeamStandings[]
}

const props = defineProps<PropsType>();

const standings = ref<TeamStandings[]>([]);
const error = ref<string | null>(null);
const loaded = ref<boolean>(false);
const loading = ref<boolean>(false);
const apiService = new ApiService();

const getStandings = async (): Promise<void> => {
  loading.value = true
  try {
    const response = await apiService.getStandings({
      league: 1,
      season: 2023,
      [props.standingsType]: props.standingsTitle,
    });

    if (props.standingsType === 'conference') {
      const teams = response.reduce((acc: ReduceAccumulator, team: TeamStandings): ReduceAccumulator => {
        if (team.position === 1) {
          return {
            ...acc,
            winners: [...acc.winners, team].sort(sortByPtc)
          }
        }
        return {
          ...acc,
          others: [...acc.others, team].sort(sortByPtc)
        }
      }, { winners: [], others: [] });
      standings.value = [...teams.winners, ...teams.others];
    } else {
      standings.value = response;
    }

  } catch (err) {
    if (err instanceof Error) {
      error.value = err.message
    }
  }
  loaded.value = true
  loading.value = false
}

const calculatePtc = (won: number, lost: number, ties: number): number => {
  const totalGames = won + lost + ties
  if (ties === 0) {
    return won / totalGames
  }
  return ((won + ties) / totalGames + (won + ties) / totalGames) / 2
}

const calculatePtcFromString = (result: string): number => {
  const [won = 0, lost = 0, ties = 0] = result.split('-')
  return calculatePtc(Number(won), Number(lost), Number(ties))
}

const sortByPtc = (firstTeam: TeamStandings, secondTeam: TeamStandings): -1 | 0 | 1 => {
  const firstTeamPtc = calculatePtc(firstTeam.won, firstTeam.lost, firstTeam.ties);
  const secondTeamPtc = calculatePtc(secondTeam.won, secondTeam.lost, secondTeam.ties);
  if (firstTeamPtc === secondTeamPtc) {
    return 0;
  }
  return firstTeamPtc > secondTeamPtc ? -1 : 1;
}

</script>

<template>
  <table class="w-full bg-white mb-4">
    <tr class="font-normal text-xs">
      <th class="text-left font-normal border-b border-gray-mid px-[20px] py-[15px] border-r-2 w-[300px]">
        {{ props.standingsTitle.toUpperCase() }}
      </th>
      <template v-if="loaded">
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
      </template>
      <template v-else>
        <th class="font-normal border-b border-gray-mid px-[20px] py-[15px]">
          <button @click="getStandings" class="text-blue-light">Show standings</button>
        </th>
      </template>
    </tr>
    <template v-if="loading">
      <tr>
        <td class="px-[20px] py-[15px] text-xs text-center" colspan="15">
          <LoaderComponent />
        </td>
      </tr>
    </template>
    <template v-if="error">
      <tr>
        <td class="px-[20px] py-[15px] text-xs" colspan="15">
          <ErrorAlert>
            {{ error }}
          </ErrorAlert>
        </td>
      </tr>
    </template>
    <template v-else>
      <tr v-for="(team, index) of standings" :key="team.team.id" class="text-xs"
        :class="{ 'bg-gray-light': (index + 1) % 2 === 0 }">
        <td class="font-normal border-b border-gray-mid px-[20px] py-[10px] border-r-2">
          <a href="#" class="flex items-center">
            <img :src="team.team.logo" :alt="team.team.name" class="w-[24px] mr-2" />
            {{ team.team.name }}
          </a>
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">
          {{ team.won }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">
          {{ team.lost }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">
          {{ team.ties }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">
          {{ calculatePtc(team.won, team.lost, team.ties).toFixed(3) }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">
          {{ team.points.for }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">
          {{ team.points.against }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px] border-r">
          {{ team.points.difference }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">
          {{ team.records.home }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px] border-r">
          {{ team.records.road }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">
          {{ team.records.division }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px] border-r">
          {{ calculatePtcFromString(team.records.division).toFixed(3) }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">
          {{ team.records.conference }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px] border-r">
          {{ calculatePtcFromString(team.records.conference).toFixed(3) }}
        </td>
        <td class="text-center font-normal border-b border-gray-mid px-[20px] py-[10px]">
          {{ team.streak }}
        </td>
      </tr>
    </template>
  </table>
</template>

<style scoped></style>