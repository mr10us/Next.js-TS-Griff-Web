import Image from "next/image";
import { Paint } from "../Layouts/Paint";
import { PageTitle } from "../PageTitle";
import missionIcon from "../../../public/mission.png";
import { SectionLayout } from "../Layouts/SectionLayout";

export const Mission = () => {
  return (
    <SectionLayout id="mission" className="bg-dirt py-4">
      <div className="container mb-6">
        <PageTitle>Місія</PageTitle>
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4 md:w-1/3">
            <p className="text-justify font-grotesk text-2xl tracking-wider text-white">
              Головна мета GRIFF — надати простір, де ви зможете створити тіло
              своєї мрії, знайти однодумців, або родину спортсменів, які будуть
              вас мотивувати на шляху.
            </p>
            <p className="text-justify font-grotesk text-2xl tracking-wider text-white">
              Ми також ставимо за мету розвивати сучасні напрямки активностей,
              які так подобаються різним віковим групам - це і стретчінг,
              фітнес-мікс, TRX, тренування за системою Табата, дитячий фітнес.
            </p>
            <p className="text-justify font-grotesk text-2xl tracking-wider text-white">
              В нашому клубі ми зібрали зіркову команду тренерів, що нададуть
              вам консультації щодо тренувань, техніки виконання та харчування.
            </p>
          </div>
          <Image
            src={missionIcon}
            alt="mission icon"
            className="h-min self-center"
          />
          <div className="hidden border-x-2 border-primary px-4 md:flex">
            <h2
              className="text-center font-grotesk text-5xl font-bold uppercase text-white"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              <Paint>griff</Paint>
            </h2>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
