import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef, ReactNode } from "react";

const paintVariants = cva("", {
  variants: {
    color: {
      yellow: "text-primary",
      white: "text-white",
      black: "text-gray-950",
    },
  },
  defaultVariants: {
    color: "yellow",
  },
});
export type PaintProps = Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> &
  VariantProps<typeof paintVariants> & {
    children: ReactNode;
    className?: string;
  };

const Paint = forwardRef<HTMLSpanElement, PaintProps>(
  ({ color, children, className }, ref) => {
    return (
      <span ref={ref} className={cn(paintVariants({ color }), className)}>
        {children}
      </span>
    );
  },
);
Paint.displayName = "Paint";

export { Paint, paintVariants };
