export interface Link {
  label: string
  routeName: string
}

export interface TeamStandings {
  "league": {
    "id": number
    "name": string
    "season": number
    "logo": string
    "country": {
      "name": string
      "code": string
      "flag": string
    }
  }
  "conference": "American Football Conference",
  "division": string
  "position": number
  "team": {
    "id": number
    "name": string
    "logo": string
  }
  "won": number
  "lost": number
  "ties": number
  "points": {
    "for": number
    "against": number
    "difference": number
  }
  "records": {
    "home": string
    "road": string
    "conference": string
    "division": string
  }
  "streak": string
  "ncaa_conference": {
    "won": null
    "lost": null
    "points": {
      "for": null
      "against": null
    }
  }
}

export interface TeamInfo {
  id: number
  name: string
  code: string
  city: string
  coach: string
  owner: string
  stadium: string
  established: number
  logo: string
  country: {
    name: string
    code: string
    flag: string
  }
}
