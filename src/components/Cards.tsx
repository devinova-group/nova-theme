import React from "react";
import { Card, Grid, Heading, Image, Text } from "theme-ui";
import funFirst from "../static/images/funFirst.jpg";
import learningAndGrowth from "../static/images/learningAndGrowth.png";
import cultureOfInvolment from "../static/images/cultureOfInvolment.jpg";
import roomForLife from "../static/images/roomForLife.jpg";

function Cards() {
  return (
    <Grid variant="cards">
      <Card variant="primary">
        <Image src={funFirst} />
        <Text className="overline" variant="overline.quicksand">
          Lorem lorem
        </Text>
        <Heading variant="heading.h6.quicksand">Fun First</Heading>
        <Text variant="body2.notoSans">
          Enjoy what you do. Life is too short to be stuck at a boring job.
        </Text>
      </Card>
      <Card variant="primary">
        <Image src={learningAndGrowth} />
        <Text className="overline" variant="overline.quicksand">
          Lorem lorem
        </Text>
        <Heading variant="heading.h6.quicksand">Learning and growth</Heading>
        <Text variant="body2.notoSans">
          As lifelong mentors and mentees, we take every chance to stretch
          ourselves and each other. However you see your career shaping, we're
          here to help you make it happen.
        </Text>
      </Card>
      <Card variant="primary">
        <Image src={cultureOfInvolment} />
        <Text className="overline" variant="overline.quicksand">
          Lorem lorem
        </Text>
        <Heading variant="heading.h6.quicksand">Culture of involment</Heading>
        <Text variant="body2.notoSans">
          We're not defined by our job titles but by the impact we make.
          Everyone is encouraged and expected to step up, speak up, and
          contribute in ways that make the whole company, our clients, and our
          communities better.
        </Text>
      </Card>
      <Card variant="primary">
        <Image src={roomForLife} />
        <Text className="overline" variant="overline.quicksand">
          Lorem lorem
        </Text>
        <Heading variant="heading.h6.quicksand">Room for life</Heading>
        <Text variant="body2.notoSans">
          We all do better when we all do better. On and off the clock, quality
          of life is something we never take lightly. Our benefits and perks
          allow for flexibility and healthy wellbeing so that you can enjoy your
          best life.
        </Text>
      </Card>
    </Grid>
  );
}

export default Cards;
