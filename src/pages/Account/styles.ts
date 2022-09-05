import styled from "styled-components";
import { COLOR, H1, H2 } from "../../ui";

export const Container = styled.div`
  grid-area: main;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;`

export const Title = styled.p`
  ${H1};
  color: ${COLOR.PRIMARY};
  text-align: center;
`;

export const Key = styled.p`
  ${H2};
  color: ${COLOR.LIGTH};
`;

export const Value = styled.p`
  ${H2};
  color: ${COLOR.WHITE};
`;
