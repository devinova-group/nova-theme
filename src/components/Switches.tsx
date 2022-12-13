import React from 'react'
import { Box, Switch } from 'theme-ui'

function Switches() {
  return (
    <div className='test'>
        <Box>
          <Switch variant='switchs.toggleBig'></Switch>
          <Switch variant='switchs.toggleSmall' sx={{ margin: '30px' }}></Switch>
          <Switch variant='switchs.toggleBigDayNight' sx={{ margin: '30px' }}></Switch>
          <Switch variant='switchs.toggleSmallDayNight' sx={{ margin: '30px' }}></Switch>
        </Box>
      </div>
  )
}

export default Switches