import { COLOR } from "../ui";

export const defineBadgeColor = (raiting: string): string => {
  const numRaiting = Number(raiting);
  return numRaiting < 5
    ? COLOR.ORANGE
    : numRaiting < 7
    ? COLOR.YELLOW
    : COLOR.GREEN;
};

export const getUserInitials = (name: string, surname: string): string => {
  return [name, surname]
    .map((namePart) => namePart[0])
    .join("")
    .toUpperCase();
};
