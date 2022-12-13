import React from "react";
import { Text, Image, Box } from "theme-ui";
import { Heading as Head } from "theme-ui";
import {
  HeaderProps,
  TextProps,
  HeadingProps,
  ArrowProps,
  BodyProps,
  FooterProps,
} from "../../interfaces/model";

const Header = ({ children }: HeaderProps) => <>{children}</>;

const Img = ({ src }: any) => <Image src={src} />;

const Overline = ({ children }: TextProps) => (
  <Text variant="overline.notoSans">{children}</Text>
);

const Heading = ({ children, onClick, hideArrow }: HeadingProps) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
     
    }}
  >
    <Head as={"h5"} variant="heading.h5.quicksand">
      {children}
    </Head>
    {hideArrow && (
      <Box
        onClick={onClick}
        className="arrowDown"
        sx={{
          width: "25px",
          height: "20px",
          marginTop: 0,
          marginRight: 12,
          marginLeft: 8,
        }}
      ></Box>
    )}
  </Box>
);

const TextDots = ({ children }: ArrowProps) => (
  <Text
    as={"p"}
    variant="caption.quicksand"
    sx={{ width: '300px' ,textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}
  >
    {children}
  </Text>
);

const Body = ({ children, hideArrow, onClick }: BodyProps) => (
  <Box
    sx={{
      position: "relative",
      width: "90%",
    }}
  >
    {hideArrow && (
      <Box
        onClick={onClick}
        className="arrowUp"
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          width: "25px",
          height: "30px",
          marginTop: 0,
        }}
      ></Box>
    )}
    <Text as={"p"} variant="caption.quicksand">
      {children}
    </Text>
  </Box>
);

const Footer = ({ children }: FooterProps) => (
  <Box
    sx={{
      width: "300px",
      display: "grid",
      gridTemplateColumns: "0.01fr 1fr",
      gridTemplateRows: "1fr 1fr",
      alignItems: "center",

      margin: 8,
      "p:nth-of-type(1)": {
        gridRow: 1,
      },
      "p:nth-of-type(2)": {
        gridRow: 2,
      },
      "svg:nth-of-type(1)": {
        gridRow: 1,
      },
      "svg:nth-of-type(2)": {
        gridRow: 2,
        marginTop: 3,
        marginLeft: 1,
      },
      "svg > path": {
        fill: "card.icon",
      },
    }}
  >
    {children}
  </Box>
);
const CardExpSet = { Img, Header, Body, Overline, Heading, TextDots, Footer };

export default CardExpSet;
