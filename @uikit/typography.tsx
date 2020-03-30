import "./styles/typography.scss";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  // * will render heading according to the size given
  size: 1 | 2 | 3 | 4 | 5 | 6;
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size: "large" | "regular" | "small";
}

// Paragraphs
const Text: React.FC<TextProps> = ({ size,children,className = "",...rest}) => {
  if (size !== "large" && size !== "regular" && size !== "small") {
    throw new Error("Invalid text size");
  }

  return (
    <p className={`text-${size} ${className}`} {...rest}>
      {children}
    </p>
  );
};

const Heading: React.FC<HeadingProps> = ({size,children,className = "",...rest}) => {
  function renderHeading() {
    switch (size) {
      case 1:
        return (
          <h1 className={`heading-1 ${className}`} {...rest}>
            {children}
          </h1>
        );
      case 2:
        return (
          <h2 className={`heading-2 ${className}`} {...rest}>
            {children}
          </h2>
        );
      case 3:
        return (
          <h3 className={`heading-3 ${className}`} {...rest}>
            {children}
          </h3>
        );
      case 4:
        return (
          <h4 className={`heading-4 ${className}`} {...rest}>
            {children}
          </h4>
        );
      case 5:
        return (
          <h5 className={`heading-5 ${className}`} {...rest}>
            {children}
          </h5>
        );
      case 6:
        return (
          <h6 className={`heading-6 ${className}`} {...rest}>
            {children}
          </h6>
        );
      default:
        throw new Error("size attribute is required");
    }
  }
  return renderHeading();
};

const Typography = {
  Heading,
  Text
};

export default Typography;
