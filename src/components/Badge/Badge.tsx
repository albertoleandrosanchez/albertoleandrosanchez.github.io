import { useState } from "react";

type BadgeColor =
  | "blue"
  | "green"
  | "slate"
  | "red"
  | "orange"
  | "amber"
  | "violet"
  | "extra_blue"
  | "extra_green"
  | "extra_slate"
  | "extra_red"
  | "extra_orange"
  | "extra_amber"
  | "extra_violet"
  | "low_blue"
  | "low_green"
  | "low_slate"
  | "low_red"
  | "low_orange"
  | "low_amber"
  | "low_violet";

interface BadgeProps {
  title: string;
  color: BadgeColor;
  size?: "sm" | "md" | "lg" | "xs" | "tiny";
}

const Badge = ({ title, color, size = "sm" }: BadgeProps) => {
  const tint = 300;
  const mapcolor = {
    extra_blue: `bg-blue-700`,
    blue: `bg-blue-500`,
    low_blue: `bg-blue-300`,
    extra_green: `bg-green-700`,
    low_green: `bg-green-300`,
    green: "bg-green-500",
    extra_slate: "bg-slate-700",
    slate: "bg-slate-500",
    low_slate: "bg-slate-300",
    extra_red: "bg-red-700",
    red: "bg-red-500",
    low_red: "bg-red-300",
    extra_orange: "bg-orange-700",
    orange: "bg-orange-500",
    low_orange: "bg-orange-300",
    extra_amber: "bg-amber-700",
    amber: "bg-amber-500",
    low_amber: "bg-amber-300",
    extra_violet: "bg-violet-700",
    violet: "bg-violet-500",
    low_violet: "bg-violet-300",
  };
  const [textColor, _] = useState("text-white");

  const mapSize = {
    tiny: "text-[10px]",
    xs: "text-[12px]",
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div
      className={`center bg-opacity-80 relative inline-block select-none whitespace-nowrap rounded-lg py-1 px-3.5 align-baseline uppercase  ${textColor} ${mapcolor[color]} ${mapSize[size]}
      hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-gradient-to-r from-${color}-${tint} to-${color}-500
      `}
    >
      <p className="mt-px text-wrap">{title}</p>
    </div>
  );
};

export default Badge;
