"use client";

import { Direction } from "./Direction";
import directions from "../../../directions.json";
import { useScreen } from "@/app/hooks/useScreen";
import { DirectionSlider } from "../DirectionsSlider/DirectionSlider";

export const _DirectionList = () => {
  const { width } = useScreen();

  if (width > 768)
    return (
      <div className="grid grid-flow-row grid-cols-1 justify-center gap-x-20 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {directions.map((direction) => (
          <Direction
            key={direction.id}
            id={direction.id}
            title={direction.title}
            image={direction.image}
          />
        ))}
      </div>
    );

  return <DirectionSlider />
};
