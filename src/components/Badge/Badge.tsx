import { ReactNode } from "react";
import { Raiting } from "./styles";

interface IProps {
  text?: string;
  color: string;
  type: 'card' | 'detail' | 'fav';
  svg?: ReactNode | undefined;
}

export const Badge = ({ text, color, type, svg }: IProps) => {
  return <Raiting color={color} type={type}>{svg} {text}</Raiting>;
};
