import { SectionLayout } from "../Layouts/SectionLayout";

export const HeroBanner = () => {
  return (
    <SectionLayout className="w-full bg-hero-baner border-y-[1px] border-gray-700 py-6">
      <div className="container flex flex-col gap-4 py-4 text-white">
        <h2 className="text-3xl">
          СТВОРИ ТІЛО <span className="text-primary">СВОЄЇ МРІЇ</span>
        </h2>
        <p>
          95% опитаних відвідувачів клубу на питання: &quot;Що вам подобаєтсья у
          Гриффі, чому саме до нас?&quot;, відповіли – атмосфера.
        </p>
      </div>
    </SectionLayout>
  );
};
