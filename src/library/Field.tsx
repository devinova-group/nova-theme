import { Field as FieldThemeUi } from "theme-ui";

export interface FieldProps {
  variant?: "text" | "textError" | "search";
  name?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onClick?: () => void;
  sx?: any;
}

const Field = ({
  variant,
  name,
  defaultValue,
  placeholder,
  disabled,
  onClick,
  sx,
}: FieldProps) => (
  <FieldThemeUi
    onClick={onClick}
    name={name}
    defaultValue={defaultValue}
    placeholder={placeholder}
    variant={`field.${variant}`}
    sx={sx}
    disabled={disabled}
  />
);

export default Field;
