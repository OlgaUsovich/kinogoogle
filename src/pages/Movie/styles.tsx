import styled from "styled-components";
import { BODY, COLOR, H1, MEDIA, SUBLINE13 } from "../../ui";

export const MovieInfo = styled.div`
  display: flex;
  gap: 42px;
  flex-grow: 1;

  ${MEDIA.XS} {
    flex-direction: column;
    gap: 32px;
    max-width: 272px;
    margin: 0 auto;
  }
`;

export const PosterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 266px;

  ${MEDIA.XS} {
    gap: 24px;
  }
`;
export const InfoBlock = styled.section`
  max-width: 975px;
`;

export const MovieTitle = styled.h1`
  margin-bottom: 24px;
  ${H1};
  color: ${COLOR.WHITE};
`;

export const BadgeBlock = styled.div`
  display: flex;
  gap: 20px;
`;

export const Description = styled.p`
  margin: 40px 0;
  ${BODY};
  font-weight: 500;
  color: ${COLOR.WHITE};

  ${MEDIA.XS} {
    margin: 32px 0;
  }
`;

export const DataTable = styled.div`
  display: grid;
  grid-template-columns: 136px auto;
  row-gap: 20px;
`;

export const ParamName = styled.span`
  ${SUBLINE13};
  color: ${COLOR.LIGHT};
`;

export const Param = styled.span`
  ${SUBLINE13}
  color: ${COLOR.WHITE}
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1px;
`;

export const StyledButton = styled.button`
  flex-grow: 1;
  border: 0;
  padding: 16px 0;
  font-size: 20px;
  color: ${COLOR.LIGHT};
  background-color: ${COLOR.GRAPHITE};
  cursor: pointer;

  &:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
  }

  &:hover {
    color: ${COLOR.WHITE};
  }

  &:disabled {
    background-color: ${COLOR.SECONDARY};
  }
`;

export const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`;

export const ErrorMessage = styled.h1`
  ${H1};
  color: ${COLOR.WHITE};
`;

export const Error = styled.span`
  color: ${COLOR.PRIMARY};
`;
