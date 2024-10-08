"use client";

import {
  forwardRef,
  memo,
  ReactNode,
  useContext,
  useRef,
} from "react";
import { useSlider } from "./Slider.hooks";
import { type TBreakpoint } from "./Slider.d";
import { cn } from "@/lib/utils";
import { calculateSlideToShow, renderDots } from "./Dots/_helper";
import { Nav } from "./Nav";
import { SliderContext, SliderContextProvider } from "./SliderContextProvider";

const Slider = ({
  children,
  dots = false,
  nav = false,
  responsive,
  slidesToShow,
  align = "center",
}: {
  children?: ReactNode[] | ReactNode;
  dots?: boolean;
  nav?: boolean;
  responsive?: TBreakpoint[] | undefined;
  slidesToShow?: number;
  align: "start" | "center" | "end";
}) => {
  const slidesCount = Array.isArray(children) ? children.length : 1;

  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderOptions = useSlider(slidesCount, sliderRef, responsive);

  const sliderContextValue = { ...sliderOptions, align };
  const breakpointSlides = sliderOptions.currentBreakPoint.slidesToShow;
  const slidesToShowOnBreakPoint = calculateSlideToShow(breakpointSlides);

  if (!children) return null;

  return (
    <SliderContextProvider value={sliderContextValue}>
      <div
        className={`slider-container grid snap-x snap-mandatory grid-flow-col gap-6 overflow-x-scroll overscroll-x-contain scroll-smooth`}
        style={{
          gridAutoColumns: `${slidesToShowOnBreakPoint ? slidesToShowOnBreakPoint : slidesToShow}%`,
        }}
        ref={sliderRef}
      >
        {children}
      </div>

      {nav ? <Nav /> : null}
      {dots
        ? renderDots(slidesCount, sliderOptions.currentSlide, breakpointSlides)
        : null}
    </SliderContextProvider>
  );
};

const SliderItem = memo(
  forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
    (props, ref) => {
      const { currentBreakPoint, align } = useContext(SliderContext);
      const breakPointAlign = currentBreakPoint?.align;

      return (
        <div
          ref={ref}
          className={cn(
            `flex min-w-full flex-shrink-0 snap-always`,
            props.className,
          )}
          style={{ scrollSnapAlign: breakPointAlign ? breakPointAlign : align }}
        >
          {props.children}
        </div>
      );
    },
  ),
);

Slider.Item = SliderItem;

export default Slider;
