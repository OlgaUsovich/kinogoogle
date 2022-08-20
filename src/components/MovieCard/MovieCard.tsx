import { defineBadgeColor } from "../../helpers";
import { IMovie } from "../../pages";
import { Card, Genre, GenreList, Poster, Raiting, Title } from "./styles";

interface IProps {
  movie: IMovie;
}

export const MovieCard = ({ movie }: IProps) => {

  return (
    <Card>
      <Poster src={movie.poster} />
      <Raiting raitingColor={defineBadgeColor(movie.imdbRating)}>{movie.imdbRating}</Raiting>
      <Title>{movie.title}</Title>
      <GenreList>
        {movie.genre?.map((genre, index) => {
          return <Genre key={index}>{genre}</Genre>;
        })}
      </GenreList>
    </Card>
  );
};
