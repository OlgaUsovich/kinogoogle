import styled from "styled-components";
import { MEDIA } from "ui";

export const PosterImg = styled.img`
  display: block;
  height: 357px;
  width: 266px;
  border-radius: 20px;

  ${MEDIA.SM} {
    width: 208px;
    height: 279px;
  }

  ${MEDIA.XS} {
    width: 272px;
    height: 365px;
  }
`;
