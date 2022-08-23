import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { Badge, GenreList, Poster } from "../../components";
import { defineBadgeColor } from "../../helpers";
import { movieAPI, transformMovie } from "../../services";
import { COLOR } from "../../ui";
import {
  BadgeBlock,
  ButtonGroup,
  DataTable,
  Description,
  InfoBlock,
  MovieInfo,
  MovieTitle,
  PosterBlock,
  StyledButton,
  StyledCell,
  StyledHead,
  StyledRow,
  TableBody,
} from "./styles";
import { ReactComponent as IMDb } from "../../assets/icons/imdb.svg";

export const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<any>();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    movieAPI.getById(id).then((rawMovie) => {
      const transformedMovie = transformMovie(rawMovie);
      setMovie(transformedMovie);
    });
  }, [id]);

  return (
    <MovieInfo>
      <PosterBlock>
        <Poster img={movie?.poster} />
        <ButtonGroup>
          <StyledButton>
            <BsFillBookmarkFill />
          </StyledButton>
          <StyledButton>
            <FiShare2 />
          </StyledButton>
        </ButtonGroup>
      </PosterBlock>
      <InfoBlock>
        <GenreList genreList={movie?.genre} />
        <MovieTitle>{movie?.title}</MovieTitle>
        <BadgeBlock>
          <Badge
            text={movie?.imdbRating}
            color={defineBadgeColor(movie?.imdbRating)}
          />
          <Badge
            text={movie?.imdbRating}
            color={COLOR.GRAPHITE}
            svg={<IMDb />}
          />
          <Badge text={movie?.runtime} color={COLOR.GRAPHITE} />
        </BadgeBlock>
        <Description>{movie?.plot}</Description>
        <DataTable>
          <TableBody>
            <StyledRow>
              <StyledHead>Year</StyledHead>
              <StyledCell>{movie?.year}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledHead>Released</StyledHead>
              <StyledCell>{movie?.released}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledHead>BoxOffice</StyledHead>
              <StyledCell>{movie?.boxOffice}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledHead>Country</StyledHead>
              <StyledCell>{movie?.country}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledHead>Production</StyledHead>
              <StyledCell>{movie?.production}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledHead>Actors</StyledHead>
              <StyledCell>{movie?.actors}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledHead>Director</StyledHead>
              <StyledCell>{movie?.director}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledHead>Writers</StyledHead>
              <StyledCell>{movie?.writer}</StyledCell>
            </StyledRow>
          </TableBody>
        </DataTable>
      </InfoBlock>
    </MovieInfo>
  );
};
