import { createElement } from "react";
import { Dots } from ".";

export const renderDots = (
  slideCount: number,
  currentIndex: number,
  slidesToShow: number,
): JSX.Element => {
  const dots: JSX.Element[] = [];
  Array.from({ length: slideCount }, (_, index) => {
    if (slidesToShow > 1 && index > 2) return;
    const isActive = index === currentIndex;
    const scrollTo = getScrollTo(index, slidesToShow);

    return dots.push(
      createElement(Dots, {
        key: index,
        active: isActive,
        id: index,
        scrollTo,
      }),
    );
  });

  return createElement(
    "div",
    { className: "dots flex flex-wrap items-center justify-center gap-4 py-6" },
    dots,
  );
};

const getScrollTo = (
  index: number,
  slidesToShow: number,
): "first" | "center" | "last" | undefined => {
  if (slidesToShow <= 1) return undefined;

  if (index === 1) return "center";
  if (index === 2) return "last";

  return "first";
};

export const calculateSlideToShow = (slidesCount: number): number => {
  return Math.round(100 / slidesCount);
};
