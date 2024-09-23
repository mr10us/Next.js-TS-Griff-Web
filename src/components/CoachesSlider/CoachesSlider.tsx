"use client";

import Image from "next/image";
import { Slider } from "../Slider";
import ruslan from "../../../public/ruslan.jpeg";
import { TCoachesSliderItemProps } from ".";

const slides = [
  {
    image: ruslan,
    title: "Персональний тренер",
  },
  {
    image: ruslan,
    title: "Персональний тренер",
  },
  {
    image: ruslan,
    title: "Персональний тренер",
  },
  {
    image: ruslan,
    title: "Персональний тренер",
  },
  {
    image: ruslan,
    title: "Персональний тренер",
  },
];

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
          <CoachesSliderItem image={slide.image} title={slide.title} />
        </Slider.Item>
      ))}
    </Slider>
  );
};

const CoachesSliderItem = ({ image, title }: TCoachesSliderItemProps) => {
  return (
    <>
      <Image src={image} alt={title} />
      <p>{title}</p>
    </>
  );
};
