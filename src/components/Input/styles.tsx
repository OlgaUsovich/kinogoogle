import { FieldError } from "react-hook-form";
import styled from "styled-components";
import { COLOR, SUBLINE13 } from "../../ui";

export const StyledInput = styled.input<{error: string | undefined}>`
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
    ${(props) => (props ? `${console.log(props)}` : 0)};
    outline: ${(props) => (props.error ? `2px solid ${COLOR.ERROR}` : 0)};

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
