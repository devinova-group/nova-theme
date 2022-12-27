import { Box, Text } from "theme-ui";

export interface ToasterProps {
  variant?:
    | "primaryV1"
    | "warningV1"
    | "errorV1"
    | "noticeV1"
    | "infoV1"
    | "noticeV2"
    | "primaryV2"
    | "warningV2"
    | "errorV2"
    | "infoV2";
  onClick?: () => void;
  sx?: any;
  children?: any;
}

const Toaster = ({ children, variant, onClick, sx }: ToasterProps) => (
  <Box variant={`toaster.${variant}`} onClick={onClick} sx={sx}>
    <Box className="toasterSvg" />
    {children}
    <Box className="toasterX" />
  </Box>
);

export default Toaster;
