"use client";

import Image from "next/image";
import qrCode from "../../../public/qr-code.png";
import handImage from "../../../public/hand.png";
import { Slider } from "../Slider";
import { TBotSliderItem } from ".";
import { useScreen } from "@/app/hooks/useScreen";

const slides: TBotSliderItem[] = [
  {
    image: qrCode,
    title: "Приходь в зал з телефоном",
  },
  {
    image: handImage,
    title: "Відскануй QR код",
  },
  {
    image: qrCode,
    title: "Почни тренування",
  },
];

export const BotSlider = () => {
  const { width } = useScreen();

  if (width > 768) {
    return (
      <div className="bot-counter grid grid-cols-3 items-center gap-4">
        {slides.map(({ image, title }) => (
          <BotItem key={title} image={image} title={title} />
        ))}
      </div>
    );
  }
  return (
    <Slider dots align="center">
      {slides.map(({ image, title }) => (
        <Slider.Item key={title} className="flex flex-col gap-4">
          <BotItem image={image} title={title} />
        </Slider.Item>
      ))}
    </Slider>
  );
};

export const BotItem = ({ image, title }: TBotSliderItem) => {
  return (
    <div className="row-span-3 grid grid-rows-subgrid items-center gap-4 justify-items-center text-3xl before:font-grotesk">
      <Image src={image} alt={title} className="rounded-[32px]" />
      <p>{title}</p>
    </div>
  );
};
