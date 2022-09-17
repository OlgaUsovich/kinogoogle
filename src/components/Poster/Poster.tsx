import { StyledImg } from "./styles";

interface IProps {
  img: string;
  alt: string;
}

export const Poster = ({ img, alt }: IProps) => {
  return <StyledImg src={img} alt={alt} />;
};
