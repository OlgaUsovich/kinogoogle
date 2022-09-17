import styled from "styled-components";
import { COLOR, SUBLINE13 } from "ui";

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 8px;
  padding: 0; 
`;

export const Genre = styled.li`
  ${SUBLINE13}
  font-weight: 500;
  color: ${COLOR.LIGHT};
  list-style-type: none;

  & + &::before {
    content: "•";
    display: inline-block;
    padding-right: 8px;
  }
`;
