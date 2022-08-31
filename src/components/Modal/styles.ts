import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, H1, H2, H3 } from "../../ui";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  min-height: 65%;
  border-radius: 10px;
  background-color: ${COLOR.GRAPHITE};
`;

export const ModalHeader = styled.div`
  text-align: center;
  padding: 20px;
`;

export const ModalTitle = styled.h1`
  ${H1};
  color: ${COLOR.LIGTH};
`;

export const ModalBody = styled.div`
  display: grid;
  place-items: center;
  flex-grow: 1;
`;

export const ModalText = styled.p`
  ${H2};
  color: ${COLOR.WHITE};
`;

export const StyledSpan = styled.span`
  color: ${COLOR.PRIMARY};
`;

export const ModalButton = styled(Link)`
    width: 75%;
    margin: 0 auto 50px;
    background-color: ${COLOR.PRIMARY};
    border: 0;
    ${H3};

    &:hover {
    background-color: ${COLOR.PRIMARY_DIMMER};
  }
`
