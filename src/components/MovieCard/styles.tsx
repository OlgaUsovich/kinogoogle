import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, subline12, subline13 } from "../../ui";

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 433px;
  width: 266px;
  text-decoration: none;
`;

// export const Poster = styled.img`
//   position: relative;
//   height: 357px;
//   width: 266px;
//   border-radius: 20px;
// `;

export const Title = styled.h3`
  ${subline12}
  color: ${COLOR.WHITE};
`;

export const GenreList = styled.ul`
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

export const Raiting = styled.span<{ raitingColor: string }>`
    position: absolute;
    margin-top: 20px;
    margin-left: 20px;
    display: block;
    padding: 2px 8px;
    border-radius: 6px;
    ${subline13};
    color: ${COLOR.WHITE};
    background-color: ${(props) => props.raitingColor};
`
