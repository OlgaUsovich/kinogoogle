import { MovieCard } from "components/MovieCard";
import { useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import { ISearchMovie } from "types";
import {
  ArrowButton,
  CarouselBlock,
  CarouselButtons,
  CarouselTitle,
  CarouselTitleBlock,
  CustomSlider,
} from "./styles";

interface IProps {
  items: ISearchMovie[];
  title: string;
}

export const Carousel = ({ items, title }: IProps) => {
  const CarouselRef = useRef<Slider | null>(null);
  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <CarouselBlock>
      <CarouselTitleBlock>
        <CarouselTitle>Recommendations</CarouselTitle>
        <CarouselButtons>
          <ArrowButton
            onClick={() => {
              if (CarouselRef.current !== null) {
                CarouselRef.current.slickPrev();
              }
            }}
          >
            <BsArrowLeft />
          </ArrowButton>
          <ArrowButton
            onClick={() => {
              if (CarouselRef.current !== null) {
                CarouselRef.current.slickNext();
              }
            }}
          >
            <BsArrowRight />
          </ArrowButton>
        </CarouselButtons>
      </CarouselTitleBlock>
      <CustomSlider {...settings} ref={CarouselRef}>
        {items.map((recomend) => (
          <MovieCard movie={recomend} key={recomend.imdbID} />
        ))}
      </CustomSlider>
    </CarouselBlock>
  );
};
