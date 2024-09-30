"use client";

import { Slider } from "../Slider";
import directions from "../../../directions.json";
import { Direction } from "../Directions/Direction";
import { DirectionProps } from "../Directions/Direction.d";

const slides: DirectionProps[] = directions

export const DirectionSlider = () => {
  return (
    <Slider
      dots
      nav
      slidesToShow={1}
      align="center"
    >
      {slides.map((slide, index) => (
        <Slider.Item key={slide.title + index}>
          <Direction {...slide} />
        </Slider.Item>
      ))}
    </Slider>
  );
};
