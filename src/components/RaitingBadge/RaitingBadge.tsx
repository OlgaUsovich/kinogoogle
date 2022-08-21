import { defineBadgeColor } from "../../helpers";
import { Raiting } from "./styles";

interface IProps {
  raiting: string;
}

export const RaitingBadge = ({ raiting }: IProps) => {
  return <Raiting raitingColor={defineBadgeColor(raiting)}>{raiting}</Raiting>;
};
