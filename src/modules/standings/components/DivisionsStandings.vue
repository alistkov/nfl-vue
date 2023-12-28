<script setup lang='ts'>
import type { Team } from '@/common/types';
import DivisionTable from '@/modules/standings/components/DivisionTable.vue';
import { DIVISIONS } from '@/common/constants';

const data: Team[] = [
  {
    "league": {
      "id": 1,
      "name": "NFL",
      "season": 2023,
      "logo": "https://media-4.api-sports.io/american-football/leagues/1.png",
      "country": {
        "name": "USA",
        "code": "US",
        "flag": "https://media-4.api-sports.io/flags/us.svg"
      }
    },
    "conference": "American Football Conference",
    "division": "AFC West",
    "position": 1,
    "team": {
      "id": 17,
      "name": "Kansas City Chiefs",
      "logo": "https://media-4.api-sports.io/american-football/teams/17.png"
    },
    "won": 9,
    "lost": 6,
    "ties": 0,
    "points": {
      "for": 333,
      "against": 265,
      "difference": 68
    },
    "records": {
      "home": "4-4",
      "road": "5-2",
      "conference": "7-3",
      "division": "3-2"
    },
    "streak": "L1",
    "ncaa_conference": {
      "won": null,
      "lost": null,
      "points": {
        "for": null,
        "against": null
      }
    }
  },
  {
    "league": {
      "id": 1,
      "name": "NFL",
      "season": 2023,
      "logo": "https://media-4.api-sports.io/american-football/leagues/1.png",
      "country": {
        "name": "USA",
        "code": "US",
        "flag": "https://media-4.api-sports.io/flags/us.svg"
      }
    },
    "conference": "American Football Conference",
    "division": "AFC West",
    "position": 2,
    "team": {
      "id": 1,
      "name": "Las Vegas Raiders",
      "logo": "https://media-4.api-sports.io/american-football/teams/1.png"
    },
    "won": 7,
    "lost": 8,
    "ties": 0,
    "points": {
      "for": 285,
      "against": 294,
      "difference": -9
    },
    "records": {
      "home": "5-3",
      "road": "2-5",
      "conference": "5-5",
      "division": "3-2"
    },
    "streak": "W2",
    "ncaa_conference": {
      "won": null,
      "lost": null,
      "points": {
        "for": null,
        "against": null
      }
    }
  },
  {
    "league": {
      "id": 1,
      "name": "NFL",
      "season": 2023,
      "logo": "https://media-4.api-sports.io/american-football/leagues/1.png",
      "country": {
        "name": "USA",
        "code": "US",
        "flag": "https://media-4.api-sports.io/flags/us.svg"
      }
    },
    "conference": "American Football Conference",
    "division": "AFC West",
    "position": 3,
    "team": {
      "id": 28,
      "name": "Denver Broncos",
      "logo": "https://media-4.api-sports.io/american-football/teams/28.png"
    },
    "won": 7,
    "lost": 8,
    "ties": 0,
    "points": {
      "for": 327,
      "against": 377,
      "difference": -50
    },
    "records": {
      "home": "4-4",
      "road": "3-4",
      "conference": "4-6",
      "division": "2-2"
    },
    "streak": "L2",
    "ncaa_conference": {
      "won": null,
      "lost": null,
      "points": {
        "for": null,
        "against": null
      }
    }
  },
  {
    "league": {
      "id": 1,
      "name": "NFL",
      "season": 2023,
      "logo": "https://media-4.api-sports.io/american-football/leagues/1.png",
      "country": {
        "name": "USA",
        "code": "US",
        "flag": "https://media-4.api-sports.io/flags/us.svg"
      }
    },
    "conference": "American Football Conference",
    "division": "AFC West",
    "position": 4,
    "team": {
      "id": 30,
      "name": "Los Angeles Chargers",
      "logo": "https://media-4.api-sports.io/american-football/teams/30.png"
    },
    "won": 5,
    "lost": 10,
    "ties": 0,
    "points": {
      "for": 325,
      "against": 369,
      "difference": -44
    },
    "records": {
      "home": "2-6",
      "road": "3-4",
      "conference": "3-7",
      "division": "1-3"
    },
    "streak": "L3",
    "ncaa_conference": {
      "won": null,
      "lost": null,
      "points": {
        "for": null,
        "against": null
      }
    }
  }
]
</script>

<template>
  <!-- <div v-for="division of DIVISIONS" :key="division.title">
    <h1>{{ division.title }}</h1>
    <div v-for="confDivision of division.divisions" :key="confDivision">
      {{ confDivision }}
    </div>
  </div> -->
  <DivisionTable :teams="data" conference="American Football Conference" />
</template>

<style scoped></style>