import { defineBadgeColor } from "../../helpers";
import { createPath, ROUTE } from "../../routers";
import { IMovie } from "../../types";
import { GenreList } from "../GenreList";
import { Poster } from "../Poster";
import { Badge } from "../RaitingBadge";
import { Card, Title } from "./styles";

interface IProps {
  movie: IMovie;
}

export const MovieCard = ({ movie }: IProps) => {

  return (
    <Card to={createPath(ROUTE.MOVIE, {id: movie.imdbID})}>
      <Poster img={movie.poster} />
      <Badge color={defineBadgeColor(movie.imdbRating)} text={movie.imdbRating} isCard={true}/>
      <Title>{movie.title}</Title>
      <GenreList genreList={movie.genre}/>
    </Card>
  );
};
