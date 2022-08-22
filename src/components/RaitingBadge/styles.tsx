import styled from "styled-components";
import { COLOR, SUBLINE13 } from "../../ui";

export const Raiting = styled.span<{ raitingColor: string; isCard: boolean | undefined }>`
  display: inline-block;
  position: ${(props) => (props.isCard ? "absolute" : "static")};
  margin-top: ${(props) => (props.isCard ? "20px" : 0)};
  margin-left: ${(props) => (props.isCard ? "20px" : 0)};
  display: block;
  padding: 2px 8px;
  border-radius: 6px;
  ${SUBLINE13};
  color: ${COLOR.WHITE};
  background-color: ${(props) => props.raitingColor};
`;
