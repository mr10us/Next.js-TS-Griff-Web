"use client"

import { createContext, RefObject } from "react";

interface HeaderRefContextType {
  headerRef: RefObject<HTMLElement>;
}

export const HeaderRefContext = createContext<HeaderRefContextType | undefined>(undefined);



