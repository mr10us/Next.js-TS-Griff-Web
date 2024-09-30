import { Header } from "@/components/Header";
import { Advantages } from "@/components/sections/Advantages";
import { Bot } from "@/components/sections/Bot";
import { Coaches } from "@/components/sections/Coaches";
import { Hero } from "@/components/sections/Hero";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { HeaderRefProvider } from "./contexts/HeaderContext";
import { Mission } from "@/components/sections/Mission";
import { Directions } from "@/components/sections/Directions";
import { Footer } from "@/components/Footer";
import { Registrartion } from "@/components/sections/Registrartion";

export default function Home() {
  return (
    <HeaderRefProvider>
      <Header />
      <main>
        <Hero />
        <HeroBanner />
        <Bot />
        <Advantages />
        <Coaches />
        <Mission />
        <Directions />
        <Registrartion />
      </main>
      <Footer />
    </HeaderRefProvider>
  );
}
