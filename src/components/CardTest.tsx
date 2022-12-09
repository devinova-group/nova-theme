import React, { useState } from "react";
import { Card, Image, Box, Text } from "theme-ui";
import Cards from "./Cards";

function CardTest() {
  const [clicked, setClick] = useState(true);

  return (
    <Card variant="expandable">
      <Cards.Img src="https://i.ibb.co/dBdCVQq/Rectangle-143.jpg" />
      <Cards.Header>
        <Cards.Overline>Overline</Cards.Overline>
        <Cards.Heading onClick={() => setClick(false)} hideArrow={clicked}>
          Starting?
        </Cards.Heading>
        {clicked && <Cards.TextDots>Lorem Ipsum has bee...</Cards.TextDots>}
      </Cards.Header>
      {!clicked && (
        <Card variant="noImgnoBtn">
          <Cards.Body onClick={() => setClick(true)} hideArrow={!clicked}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            illo ut, est repellendus facere suscipit quas eum totam ea mollitia
            voluptates. Aspernatur tenetur mollitia fugit consequatur, dicta
            praesentium impedit repellat?
          </Cards.Body>
          <Cards.Footer/>
        </Card>
      )}
    </Card>
  );
}

export default CardTest;
{
  /* <Card variant="expandable"  sx={{
  position: 'relative'
}}>
  <Image src="https://i.ibb.co/dBdCVQq/Rectangle-143.jpg" />
  <Text variant="overline.notoSans" sx={{ marginLeft: 8 }}>
    Overline
  </Text>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      marginRight: 5,
      width: "80%",
      marginLeft: 8,
      marginTop: 2,
    }}
  >
    <Text variant="h5.quicksand" sx={{ fontWeight: 700 }}>
      Starting?
    </Text>
    {clicked && (
      <Box
        sx={{
          background: "card.arrowDown",
          width: "25px",
          height: "20px",
          marginTop: 0,
        }}
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
    <Box
      sx={{
        width: '80%',
        height: "none",
        padding: 0,
        marginLeft: 8,
      }}
    >
      <Text variant="caption.quicksand" sx={{ lineHeight: "26.4px" }}>
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Text>
      {!clicked && (
        <Box onClick={() => setClick((click) => !click)}
        sx={{
          position: "absolute",
          right: '5%',
          bottom: '23%',
            width: "25px",
            height: "30px",
            background: "card.arrowUp",
            marginTop: 0,
          }}   />
       
      )}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
          gridGap: 4,
          alignItems: "center",
          marginTop: 8,
          paddingBottom: 10,
        }}
      >
        <Box
          sx={{
            width: "25px",
            height: "30px",
            background: "card.phone",
            marginTop: 2,
          }}
        />
        <Text variant="caption.quicksand">figma@devinova.se</Text>
        <Box
          sx={{
            width: "25px",
            height: "20px",
            background: "card.email",
            marginTop: 2,
          }}
        />
        <Text variant="caption.quicksand">+46 77 123 45 67</Text>
      </Box>
    </Box>
  )}
</Card> */
}
