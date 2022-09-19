import { IMovie, ISearchMovie } from "types";
import { COLOR } from "ui";

export const defineBadgeColor = (raiting: string): string => {
  const numRaiting = Number(raiting);
  return numRaiting < 5 ? COLOR.ORANGE : numRaiting < 7 ? COLOR.YELLOW : COLOR.GREEN;
};

export const defineBadgeColorYear = (year: string): string => {
  const years = year.split("–");
  const numYear = years.length > 2 ? Number(year.split("–")[-1]) : Number(year.split("–")[0]);

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
  const years = year.split("–");
  const numYear = years.length > 2 ? Number(year.split("–")[-1]) : Number(year.split("–")[0]);
  return numYear === new Date().getFullYear() ? true : false;
};

export const isInFavorites = (favorites: IMovie[], movie: ISearchMovie) =>
  favorites.find((fav) => fav.imdbID === movie.imdbID);

export const filterFavorites = (
  favorites: IMovie[],
  searchWord?: string,
  type?: string,
  year?: string,
): IMovie[] => {
  const filteredByWord = searchWord
    ? favorites.filter((favorite) => {
      return favorite.title.toLowerCase().includes(searchWord.toLowerCase());
    })
    : favorites;

  const filteredByType = type
    ? filteredByWord.filter((favorite) => {
      return favorite.type === type;
    })
    : filteredByWord;

  return year
    ? filteredByType.filter((favorite) => {
      return favorite.year === year;
    })
    : filteredByType;
};

export const copyUrl = () => {
  const el = document.createElement("input");
  el.value = window.location.href;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};
