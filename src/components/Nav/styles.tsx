import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BODY, COLOR, MEDIA, SUBLINE11 } from "../../ui";

export const StyledNav = styled.nav<{ isNavOpen: boolean }>`
  width: 158px;
  height: calc(100% - 192px);
  position: fixed;
  background-color: ${COLOR.BLACK};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${MEDIA.LG} {
    display: ${(props) => (props.isNavOpen ? "flex" : "none")};
    height: calc(100% - 260px);
    right: 10px;
    z-index: 1;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0;
  list-style: none;
`;

export const CustomLink = styled(NavLink)`
  display: flex;
  ${SUBLINE11}
  color: ${COLOR.SECONDARY};
  text-decoration: none;

  &.active {
    color: ${COLOR.PRIMARY};
  }

  & > svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: ${COLOR.PRIMARY_DIMMER};
  }

  &:disabled {
    color: ${COLOR.GRAPHITE};
  }
`;

export const LinkText = styled.span`
  margin-left: 20px;
`;

export const Rigths = styled.span`
  justify-self: end;
  ${BODY};
  font-weight: 500;
  color: ${COLOR.LIGTH};
`;
