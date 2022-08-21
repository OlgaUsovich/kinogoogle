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

export const Title = styled.h3`
  ${subline12}
  color: ${COLOR.WHITE};
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
