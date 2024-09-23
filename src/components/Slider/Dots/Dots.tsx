import { memo, useContext } from "react";
import { SliderContext } from "../Slider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import targetImage from "../../../../public/icon-target.svg";

export const SliderDot = memo(
  ({
    active,
    id,
    scrollTo,
  }: {
    active: boolean;
    id: number;
    scrollTo?: "first" | "center" | "last";
  }) => {
    const { scrollToCurrent, scrollToCenter, scrollToFirst, scrollToLast } =
      useContext(SliderContext);

    const handleScroll = () => {
      switch (scrollTo) {
        case "first":
          scrollToFirst();
          break;
        case "center":
          scrollToCenter();
          break;
        case "last":
          scrollToLast();
          break;
        default:
          scrollToCurrent(id);
          break;
      }
    };
    return (
      <Button
        variant={active ? "secondary" : "ghost"}
        className="rounded-full p-2 transition-colors"
        onClick={handleScroll}
      >
        <Image src={targetImage} alt="slider dot" width={24} height={26} />
      </Button>
    );
  },
);
