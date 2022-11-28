import React from "react";
import { Text, Image, Box } from "theme-ui";
import {
  HeaderProps,
  TextProps,
  HeadingProps,
  ArrowProps,
  BodyProps,
} from "..//interfaces/models";

const Header = ({ children }: HeaderProps) => <>{children}</>;

const Img = ({ src }: any) => <Image src={src} />;

const Overline = ({ children }: TextProps) => (
  <Text variant="overline.notoSans" sx={{ marginLeft: 8 }}>
    {children}
  </Text>
);

const Heading = ({ children, onClick, hideArrow }: HeadingProps) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      marginRight: 8,
      marginLeft: 8,

    }}
  >
    <Text variant="h5.quicksand" sx={{ fontWeight: 700 }}>
      {children}
    </Text>
    {hideArrow && <Box onClick={onClick} className="arrowDown" sx={{
       width: "25px",
       height: "20px",
       marginTop: 0,
    }}></Box>}
  </Box>
);

const TextDots = ({ children }: ArrowProps) => (
  <Text
    variant="caption.quicksand"
    sx={{ lineHeight: "26.4px", marginLeft: 8 }}
  >
    {children}
  </Text>
);

const Body = ({ children, hideArrow, onClick }: BodyProps) => (
  <Box sx={{
    position: 'relative',
    width: "90%",
    marginLeft: 8,

  }}>
    {hideArrow && (
      <Box
        onClick={onClick}
        className="arrowUp"
        style={{ 
          position: "absolute", 
          right: 0, 
          top: "50%",
        width: "25px",
        height: "30px",
        marginTop: 0, }}
      ></Box>
    )}
    <Text variant="caption.quicksand" sx={{ lineHeight: "26.4px", }}>
      {children}
    </Text>
  </Box>
);

const Footer = () => (
  <Box sx={{
    display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        gridGap: 4,
        alignItems: 'center',
        marginLeft: 8,
        marginTop: 8,
  }}>
    <Box className="email" sx={{
          width: "25px",
          height: "20px",
          background: 'card.email',
          marginTop: 2,
    }} />
    <Text variant="caption.quicksand">figma@devinova.se</Text>
    <Box className="phone" sx={{
       width: "25px",
       height: "30px",
       background: 'card.phone',
       marginTop: 2,
    }}/>
    <Text variant="caption.quicksand">+46 77 123 45 67</Text>
  </Box>
);
const Cards = { Img, Header, Body, Overline, Heading, TextDots, Footer };

export default Cards;
