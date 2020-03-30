import {
  FormGroup,
  Input,
  Label,
  InputProps,
  InputGroupAddon,
  InputGroup,
  CustomInput
} from "reactstrap";
import "./styles/input.scss";

interface Props extends InputProps {
  formGroupClassName?: string;
  formGroupId?: string;
  labelClassName?: string;
  labelFor?: string;
  error?: string | React.ReactNode;
  options?: [string] | [React.ReactNode];
  formFeedbackClassName?: string;
  label: string | React.ReactNode;
  inputAddon?: string | React.ReactNode;
  addonType?: "append" | "prepend";
  inputGroupSize: "sm" | "md" | "lg";
}

const UIInput: React.FC<Props> = ({
  labelClassName,
  formGroupClassName = "",
  formFeedbackClassName = "",
  formGroupId,
  options,
  label,
  labelFor,
  error,
  valid,
  className = "",
  inputAddon,
  type,
  addonType = "append",
  inputGroupSize = "md",
  ...rest
}) => {
  className += `uinpt ${error ? "error-input " : ""}`;
  className += `${valid ? "valid-input" : ""}`;

  const inp =
    type === "select" ? (
      <CustomInput type="select" className={className} valid={valid} {...rest}>
        {options}
      </CustomInput>
    ) : (
      <Input type={type} className={className} valid={valid} {...rest}>
        {options}
      </Input>
    );

  return (
    <FormGroup
      className={`uinput-group ${formGroupClassName}`}
      id={formGroupId}
    >
      {label && (
        <Label htmlFor={labelFor} className={labelClassName}>
          {label}
        </Label>
      )}
      <InputGroup size={inputGroupSize}>
        {addonType === "append" && inp}
        {inputAddon && (
          <InputGroupAddon addonType={addonType}>{inputAddon}</InputGroupAddon>
        )}
        {addonType === "prepend" && inp}
        {error && <div className="error-message">{error}</div>}
      </InputGroup>
    </FormGroup>
  );
};

export default UIInput;
