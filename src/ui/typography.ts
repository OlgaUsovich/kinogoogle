import { css } from "styled-components";
import { MEDIA } from "./media";

const h1 = css`
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;

  @media (${MEDIA.MD}) {
    font-size: 32px;
    line-height: 48px;
  }

  @media (${MEDIA.SM}) {
    font-size: 28px;
    line-height: 42px;
  }
`;

const h2 = css`
  font-family: "Exo 2", "sans-serif";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  @media (${MEDIA.SM}) {
    font-size: 20px;
  }
`;

const h3 = css`
  font-family: "Exo 2", "sans-serif";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;

  @media (${MEDIA.SM}) {
    font-size: 18px;
    line-height: 28px;
  }
`;

const subline11 = css`
  font-family: "Exo 2", "sans-serif";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;

const subline12 = css`
  font-family: "Exo 2", "sans-serif";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const subline13 = css`
  font-family: "Exo 2", "sans-serif";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const body = css`
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export { h1, h2, h3, subline11, subline12, subline13, body };
