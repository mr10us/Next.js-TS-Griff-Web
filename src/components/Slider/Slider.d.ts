import { RefObject } from "react";

export type TBreakpoint = {
  breakpoint: number;
  slidesToShow: number;
  align?: TAlign;
}

export type TAlign = "start" | "center" | "end";

export type TSliderReturnType = {
  align: TAlign;
  sliderRef: RefObject<HTMLDivElement>;
  currentSlide: number;
  slidesCount: number;
  currentBreakPoint: Breakpoint;
  scrollToPrev: () => void;
  scrollToNext: () => void;
  scrollToFirst: () => void;
  scrollToLast: () => void;
  scrollToCenter: () => void;
  scrollToCurrent: (index: number) => void;
};