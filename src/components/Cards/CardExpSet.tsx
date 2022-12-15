import React from "react";
import { Text, Card , Box } from "theme-ui";
import {
  HeaderProps,
  HeadingProps,
  ArrowProps,
  BodyProps,
  FooterProps,
} from "../../interfaces/model";

const Header = ({ children }: HeaderProps) => 
<>
{children}
</>

const Body = ({ children }: any) => (
  <Box
    sx={{
      position: "relative",
      width: "90%",
    }}
  >
      {children}
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
const CardExpSet = { Header, Body, Footer };

export default CardExpSet;


/* const Heading = ({ children, onClick, hideArrow }: HeadingProps) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
     
    }}
  >
      {children}
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
); */

/* const TextDots = ({ children }: ArrowProps) => (
  <Text
    as={"p"}
    variant="caption.quicksand"
    sx={{ width: '300px' ,textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}
  >
    {children}
  </Text>
); */