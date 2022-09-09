import styled from "styled-components";
import { COLOR } from "../../ui";

export const SearchWrapper = styled.div`
  grid-area: search;
  position: relative;
  flex-grow: 1;
`;

export const FilterButton = styled.button`
  position: absolute;
  right: 21px;
  top: 16px;
  border: 0;
  font-size: 24px;
  line-height: 1;
  color: ${COLOR.LIGHT};
  background-color: transparent;
  cursor: pointer;

  > * {
    display: block;
  }
`;
