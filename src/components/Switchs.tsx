import React from "react"

import { Switch} from 'theme-ui'

function Switchs() {
  return (
<div className='test' style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
          <Switch variant='switchs.toggleBig'  ></Switch>
          <Switch variant='switchs.toggleSmall'></Switch>
          <Switch variant='switchs.toggleV1Big'></Switch>
          <Switch variant='switchs.toggleV1Small'></Switch>
          <Switch variant='switchs.toggleV2Big'></Switch>
          <Switch variant='switchs.toggleV2Small'></Switch>
      </div>
  )
}

export default Switchs
