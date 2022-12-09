import * as React from "react";
import { Text, Button, Box, Flex, Heading } from "theme-ui";
import Cards from "../components/Cards";
import GlassTest from "../components/GlassTest";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import HeaderMainPage from "../components/HeaderMainPage";

export default function Home() {
  return (
    <>
      <HeaderMainPage />
      <Flex as='section'
        variant="flex.default"
        sx={{ width: "100%", height: "60vh", color: "default.black" }}
      >
        <Heading as='h2' variant="heading.h2.neucha">Spark your potential</Heading>
        <Heading as='h6' variant="heading.h6.quicksand"
          sx={{ width: "650px", alignSelf: "center", margin: "30px" }}
        >
          At Devinova we are just in the beginning of our journey and are
          looking for team members to start this adventure. You will be the
          first and most important members to get this off the ground. We are
          looking for you who finds it exciting to be part of something new
          without any corporate hierarchies, just us, where what you bring into
          the company and team will be setting the shared culture and values of
          our company for the future. <br /> Spark your potential and join a
          team where we together will help each other develop and grow in our
          craftsmanships and have a bunch of fun along the way.
        </Heading>
      </Flex>
      <Flex
        variant="flex.default"
        sx={{ width: "100%", backgroundColor: "white" }}
      >
        <Heading variant="heading.h4.neucha" sx={{ margin: "60px 0px" }}>
          Life at Devinova
        </Heading>
        <Cards />
        <GlassTest />
        <Flex variant="flex.alignCentar">
          <Heading variant="heading.h5.quicksand">
            Join the world's best developers and designers around!
          </Heading>
        </Flex>
        <Text
          variant="body1.quicksand"
          sx={{
            width: "600px",
            textAlign: "center",
            margin: "40px 0px 200px 0px",
          }}
        >
          We aim to become a premier digital business consultancy and design
          studio. A true partner to prepare our clients for the opportunities in
          front of them, as well as in the future. Always learning new skills
          and technologies to be able to take on a multitude of different
          challenges to both startups and enterprise corporations. We will do it
          with quality craftsmanship and meaningful collaboration in our pursuit
          to bring benefit to all involved.
          <br />
          If this sounds exciting to you, Devinova is your home, a place where
          you will be an integral part of the team.
        </Text>
      </Flex>

      <Gallery />
      <Contact />

      <Flex
        variant="flex.default"
        sx={{
          width: "100%",
          height: "30vh",
        }}
      >
        <Box>
          <Button>Don't forget to connect 👍</Button>
        </Box>
      </Flex>
      <Flex
        variant="flex.default"
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Heading variant="heading.h4.quicksand" sx={{ color: "default.black" }}>
          About Devinova
        </Heading>
        <Text
          variant="body2.notoSans"
          sx={{ width: "600px", color: "default.black", margin: "100px auto" }}
        >
          At Devinova we believe in thinking differently and challenging the
          status quo. We offer a welcoming environment where relationships,
          empowerment and mutual beneficial outcomes for all are our main focus.
          We work with real transparency and open books, where you set your own
          salary and define how you want to develop yourself and we are here to
          support your vision.
          <br />
          The important thing for us is to create a belonging and long-term
          connection to help guide the development of your craft and passion
          that mutually makes for beneficial outcomes for everyone, regardless
          of how long your time at Devinova is. When you are ready to move on,
          we are happy to see you fly. This we believe is the sustainable way to
          work together in the future and we would love to set an example and be
          an inspiration for other companies to follow.
        </Text>
      </Flex>
    </>
  );
}
