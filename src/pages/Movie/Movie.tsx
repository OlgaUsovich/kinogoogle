import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { Badge, GenreList, Poster, Spinner, Carousel } from "components";
import { copyUrl, defineBadgeColor, isInFavorites } from "utils";
import { COLOR } from "ui";
import { ImdbIcon, NoPosterImage } from "assets";
import {
  addFavorite,
  getMovie,
  useAppSelector,
  useAppDispatch,
  getMovieDetailSelector,
  getFavoritesSelector,
  removeFavorite,
  getUserInfoSelector,
  getMoviesSelector,
  getMovies,
} from "store";
import * as styles from "./styles";
import { MdFavorite } from "react-icons/md";

export const Movie = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { result, isLoading, error } = useAppSelector(getMovieDetailSelector);
  const notify = () => toast.success(`Movie "${result.title}" has added to favorites`);
  const { favorites } = useAppSelector(getFavoritesSelector);
  const user = useAppSelector(getUserInfoSelector);
  const canAddToFavorites = user ? false : true;
  const canDeleteFromFavorites = user ? true : false;

  useEffect(() => {
    if (id) {
      dispatch(getMovie(id));
    }
  }, [dispatch, id]);

  const { results: recomends } = useAppSelector(getMoviesSelector);

  useEffect(() => {
    dispatch(getMovies({ page: "1" }));
  }, [dispatch]);

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
    <>
      <styles.MovieInfo>
        <styles.PosterBlock>
          <Poster
            img={result.poster !== "N/A" ? result.poster : NoPosterImage}
            alt={`Poster ${result.title}`}
          />
          {canDeleteFromFavorites && isInFavorites(favorites, result) && (
            <styles.FavoritesButton
              onClick={(event) => {
                event.preventDefault();
                dispatch(removeFavorite(result));
                const notify = () =>
                  toast.info(`Movie "${result.title}" has deleted from favorites`);
                notify();
              }}
            >
              <Badge type="fav" color={COLOR.GRAPHITE} svg={<MdFavorite />} />
            </styles.FavoritesButton>
          )}
          <styles.ButtonGroup>
            <styles.Button
              onClick={() => {
                dispatch(addFavorite(result));
                notify();
              }}
              disabled={canAddToFavorites || Boolean(isInFavorites(favorites, result))}
            >
              <BsFillBookmarkFill />
            </styles.Button>
            <styles.Button
              onClick={() => {
                copyUrl();
                const notify = () => toast.success("Link copeid to the clipboard");
                notify();
              }}
            >
              <FiShare2 />
            </styles.Button>
          </styles.ButtonGroup>
        </styles.PosterBlock>
        <styles.InfoContainer>
          <styles.InfoBlock>
            <GenreList genreList={result.genre} />
            <styles.MovieTitle>{result.title}</styles.MovieTitle>
            <styles.BadgeBlock>
              <Badge
                text={result.imdbRating}
                color={defineBadgeColor(result.imdbRating)}
                type="detail"
              />
              <Badge
                text={result.imdbRating}
                color={COLOR.GRAPHITE}
                svg={<ImdbIcon />}
                type="detail"
              />
              <Badge text={result.runtime} color={COLOR.GRAPHITE} type="detail" />
            </styles.BadgeBlock>
            <styles.Description>{result.plot}</styles.Description>
            <styles.DataTable>
              {Object.entries(dataSet).map(([key, value]) => {
                return (
                  <React.Fragment key={key + value}>
                    <styles.ParamName>{key}</styles.ParamName>
                    <styles.Param>{value && value !== "N/A" ? value : "---"}</styles.Param>
                  </React.Fragment>
                );
              })}
            </styles.DataTable>
          </styles.InfoBlock>
          <Carousel items={recomends} title="Recommendations" />
        </styles.InfoContainer>
      </styles.MovieInfo>
    </>
  );
};
