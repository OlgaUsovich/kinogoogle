import { css } from "styled-components";

export const Theme = css`
  html[theme="dark"] {
    --background-color: #000000;
    --text-color: #ffffff;
    --form-color: #323537;
    --button-icons: #afb2b6;
  }

  html[theme="light"] {
    --background-color: #ffffff;
    --text-color: #000000;
    --form-color: #afb2b6;
    --button-icons: #323537;
  }
`;
