import Slider from "react-slick";
import styled from "styled-components";
import { COLOR, H2, MEDIA } from "ui";

export const CustomSlider = styled(Slider)`
  .slick-list {
    margin: 0 -20px;
  }

  .slick-slide div {
    margin: 0 20px;
  }

  ${MEDIA.MD} {
    .slick-list {
      margin: 0 -32px;
    }

    .slick-slide div {
      margin: 0 32px;
    }
  }
`;

export const CarouselBlock = styled.div`
  margin-top: 56px;

  ${MEDIA.SM} {
    margin-left: 0;
  }
`;

export const CarouselTitle = styled.h3`
  ${H2};
  color: ${COLOR.WHITE};
  margin-bottom: 40px;

  ${MEDIA.XS} {
    margin-bottom: 32px;
  }
`;

export const CarouselTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CarouselButtons = styled.div`
  display: flex;
  gap: 16px;
`;

export const ArrowButton = styled.div`
  cursor: pointer;

  &:disabled {
    & > svg {
      color: ${COLOR.LIGHT};
    }
  }

  & > svg {
    width: 24px;
    height: 24px;
    color: ${COLOR.WHITE};
  }
`;
