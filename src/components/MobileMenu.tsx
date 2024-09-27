"use client";

import { MenuButton } from "./MenuButton";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import Image from "next/image";
import closeMenuImage from "../../public/menu-button-close.svg";
import navLinks from "../../navLinks.json";

export const MobileMenu = () => {
  const handleNavigate = (url: string) => {
    navigation?.navigate(url);
    setTimeout(() => {
      document
        .getElementById(url.replace("#", ""))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
  };
  return (
    <Drawer direction="right">
      <DrawerTrigger className="h-min min-h-10 min-w-10 justify-self-end">
        <MenuButton />
      </DrawerTrigger>
      <DrawerContent className="fixed inset-0 m-0 h-full w-full rounded-none bg-gray-950 p-6 outline-none">
        <DrawerTitle className="invisible" />
        <DrawerDescription className="invisible" />
        <DrawerTrigger>
          {navLinks.map((link) => (
            <p
              key={link.url}
              className="text-white"
              onClick={() => handleNavigate(link.url)}
            >
              {link.title}
            </p>
          ))}
        </DrawerTrigger>
        <DrawerClose asChild>
          <Button variant="ghost" className="absolute right-4 top-8">
            <Image src={closeMenuImage} alt="close burger menu icon" />
          </Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};
