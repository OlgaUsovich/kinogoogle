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

  ${MEDIA.MDLG} {
    gap: 40px;
    padding-top: 40px;
    padding-bottom: 48px;
  }

  ${MEDIA.MD} {
    gap: 71px;
    padding-top: 30px;
    padding-bottom: 44px;
  }

  ${MEDIA.SM} {
    gap: 64px;
    padding-top: 32px;
    padding-bottom: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 41px;
  flex-grow: 1;

  ${MEDIA.MDLG} {
    gap: 32px;
  }

  ${MEDIA.MD} {
    gap: 30px;
  }

  ${MEDIA.SM} {
    flex-wrap: wrap;
    gap: 64px;
  }
`;
