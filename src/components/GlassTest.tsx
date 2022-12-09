import React from 'react'
import { Card, Grid, Image, Text, Box, Flex, Heading } from 'theme-ui'
import fun from '../static/images/fun.png'
function GlassTest() {
  return (
    <Card variant='default'>
    <Box sx={{
      position: "absolute",
      top: 5,
      width: '100%',
      height: '40%',
      backgroundImage: `url(${fun})`,
      backgroundSize: '450px 280px',
      backgroundPosition: '70% 10%',
      backgroundRepeat: 'no-repeat',
      borderRadius: '16px 16px 0px 0px',
      zIndex: 2,

    }}>
    </Box> 
    <Box sx={{
      position: "absolute",
      top: 0,
      width: '100%',
      height: '30%',
      backgroundColor: '#262456',
      borderRadius: '16px 16px 0px 0px',
      zIndex: 0,

    }} />
    <Box sx={{
      position: "absolute",
      bottom: 10,
      left: 3,
      width: '95%',
      height: '80%',
      backgroundColor: 'white',
      borderRadius: '16px',
      zIndex: 1,
    }} />
    {/* <Box sx={{
      position: "absolute",
      bottom: 0,
      width: '100%',
      height: '70%',
      backgroundColor: '#45239c',
      borderRadius: ' 0px 0px 16px 16px',
      zIndex: 0,
    }} /> */}
     <Box 
     sx={{
       position: "absolute",
       top: 151,
       left: 11,
       width: '80%',
       height: '300px',
        /* background: 'default.white',  */
       /*  background: 'rgba(255, 255, 255, 0)',   */
       background: 'rgba(255, 255, 255, 0.60)',
        backdropFilter: 'blur(3.4px)', 
   /*    boxShadow: '0px -10px 1px rgba(0, 0, 0, 0.1)',  */
       zIndex: 2,
       borderRadius: '16px',
       /* opacity: 0.7,  */
       textAlign: 'left',
     }}
     >
       <Flex  sx={{
        flexDirection: 'column',
        /* marginTop: '62px' */
       }}>
          <Text /* variant="overline.quicksand" */ sx={{ fontSize: '10px', fontWeight: '600', color: 'text.overline', margin: '40px 20px 10px' }}>
            TEST YOUR SKILLS
          </Text>
          <Heading variant="heading.h5.quicksand" sx={{fontWeight: '900', color: 'text.titleCard', margin: '10px 10px', letterSpacing: '0px', }}>
       Gain <br /> certificates <br /> and progress
     </Heading>
     <Text variant='body1.quicksand' sx={{margin: '10px 10px', fontSize: '13px'}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum perspiciatis provident libero incidunt ratione, a repudiandae quibusdam.</Text>
       </Flex>
    </Box>
    </Card>
  )
}

export default GlassTest
