import React from 'react'
import { Box, Spinner } from 'theme-ui'
/* import { ReactComponent as Spin }  from '../icons/loader.svg' */


function Loading() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '30px'
    }}>
      <Spinner variant='spinner.default' />
    </Box>
  )
}

export default Loading
