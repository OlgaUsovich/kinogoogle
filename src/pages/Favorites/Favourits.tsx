import { MovieList } from "../../components";
import { useAppSelector } from "../../store/hooks";
import { Container } from "./styles";

export const Favourits = () => {
    const { favorites } = useAppSelector(state => state.persistedReducer.favorites)
    return (
        <Container>
          <MovieList movies={favorites} />
        </Container>
      );
} 