import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, MEDIA, SUBLINE13 } from "ui";

export const Container = styled.div`
  justify-self: end;
  grid-area: burger;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 264px;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  color: ${COLOR.WHITE};
  font-family: "Exo 2", "sans-serif";
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  background-color: ${COLOR.PRIMARY};
  border-radius: 10px;

  * > {
    width: 24px;
    height: 24px;
  }
`;

export const Text = styled.span`
  ${SUBLINE13};
  color: ${COLOR.WHITE};
  margin-left: 20px;
`;
export const UserButton = styled.button<{ isOpen: boolean }>`
  border: 0;
  height: 24px;
  background-color: transparent;
  cursor: pointer;
  transform: ${(props) => (props.isOpen ? "rotate(90deg)" : 0)};
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
`;

export const LinksList = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 80px;
  width: 100%;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  background-color: ${COLOR.DARK};
  border-radius: 10px;

  ${MEDIA.MD} {
    top: 70px;
    left: -94px;
    width: 150px;
  }
`;

export const LinkItem = styled(Link)`
  display: block;
  padding: 0 20px;
  ${SUBLINE13};
  line-height: 56px;
  font-weight: 500;
  color: ${COLOR.PRIMARY};
  text-decoration: none;

  &:first-child {
    border-bottom: 1px solid ${COLOR.GRAPHITE};
    color: ${COLOR.WHITE};
  }

  &:hover {
    color: ${COLOR.SECONDARY};
  }
`;