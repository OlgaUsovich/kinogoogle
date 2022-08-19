import styled from "styled-components";
import { COLOR, MEDIA, PADDING } from "../../ui";

export const Wrapper = styled.div`
  display: flex;
  gap: 146px;
  height: 100%;
  padding: ${PADDING.LG};
  background-color: ${COLOR.BLACK};

  @media (${MEDIA.MD}) {
    padding: ${PADDING.MD};
  }

  @media (${MEDIA.SM}) {
    padding: ${PADDING.SM};
  }
`;
