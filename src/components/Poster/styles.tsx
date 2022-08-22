import styled from "styled-components";
import { MEDIA } from "../../ui";

export const StyledImg = styled.img`
  height: 357px;
  width: 266px;
  border-radius: 20px;

  ${MEDIA.MD} {
    height: 279px;
    width: 208px;
  }

  ${MEDIA.SM} {
    height: 365px;
    width: 272px;
  }
`;
