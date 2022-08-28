import { createGlobalStyle } from "styled-components";
import { COLOR } from "./colors";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Noto Sans', 'sans-serif';
    background-color: ${COLOR.BLACK};
    padding: 0 62px 64px;
  }
`;
