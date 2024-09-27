import { Contacts } from "../Contacts";
import { Logo } from "../Logo";
import { Schedule } from "../Schedule";
import { Socials } from "../Socials";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-10 font-grotesk text-white">
      <div className="flex flex-wrap container md:grid gap-6 md:grid-cols-[auto_repeat(3,1fr)] lg:gap-10">
        <div className="flex flex-col items-center place-self-start md:row-start-1 md:row-end-3">
          <Logo size="medium" />
          <p className="text-nowrap font-grotesk text-lg uppercase text-white md:text-2xl">
            Створи тіло своєї мрії
          </p>
        </div>
        <div className="row-span-2 mb-6 grid grid-rows-subgrid justify-start gap-3 sm:justify-start md:justify-stretch">
          <p className="mb-4 text-2.5xl uppercase sm:mb-2 sm:text-3xl lg:text-4xl">
            Ми працюємо
          </p>
          <Schedule />
        </div>
        <div className="row-span-2 mb-6 grid grid-rows-subgrid justify-start gap-3 sm:justify-start md:justify-stretch">
          <p className="mb-4 text-2.5xl uppercase sm:mb-2 sm:text-3xl lg:text-4xl">
            Ми в соц. мережах
          </p>
          <Socials />
        </div>
        <div className="row-span-2 mb-6 grid grid-rows-subgrid justify-start gap-3 sm:justify-start md:justify-stretch">
          <p className="mb-4 text-2.5xl uppercase sm:mb-2 sm:text-3xl lg:text-4xl">
            Контакти
          </p>
          <Contacts location="footer" />
        </div>
      </div>
    </footer>
  );
};
