import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import { COLOR } from "../../ui";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 146px;
  padding-top: 40px;
  padding-bottom: 56px;
  background-color: ${COLOR.BLACK}
`;

export const Logo = styled(LogoSvg)`
    width: 158px;
    height: 40px;
`