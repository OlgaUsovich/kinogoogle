import styled from "styled-components";
import { COLOR, SUBLINE13 } from "../../ui";

export const StyledInput = styled.input`
    height: 56px;
    border: 0;
    border-radius: 10px;
    padding-left: 20px;
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
