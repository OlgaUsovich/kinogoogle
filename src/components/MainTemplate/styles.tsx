import styled from "styled-components";
import { MEDIA } from "../../ui";

export const Container = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    gap: 50px;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1920px;
    min-height: 100%;
    padding: 0 62px 64px;
    margin: 0 auto;

    ${MEDIA.SM} {
        max-width: 768px;
    }

    ${MEDIA.XS} {
        max-width: 320px;
    }
`
