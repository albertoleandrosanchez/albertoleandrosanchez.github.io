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
      className={`w-full xl:justify-center xl:flex min-h-screen lg:max-h-screen bg-slate-100 border-b-[1px] border-y-slate-700 ${className}`}
    >
      <div className={`xl:w-[1024px] h-full`}>{children}</div>
    </section>
  );
};

export default PageContainer;
