import styled from "styled-components";
import { COLOR, SUBLINE13 } from "../../ui";

export const StyledButton = styled.button`
  width: 100%;
  height: 56px;
  border: 0;
  border-radius: 10px;
  ${SUBLINE13};
  color: ${COLOR.WHITE};
  background-color: ${COLOR.PRIMARY};
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.PRIMARY_DIMMER};
  }

  &:disabled {
    color: ${COLOR.LIGHT};
    background-color: ${COLOR.SECONDARY};
    cursor: wait;
  }
`;
