import { Text as TextThemeUi } from "theme-ui";

export interface TextProps {
  children: string;
  size:
    | "display"
    | "title1"
    | "title2"
    | "subhead"
    | "body1"
    | "body2"
    | "body3"
    | "caption"
    | "button"
    | "overline";
  variant: "notoSans" | "quicksand";
  onClick?: () => void;
  sx?: any;
}
const Text = ({ children, size, variant, onClick, sx }: TextProps) => (
  <TextThemeUi onClick={onClick} variant={`${size}.${variant}`} sx={sx}>
    {children}
  </TextThemeUi>
);
export default Text;
