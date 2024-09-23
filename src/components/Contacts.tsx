import callUsImage from "../../public/call-us.svg";
import Image from "next/image";

export const Contacts = () => {
  return (
    <div className="contact-container">
      <a
        href="tel:0992705787"
        target="_blank"
        className="before:content-['Contact Us'] hidden before:text-2xl before:text-white"
      >
        <Image
          src={callUsImage}
          alt="contact button"
          className="w-16 rounded-full bg-primary p-4"
        />
      </a>

      <div className="flex flex-col items-center gap-4 self-center text-white">
        <a
          href="https://goo.gl/maps/rh6RFN5TiCzogKhD9"
          target="_blank"
          className="text-xl font-bold text-white"
        >
          Суми, Пр. Перемоги, 30/3
        </a>
        <a
          href="tel:0992705787"
          className="block w-full rounded-2xl bg-primary py-3 text-center text-2xl font-medium text-white"
        >
          +38 099 270 57 87
        </a>
      </div>
    </div>
  );
};
