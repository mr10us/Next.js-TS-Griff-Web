import Link from "next/link";
import background from "/public/background.png";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${background.src})` }}
      className="hero-overlay w-full bg-cover bg-center"
    >
      <div className="container flex h-full flex-col justify-center gap-4 tracking-widest">
        <h1 className="font-grotesk text-5xl text-white md:text-6xl">
          <span className="uppercase text-primary">Запишись</span> на перше
          <span className="uppercase text-primary"> безкоштовне</span>{" "}
          тренування.
        </h1>
        <h2 className="font-grotesk text-3xl tracking-wide text-white">
          У найатмосфернішому клубі м.Суми.
        </h2>
        <Button asChild className="w-fit font-grotesk text-xl">
          <Link href={"#"}>РЕЄСТРАЦІЯ</Link>
        </Button>
      </div>
    </section>
  );
};
