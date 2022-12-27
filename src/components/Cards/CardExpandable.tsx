import React, { useState } from "react";
import { Box, Card, Flex, Heading, Image, Text } from "theme-ui";
import Cards from "./CardExpSet";
import { ReactComponent as Phone } from "../../icons/Phone.svg";
import { ReactComponent as Email } from "../../icons/Email.svg";

function CardExp() {
  const [clicked, setClick] = useState(true);

  return (
    <Cards.Expandable>
      <Cards.Header
        imageSrc="https://i.ibb.co/dBdCVQq/Rectangle-143.jpg"
        heading="Starting"
      >
        Overline
      </Cards.Header>
      <Cards.Body>
        <Cards.BodyText toggle={clicked}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          illo ut, est repellendus facere suscipit quas eum totam ea mollitia
          voluptates. Aspernatur tenetur mollitia fugit consequatur, dicta
          praesentium impedit repellat?
        </Cards.BodyText>
        <Cards.Toggle
          onClick={() => setClick(!clicked)}
          toggle={clicked}
        ></Cards.Toggle>
      </Cards.Body>
      <Cards.Footer toggle={clicked}>
        <Email />
        <Cards.FooterText>figma@devinova.se</Cards.FooterText>
        <Phone />
        <Cards.FooterText>+46 77 123 45 67</Cards.FooterText>
      </Cards.Footer>
    </Cards.Expandable>
  );
}

export default CardExp;
