import React, { Component } from 'react';

import { useState } from "react";
import { Card, Box, Text } from "theme-ui";
import Cards from "./ExpandCard";
import Phone  from "../icons/Phone.svg";
import Email  from "../icons/Email.svg";

function CardTest() {
  const [clicked, setClick] = useState(true);
  const toggleBoolean = () => {
    setClick((current) => !current);
  };

  return (
    <Card variant="expandable">
      <Cards.Img src="https://i.ibb.co/dBdCVQq/Rectangle-143.jpg" />
      <Cards.Header>
        <Cards.Overline>Overline</Cards.Overline>
        <Cards.Heading>Starting?</Cards.Heading>
      </Cards.Header>
      <Cards.Body onClick={() => toggleBoolean()} hideArrow={clicked}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illo
        ut, est repellendus facere suscipit quas eum totam ea mollitia
        voluptates. Aspernatur tenetur mollitia fugit consequatur, dicta
        praesentium impedit repellat?
      </Cards.Body>
      {!clicked && (
        <Cards.Footer>
          <Box>
            <Email />
            <Text sx={{ marginLeft: 8 }} variant="caption.quicksand">
              figma@devinova.se
            </Text>
          </Box>
          <Box
            sx={{
              marginTop: 8,
            }}
          >
            <Phone />
            <Text sx={{ marginLeft: 8 }} variant="caption.quicksand">
              +46 77 123 45 67
            </Text>
          </Box>
        </Cards.Footer>
      )}
    </Card>
  );
}

export default CardTest;
