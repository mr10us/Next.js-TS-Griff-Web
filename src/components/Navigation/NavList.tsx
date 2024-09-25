import navLinks from "../../../navLinks.json";
import { NavLink } from "./NavLink";

export const NavList = () => {
  return (
    <nav className="m-auto block h-full w-1/2 md:w-full">
      <ul className="flex h-full w-full flex-col items-start justify-center gap-6 whitespace-nowrap font-grotesk text-2.5xl font-medium text-white md:flex-row md:items-center md:gap-4">
        {navLinks.map((link) => (
          <NavLink key={link.title} title={link.title} url={link.url} />
        ))}
      </ul>
    </nav>
  );
};
