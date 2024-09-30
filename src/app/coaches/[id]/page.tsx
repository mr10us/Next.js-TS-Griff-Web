"use client";

// src/app/coach/[id]/page.tsx
import { HeaderRefProvider } from "@/app/contexts/HeaderContext";
import { shimmer, toBase64 } from "@/app/helpers/shimmer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import arrowImage from "../../../../public/left.svg";
import Image from "next/image";
import { useParams } from "next/navigation";
import coaches from "../../../../coaches.json";
import Link from "next/link";
import { SectionLayout } from "@/components/Layouts/SectionLayout";

const Coach = () => {
  const coachId = useParams();

  const coach = coaches.find((coach) => coach.id === Number(coachId?.id));

  if (!coach) return null;
  return (
    <HeaderRefProvider>
      <Header isFixed={false} />
      <main>
        <SectionLayout className="bg-gray-950">
          <div className="container">
            <Link
              href="/"
              className="flex pb-8 text-3xl font-bold text-primary gap-2"
            >
              <Image
                src={arrowImage}
                alt="arrow image"
                className="h-auto w-5"
              />
              Назад
            </Link>

            <div className="flex w-full flex-col-reverse gap-8 text-white sm:flex-row">
              <div className="mr-6 w-full sm:mr-6 sm:w-1/3">
                <Image
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(600, 300),
                  )}`}
                  src={coach.image}
                  alt={coach.title}
                  className="float-none h-auto object-contain sm:float-left"
                  width={600}
                  height={300}
                />
              </div>
              <div className="w-full mb-8">
                <h1 className="text-4xl font-bold">{coach.title}</h1>
                <p className="text-lg">{coach.description}</p>
              </div>
            </div>
          </div>
        </SectionLayout>
      </main>
      <Footer />
    </HeaderRefProvider>
  );
};

export default Coach;
