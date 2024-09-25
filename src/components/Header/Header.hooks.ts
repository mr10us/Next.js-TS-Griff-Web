import { LegacyRef, useContext, useEffect, useState } from "react";
import { HeaderRefContext } from "@/app/contexts/HeaderContext";
import { throttle } from "../../../helpers/throttle";

const THROTTLE_VALUE = 100;

export const useHeaderRef = (): LegacyRef<HTMLElement> => {
  const context = useContext(HeaderRefContext);
  if (!context) {
    throw new Error("useHeaderRef must be used within a HeaderRefProvider");
  }

  return context.headerRef;
};

export const useHeaderHeight = (): number => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const context = useContext(HeaderRefContext);

  if (!context)
    throw new Error("useHeaderHeight must be used within a HeaderRefProvider");

  useEffect(() => {
    if (!context.headerRef.current) return;

    const headerRef = context.headerRef.current;

    const handleResize = throttle(() => {
      if (headerRef) {
        setHeaderHeight(headerRef.clientHeight);
      }
    }, THROTTLE_VALUE);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])
  return headerHeight;
}
