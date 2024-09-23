"use client";

import { useEffect, useState } from "react";
import { throttle } from "../../../helpers/throttle";

type WindowSize = {
  width: number;
  height: number;
};

/**
 * Hook to get the window size and whether it is mobile or not.
 *
 * @returns {WindowSize & {isMobile: boolean}} The window size and whether it is mobile or not.
 */
export const useScreen = (): WindowSize & {
  isMobile: boolean;
  isTablet: boolean;
} => {
  const [sizes, setSizes] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const handleWindowSizeChange = throttle(() => {
    setSizes({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 500);

  useEffect(() => {
    handleWindowSizeChange();

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return {
    ...sizes,
    isMobile: sizes.width < 565,
    isTablet: sizes.width < 1024,
  };
};
