import { ISearchMovie } from "types";
import { MovieCard, Spinner } from "components";
import { ErrorMessage, Error, Container, StyledMovieList } from "./styles";

interface IProps {
  movies: ISearchMovie[];
  isLoading?: boolean;
  errorMessage?: string | null;
}

export const MovieList = ({ movies, isLoading, errorMessage }: IProps) => {
  if (isLoading) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }
  if (errorMessage) {
    return (
      <Container>
        <ErrorMessage>
          An error has occurred - <Error>{errorMessage}</Error>
        </ErrorMessage>
      </Container>
    );
  }
  return (
    <StyledMovieList>
      {movies.map((movie) => {
        return <MovieCard movie={movie} key={movie.imdbID} />;
      })}
    </StyledMovieList>
  );
};
