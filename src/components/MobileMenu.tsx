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
import { useRouter } from "next/navigation";

export const MobileMenu = () => {
  const navigation = useRouter();
  const handleNavigate = (url: string) => {
    navigation.push(url);
    setTimeout(() => {
      document
        .getElementById(url.split("#")[1])
        ?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };
  return (
    <Drawer direction="right">
      <DrawerTrigger className="h-min min-h-10 min-w-10 justify-self-end">
        <MenuButton />
      </DrawerTrigger>
      <DrawerContent className="h-full flex justify-center items-center text-4xl w-full rounded-none bg-gray-950 p-6 outline-none">
        <DrawerTitle className="invisible" />
        <DrawerDescription className="invisible" />
        <DrawerTrigger className="text-left flex flex-col">
          {navLinks.map((link) => (
            <p
              key={link.url}
              className="text-white py-4"
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
