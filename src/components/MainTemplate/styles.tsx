import styled from "styled-components";
import { MEDIA } from "../../ui";

export const Wrapper = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    gap: 146px;
`

export const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1920px;
    min-height: 100%;
    padding: 0 62px 64px;
    margin: 0 auto;

    ${MEDIA.MD} {
        max-width: 768px;
    }

    ${MEDIA.SM} {
        max-width: 320px;
    }
`
