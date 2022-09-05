import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, MEDIA, SUBLINE12 } from "../../ui";

export const Card = styled(Link)`
  position: relative;
  text-decoration: none;

  ${MEDIA.SM} {
    height: 379px;
  }

  ${MEDIA.XS} {
    height: 437px;
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

  ${MEDIA.XS} {
    margin-top: 20px;
  }
`;
