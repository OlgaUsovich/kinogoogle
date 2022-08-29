import styled from "styled-components";
import { MEDIA } from "../../ui";

export const StyledImg = styled.img`
  height: 357px;
  width: 100%;
  border-radius: 20px;

  ${MEDIA.MD} {
    height: 279px;
  }

  ${MEDIA.SM} {
    height: 365px;
  }
`;
