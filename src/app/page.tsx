import { Header } from "@/components/Header";
import { Advantages } from "@/components/sections/Advantages";
import { Bot } from "@/components/sections/Bot";
import { Coaches } from "@/components/sections/Coaches";
import { Hero } from "@/components/sections/Hero";
import { HeroBanner } from "@/components/sections/HeroBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeroBanner />
        <Bot />
        <Advantages />
        <Coaches />
      </main>
    </>
  );
}
