import Image from "next/image";
import menuOpenImage from "../../public/menu-button-open.svg";

export const MenuButton = () => {
  return <Image src={menuOpenImage} alt="menu burger button" />;
};

MenuButton.displayName = "MenuButton";
