import { Button as ButtonThemeUi } from "theme-ui";

export interface ButtonProps {
  children?: string;
  size?: "Small" | "Medium" | "Large";
  variant?: "primary" | "error" | "success";
  disabled?: boolean;
  onClick?: () => void;
  sx?: any;
}

const Button = ({
  children,
  size,
  variant,
  disabled,
  onClick,
  sx,
}: ButtonProps) => (
  <ButtonThemeUi
    variant={`${variant}${size}`}
    onClick={onClick}
    disabled={disabled}
    sx={sx}
  >
    {children}
  </ButtonThemeUi>
);

export default Button;
