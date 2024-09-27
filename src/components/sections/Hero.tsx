"use client";

import Link from "next/link";
import background from "/public/background.png";
import { Button } from "../ui/button";
import { useHeaderHeight } from "../Header/Header.hooks";
import { SectionLayout } from "../Layouts/SectionLayout";

export const Hero = () => {
  const headerHeight = useHeaderHeight();

  return (
    <SectionLayout
      id="hero"
      style={{
        backgroundImage: `url(${background.src})`,
        height: `calc(100% + ${headerHeight}px) + 64px`,
      }}
      className="hero-overlay w-full bg-cover bg-center"
    >
      <div
        className="container flex h-full flex-col gap-4 pb-6 tracking-widest"
        style={{ paddingTop: headerHeight + 32 + 32 }}
      >
        <h1 className="font-grotesk text-5xl text-white md:text-6xl">
          <span className="uppercase text-primary">Запишись</span> на перше
          <span className="uppercase text-primary"> безкоштовне</span>{" "}
          тренування.
        </h1>
        <h2 className="font-grotesk text-3xl tracking-wide text-white">
          У найатмосфернішому клубі м.Суми.
        </h2>
        <Button asChild className="w-fit font-grotesk text-xl">
          <Link href={"#signup"}>РЕЄСТРАЦІЯ</Link>
        </Button>
      </div>
    </SectionLayout>
  );
};
