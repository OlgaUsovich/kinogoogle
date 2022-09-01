import styled from "styled-components";
import { COLOR, H1 } from "../../ui";

export const Wrapper = styled.div`
  flex-grow: 1;
  display: grid;
  place-items: center;
`;

export const StyledP = styled.p`
  ${H1};
  color: ${COLOR.WHITE};
`;

export const StyledSpan = styled.span`
  color: ${COLOR.PRIMARY};
`;
