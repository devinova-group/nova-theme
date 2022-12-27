import React from "react";
import { Box, Button, Checkbox, Flex, Heading, Label, Text } from "theme-ui";
import ReactDOM from "react-dom";
import {
  HeaderProps,
  BodyProps,
  FooterProps,
  /* DialogProps, */
} from "../interfaces/modals";
export interface DialogProps {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
}
const Dialog = ({ children, size }: DialogProps) => {
  return ReactDOM.createPortal(
    <Box
      sx={{
        width: "100%",
        height: "100%",
        background: "#0009",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Box variant={`modal.${size}`}>{children}</Box>
    </Box>,
    document.getElementById("portal")!
  );
};

const Header = ({ children }: any) => <header>{children}</header>;

const Body = ({ children }: any) => <main>{children}</main>;

const Footer = ({ children }: any) => <footer>{children}</footer>;

const Modals = { Dialog, Header, Body, Footer };

export default Modals;
