import styled from "styled-components";
import { MEDIA } from "ui";

export const PosterImg = styled.img`
  display: block;
  height: 357px;
  width: 100%;
  border-radius: 20px;

  ${MEDIA.LG} {
    min-width: 208px;
    height: 279px;
  }

  ${MEDIA.XS} {
    min-width: 272px;
    height: 365px;
  }
`;
