import { useState } from "react";

type BadgeColor =
  | "blue"
  | "green"
  | "slate"
  | "red"
  | "orange"
  | "amber"
  | "violet";

interface BadgeProps {
  title: string;
  color: BadgeColor;
  size?: "sm" | "md" | "lg";
}

const Badge = ({ title, color, size }: BadgeProps) => {
  const mapcolor = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    slate: "bg-slate-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
    amber: "bg-amber-500",
    violet: "bg-violet-500",
  };
  const [textColor, setTextcolor] = useState("text-white");

  // useEffect(() => {
  //   if (
  //     color === "orange" ||
  //     color === "amber" ||
  //     color === "violet" ||
  //     color
  //   ) {
  //     setTextcolor("text-black");
  //   }
  // }, [color]);

  return (
    <div
      className={`center relative inline-block select-none whitespace-nowrap rounded-lg py-1 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none ${textColor} ${mapcolor[color]} `}
    >
      <div className="mt-px">{title}</div>
    </div>
  );
};

export default Badge;
