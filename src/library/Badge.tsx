import { Badge as BadgeThemeUi } from "theme-ui";

export interface BadgeProps {
  children: string;
  variant:
    | "inActive"
    | "error"
    | "disabled"
    | "active"
    | "default"
    | "primary"
    | "selected"
    | "secondary";
  onClick?: () => void;
  sx?: any;
}

const Badge = ({ children, variant, onClick, sx }: BadgeProps) => (
  <BadgeThemeUi variant={variant} onClick={onClick} sx={sx}>
    {children}
  </BadgeThemeUi>
);

export default Badge;
