import { useState, useEffect } from "react";

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
}

const Badge = ({ title, color }: BadgeProps) => {
  const [textColor, setTextcolor] = useState("text-white");
  // if (color === "organge") {
  //   setTextcolor("text-black");
  // }
  useEffect(() => {
    if (color === "orange") {
      setTextcolor("text-black");
    }
  }, [color]);

  return (
    <div
      className={`center relative inline-block select-none whitespace-nowrap rounded-lg py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none ${textColor}  bg-${color}-500`}
    >
      <div className="mt-px">{title}</div>
    </div>
  );
};

export default Badge;
