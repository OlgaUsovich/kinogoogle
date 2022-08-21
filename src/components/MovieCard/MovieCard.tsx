import { IMovie } from "../../pages";
import { createPath, ROUTE } from "../../routers";
import { GenreList } from "../GenreList";
import { Poster } from "../Poster";
import { RaitingBadge } from "../RaitingBadge";
import { Card, Title } from "./styles";

interface IProps {
  movie: IMovie;
}

export const MovieCard = ({ movie }: IProps) => {

  return (
    <Card to={createPath(ROUTE.MOVIE, {id: movie.imdbID})}>
      <Poster img={movie.poster} />
      <RaitingBadge raiting={movie.imdbRating}/>
      <Title>{movie.title}</Title>
      <GenreList genreList={movie.genre}/>
    </Card>
  );
};
