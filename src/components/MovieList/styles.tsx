import styled from "styled-components";
import { COLOR, H1, MEDIA } from "../../ui";

export const StyledMovieList = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 40px;

  ${MEDIA.LG} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  ${MEDIA.LGMD} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${MEDIA.MD} {
    grid-template-columns: 1fr 1fr;
  }

  ${MEDIA.SM} {
    grid-template-columns: 1fr;
  }
`;

export const StyledContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
`;

export const ErrorMessage = styled.h1`
  ${H1};
  color: ${COLOR.WHITE};
`;

export const Error = styled.span`
  color: ${COLOR.PRIMARY};
`;
