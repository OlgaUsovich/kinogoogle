import styled from "styled-components";
import { MEDIA } from "ui";
import { LogoIcon } from "assets";

export const StyledLogo = styled(LogoIcon)`
  grid-area: logo;
  display: block;
  width: 158px;
  height: 40px;

  ${MEDIA.MD} {
    width: 156px;
  }

  ${MEDIA.SM} {
    width: 154px;
  }

  ${MEDIA.XS} {
    width: 152px;
    height: 39px;
  }
`;
