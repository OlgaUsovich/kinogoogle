import { Genre, StyledUl } from "./styles";

interface IProps {
  genreList: string[];
}

export const GenreList = ({ genreList }: IProps) => {
  return (
    <StyledUl>
      {genreList?.map((genre, index) => {
        return <Genre key={index}>{genre}</Genre>;
      })}
    </StyledUl>
  );
};
