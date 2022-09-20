import { AiFillFire } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { toast } from "react-toastify";
import { defineBadgeColorYear, isInFavorites, isTrend } from "utils";
import { createPath, ROUTE } from "routers";
import { ISearchMovie } from "types";
import { GenreList, Poster, Badge } from "components";
import { Card, DeleteButton, Title } from "./styles";
import { COLOR } from "ui";
import {
  getFavoritesSelector,
  getUserInfoSelector,
  removeFavorite,
  useAppDispatch,
  useAppSelector,
} from "store";
import { NoPosterImage } from "assets";

interface IProps {
  movie: ISearchMovie;
}

export const MovieCard = ({ movie }: IProps) => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector(getFavoritesSelector);
  const notify = () => toast.info(`Movie "${movie.title}" has deleted from favorites`);
  const user = useAppSelector(getUserInfoSelector);
  const canDeleteFromFavorites = user ? true : false;
  return (
    <Card to={`/${createPath(ROUTE.MOVIE, { id: movie.imdbID })}`}>
      <Poster
        img={movie.poster !== "N/A" ? movie.poster : NoPosterImage}
        alt={`Poster ${movie.title}`}
      />
      {isTrend(movie.year) ? (
        <Badge color={COLOR.PRIMARY} text={movie.year} type="card" svg={<AiFillFire />} />
      ) : (
        <Badge color={defineBadgeColorYear(movie.year)} text={movie.year} type={"card"} />
      )}
      {canDeleteFromFavorites && isInFavorites(favorites, movie) && (
        <DeleteButton
          onClick={(event) => {
            event.preventDefault();
            dispatch(removeFavorite(movie));
            notify();
          }}
        >
          <Badge type="fav" color={COLOR.GRAPHITE} svg={<MdFavorite />} />
        </DeleteButton>
      )}

      <Title>{movie.title}</Title>
      <GenreList genreList={movie.type.split(", ")} />
    </Card>
  );
};
