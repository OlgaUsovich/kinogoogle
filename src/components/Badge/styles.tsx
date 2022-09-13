import styled from "styled-components";
import { COLOR, SUBLINE13 } from "../../ui";

const handleType = (type: "card" | "detail" | "fav") => {
  switch (type) {
    case "card":
      return `position: absolute; top: 20px; left: 20px; color: ${COLOR.WHITE}`;
    case "detail":
      return `position: static; top: 0; left: 0; color: ${COLOR.WHITE}`;
    case "fav":
      return `position: absolute; top: 20px; right: 20px; color: ${COLOR.PRIMARY}`;
  }
};

export const Raiting = styled.span<{
  color: string;
  type: "card" | "detail" | "fav";
}>`
  display: inline-block;
  ${({ type }) => handleType(type)};
  display: block;
  padding: 2px 8px;
  border-radius: 6px;
  ${SUBLINE13};
  background-color: ${(props) => props.color};
`;
