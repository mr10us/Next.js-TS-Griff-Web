import { CoachesSlider } from "../CoachesSlider";
import { SectionLayout } from "../Layouts/SectionLayout";
import { PageTitle } from "../PageTitle";

export const Coaches = () => {
  return (
    <SectionLayout id="coaches" className="bg-gray-950">
      <div className="container">
        <PageTitle>Наші тренери</PageTitle>
        <CoachesSlider />
      </div>
    </SectionLayout>
  );
};
