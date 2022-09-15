import styled from "styled-components";
import { BODY, COLOR, H2, H3, MEDIA } from "../../ui";

export const Form = styled.form`
  width: 574px;
  padding: 40px;
  margin: 10px;
  border-radius: 10px;
  background-color: ${COLOR.DARK};

  ${MEDIA.XS} {
    width: 272px;
    padding: 24px;
  }
`;

export const Title = styled.h1`
  ${H2};
  color: ${COLOR.WHITE};

  ${MEDIA.XS} {
    ${H3};
  }
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

export const ErrorMessage = styled.span`
  display: block;
  ${BODY};
  color: ${COLOR.ERROR};
`;