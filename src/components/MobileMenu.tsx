import { useState } from "react";
import { MenuButton } from "./MenuButton";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "./ui/drawer";
import { Button } from "./ui/button";
import Image from "next/image";
import closeMenuImage from "../../public/menu-button-close.svg";
import { NavList } from "./Navigation/NavList";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen((prev) => !prev);

  return (
    <Drawer open={isOpen} direction="right">
      {/* <DrawerTrigger asChild> */}
      <MenuButton onClick={toggleDrawer} />
      {/* </DrawerTrigger> */}
      <DrawerTitle className="invisible" />
      <DrawerDescription className="invisible"></DrawerDescription>
      <DrawerContent className="fixed inset-0 m-0 h-full w-full rounded-none bg-gray-950 p-6 outline-none">
        <NavList />
        <Button
          variant="ghost"
          className="absolute right-4 top-4"
          onClick={toggleDrawer}
        >
          <Image src={closeMenuImage} alt="close burger menu icon" />
        </Button>
      </DrawerContent>
    </Drawer>
  );
};
