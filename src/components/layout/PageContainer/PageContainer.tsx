import React from "react";

const PageContainer = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string | undefined;
}) => {
  return (
    <section
      id={id}
      className={`w-full xl:justify-center xl:flex h-screen max-h-screen bg-slate-100 ${className}`}
    >
      <div className="xl:w-[1024px]">{children}</div>
    </section>
  );
};

export default PageContainer;
