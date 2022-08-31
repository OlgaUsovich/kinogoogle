import styled from "styled-components";
import { AuthBG } from "../../assets";
import { COLOR, SUBLINE12 } from "../../ui";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background: no-repeat
      linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 45.65%),
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${AuthBG});
  background-size: cover;
`;

export const Rigths = styled.span`
  ${SUBLINE12};
  font-weight: 500;
  color: ${COLOR.WHITE};
  margin-bottom: 2%;
`;

export const AuthHeader = styled.header`
  padding: 43px 0 0 43px;
  align-self: start;
`;

export const Container = styled.div`
  flex-grow: 1;
  display: grid;
  place-items: center;
`;
