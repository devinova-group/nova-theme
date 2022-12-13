import React, { useState } from "react";
import { Card, Text } from "theme-ui";
import Cards from "./CardExpSet";
import { ReactComponent as Phone } from "../../icons/Phone.svg";
import { ReactComponent as Email } from "../../icons/Email.svg";

function CardExp() {
  const [clicked, setClick] = useState(true);

  return (
    <Card variant="expandable">
      <Cards.Img src="https://i.ibb.co/dBdCVQq/Rectangle-143.jpg" />
      <Cards.Header>
        <Cards.Overline>Overline</Cards.Overline>
        <Cards.Heading onClick={() => setClick(false)} hideArrow={clicked}>
          Starting?
        </Cards.Heading>
        {clicked && <Cards.TextDots> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            illo ut, est repellendus facere suscipit quas eum totam ea mollitia
            voluptates. Aspernatur tenetur mollitia fugit consequatur, dicta
            praesentium impedit repellat?</Cards.TextDots>}
      </Cards.Header>
      {!clicked && (
        <Card variant="noImgnoBtn">
          <Cards.Body onClick={() => setClick(true)} hideArrow={!clicked}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            illo ut, est repellendus facere suscipit quas eum totam ea mollitia
            voluptates. Aspernatur tenetur mollitia fugit consequatur, dicta
            praesentium impedit repellat?
          </Cards.Body>
          <Cards.Footer>
            <Email />
            <Text as={'p'} variant="caption.quicksand">
              figma@devinova.se
            </Text>
            <Phone />
            <Text as={'p'} variant="caption.quicksand">
              +46 77 123 45 67
            </Text>
        </Cards.Footer>
        </Card>
      )}
    </Card>
  );
}

export default CardExp;