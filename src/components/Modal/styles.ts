import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, H1, H2, H3 } from "../../ui";

export const Container = styled.div`
  position: fixed;
  top: 0;
  eft: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  min-height: 65%;
  border-radius: 10px;
  background-color: ${COLOR.DARK};
`;

export const Header = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  ${H1};
  color: ${COLOR.LIGHT};
`;

export const Body = styled.div`
  display: grid;
  place-items: center;
  flex-grow: 1;
`;

export const Text = styled.p`
  ${H2};
  color: ${COLOR.WHITE};
`;

export const PurpleText = styled.span`
  color: ${COLOR.PRIMARY};
`;

export const Button = styled(Link)`
  width: 75%;
  margin: 0 auto 50px;
  background-color: ${COLOR.PRIMARY};
  border: 0;
  ${H3};

  &:hover {
    background-color: ${COLOR.PRIMARY_DIMMER};
  }
`;
