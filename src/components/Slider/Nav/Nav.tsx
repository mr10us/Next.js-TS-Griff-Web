import Image from "next/image";
import arrowIcon from "../../../../public/left.svg";
import { SliderContext } from "../Slider";
import { useContext } from "react";
import { cn } from "@/lib/utils";

export const Nav = (props: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn("flex justify-end gap-4 py-6", props.className)}
      {...props}
    >
      <PrevButton />
      <NextButton />
    </div>
  );
};

const NextButton = (
  props: React.ComponentPropsWithoutRef<"button">,
): React.ReactElement => {
  const { scrollToNext, currentSlide, slidesCount } = useContext(SliderContext);
  console.log(currentSlide, slidesCount)
  return (
    <NavButton handler={scrollToNext} {...props} disabled={currentSlide === slidesCount - 1}>
      <Image src={arrowIcon} alt="next button" className="rotate-180" />
    </NavButton>
  );
};

const PrevButton = (
  props: React.ComponentPropsWithoutRef<"button">,
): React.ReactElement => {
  const { scrollToPrev, currentSlide, slidesCount } = useContext(SliderContext);
  return (
    <NavButton handler={scrollToPrev} {...props} disabled={currentSlide === 0}>
      <Image src={arrowIcon} alt="next button" />
    </NavButton>
  );
};

const NavButton = ({
  children,
  handler,
  ...props
}: {
  handler: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean
}) => {
  return (
    <button
      onClick={handler}
      {...props}
      disabled={props.disabled}
      className={cn(
        "size-16 disabled:brightness-50 disabled:filter",
        props?.className ? props?.className : "",
      )}
    >
      {children}
    </button>
  );
};
