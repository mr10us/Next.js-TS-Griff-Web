import { createContext } from "react";
import { type TSliderReturnType } from "./Slider.d";

export const SliderContext = createContext<TSliderReturnType>(
  {} as TSliderReturnType,
);

export const SliderContextProvider = ({
  value,
  children,
}: {
  value: TSliderReturnType;
  children: React.ReactNode;
}) => {
  return (
    <SliderContext.Provider value={value}>{children}</SliderContext.Provider>
  );
};
