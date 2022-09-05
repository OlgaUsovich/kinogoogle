import styled from "styled-components";
import { BODY, COLOR, H2, H3, MEDIA, SUBLINE13 } from "../../ui";

export const SendEmailForm = styled.form`
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

  ${MEDIA.XS} {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  ${BODY};
  color: ${COLOR.ERROR};
`;

export const LabelText = styled.span`
  display: inline-block;
  padding-bottom: 8px;
`;