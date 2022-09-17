import { getFavoritesSelector, useAppSelector } from "store";
import { EmptyPage, MovieList } from "../../components";
import { Container } from "./styles";

export const Favourits = () => {
  const { favorites } = useAppSelector(getFavoritesSelector);

  if (favorites.length) {
    return (
      <Container>
        <MovieList movies={favorites} />
      </Container>
    );
  }

  return <EmptyPage />;
};
