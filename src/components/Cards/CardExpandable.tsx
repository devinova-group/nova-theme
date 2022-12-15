import React, { useState } from "react";
import { Box, Card, Flex, Heading, Image, Text } from "theme-ui";
import Cards from "./CardExpSet";
import { ReactComponent as Phone } from "../../icons/Phone.svg";
import { ReactComponent as Email } from "../../icons/Email.svg";

function CardExp() {
  const [clicked, setClick] = useState(true);

  return (
    <Card variant="expandable">
      <Cards.Header>
        <Image src="https://i.ibb.co/dBdCVQq/Rectangle-143.jpg" />
        <Text variant="overline.notoSans">Overline</Text>
        <Flex variant="flex.spaceBetween">
        <Heading
          as={"h5"}
          variant="heading.h5.quicksand"
          onClick={() => setClick(false)}
        >
          Starting?
        </Heading>
        {clicked && <Box className="arrowDown" onClick={() => setClick(false)} />}
        </Flex>
      </Cards.Header>
          <Cards.Body >
            <Text as={"p"} variant="caption.quicksand" className={clicked ? "hide" : "show"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            illo ut, est repellendus facere suscipit quas eum totam ea mollitia
            voluptates. Aspernatur tenetur mollitia fugit consequatur, dicta
            praesentium impedit repellat?
            </Text>
            {!clicked && <Box className="arrowUp" onClick={() => setClick(true)} />}
          </Cards.Body>
          {!clicked &&  <Cards.Footer>
            <Email />
            <Text as={"p"} variant="caption.quicksand">
              figma@devinova.se
            </Text>
            <Phone />
            <Text as={"p"} variant="caption.quicksand">
              +46 77 123 45 67
            </Text>
          </Cards.Footer>}
    </Card>
  );
}

export default CardExp;
