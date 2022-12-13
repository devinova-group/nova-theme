import React from 'react'
import { Avatar, Box, Heading, Image } from 'theme-ui'

import cat from '../images/cat.jpg'

function Avatars() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }} >
    <div style={{
      display: 'flex',
    }}>
      <Box variant='avatars.error'>
      <Image src={cat} />

       <Box />
      </Box> 
      <Box variant='avatars.notAvailable'>
      <Image src={cat} />

       <Box />
      </Box> 
      <Box variant='avatars.away'>
      <Image src={cat} />

       <Box />
      </Box> 
      <Box variant='avatars.busy'>
      <Image src={cat} />

       <Box />
      </Box> 
      <Box variant='avatars.notdisturb'>
      <Image src={cat} />

       <Box />
      </Box> 
      <Box variant='avatars.edit'>
      <Image src={cat} />

       <Box />
      </Box> 
      <Box variant='avatars.active' >
      <Image src={cat} />

       <Box />
      </Box>
      <Box variant='avatars.default'>
      <Image src={cat} />

      </Box> 
    </div>
     <div style={{
      display: 'flex',
    }}>
      <Box variant='avatars.error'>
      <Heading as={'h6'} variant='heading.h6.quicksand'>
        JD
       </Heading>
       <Box />
      </Box> 
      <Box variant='avatars.notAvailable'>
      <Heading as={'h6'} variant='heading.h6.quicksand'>
        JD
       </Heading>
       <Box />
      </Box> 
      <Box variant='avatars.away'>
      <Heading as={'h6'} variant='heading.h6.quicksand'>
        JD
       </Heading>
       <Box />
      </Box> 
      <Box variant='avatars.busy'>
      <Heading as={'h6'} variant='heading.h6.quicksand'>
        JD
       </Heading>
       <Box />
      </Box> 
      <Box variant='avatars.notdisturb'>
      <Heading as={'h6'} variant='heading.h6.quicksand'>
        JD
       </Heading>
       <Box />
      </Box> 
      <Box variant='avatars.edit'>
      <Heading as={'h6'} variant='heading.h6.quicksand'>
        JD
       </Heading>
       <Box />
      </Box> 
      <Box variant='avatars.active' >
       <Heading as={'h6'} variant='heading.h6.quicksand'>
        JD
       </Heading>
       <Box />
      </Box>
      <Box variant='avatars.default'>
      <Heading as={'h6'} variant='heading.h6.quicksand'>
        JD
       </Heading>
      </Box> 
    </div>
    </div>
  )
}

export default Avatars