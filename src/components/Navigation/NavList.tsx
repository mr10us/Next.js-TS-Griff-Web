import navLinks from "../../../navLinks.json";
import { NavLink } from "./NavLink";

export const NavList = () => {
  return (
    <nav className="m-auto block w-1/2 h-full md:w-full">
      <ul className="flex h-full w-full flex-col items-start justify-center gap-6 whitespace-nowrap font-grotesk text-2.5xl font-medium text-white md:flex-row md:items-center">
        {navLinks.map((link) => (
          <NavLink key={link.title} title={link.title} url={link.url} />
        ))}
      </ul>
    </nav>
  );
};
