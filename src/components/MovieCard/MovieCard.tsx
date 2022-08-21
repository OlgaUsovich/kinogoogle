import { defineBadgeColor } from "../../helpers";
import { IMovie } from "../../pages";
import { createPath, ROUTE } from "../../routers";
import { GenreList } from "../GenreList";
import { Poster } from "../Poster";
import { Card, Raiting, Title } from "./styles";

interface IProps {
  movie: IMovie;
}

export const MovieCard = ({ movie }: IProps) => {

  return (
    <Card to={createPath(ROUTE.MOVIE, {id: movie.imdbID})}>
      <Poster img={movie.poster} />
      <Raiting raitingColor={defineBadgeColor(movie.imdbRating)}>{movie.imdbRating}</Raiting>
      <Title>{movie.title}</Title>
      <GenreList genreList={movie.genre}/>
    </Card>
  );
};
