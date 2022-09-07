import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { Badge, GenreList, Poster, Spinner } from "../../components";
import { defineBadgeColor } from "../../utils";
import { COLOR } from "../../ui";
import {
  BadgeBlock,
  ButtonGroup,
  DataTable,
  Description,
  ErrorMessage,
  InfoBlock,
  MovieInfo,
  MovieTitle,
  PosterBlock,
  StyledButton,
  StyledCell,
  StyledContainer,
  StyledHead,
  StyledRow,
  TableBody,
  Error,
} from "./styles";
import { IMDb } from "../../assets";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addFavorite, getMovie } from "../../store";

export const Movie = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { result, isLoading, error } = useAppSelector(
    (state) => state.persistedReducer.movie
  );

  useEffect(() => {
    if (id) {
      dispatch(getMovie(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <StyledContainer>
        <Spinner />
      </StyledContainer>
    );
  }
  if (error) {
    return (
      <StyledContainer>
        <ErrorMessage>
          An error has occurred - <Error>{error}</Error>
        </ErrorMessage>
      </StyledContainer>
    );
  }
  return (
    <MovieInfo>
      <PosterBlock>
        <Poster img={result.poster} />
        <ButtonGroup>
          <StyledButton onClick={() => dispatch(addFavorite(result))}>
            <BsFillBookmarkFill />
          </StyledButton>
          <StyledButton>
            <FiShare2 />
          </StyledButton>
        </ButtonGroup>
      </PosterBlock>
      <InfoBlock>
        <GenreList genreList={result.genre} />
        <MovieTitle>{result.title}</MovieTitle>
        <BadgeBlock>
          <Badge
            text={result.imdbRating}
            color={defineBadgeColor(result.imdbRating)}
            type="detail"
          />
          <Badge
            text={result.imdbRating}
            color={COLOR.GRAPHITE}
            svg={<IMDb />}
            type="detail"
          />
          <Badge text={result.runtime} color={COLOR.GRAPHITE} type="detail" />
        </BadgeBlock>
        <Description>{result.plot}</Description>
        <DataTable>
          <TableBody>
            <StyledRow>
              <StyledHead>Year</StyledHead>
              <StyledCell>{result.year}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledHead>Released</StyledHead>
              <StyledCell>{result.released}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledHead>BoxOffice</StyledHead>
              <StyledCell>{result.boxOffice}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledHead>Country</StyledHead>
              <StyledCell>{result.country}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledHead>Production</StyledHead>
              <StyledCell>{result.production}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledHead>Actors</StyledHead>
              <StyledCell>{result.actors}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledHead>Director</StyledHead>
              <StyledCell>{result.director}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledHead>Writers</StyledHead>
              <StyledCell>{result.writer}</StyledCell>
            </StyledRow>
          </TableBody>
        </DataTable>
      </InfoBlock>
    </MovieInfo>
  );
};
