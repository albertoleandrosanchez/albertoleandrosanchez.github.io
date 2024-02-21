import Badge from "@/components/Badge";

export type SkillLevel =
  | "Avanzado"
  | "Intermedio-Avanzado"
  | "Intermedio"
  | "Basico-Intermedio"
  | "Basico"
  | "Advanced"
  | "Intermediate-Advanced"
  | "Intermediate"
  | "Basic-Intermediate"
  | "Basic";

interface SkillBadgeProps {
  type: SkillLevel;
}
const SkillBadge = ({ type }: SkillBadgeProps) => {
  if (type === "Avanzado" || type === "Advanced") {
    return <Badge title={type} color="extra_blue" />;
  }
  if (type === "Intermedio-Avanzado" || type === "Intermediate-Advanced") {
    return <Badge title={type} color="blue" />;
  }
  if (type === "Intermedio" || type === "Intermediate") {
    return <Badge title={type} color="slate" />;
  }
  if (type === "Basico-Intermedio" || type === "Basic-Intermediate") {
    return <Badge title={type} color="green" />;
  }
  if (type === "Basico" || type === "Basic") {
    return <Badge title={type} color="orange" />;
  }
  return null;
};

export default SkillBadge;
