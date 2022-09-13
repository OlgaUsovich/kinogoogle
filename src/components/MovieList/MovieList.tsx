import { ISearchMovie } from "../../types";
import { MovieCard } from "../MovieCard";
import { Spinner } from "../Spinner";
import { ErrorMessage, Error, StyledContainer, StyledMovieList } from "./styles";

interface IProps {
  movies: ISearchMovie[];
  isLoading?: boolean;
  errorMessage?: string | null;
}

export const MovieList = ({ movies, isLoading, errorMessage }: IProps) => {
  if (isLoading) {
    return (
      <StyledContainer>
        <Spinner />
      </StyledContainer>
    );
  }
  if (errorMessage) {
    return (
      <StyledContainer>
        <ErrorMessage>
          An error has occurred - <Error>{errorMessage}</Error>
        </ErrorMessage>
      </StyledContainer>
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
