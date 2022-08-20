import { IMovie } from "../../pages";
import { MovieCard } from "../MovieCard";
import { StyledMovieList } from "./styles";

interface IProps {
  movies: IMovie[];
  isLoading: boolean;
  errorMessage: string;
}

export const MovieList = ({ movies, isLoading, errorMessage }: IProps) => {
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: 400 }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (errorMessage) {
    return <h4 className="text-center mt-5">Oooooppps {errorMessage} 🙉</h4>;
  }
  return (
    <StyledMovieList>
      {movies.map((movie) => {
        return <MovieCard movie={movie} key={movie.imdbID} />;
      })}
    </StyledMovieList>
  );
};
