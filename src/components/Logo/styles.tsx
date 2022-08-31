import styled from "styled-components";
import { MEDIA } from "../../ui";
import { LogoSvg } from "../../assets";

export const StyledLogo = styled(LogoSvg)`
  display: block;
  width: 158px;
  height: 40px;

  ${MEDIA.MDLG} {
    width: 156px;
  }

  ${MEDIA.MD} {
    width: 154px;
  }

  ${MEDIA.SM} {
    width: 152px;
    height: 39px;
  }
`;
