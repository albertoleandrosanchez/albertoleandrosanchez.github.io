import React from "react";
import SkillBadge, { SkillLevel } from "./SkillBadge";

interface SkillItemProps {
  title: string;
  icon: string | JSX.Element;
  level: SkillLevel;
  className?: string;
}
const SkillItem = ({ title, icon, level, className }: SkillItemProps) => {
  return (
    <li key={title} className={className}>
      {typeof icon === "string" ? <i className={icon}></i> : icon}
      <span className=" ml-2 font-semibold">HTML5</span>
      <SkillBadge type={level} key={title} />
    </li>
  );
};

export default SkillItem;
