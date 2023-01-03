import React from "react";
import { Button as ButtonThemeUi } from "theme-ui";
import { ButtonProps as ThemeUIButtonProps } from "theme-ui";

export interface ButtonProps extends ThemeUIButtonProps {
  size: "small" | "medium" | "large" | "";
}

const Button = (props: ButtonProps) => (
  <ButtonThemeUi
    {...props}
    variant={`buttons.${props.variant}.${
      props.size === "" ? "medium" : props.size
    }`}
  ></ButtonThemeUi>
);

export default Button;
