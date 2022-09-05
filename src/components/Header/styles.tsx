import styled from "styled-components";
import { COLOR, MEDIA } from "../../ui";

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 50px;
  padding-top: 40px;
  padding-bottom: 56px;
  background-color: ${COLOR.BLACK};

  ${MEDIA.XS} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
    "logo burger"
    "search search";
    column-gap: 0;
    row-gap: 40px;
  }

  ${MEDIA.XS} {
    gap: 64px;
    padding-top: 32px;
    padding-bottom: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 41px;
  flex-grow: 1;

  ${MEDIA.MD} {
    gap: 32px;
  }

  ${MEDIA.SM} {
    gap: 30px;
  }

  ${MEDIA.XS} {
    flex-wrap: wrap;
    gap: 64px;
  }
`;
