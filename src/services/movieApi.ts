import axios from "axios";

export type MovieRequestParams = {
  apikey?: string;
  s?: string;
  type?: string;
  y?: string;
  r?: string;
  page?: string;
  v?: string;
  i?: string;
};

class MovieAPI {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_MOVIES_API as string;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });
  private requestWord = '';

  private readonly API_KEY: MovieRequestParams = { apikey: process.env.REACT_APP_MOVIE_API_KEY };

  private getRandomParam(): string {
    const searchWords = [
      "cat",
      "dog",
      "butterfly",
      "car",
      "bad",
      "super",
      "hero",
      "girl",
      "boy",
      "murder",
      "kill",
      "bat",
      "happy",
      "hello",
      "chance",
      "clever",
    ];

    return searchWords[Math.floor(Math.random() * searchWords.length)];
  }

  public async getAll(newParams: MovieRequestParams): Promise<any> {

    if (! this.requestWord) {
      this.requestWord = this.getRandomParam()
    }

    const params = { ...this.API_KEY, ...newParams, s: this.requestWord };

    const { data } = await this.API.get("", {
      params,
    });

    return data;
  }

  public async getById(id: string | undefined): Promise<any> {
    const params = { ...this.API_KEY, i: id, plot: "full" };

    const { data } = await this.API.get("", { params });

    return data;
  }

  public async getTrends(newParams: MovieRequestParams): Promise<any> {
    const params = { ...this.API_KEY, ...newParams, s: this.getRandomParam(), y: new Date().getFullYear() };

    const { data } = await this.API.get("", {
      params,
    });

    return data;
  }
}

export const movieAPI = new MovieAPI();
