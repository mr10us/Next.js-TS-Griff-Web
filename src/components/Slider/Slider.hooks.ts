import { RefObject, useEffect, useState } from "react";
import { debounce } from "../../../helpers/debounce";
import { TBreakpoint, TSliderReturnType } from "./Slider.d";
import { throttle } from "../../../helpers/throttle";

const SLIDER_DEBOUNCE = 100;
const SLIDER_THROTTLE = 100;

export const useSlider = (
  slidesCount: number,
  sliderRef: RefObject<HTMLDivElement>,
  breakpoints: TBreakpoint[] = [],
): Omit<TSliderReturnType, "align"> => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBreakPoint, setCurrentBreakPoint] = useState<TBreakpoint>({
    breakpoint: 1200,
    slidesToShow: 1,
  });

  const scrollToCurrent = (index: number) => {
    if (sliderRef?.current === null || typeof index === "undefined") return;

    sliderRef.current.scrollTo({
      left: (index * sliderRef.current.scrollWidth) / slidesCount,
      behavior: "smooth",
    });
  };

  const scrollToPrev = () => {
    if (sliderRef?.current === null) return;

    if (currentSlide !== 0) {
      scrollToCurrent(currentSlide - 1);
    }
  };

  const scrollToNext = () => {
    if (sliderRef?.current === null) return;

    if (currentSlide !== slidesCount - 1) {
      scrollToCurrent(currentSlide + 1);
    }
  };

  const scrollToFirst = () => {
    if (sliderRef?.current === null) return;

    scrollToCurrent(0);
  };

  const scrollToLast = () => {
    if (sliderRef?.current === null) return;

    scrollToCurrent(slidesCount - 1);
  };

  const scrollToCenter = () => {
    if (sliderRef?.current === null) return;

    scrollToCurrent(Math.floor(slidesCount / 2) - 1);
  };

  useEffect(() => {
    if (sliderRef?.current === null) return;

    const handleManyDotsScroll = () => {
      const slider = sliderRef.current;

      const scrollPosition = slider!.scrollLeft;
      const scrollWidth = slider!.scrollWidth;
      const sliderWidth = slider!.clientWidth;
      const slideWidth = slider!.firstElementChild!.clientWidth;
      
      const isStart = sliderWidth / 3 >= scrollPosition;
      const isEnd =
      (scrollPosition + sliderWidth + slideWidth / 2) >= scrollWidth ||
      scrollWidth <= scrollPosition * 2 + slideWidth;
      
      if (isStart) setCurrentSlide(0);
      else if (isEnd) setCurrentSlide(2);
      else setCurrentSlide(1);

    };
    
    const handleDefaultScroll = () => {
      const firstSlide = sliderRef.current?.firstElementChild;
      const slideWidth = firstSlide?.clientWidth ?? 0;
      const scrollLeft = sliderRef.current?.scrollLeft ?? 0;

      setCurrentSlide(Math.round(scrollLeft / slideWidth));
    };

    const scrollHandler =
      currentBreakPoint.slidesToShow > 1
        ? handleManyDotsScroll
        : handleDefaultScroll;

    const handleScroll = throttle(scrollHandler, SLIDER_THROTTLE);
    sliderRef.current.addEventListener("scroll", handleScroll);

    return () => {
      sliderRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [currentBreakPoint.slidesToShow]);

  useEffect(() => {
    if (sliderRef?.current === null) return;

    const handleResize = debounce(() => {
      if (breakpoints.length > 0) {
        const windowWidth = window.innerWidth;
        const matchingBreakpoint = breakpoints
          .slice()
          .toReversed()
          .find(({ breakpoint }) => windowWidth >= breakpoint);

        if (matchingBreakpoint) {
          setCurrentBreakPoint(matchingBreakpoint);
        }
      }
    }, 1000);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    sliderRef,
    currentSlide,
    slidesCount,
    currentBreakPoint,
    scrollToPrev,
    scrollToNext,
    scrollToFirst,
    scrollToLast,
    scrollToCenter,
    scrollToCurrent,
  };
};
