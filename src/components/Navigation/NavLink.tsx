import Link from "next/link";
import { TNavLink } from "@/types/NavLink";

export const NavLink = ({ title, url }: TNavLink) => {
  return (
    <li className="transition hover:text-primary">
      <Link href={url} key={title} className="font-grotesk">
        {title}
      </Link>
    </li>
  );
};
