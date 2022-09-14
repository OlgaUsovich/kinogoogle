import { ChangeEventHandler } from "react";

interface IMovieRaitingsAPI {
  Source: string;
  Value: string;
}

export interface IMovieAPI {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IMovieRaitingsAPI[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface IMovie {
  title: string;
  year: string;
  released: string;
  runtime: string;
  genre: string[];
  director: string;
  writer: string;
  actors: string;
  plot: string;
  country: string;
  poster: string;
  imdbRating: string;
  imdbID: string;
  type: string;
  boxOffice: string;
  production: string;
}

export interface ISearchMovie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

export interface ISearchMovieAPI {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface ISearchMovieListAPI {
  Search: ISearchMovieAPI[];
  totalResults: string;
  Response: string;
  Error: string;
}

export interface UserData {
  displayName: string | null; 
  email: string | null;
}

export interface ISearchOptions {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export interface IGenresOption {
  readonly value: string;
  readonly label: string;
}