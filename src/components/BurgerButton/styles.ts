import styled from "styled-components";
import { COLOR } from "../../ui";

export const Button = styled.button`
  grid-area: burger;
  display: inline-flex;
  justify-self: end;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 0;
  width: 56px;
  height: 56px;
  border: 0;
  border-radius: 10px;
  background-color: ${COLOR.PRIMARY};
  cursor: pointer;
`;

export const Line = styled.span<{ isOpen: boolean }>`
  display: block;
  width: 16px;
  height: 2px;
  background-color: ${COLOR.WHITE};
  margin: 2px 0;
  transition: 0.4s;
  border-radius: 4px;

  &:nth-of-type(1) {
    transform-origin: bottom left;
    transform: ${(props) => (props.isOpen ? "rotate(45deg) translate(1px, -2px)" : 0)};
  }

  &:nth-of-type(2) {
    opacity: ${(props) => (props.isOpen ? 0 : 1)};
  }

  &:nth-of-type(3) {
    transform-origin: top left;
    transform: ${(props) => (props.isOpen ? "rotate(-45deg) translate(2px, 1px)" : 0)};
  }
`;
