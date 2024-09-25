"use client";

import { ReactNode, useRef } from "react";
import { HeaderRefContext } from "./HeaderContext";

export const HeaderRefProvider = ({ children }: { children: ReactNode }) => {
  const headerRef = useRef<HTMLElement>(null);

  return (
    <HeaderRefContext.Provider value={{ headerRef }}>
      {children}
    </HeaderRefContext.Provider>
  );
};
