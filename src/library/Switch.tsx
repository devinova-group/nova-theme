import { Switch as SwitchThemeUi } from "theme-ui";

export interface SwitchProps {
  variant?: "large" | "small" | "largeV1" | "smallV1" | "largeV2" | "smallV2";
  onClick?: () => void;
  sx?: any;
}

const Switch = ({ variant, onClick, sx }: SwitchProps) => (
  <SwitchThemeUi variant={`switchs.${variant}`} onClick={onClick} sx={sx} />
);

export default Switch;
