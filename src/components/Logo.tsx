import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import griff from "../../public/logo-griff.png";
import bird from "../../public/logo-bird.png";

type LogoProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof logoVariants> & {
    size: "small" | "medium" | "large";
  };

const logoVariants = cva("flex items-center justify-center flex-col h-min", {
  variants: {
    size: {
      small: "w-24",
      medium: "w-44",
      large: "w-64",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export const Logo = ({ size, ...props }: LogoProps) => {
  return (
    <div {...props} className={cn(logoVariants({ size }), props.className)}>
      <Image src={griff} alt="logo" />
      <Image src={bird} alt="logo" />
    </div>
  );
};
