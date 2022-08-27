import styled from "styled-components";
import { COLOR, SUBLINE13 } from "../../ui";

export const StyledInput = styled.input`
    display: inline-block;
    height: 56px;
    width: 100%;
    border: 0;
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 56px;
    ${SUBLINE13};
    font-weight: 500;
    color: ${COLOR.WHITE};
    background-color: ${COLOR.GRAPHITE};

    &::placeholder { 
        color: ${COLOR.SECONDARY};

        &:disabled {
            color: ${COLOR.LIGTH};
        }
    }

    &:focus-visible {
        outline: 2px solid ${COLOR.PRIMARY};
    }

    &:disabled {
        background-color: ${COLOR.SECONDARY}
    }
`;
