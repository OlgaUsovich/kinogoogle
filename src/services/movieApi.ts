import axios from "axios";

export type MovieRequestParams =
    | 's'
    | 'type'
    | 'y'
    | 'r'
    | 'page'
    | 'v';

class MovieAPI {
    private readonly BASE_URL = process.env.BASE_URL_MOVIES_API;
    private readonly API = axios.create({
        baseURL: this.BASE_URL,
    });

    private readonly DEFALUT_REQUEST_PARAMS: MovieRequestParams[] = ['s', 'type', 'y', 'r', 'page', 'v']

    public async getAll(newParams: MovieRequestParams[]): Promise<any> {
        const params = {
            fields: [...this.DEFALUT_REQUEST_PARAMS, ...newParams].join(','),
        };

        const { data } = await this.API.get('', {
            params,
        });

        return data;
    }
}

export const countryAPI = new MovieAPI();