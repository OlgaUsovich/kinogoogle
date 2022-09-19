import { PosterImg } from "./styles";

interface IProps {
  img: string;
  alt: string;
}

export const Poster = ({ img, alt }: IProps) => {
  return <PosterImg src={img} alt={alt} />;
};
