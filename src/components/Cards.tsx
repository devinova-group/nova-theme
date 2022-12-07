import React from 'react'
import { Card, Grid, Image, Text } from 'theme-ui'

function Cards() {
  return (
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
        ourselves and each other. However you see your career shaping,
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
  )
}

export default Cards
