import { IMovie, ISearchMovie } from "../types";
import { COLOR } from "../ui";

export const defineBadgeColor = (raiting: string): string => {
  const numRaiting = Number(raiting);
  return numRaiting < 5 ? COLOR.ORANGE : numRaiting < 7 ? COLOR.YELLOW : COLOR.GREEN;
};

export const defineBadgeColorYear = (year: string): string => {
  const numYear = Number(year.split("-")[0]);
  return numYear < 2000 ? COLOR.ORANGE : numYear < 2010 ? COLOR.YELLOW : COLOR.GREEN;
};

export const getUserInitials = (name: string): string => {
  const initialsWords = name.split(" ");
  return initialsWords
    .map((namePart) => namePart[0])
    .join("")
    .toUpperCase();
};

export const isTrend = (year: string): boolean => {
  const numYear = Number(year.split("-")[0]);
  return numYear === new Date().getFullYear() ? true : false;
};

export const isInFavorites = (favorites: IMovie[], movie: ISearchMovie) =>
  favorites.find((fav) => fav.imdbID === movie.imdbID);
