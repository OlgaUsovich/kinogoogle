import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BODY, COLOR, MEDIA, SUBLINE11 } from "../../ui";

export const Nav = styled(motion.nav)`
  width: 158px;
  height: calc(100% - 192px);
  position: fixed;
  background-color: ${COLOR.BLACK};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${MEDIA.LG} {
    height: calc(100vh - 152px);
    width: 178px;
    padding-left: 20px;
    right: 10px;
    z-index: 1;
  }

  ${MEDIA.XS} {
    height: calc(100vh - 248px);
  }
`;

export const Ul = styled.ul`
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
  color: ${COLOR.LIGHT};
`;
