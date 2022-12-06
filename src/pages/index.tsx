import * as React from "react";
import { Link } from "gatsby";
import { Text, Image, Button, Box, Card, Grid, Flex } from "theme-ui";
import Navbar from "../components/Navbar";
import maps from "../images/maps.png";

export default function Home() {
  return (
    <>
      <header className="bg-cover">
        <Navbar />
        <Box className="overlay" sx={{ backgroundColor: "default.overlay" }}>
          <Text variant="h2.quicksand" sx={{ color: "default.textColor" }}>
            Great software is built with <br /> amazing developers
          </Text>
          <Button variant="activeMedium">Connect</Button>
        </Box>
      </header>
      <Flex
        variant="flex.default"
        sx={{ width: "100%", height: "60vh", color: "default.black" }}
      >
        <Text variant="h4.quicksand">Spark your potential</Text>
        <Text
          sx={{ width: "630px", alignSelf: "center", margin: "30px" }}
          variant="h6.quicksand"
        >
          At Devinova we are just in the beginning of our journey and are
          looking for team members to start this adventure. You will be the
          first and most important members to get this off the ground. We are
          looking for you who finds it exciting to be part of something new
          without any corporate hierarchies, just us, where what you bring into
          the company and team will be setting the shared culture and values of
          our company for the future.
          <br />
          Spark your potential and join a team where we together will help each
          other develop and grow in our craftsmanships and have a bunch of fun
          along the way.
        </Text>
      </Flex>
      <Flex
        variant="flex.default"
        sx={{ width: "100%", backgroundColor: "white" }}
      >
        <Text variant="h4.quicksand" sx={{ margin: "60px 0px" }}>
          Life at Devinova
        </Text>
        <Grid variant='cards'>
          <Card variant="primary">
            <Image src="https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?cs=srgb&dl=pexels-jill-wellington-40815.jpg&fm=jpg" />
            <Text variant="overline.quicksand" sx={{ color: "text.overline" }}>
              Lorem lorem
            </Text>
            <Text variant="h5.quicksand" sx={{ color: "text.titleCard" }}>
              Fun First
            </Text>
            <Text
              variant="body2.notoSans"
              sx={{ color: "default.black", marginBottom: "20px" }}
            >
              Enjoy what you do. Life is too short to be stuck at a boring job.
            </Text>
          </Card>
          <Card variant="primary">
            <Image src="https://images.squarespace-cdn.com/content/v1/578a53c39f745617d626a2c4/1481055835843-AVFSDQ65LHT5I9Y3QPOC/image-asset.png" />
            <Text variant="overline.quicksand" sx={{ color: "text.overline" }}>
              Lorem lorem
            </Text>
            <Text variant="h5.quicksand" sx={{ color: "text.titleCard" }}>
              Learning and growth
            </Text>
            <Text
              variant="body2.notoSans"
              sx={{ color: "default.black", marginBottom: "20px" }}
            >
              As lifelong mentors and mentees, we take every chance to stretch
              ourselves and each other. However you see your career shaping,
              we’re here to help you make it happen.
            </Text>
          </Card>
          <Card variant="primary">
            <Image src="https://miro.medium.com/max/444/1*_3HSn_EqxIcNvb-SgfjFCg.jpeg" />
            <Text variant="overline.quicksand" sx={{ color: "text.overline" }}>
              Lorem lorem
            </Text>
            <Text variant="h5.quicksand" sx={{ color: "text.titleCard" }}>
              Culture of involment
            </Text>
            <Text
              variant="body2.notoSans"
              sx={{ color: "default.black", marginBottom: "20px" }}
            >
              We’re not defined by our job titles but by the impact we make.
              Everyone is encouraged and expected to step up, speak up, and
              contribute in ways that make the whole company, our clients, and
              our communities better.
            </Text>
          </Card>
          <Card variant="primary">
            <Image src="https://gorgeousgael.files.wordpress.com/2015/01/stand1.jpg" />
            <Text variant="overline.quicksand" sx={{ color: "text.overline" }}>
              Lorem lorem
            </Text>
            <Text variant="h5.quicksand" sx={{ color: "text.titleCard" }}>
              Room for life
            </Text>
            <Text
              variant="body2.notoSans"
              sx={{ color: "default.black", marginBottom: "20px" }}
            >
              We all do better when we all do better. On and off the clock,
              quality of life is something we never take lightly. Our benefits
              and perks allow for flexibility and healthy wellbeing so that you
              can enjoy your best life.
            </Text>
          </Card>
        </Grid>
        <Text variant="h5.neucha" sx={{ marginTop: "200px" }}>
          Join the world’s best developers and designers around!
        </Text>
        <Text
          variant="h6.quicksand"
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

      <Grid variant="gallery">
        <Image src="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/gallery_picture-v6/image_uploads/356e5503-89e3-41bf-90de-7d1dae80b03e/original.jpg"></Image>
        <Image src="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/gallery_picture-v6/image_uploads/84c7ecca-c672-42c3-bd08-278be6133418/original.jpg"></Image>
        <Image src="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/gallery_picture-v6/image_uploads/8d41e9af-6a9c-43d2-a4ec-e33b9bc5b223/original.jpg"></Image>
        <Image src="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/gallery_picture-v6/image_uploads/a790a144-810c-428c-b94f-f3a8f1aa435c/original.jpg"></Image>
        <Image src="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/gallery_picture-v6/image_uploads/7164b7f1-06b9-45eb-baac-1a78ed2f7f88/original.jpg"></Image>
      </Grid>

      <Grid variant="two" sx={{ width: "100%", height: "50%" }}>
        <Flex
          variant="flex.default"
          sx={{ background: "#8d448b", color: "white", gridColumn: "1/2" }}
        >
          <Text variant="h4.quicksand">Göteborg</Text>
          <Text variant="body1.quicksand" sx={{ margin: "10px" }}>
            Fabriksgatan 7 <br /> 412 50 Göteborg
          </Text>
          <Link
            style={{ color: "white", margin: "10px" }}
            to="https://maps.google.com/?daddr=57.70599720000001,11.9915133"
          >
            Directions
          </Link>
          <Link style={{ color: "white" }} to="mailto:info@devinova.se">
            info@devinova.se
          </Link>
          <Link style={{ color: "white", margin: "10px" }} to="tel:0732500582">
            0732500582
          </Link>
        </Flex>
        <Image src={maps} sx={{width: '100%', height: "100%"}} />
      </Grid>
      <Flex
        variant="flex.default"
        sx={{
          width: "100%",
           height: '30vh',
          /* marginTop: "35%",  */
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
          height: '100%',
        }}
      >
        <Text variant="h4.quicksand" sx={{ color: "default.black" }}>
          About Devinova
        </Text>
        <Text
          variant="body2.notoSans"
          sx={{ width: "600px", color: "default.black", margin: "100px auto"}}
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
          an inspiration for other companies to follow.{" "}
        </Text>
      </Flex>
    </>
  );
}
