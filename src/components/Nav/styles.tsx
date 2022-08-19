import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { body, COLOR, subline11 } from "../../ui";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  list-style: none;
`;
export const CustomLink = styled(NavLink)`
  display: flex;
  ${subline11}
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
    color: ${COLOR.PRIMARY2};
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
  ${body};
  font-weight: 500;
  color: ${COLOR.LIGTH};
`;
