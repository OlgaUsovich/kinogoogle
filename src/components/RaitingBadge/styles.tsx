import styled from "styled-components";
import { COLOR, subline13 } from "../../ui";

export const Raiting = styled.span<{ raitingColor: string }>`
    position: absolute;
    margin-top: 20px;
    margin-left: 20px;
    display: block;
    padding: 2px 8px;
    border-radius: 6px;
    ${subline13};
    color: ${COLOR.WHITE};
    background-color: ${(props) => props.raitingColor};
`