import Image from "next/image";
import gymImage from "../../../public/gym2.png";
import { PageTitle } from "../PageTitle";
import targetImage from "../../../public/icon-target.svg";

export const Advantages = () => {
  return (
    <section
      id="advantages"
      style={{ backgroundImage: `url(${gymImage.src})` }}
      className="advantages-overlay w-full bg-cover bg-center py-6"
    >
      <div className="container">
        <PageTitle>
          Чому обирають <span className="text-primary">Griff</span>
        </PageTitle>
        <div className="my-10 grid grid-cols-1 items-center gap-6 text-xl font-medium text-white md:grid-cols-2 md:gap-20">
          <div className="flex gap-4">
            <Image src={targetImage} alt="target" width={24} height={26} className="h-min self-center" />
            <p>
              Велике приміщення: Тренажерний зал - 900 кв. м, Фітнес зал 80 кв.
              м.
            </p>
          </div>
          <div className="flex gap-4">
            <Image src={targetImage} alt="target" width={24} height={26} className="h-min self-center" />
            <p>
              Кросфіт зона – професійна станція, сани, гребля, покришка з
              кувалдою, 2 канати, 3 боксерські груші та інший інвентар.
            </p>
          </div>
          <div className="flex gap-4">
            <Image src={targetImage} alt="target" width={24} height={26} className="h-min self-center" />
            <p>
              Зручно розташовані 50 тренажерів з вільною вагою, та тренажери з
              блинами на всі групи м'язів.
            </p>
          </div>
          <div className="flex gap-4">
            <Image src={targetImage} alt="target" width={24} height={26} className="h-min self-center" />
            <p>
              Більше пів тонни зручних блинів, які легко брати зі стійки, або
              навіть з підлоги.
            </p>
          </div>
          <div className="flex gap-4">
            <Image src={targetImage} alt="target" width={24} height={26} className="h-min self-center" />
            <p>
              Окрема кардіо зона – 6 бігових доріжок, орбітрек, спінбайк,
              велотренажер.
            </p>
          </div>
          <div className="flex gap-4">
            <Image src={targetImage} alt="target" width={24} height={26} className="h-min self-center" />
            <p>2 просторі роздягальні та 9 душових.</p>
          </div>
          <div className="flex gap-4">
            <Image src={targetImage} alt="target" width={24} height={26} className="h-min self-center" />
            <p>
              Відокремлена зона з гантелями: 2 гантельні ряди, від 1 до 10 і від
              11 до 50 кг.
            </p>
          </div>
          <div className="flex gap-4">
            <Image src={targetImage} alt="target" width={24} height={26} className="h-min self-center" />
            <p>Масажний кабінет, інфрачервона сауна.</p>
          </div>
          <div className="flex gap-4">
            <Image src={targetImage} alt="target" width={24} height={26} className="h-min self-center" />
            <p>
              Більше 100 найменувань спортивного харчування від 2 вітчизняних та
              3 найвідоміших зарубіжних виробників (BioTech, MST,
              GeniusNutrition.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
