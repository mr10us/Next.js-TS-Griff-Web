"use client";

// src/app/direction/[id]/page.tsx
import { HeaderRefProvider } from "@/app/contexts/HeaderContext";
import { shimmer, toBase64 } from "@/app/helpers/shimmer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import arrowImage from "../../../../public/left.svg";
import Image from "next/image";
import { useParams } from "next/navigation";
import directions from "../../../../directions.json";
import Link from "next/link";
import { SectionLayout } from "@/components/Layouts/SectionLayout";

const Direction = () => {
  const directionId = useParams();

  const direction = directions.find(
    (direction) => direction.id === Number(directionId?.id),
  );

  if (!direction) return null;
  return (
    <HeaderRefProvider>
      <Header isFixed={false} />
      <main>
        <SectionLayout className="bg-gray-950 overflow-hidden" id="skew">
          <div className="container">
            <Link
              href="/"
              className="flex gap-2 pb-8 text-3xl font-bold text-primary"
            >
              <Image
                src={arrowImage}
                alt="arrow image"
                className="h-auto w-5"
              />
              Назад
            </Link>

            <div className="flex w-full flex-col gap-8 text-white sm:block">
              <Image
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(600, 300),
                )}`}
                src={direction.image}
                alt={direction.title}
                className="float-none mr-0 sm:mr-6 h-auto w-full object-contain sm:float-left sm:w-1/3"
                width={600}
                height={300}
              />
              <div className="w-full">
                <h1 className="mb-4 text-4xl font-bold">{direction.title}</h1>
                <p className="text-lg text-justify">{direction.description}</p>
              </div>
            </div>
          </div>
        </SectionLayout>
      </main>
      <Footer />
    </HeaderRefProvider>
  );
};

export default Direction;
