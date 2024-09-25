import { cn } from "@/lib/utils";
import React from "react";

/**
 * A reusable section layout component.
 *
 * @param {React.ReactNode} children The content for the section.
 * @param {string} [className] Optional class name for the section element.
 * @param {string} [id] Optional id for the section element.
 * @param {React.ComponentPropsWithoutRef<'section'>} props Optional props for the section element.
 * @returns {JSX.Element} The section element.
 */
export const SectionLayout = ({
  children,
  className = "",
  id,
  ...props
}: React.ComponentPropsWithoutRef<"section"> & {
  children: React.ReactNode;
  className?: string;
  id?: string;
}): JSX.Element => {
  return (
    <section id={id} className={cn("py-6 md:py-12", className)} {...props}>
      {children}
    </section>
  );
};
