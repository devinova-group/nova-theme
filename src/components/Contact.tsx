import React from "react";
import { Flex, Grid, Image, Link, Text } from "theme-ui";
import maps from "../images/maps.png";

function Contact() {
  return (
    <Grid variant="two">
      <Flex variant="flex.default">
        <Text variant="h4.quicksand">Göteborg</Text>
        <Text variant="body1.quicksand">
          Fabriksgatan 7 <br /> 412 50 Göteborg
        </Text>
        <Link href="https://maps.google.com/?daddr=57.70599720000001,11.9915133">
          Directions
        </Link>
        <Link href="mailto:info@devinova.se">
          info@devinova.se
        </Link>
        <Link href="tel:0732500582">0732500582</Link>
      </Flex>
      <Image src={maps} />
    </Grid>
  );
}

export default Contact;
