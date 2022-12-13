import React from "react"

import {
  Card,
  Image,
  Button,
  Box,
  Text,
  Heading,
} from "theme-ui";

function CardPrimary() {
  return (
    <div className="test" style={{
      flexDirection: "column",
    }} >
      <Card variant="cards.primary">
        <Image src="https://i.ibb.co/dBdCVQq/Rectangle-143.jpg" />
        <Text variant="overline.notoSans">Overline</Text>
        <Heading as={'h5'} variant="heading.h5.quicksand">
          Starting?
        </Heading>
        <Text as={'p'} variant="caption.quicksand">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </Text>
        <Button variant="learnMore">Learn More</Button>
      </Card>
      
      
    </div>
  );
}

export default CardPrimary;