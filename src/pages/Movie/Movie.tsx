import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { Badge, GenreList, Poster, Spinner } from "../../components";
import { defineBadgeColor } from "../../utils";
import { COLOR } from "../../ui";
import { ImdbIcon } from "../../assets";
import {
  addFavorite,
  getMovie,
  useAppSelector,
  useAppDispatch,
  getMovieDetailSelector,
} from "../../store";
import * as styles from "./styles";

export const Movie = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { result, isLoading, error } = useAppSelector(getMovieDetailSelector);
  const notify = () => toast.success(`Movie "${result.title}" has added to favorites`);

  useEffect(() => {
    if (id) {
      dispatch(getMovie(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <styles.Container>
        <Spinner />
      </styles.Container>
    );
  }
  if (error) {
    return (
      <styles.Container>
        <styles.ErrorMessage>
          An error has occurred - <styles.Error>{error}</styles.Error>
        </styles.ErrorMessage>
      </styles.Container>
    );
  }

  const dataSet = {
    Year: result.year,
    Released: result.released,
    BoxOffice: result.boxOffice,
    Country: result.country,
    Production: result.production,
    Actors: result.actors,
    Director: result.director,
    Writers: result.writer,
  };

  return (
    <styles.MovieInfo>
      <styles.PosterBlock>
        <Poster img={result.poster} />
        <styles.ButtonGroup>
          <styles.StyledButton
            onClick={() => {
              dispatch(addFavorite(result));
              notify();
            }}
          >
            <BsFillBookmarkFill />
          </styles.StyledButton>
          <styles.StyledButton>
            <FiShare2 />
          </styles.StyledButton>
        </styles.ButtonGroup>
      </styles.PosterBlock>
      <styles.InfoBlock>
        <GenreList genreList={result.genre} />
        <styles.MovieTitle>{result.title}</styles.MovieTitle>
        <styles.BadgeBlock>
          <Badge
            text={result.imdbRating}
            color={defineBadgeColor(result.imdbRating)}
            type="detail"
          />
          <Badge text={result.imdbRating} color={COLOR.GRAPHITE} svg={<ImdbIcon />} type="detail" />
          <Badge text={result.runtime} color={COLOR.GRAPHITE} type="detail" />
        </styles.BadgeBlock>
        <styles.Description>{result.plot}</styles.Description>
        <styles.DataTable>
          {Object.entries(dataSet).map(([key, value]) => {
            return (
              <>
                <styles.ParamName>{key}</styles.ParamName>
                <styles.Param>{value && value !== "N/A" ? value : "---"}</styles.Param>
              </>
            );
          })}
        </styles.DataTable>
      </styles.InfoBlock>
    </styles.MovieInfo>
  );
};
