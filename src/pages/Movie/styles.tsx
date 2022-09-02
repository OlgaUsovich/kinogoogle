import styled from "styled-components";
import { BODY, COLOR, H1, SUBLINE13 } from "../../ui";

export const MovieInfo = styled.div`
  display: flex;
  gap: 42px;
  flex-grow: 1;
`;

export const PosterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 266px;
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
`;

export const DataTable = styled.table``;

export const TableBody = styled.tbody``;

export const StyledRow = styled.tr``;

export const StyledHead = styled.th`
  width: 136px;
  padding: 10px 0;
  ${SUBLINE13};
  text-align: left;
  color: ${COLOR.LIGTH};
`;

export const StyledCell = styled.td`
  padding: 10px 0;
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
  color: ${COLOR.LIGTH};
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
