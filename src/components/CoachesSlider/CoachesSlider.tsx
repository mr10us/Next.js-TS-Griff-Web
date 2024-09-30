"use client";

import { Slider } from "../Slider";
import coaches from "../../../coaches.json";
import { TCoachesSliderItemProps } from ".";
import { CoachSliderItem } from "./CoachSliderItem";

const slides: TCoachesSliderItemProps[] = coaches

export const CoachesSlider = () => {
  return (
    <Slider
      dots
      nav
      slidesToShow={1}
      align="start"
      responsive={[
        { breakpoint: 480, slidesToShow: 1, align: "center" },
        { breakpoint: 768, slidesToShow: 2 },
        { breakpoint: 1024, slidesToShow: 3 },
      ]}
    >
      {slides.map((slide, index) => (
        <Slider.Item key={slide.title + index}>
          <CoachSliderItem {...slide} />
        </Slider.Item>
      ))}
    </Slider>
  );
};
