import { SkillLevel } from "./SkillBadge";

export interface SkillItemProps {
  name: string;
  icon: string | JSX.Element;
  level?: SkillLevel;
  className?: string;
}

const SkillItem = ({ name, icon, className }: SkillItemProps) => {
  return (
    <li key={name} className={className}>
      {typeof icon === "string" ? (
        <i className={icon + " text-lg w-4"}></i>
      ) : (
        icon
      )}
      <span className=" mx-2 font-normal min-w-28 hover:text">{name}</span>
      {/* <SkillBadge type={level} key={name} /> */}
    </li>
  );
};

export default SkillItem;
