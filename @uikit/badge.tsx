import "./styles/badge.scss";

type BadgeProps = {
  // blue, orange, red, black
  color: "blue" | "orange" | "red" | "black";
  className: string;
};

const UIBadge: React.FC<BadgeProps> = ({ children, color, className = "" }) => {
  return <div className={`badge badge-${color} ${className}`}>{children}</div>;
};

export default UIBadge;
