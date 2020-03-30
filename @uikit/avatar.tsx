import "./styles/avatars.scss";

type AvatarProps = {
  src: string;
  alt?: string;
  size: "sm" | "md" | "lg" | "xl";
  className: string;
};

const Avatar: React.FC<AvatarProps> = ({
  size = "md",
  className = "",
  src,
  alt
}) => {
  if (!src) throw new Error("src is required");
  return (
    <img src={src} className={`avatar avatar-${size} ${className}`} alt={alt} />
  );
};

export default Avatar;
