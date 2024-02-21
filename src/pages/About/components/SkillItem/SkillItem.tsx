import SkillBadge, { SkillLevel } from "./SkillBadge";

export interface SkillItemProps {
  name: string;
  icon: string | JSX.Element;
  level: SkillLevel;
  className?: string;
}

const SkillItem = ({ name, icon, level, className }: SkillItemProps) => {
  return (
    <li key={name} className={className}>
      {typeof icon === "string" ? <i className={icon}></i> : icon}
      <span className=" mx-2 font-semibold">{name}</span>
      <SkillBadge type={level} key={name} />
    </li>
  );
};

export default SkillItem;
