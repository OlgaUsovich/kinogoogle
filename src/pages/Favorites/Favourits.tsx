import { getFavoritesSelector, useAppSelector } from "store";
import { MovieList } from "../../components";
import { Container } from "./styles";

export const Favourits = () => {
  const { favorites } = useAppSelector(getFavoritesSelector);
  return (
    <Container>
      <MovieList movies={favorites} />
    </Container>
  );
};
