import styled from "styled-components";
import { COLOR, subline13 } from "../../ui";

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 8px;
`;

export const Genre = styled.li`
  ${subline13}
  font-weight: 500;
  color: ${COLOR.LIGTH};
  list-style-type: none;

  & + &::before {
    content: "•";
    display: inline-block;
    padding-right: 8px;
  }
`;
