import type { TeamStandings } from '@/common/types';
import axios from 'axios';

export class ApiService {
  private axiosInstance = axios.create({
    baseURL: 'https://v1.american-football.api-sports.io',
    headers: {
      'x-rapidapi-host': import.meta.env.VITE_API_URL,
      'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    }
  });

  async getStandings(params: any): Promise<TeamStandings[]> {
    const response = await this.axiosInstance.get(
      `/standings`,
      { params }
    );

    if (response.data.errors.length === 0) {
      return await response.data.response;
    }

    const message = Object.values(response.data.errors)[0] as string;
    throw new Error(message)
  }
}