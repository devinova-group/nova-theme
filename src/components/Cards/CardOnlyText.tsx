import React from "react";
import { Card, Heading, Text } from "theme-ui";

function CardOnlyText() {
  return (
    <Card variant="onlyText">
      <Text as={"span"} variant="overline.notoSans">
        Overline
      </Text>
      <Heading as={"h5"} variant="heading.h5.quicksand">
        Starting?
      </Heading>
      <Text as={"p"} variant="caption.quicksand">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </Text>
    </Card>
  );
}

export default CardOnlyText;
