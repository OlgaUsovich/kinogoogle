import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, MEDIA, SUBLINE12 } from "../../ui";

export const Card = styled(Link)`
  position: relative;
  height: 433px;
  width: 266px;
  text-decoration: none;

  ${MEDIA.MD} {
    height: 379px;
    width: 208px;
  }

  ${MEDIA.SM} {
    height: 437px;
    width: 272px;
    gap: 0;
  }
`;

export const Title = styled.h3`
  margin-top: 24px;
  margin-bottom: 4px;
  ${SUBLINE12}
  color: ${COLOR.WHITE};

  &:hover {
    color: ${COLOR.PRIMARY};
  }

  ${MEDIA.SM} {
    margin-top: 20px;
  }
`;
