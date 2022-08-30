import styled from "styled-components";
import { AuthBG } from "../../assets";
import { COLOR, SUBLINE12 } from "../../ui";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background: no-repeat
      linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 45.65%),
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${AuthBG});
  background-size: cover;
`;

export const Rigths = styled.span`
  ${SUBLINE12};
  font-weight: 500;
  color: ${COLOR.WHITE};
  height: 80px;
  margin-top: -80px;


`;
