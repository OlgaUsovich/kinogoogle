import styled from "styled-components";
import { LogoSvg } from "../../assets";
import { COLOR } from "../../ui";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 146px;
  max-width: 1796px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 56px;
  background-color: ${COLOR.BLACK};
`;

export const Logo = styled(LogoSvg)`
  display: block;
  width: 158px;
  height: 40px;
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 41px;
  flex-grow: 1;
`;
