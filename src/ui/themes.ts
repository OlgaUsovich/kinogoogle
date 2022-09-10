import { css } from "styled-components";

export const Theme = css`
    html[theme='dark'] {
        --background-color: #000000;
        --text-color: #FFFFFF;
        --form-color: #323537;
        --button-icons: #AFB2B6;
    }

    html[theme='light'] {
        --background-color: #FFFFFF;
        --text-color: #000000;
        --form-color: #AFB2B6;
        --button-icons: #323537;
    }
`