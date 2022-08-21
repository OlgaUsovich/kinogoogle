import { defineBadgeColor } from "../../helpers";
import { IMovie } from "../../pages";
import { createPath, ROUTE } from "../../routers";
import { Poster } from "../Poster";
import { Card, Genre, GenreList, Raiting, Title } from "./styles";

interface IProps {
  movie: IMovie;
}

export const MovieCard = ({ movie }: IProps) => {

  return (
    <Card to={createPath(ROUTE.MOVIE, {id: movie.imdbID})}>
      <Poster img={movie.poster} />
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
