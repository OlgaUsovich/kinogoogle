import { EmptyPageImage } from "assets";
import styled from "styled-components";
import { COLOR, H3, MEDIA } from "ui";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;
  height: calc(100vh - 300px);

  ${MEDIA.XS} {
    gap: 24px;
  }
`;

export const Text = styled.span`
  ${H3};
  color: ${COLOR.SECONDARY};
`;

export const Image = styled(EmptyPageImage)`
  ${MEDIA.LG} {
    width: 336px;
    height: 298px;
  }

  ${MEDIA.XS} {
    width: 202px;
    height: 177px;
  }
`;
