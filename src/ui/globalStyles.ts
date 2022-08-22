import { createGlobalStyle } from "styled-components";
import { COLOR } from "./colors";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    min-height: 100%;
  }

  body {
    font-family: 'Noto Sans', 'sans-serif';
    background-color: #EAF2F2;
  }

  .root {
    display: flex;
    justify-content: center;
    gap: 146px;
    background-color: ${COLOR.BLACK};
}
`;
