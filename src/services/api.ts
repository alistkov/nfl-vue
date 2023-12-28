import type { DivisionStandings } from '@/common/types';
import axios from 'axios';

export class ApiService {
  private baseUrl = 'https://v1.american-football.api-sports.io';

  private axiosInstance = axios.create({
    headers: {
      'x-rapidapi-host': import.meta.env.VITE_API_URL,
      'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    }
  });

  async getDivisionStandings(league: number, season: number, division: string): Promise<DivisionStandings> {
    const response = await this.axiosInstance.get(`${this.baseUrl}/standings`, { params: { league, season, division } });
    return response.data.response;
  }
}