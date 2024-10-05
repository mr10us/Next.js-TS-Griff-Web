import { BotSlider } from "../BotSlider/BotSlider";
import { SectionLayout } from "../Layouts/SectionLayout";
import { PageTitle } from "../PageTitle";

export const Bot = () => {
  return (
    <SectionLayout
      id="bot"
      className="bg-gray-950 text-left text-white md:text-center"
    >
      <div className="container">
        <PageTitle>
          ВІРТУАЛЬНИЙ ТРЕНЕР <span className="text-primary">GRIFF</span> В
          ТЕЛЕГРАМ
        </PageTitle>
        <div className="flex flex-col gap-2 text-lg tracking-widest md:gap-4">
          <p>
            Ми створили бот, який покроково дозволить вам створити рельєф тіла
            для певної мети.
          </p>
          <p>
            Оберіть в меню бота напрямок і він продемонструє, як правильно
            виконувати вправи, скільки, і в якій послідовності.
          </p>
          <p>
            Ми впевнені, що такий бот суттєво облегшить тренування, або замінить
            роботу персонального тренера.
          </p>
          <p>
            В разі, якщо ви хочете особистого супровода наших тренерів,
            скористайтесь такою можливістью. Вони всі мають високу фахову
            підготовку та нагороди.
          </p>
        </div>
      </div>
      <div className="py-4">
        <BotSlider />
      </div>
    </SectionLayout>
  );
};
