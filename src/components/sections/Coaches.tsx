import { CoachesSlider } from "../CoachesSlider";
import { PageTitle } from "../PageTitle";

export const Coaches = () => {
  return (
    <section className="bg-gray-950">
      <div className="container">
        <PageTitle>Наші тренери</PageTitle>
        <CoachesSlider />
      </div>
    </section>
  );
};
