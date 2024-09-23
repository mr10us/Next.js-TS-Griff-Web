import { forwardRef } from "react";
import Image from "next/image";
import menuOpenImage from "../../public/menu-button-open.svg";

type MenuButtonProps = {
  onClick: () => void;
};

export const MenuButton = forwardRef<
  React.HTMLAttributes<HTMLButtonElement>,
  MenuButtonProps
>(({ onClick }, ref) => {


  return (
    <button className="justify-self-end h-min min-w-10 min-h-10" onClick={onClick}>
      <Image src={menuOpenImage} alt="menu burger button" />
    </button>
  );
});
