import React, { useState } from "react";
import Card from "../library/Card";
import { ReactComponent as Phone } from "../icons/Phone.svg";
import { ReactComponent as Email } from "../icons/Email.svg";
import Button from "../library/Button";
import Image from "../library/Image";
import Text from "../library/Text";
import Heading from "../library/Heading";

function Cards() {
  const [click, setClick] = useState(true);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <Card.Dialog variant="primary">
          <Card.Header>
            <Image src="https://i.ibb.co/dBdCVQq/Rectangle-143.jpg" />
            <Text variant="notoSans" size="overline" color="#a8a1b8">
              Overline
            </Text>
            <Heading variant="quicksand" size="h5" color="default.primary">
              Starting?
            </Heading>
          </Card.Header>
          <Card.Body>
            <Card.BodyText>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Card.BodyText>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" size="medium">
              Learn More
            </Button>
          </Card.Footer>
        </Card.Dialog>
      </div>
      <div>
        <Card.Dialog variant="expandable">
          <Card.Header>
            <Image src="https://i.ibb.co/dBdCVQq/Rectangle-143.jpg" />
            <Text variant="notoSans" size="overline" color="#a8a1b8">
              Overline
            </Text>
            <Heading variant="quicksand" size="h5" color="default.primary">
              Starting?
            </Heading>
          </Card.Header>
          <Card.Body>
            <Card.BodyText toggle={click}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              illo ut, est repellendus facere suscipit quas eum totam ea
              mollitia voluptates. Aspernatur tenetur mollitia fugit
              consequatur, dicta praesentium impedit repellat?
            </Card.BodyText>
            <Card.Toggle
              toggle={click}
              onClick={() => setClick(!click)}
            ></Card.Toggle>
          </Card.Body>
          <Card.Footer toggle={click}>
            <Email />
            <Card.FooterText>figma@devinova.se</Card.FooterText>
            <Phone />
            <Card.FooterText>+46 77 123 45 67</Card.FooterText>
          </Card.Footer>
        </Card.Dialog>
      </div>
      <div>
        <Card.Dialog variant="onlyText">
          <Card.Header>
            <Image src="https://i.ibb.co/dBdCVQq/Rectangle-143.jpg" />
            <Text variant="notoSans" size="overline" color="#a8a1b8">
              Overline
            </Text>
            <Heading variant="quicksand" size="h5" color="default.primary">
              Starting?
            </Heading>
          </Card.Header>
          <Card.Body>
            <Card.BodyText>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Card.BodyText>
          </Card.Body>
        </Card.Dialog>
      </div>
      <div>
        <Card.Dialog variant="noImg">
          <Card.Header>
            <Image src="https://i.ibb.co/dBdCVQq/Rectangle-143.jpg" />
            <Text variant="notoSans" size="overline" color="#a8a1b8">
              Overline
            </Text>
            <Heading variant="quicksand" size="h5" color="default.primary">
              Starting?
            </Heading>
          </Card.Header>
          <Card.Body>
            <Card.BodyText>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Card.BodyText>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" size="medium">
              Learn More
            </Button>
          </Card.Footer>
        </Card.Dialog>
      </div>
    </div>
  );
}

export default Cards;
