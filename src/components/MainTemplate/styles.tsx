import styled from "styled-components";
import { MEDIA } from "../../ui";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 146px;
    height: 100vh;
    max-width: 1920px;
    margin: 0 auto;

    ${MEDIA.MD} {
        max-width: 768px;
    }

    ${MEDIA.SM} {
        max-width: 320px;
    }
`