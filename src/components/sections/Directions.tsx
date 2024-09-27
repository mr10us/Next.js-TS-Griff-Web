import { DirectionList } from "../Directions";
import { Paint } from "../Layouts/Paint";
import { SectionLayout } from "../Layouts/SectionLayout";
import { PageTitle } from "../PageTitle";

export const Directions = () => {
  return (
    <SectionLayout id="direction" className="bg-gray-950">
      <div className="container">
        <PageTitle>
          Напрямки клубу <Paint>GRIFF</Paint>
        </PageTitle>
        <DirectionList />
      </div>
    </SectionLayout>
  );
};
