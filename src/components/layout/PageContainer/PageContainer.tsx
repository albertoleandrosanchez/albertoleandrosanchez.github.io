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
    <div
      id={id}
      className={`w-full h-screen max-h-screen bg-slate-100 ${className}`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
