export const PageTitle = ({
  children,
}: {
  children: React.ReactNode | string;
}) => {
  return <h2 className="uppercase py-6 font-grotesk text-6xl text-white md:text-center">{children}</h2>;
};
