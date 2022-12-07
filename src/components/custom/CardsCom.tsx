import React from "react"

import {
  Card,
  Image,
  Button,
  Box,
  Text,
} from "theme-ui";
import CardTest from "./CardTest";

export default function CardsCom() {
  return (
    <div className="test">
      <Card variant="cards.primary">
        <Image src="https://i.ibb.co/dBdCVQq/Rectangle-143.jpg" />
        <Text variant="overline.notoSans">Overline</Text>
        <Text variant="h5.quicksand" sx={{ fontWeight: 700 }}>
          Starting?
        </Text>
        <Text variant="caption.quicksand" sx={{ lineHeight: "26.4px" }}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </Text>
        <Button variant="learnMore">Learn More</Button>
      </Card>
      <CardTest />
      <Card variant="noImgnoBtn">
        <Box>
          <Text variant="overline.notoSans">Overline</Text>
          <Text variant="h5.quicksand" sx={{ fontWeight: 700 }}>
            Starting?
          </Text>
          <Text variant="caption.quicksand" sx={{ lineHeight: "26.4px" }}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Text>
        </Box>
      </Card>
      <Card variant="noImg">
        <Box>
          <Text variant="overline.notoSans">Overline</Text>
          <Text variant="h5.quicksand" sx={{ fontWeight: 700 }}>
            Starting?
          </Text>
          <Text variant="caption.quicksand" sx={{ lineHeight: "26.4px" }}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Text>
          <Button variant="learnMore">Learn More</Button>
        </Box>
      </Card>
    </div>
  );
}
