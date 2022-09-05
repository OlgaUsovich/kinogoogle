import styled, { keyframes } from "styled-components";
import { COLOR, SUBLINE13 } from "../../ui";

const rotation = keyframes`
 0% {
  transform: rotate(0deg);
}

100% {
  transform: rotate(360deg);
}
`;

export const Spinner = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2.5px solid ${COLOR.PRIMARY};
  border-right-color: transparent;
  border-radius: 50%;
  margin-left: 10px;
  display: inline-block;
  box-sizing: border-box;
`;

export const Button = styled.button`
  place-self: center;
  width: 161px;
  height: 40px;
  border: 0;
  border-radius: 40px;
  ${SUBLINE13};
  color: ${COLOR.WHITE};
  background-color: ${COLOR.GRAPHITE};

  &:hover >:first-child {
    animation: ${rotation} 1s linear infinite;
  }
`;
