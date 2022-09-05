import styled from "styled-components";
import { MEDIA } from "../../ui";

export const StyledImg = styled.img`
  height: 357px;
  width: 100%;
  border-radius: 20px;

  ${MEDIA.SM} {
    height: 279px;
  }

  ${MEDIA.XS} {
    height: 365px;
  }
`;
