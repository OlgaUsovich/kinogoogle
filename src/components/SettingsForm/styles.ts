import { Link } from "react-router-dom";
import styled from "styled-components";
import { BODY, COLOR, H2, H3, MEDIA, SUBLINE12, SUBLINE13 } from "ui";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${MEDIA.XS} {
    gap: 32px;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${MEDIA.XS} {
    gap: 18px;
  }
`;

export const Title = styled.h2`
  ${H2};
  color: ${COLOR.WHITE};

  ${MEDIA.XS} {
    ${H3};
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px;
  border-radius: 10px;
  background-color: ${COLOR.DARK};

  & > * {
    width: 100%;
  }

  ${MEDIA.XS} {
    flex-direction: column;
    padding: 24px;
    gap: 20px;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  ${BODY};
  color: ${COLOR.ERROR};
`;

export const PasswordInputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-start: 2;
  column-gap: 40px;
  row-gap: 24px;
  padding: 40px;
  border-radius: 10px;
  background-color: ${COLOR.DARK};

  > :last-child {
    grid-column-end: -1;
  }

  ${MEDIA.XS} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 24px;
  }
`;

export const ThemaName = styled.span`
  ${SUBLINE12};
  color: ${COLOR.WHITE};
`;

export const ThemaInfo = styled.span`
  ${BODY};
  color: ${COLOR.LIGHT};
`;
export const ButtonsBlock = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 8px;
  width: 50%;
  align-self: flex-end;

  ${MEDIA.LG} {
    width: 100%;
  }

  ${MEDIA.XS} {
    flex-direction: column;
    gap: 16px;
  }
`;

export const CancelButton = styled(Link)`
  display: block;
  width: 100%;
  height: 56px;
  border: 0;
  border-radius: 10px;
  ${SUBLINE13};
  line-height: 56px;
  text-align: center;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.GRAPHITE};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${COLOR.LIGHT};
  }

  &:disabled {
    color: ${COLOR.LIGHT};
    background-color: ${COLOR.SECONDARY};
    cursor: wait;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ThemeInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  border-radius: 10px;
  background-color: ${COLOR.DARK};

  ${MEDIA.XS} {
    padding: 24px;
  }
`;
