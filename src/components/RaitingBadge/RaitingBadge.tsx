import { ReactNode } from "react";
import { Raiting } from "./styles";

interface IProps {
  text: string;
  color: string;
  isCard?: boolean | undefined;
  svg?: ReactNode | undefined;
}

export const Badge = ({ text, color, isCard, svg }: IProps) => {
  return <Raiting raitingColor={color} isCard={isCard}>{svg} {text}</Raiting>;
};
