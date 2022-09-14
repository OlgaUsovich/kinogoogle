import { ReactNode } from "react";
import { CardType } from "types";
import { Raiting } from "./styles";

interface IProps {
  text?: string;
  color: string;
  type: CardType;
  svg?: ReactNode | undefined;
}

export const Badge = ({ text, color, type, svg }: IProps) => {
  return (
    <Raiting color={color} type={type}>
      {svg} {text}
    </Raiting>
  );
};
