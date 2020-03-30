import "./styles/alerts.scss";
interface UIAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "error" | "info" | "success" | "warning";
  size: "normal" | "large";
  onClose:Function
}

const UIAlert: React.FC<UIAlertProps> = ({
  children,
  type = "success",
  className = "",
  size,
  onClose,
  ...rest
}) => {
  className += ` uialert uialert-${type} ${
    size === "large" ? "uialert-large" : ""
  }`;

  function getIcon() {
    switch (type) {
      case "error":
        return "/@uikit/alert/error.svg";
      case "info":
        return "/@uikit/alert/info.svg";
      case "warning":
        return "/@uikit/alert/warning.svg";
      default:
        return "/@uikit/alert/success.svg";
    }
  }

  return (
    <div className={className} {...rest}>
      {<img src={getIcon()} />}{" "}
      <div className="uialert-content">{children}</div>
      {!!onClose && <i className="fas fa-times dismiss-uialert"></i>}
    </div>
  );
};

export default UIAlert;
