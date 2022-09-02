import axios from "axios";
import { IMovieAPI, ISearchMovieListAPI } from "../types";

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
  private readonly API_KEY: MovieRequestParams = { apikey: process.env.REACT_APP_MOVIE_API_KEY };
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_MOVIES_API as string;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
    params: this.API_KEY
  });
  private requestWord = '';

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

  public async getAll() {

    if (! this.requestWord) {
      this.requestWord = this.getRandomParam()
    }

    const params = { s: this.requestWord };

    const { data } = await this.API.get<ISearchMovieListAPI>("", {
      params,
    });

    return data;
  }

  public async getById(id: string) {
    const params = { i: id, plot: "full" };

    const { data } = await this.API.get<IMovieAPI>("", { params });

    return data;
  }

  public async getTrends(newParams: MovieRequestParams) {
    const params = { ...newParams, s: this.getRandomParam(), y: new Date().getFullYear() };

    const { data } = await this.API.get<ISearchMovieListAPI>("", {
      params,
    });

    return data;
  }
}

export const movieAPI = new MovieAPI();
