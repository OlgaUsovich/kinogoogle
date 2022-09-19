import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, MEDIA, SUBLINE12 } from "ui";

export const Card = styled(Link)`
  position: relative;
  width: 266px;
  text-decoration: none;

  &:hover > img {
    filter: grayscale(80%);
  }

  &:hover > h3 {
    color: ${COLOR.PRIMARY};
  }

  ${MEDIA.SM} {
    width: 208px;
    height: 379px;
  }

  ${MEDIA.XS} {
    width: 272px;
    height: 437px;
    gap: 0;
  }
`;

export const Title = styled.h3`
  margin-top: 24px;
  margin-bottom: 4px;
  ${SUBLINE12}
  color: ${COLOR.WHITE};

  ${MEDIA.XS} {
    margin-top: 20px;
  }
`;

export const DeleteButton = styled.button`
  border: 0;
  padding: 0;

  &:hover > * {
    color: ${COLOR.WHITE};
  }
`;
