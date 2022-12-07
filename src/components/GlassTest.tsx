import React from 'react'
import { Card, Grid, Image, Text, Box, Flex } from 'theme-ui'

function GlassTest() {
  return (
    <Card>
    <Image sx={{position: 'absolute', zIndex: 0, objectOpasity: '100%', fillOpacity: '0%',}} src="https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?cs=srgb&dl=pexels-jill-wellington-40815.jpg&fm=jpg" />
    <Box sx={{position: 'relative', top: 170,  width: '300px',
       height: '300px', textAlign: 'center' }}>
     <Box 
     sx={{
       position: "absolute",
       top: 10,
       left: 10,
       width: '300px',
       height: '300px',
       background: 'rgba(255, 255, 255, 0.2)',
       /* background: 'rgba(255, 255, 255, 0)', */
       backdropFilter: 'blur(5px)', 
       objectOpasity: '100%',
       boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
       zIndex: 1,
       borderRadius: '16px',
     }}
     >
       <Flex variant='flex.alignCentar'>
          <Text variant="body1.quicksand">
       Join the world’s best developers and designers around!
     </Text>
       </Flex>
     </Box>
    </Box>
    </Card>
  )
}

export default GlassTest
