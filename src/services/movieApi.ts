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
  private readonly BASE_URL = "http://www.omdbapi.com/"; //не приходит урл из .env
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  private readonly DEFALUT_REQUEST_PARAMS: MovieRequestParams = { apikey: "333f98df" }; //не приходит из .env

  public getRandomParam(): string {
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
      "clever"
    ];

    return searchWords[Math.floor(Math.random() * searchWords.length)];
  }

  public async getAll(newParams: MovieRequestParams): Promise<any> {
    const params = { ...this.DEFALUT_REQUEST_PARAMS, ...newParams, s: this.getRandomParam() };

    const { data } = await this.API.get("", {
      params,
    });

    return data;
  }

  public async getById(id: string | undefined): Promise<any> {
    const params = { ...this.DEFALUT_REQUEST_PARAMS, i: id, plot: "full" };

    const { data } = await this.API.get("", { params });

    return data;
  }

  public async getTrends(newParams: MovieRequestParams): Promise<any> {
    const params = { ...this.DEFALUT_REQUEST_PARAMS, ...newParams, s: this.getRandomParam(), y: new Date().getFullYear(),  };

    const { data } = await this.API.get("", {
      params,
    });

    return data;
  }
}

export const movieAPI = new MovieAPI();
