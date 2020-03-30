import "./styles/buttons.scss";

interface UIButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  // blue, orange, red, black
  color: "blue" | "orange" | "red" | "black" ;
  size?: "large" | "default" | "small";
  outline: boolean;
  rounded: boolean;
}

const variants = ["blue", "orange", "red", "black"];

const UIButton: React.FC<UIButtonProps> = ({
  children,
  className = "",
  color,
  size = "default",
  outline,
  rounded,
  ...rest
}) => {
  const isSchemaColor = variants.includes(color);

  if (!color) throw new Error("Color is required in buttons");
  if (!isSchemaColor)
    throw new Error(
      "Invalid color, if you want to override the color do it via css or create a custom button"
    );

  const btnClass = `uibtn-${color}${outline ? "-outline" : ""} uibtn-${size} ${
    rounded ? "rounded-circle" : ""
  }`;

  return (
    <button className={`btn uibtn ${btnClass} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default UIButton;
