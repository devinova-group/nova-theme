import React from "react";
import { Text, Card, Box, Image, Heading, Flex } from "theme-ui";
import {
  HeaderProps,
  BodyProps,
  BodyTextProps,
  ToggleProps,
  FooterProps,
  FooterTextProps,
} from "../../interfaces/cards";

const Expandable = ({ children }: any) => (
  <Card variant="expandable">{children}</Card>
);

const Header = ({ children, imageSrc, heading }: HeaderProps) => {
  return (
    <>
      <Image src={imageSrc} />
      <Text variant="overline.notoSans">{children}</Text>
      <Heading as={"h5"} variant="heading.h5.quicksand">
        {heading}
      </Heading>
    </>
  );
};

const Toggle = ({ toggle, onClick }: ToggleProps) => (
  <Box className="toggle" onClick={onClick}>
    <Box className={toggle ? "arrowDown" : "arrowUp"} />
  </Box>
);
const BodyText = ({ toggle, children }: BodyTextProps) => (
  <Box className="bodyText">
    <Text as={"p"} variant="caption.quicksand" className={toggle ? "hide" : ""}>
      {children}
    </Text>
  </Box>
);
const Body = ({ children }: BodyProps) => <Flex>{children}</Flex>;

const Footer = ({ toggle, children }: FooterProps) => (
  <>{toggle ? null : <Box className="footerCard">{children}</Box>}</>
);

const FooterText = ({ children }: FooterTextProps) => (
  <Text as={"p"} variant="caption.quicksand">
    {children}
  </Text>
);

const CardExpSet = {
  Toggle,
  BodyText,
  Expandable,
  Header,
  Body,
  Footer,
  FooterText,
};

export default CardExpSet;
