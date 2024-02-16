import React from "react";
import SkillBadge, { SkillLevel } from "./SkillBadge";

export interface SkillItemProps {
  title: string;
  icon: string | JSX.Element;
  level: SkillLevel;
  className?: string;
}

const SkillItem = ({ title, icon, level, className }: SkillItemProps) => {
  return (
    <li key={title} className={className}>
      {typeof icon === "string" ? <i className={icon}></i> : icon}
      <span className=" mx-2 font-semibold">{title}</span>
      <SkillBadge type={level} key={title} />
    </li>
  );
};

export default SkillItem;
