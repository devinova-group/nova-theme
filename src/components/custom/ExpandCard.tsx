import React from "react"

import { Text, Image, Box } from "theme-ui";
import {
  HeaderProps,
  TextProps,
  HeadingProps,
  BodyProps,
  FooterProps,
} from "../../interfaces/models";

const Header = ({ children }: HeaderProps) => <>{children}</>;

const Img = ({ src }: any) => <Image src={src} />;

const Overline = ({ children }: TextProps) => (
  <Text variant="overline.notoSans" sx={{ marginLeft: 8 }}>
    {children}
  </Text>
);

const Heading = ({ children }: HeadingProps) => (
  <Text variant="h5.quicksand" sx={{ fontWeight: 700, marginLeft: 8 }}>
    {children}
  </Text>
);

const Body = ({ children, hideArrow, onClick }: BodyProps) => (
  <Box
    sx={{
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      width: "90%",
      marginLeft: 8,
    }}
  >
    {hideArrow && (
      <Box
        sx={{
          width: "80%",
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <Text variant="caption.quicksand" sx={{ lineHeight: "26.4px" }}>
          {children}
        </Text>
      </Box>
    )}
    {!hideArrow && (
      <Box
        sx={{
          width: "90%",
          overflow: "unset",
          whiteSpace: "break-spaces",
        }}
      >
        <Text variant="caption.quicksand" sx={{ lineHeight: "26.4px" }}>
          {children}
        </Text>
      </Box>
    )}
    {hideArrow && (
      <Box
        onClick={onClick}
        sx={{
          width: "25px",
          height: "20px",
          background: "card.arrowDown",
          marginTop: 0,
        }}
      ></Box>
    )}
    {!hideArrow && (
      <Box
        onClick={onClick}
        sx={{
          background: "card.arrowUp",
          position: "absolute",
          right: 0,
          top: "50%",
          width: "25px",
          height: "30px",
          marginTop: 0,
        }}
      ></Box>
    )}
  </Box>
);

const Footer = ({children}: FooterProps) => (
    <Box sx={{
      margin: 8,
    svg:{
      fill: 'card.icon',
    }
  }}>
    {children}
  </Box>
);
const Cards = { Img, Header, Body, Overline, Heading, Footer };

export default Cards;
