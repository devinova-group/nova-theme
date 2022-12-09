import React, { useState } from "react";
import { Card, Image, Button, Box, Text } from "theme-ui";


export default function CardEx() {
  const [clicked, setClick] = useState(true);

  return (
    <>
      <Card variant="expandable">
        <Image src="https://i.ibb.co/dBdCVQq/Rectangle-143.jpg" />
        <Text variant="overline.notoSans" sx={{ marginLeft: 8 }}>
          Overline
        </Text>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: 5,
          }}
        >
          <Text variant="h5.quicksand" sx={{ fontWeight: 700 }}>
            Starting?
          </Text>
          {clicked && (
          <Box className="arrowDown"
              onClick={() => setClick((click) => !click)}
              />
          )}
        </Box>
        {clicked && (
          <Text
            variant="caption.quicksand"
            sx={{ lineHeight: "26.4px", marginLeft: 8 }}
          >
            Lorem Ipsum has bee...
          </Text>
        )}
        {!clicked && (
          <Card variant="noImgnoBtn">
            <Text variant="caption.quicksand" sx={{ lineHeight: "26.4px" }}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Text>
            {!clicked && (
              <Box className="arrowUp" onClick={() => setClick((click) => !click)}
                style={{ position: "absolute", right: 0, top: "50%" }}
                />
            )}
            <Box>
              <Box className="email"/>
              <Text variant="caption.quicksand">figma@devinova.se</Text>
              <Box className="phone"/>
              <Text variant="caption.quicksand">+46 77 123 45 67</Text>
            </Box>
          </Card>
        )}
      </Card>
    </>
  );
}
