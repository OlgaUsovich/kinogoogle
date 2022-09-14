import { Link } from "react-router-dom";
import styled from "styled-components";
import { BODY, COLOR, SUBLINE13 } from "ui";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLOR.PRIMARY};

  &:hover {
    color: ${COLOR.WHITE};
  }
`;

export const LabelText = styled.span`
  display: inline-block;
  padding-bottom: 8px;
`;

export const ErrorMessage = styled.span`
  ${BODY};
  color: ${COLOR.ERROR};
`;

export const Label = styled.label`
  ${SUBLINE13};
  color: ${COLOR.WHITE};

  & > * {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
`;
