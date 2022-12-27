import { Heading as HeadingThemeUi } from "theme-ui";

export interface HeadingProps {
  children: string;
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant: "neucha" | "quicksand";
  onClick?: () => void;
  sx?: any;
}

const Heading = ({ children, size, variant, onClick, sx }: HeadingProps) => (
  <HeadingThemeUi
    onClick={onClick}
    variant={`heading.${size}.${variant}`}
    sx={sx}
  >
    {children}
  </HeadingThemeUi>
);

export default Heading;
