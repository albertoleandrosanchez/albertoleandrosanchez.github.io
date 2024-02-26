import React from "react";

const PageContainer = ({
  children,
  className,
  id,
  noFullScreen,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string | undefined;
  noFullScreen?: boolean;
}) => {
  return (
    <section
      id={id}
      className={`w-full  bg-slate-100 border-b-[1px] border-y-slate-700 xl:justify-center xl:flex min-h-screen items-center ${className} ${
        noFullScreen ? "" : "flex justify-center"
      }`}
    >
      <div className={`xl:w-[1024px] h-full`}>{children}</div>
    </section>
  );
};

export default PageContainer;
