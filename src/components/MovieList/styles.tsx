import styled from "styled-components";
import { MEDIA } from "../../ui";

export const StyledMovieList = styled.div`
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
