"use client";

import { Logo } from "../Logo";
import { Contacts } from "../Contacts";
import { useScreen } from "@/app/hooks/useScreen";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/MobileMenu";
import { NavList } from "../Navigation/NavList";
import { useHeaderRef } from "./Header.hooks";

/**
 * The header component.
 *
 * @returns A JSX element representing the header.
 */
export const Header = (): JSX.Element => {
  const { isMobile, isTablet } = useScreen();
  const headerRef = useHeaderRef();

  const logoSize = isMobile ? "medium" : "large";

  return (
    <header
      ref={headerRef}
      className={cn(
        "container absolute inset-0 top-8 z-10 grid h-min grid-rows-[min-content_min-content] grid-cols-[minmax(140px,261px)_1fr] justify-between gap-4 lg:inset-0 lg:grid-cols-[auto_1fr_minmax(70px,270px)] lg:gap-4 lg:py-4",
      )}
    >
      <Logo size={logoSize} />
      {isTablet ? <MobileMenu /> : null}
      <div className="hidden lg:block">
        <NavList />
      </div>
      <div className="h-min my-auto">
      <Contacts />
      </div>
    </header>
  );
};
