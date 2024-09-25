import { Header } from "@/components/Header";
import { Advantages } from "@/components/sections/Advantages";
import { Bot } from "@/components/sections/Bot";
import { Coaches } from "@/components/sections/Coaches";
import { Hero } from "@/components/sections/Hero";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { HeaderRefProvider } from "./contexts/HeaderContext";

export default function Home() {
  return (
    <>
      <HeaderRefProvider>
        <Header />
        <main>
          <Hero />
          <HeroBanner />
          <Bot />
          <Advantages />
          <Coaches />
        </main>
      </HeaderRefProvider>
    </>
  );
}
