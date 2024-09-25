import { useState } from "react";
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
import { NavList } from "./Navigation/NavList";

export const MobileMenu = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="justify-self-end h-min min-w-10 min-h-10">
        <MenuButton />
      </DrawerTrigger>
      <DrawerContent className="fixed inset-0 m-0 h-full w-full rounded-none bg-gray-950 p-6 outline-none">
        <DrawerTitle className="invisible" />
        <DrawerDescription className="invisible" />
        <NavList />
        <DrawerClose asChild>
          <Button variant="ghost" className="absolute right-4 top-8">
            <Image src={closeMenuImage} alt="close burger menu icon" />
          </Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};
