import { defineBadgeColorYear } from "../../utils";
import { createPath, ROUTE } from "../../routers";
import { ISearchMovie } from "../../types";
import { GenreList } from "../GenreList";
import { Poster } from "../Poster";
import { Badge } from "../RaitingBadge";
import { Card, Title } from "./styles";

interface IProps {
  movie: ISearchMovie;
}

export const MovieCard = ({ movie }: IProps) => {

  return (
    <Card to={createPath(ROUTE.MOVIE, {id: movie.imdbID})}>
      <Poster img={movie.poster} />
      <Badge color={defineBadgeColorYear(movie.year)} text={movie.year} isCard={true}/>
      <Title>{movie.title}</Title>
      <GenreList genreList={movie.type.split(", ")}/>
    </Card>
  );
};
