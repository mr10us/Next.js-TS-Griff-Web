import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, ReactNode } from "react";

const pageTitleVariants = cva(
  "uppercase pb-10 font-grotesk text-6xl text-white",
  {
    variants: {
      align: {
        center: "text-center",
        start: "text-start",
        end: "text-end",
      },
    },
    defaultVariants: {
      align: "center",
    },
  },
);

interface PageTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof pageTitleVariants> {
  children: ReactNode | string;
}

const PageTitle = forwardRef<HTMLHeadingElement, PageTitleProps>(
  ({ children, align }, ref) => {
    return (
      <h2 ref={ref} className={pageTitleVariants({ align })}>
        {children}
      </h2>
    );
  },
);
PageTitle.displayName = "PageTitle";

export { PageTitle, pageTitleVariants };
