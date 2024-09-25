import gymImage from "../../../public/gym.png";
import { Paint } from "../Layouts/Paint";
import { SectionLayout } from "../Layouts/SectionLayout";
import { PageTitle } from "../PageTitle";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";

export const Registrartion = () => {
  return (
    <SectionLayout
      id="registration"
      style={{ backgroundImage: `url(${gymImage.src})`}}
      className="registration-overlay bg-cover bg-center bg-no-repeat"
    >
      <div className="container">
        <PageTitle>
          Реєстрація на безкоштовне заняття в <Paint>GRIFF</Paint>
        </PageTitle>
        <div className="py-20">
        <RegistrationForm />
        </div>
      </div>
    </SectionLayout>
  );
};
