import { createGlobalStyle } from "styled-components";
import { COLOR } from "./colors";
import { MEDIA } from "./media";
import { PADDING } from "./paddings";

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
    padding: ${PADDING.LG};

    @media (min-width: ${MEDIA.MD}) {
        ${PADDING.MD}
    }

    @media (min-width: ${MEDIA.SM}) {
        ${PADDING.SM}
    }
}
`;
