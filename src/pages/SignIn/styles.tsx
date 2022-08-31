import { Link } from "react-router-dom";
import styled from "styled-components";
import { BODY, COLOR, H2, SUBLINE13 } from "../../ui";

export const StyledForm = styled.form`
  width: 574px;
  min-height: 540px;
  padding: 40px;
  margin: 10px;
  border-radius: 10px;
  background-color: ${COLOR.DARK};
`;

export const Title = styled.h1`
  ${H2};
  color: ${COLOR.WHITE};
`;

export const StyledLabel = styled.label`
  ${SUBLINE13};
  color: ${COLOR.WHITE};
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledSpan = styled.span`
  display: block;
  margin-top: 32px;
  text-align: center;
  ${SUBLINE13};
  color: ${COLOR.SECONDARY};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLOR.PRIMARY};

  &:hover {
    color: ${COLOR.WHITE};
  }
`;

export const ErrorMessage = styled.span`
  ${BODY};
  color: ${COLOR.ERROR};
`;

export const LabelText = styled.span`
  display: inline-block;
  padding-bottom: 8px;
`;
