export const SectionLayout = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  );
};
