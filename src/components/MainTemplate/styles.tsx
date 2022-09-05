import styled from "styled-components";
import { MEDIA } from "../../ui";

export const Container = styled.div`
  min-height: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 20px 40px;
`;

export const OutletContainer = styled.div<{ isNavOpen: boolean }>`
  margin-left: 208px;
  transition: margin-right 0.4s;

  ${MEDIA.LG} {
    margin-left: 0;
    margin-right: ${(props) => (props.isNavOpen ? "208px" : 0)};
  }
`;
