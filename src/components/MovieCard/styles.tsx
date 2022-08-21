import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, subline12 } from "../../ui";

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 433px;
  width: 266px;
  text-decoration: none;
`;

export const Title = styled.h3`
  margin-top: 24px;
  ${subline12}
  color: ${COLOR.WHITE};

  &:hover {
    color: ${COLOR.PRIMARY};
  }
`;
