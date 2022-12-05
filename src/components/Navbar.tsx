import React from "react"
import { useState } from "react"
import { useColorMode,  Flex, Text, Link, Box, Button, Switch, Image } from 'theme-ui'
import Menu from "./Menu"

export default function Navbar() {
  const [colorMode, setColorMode] = useColorMode()
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick((current) => !current)
  }
  return (
  <>
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
    {!click && <>
    <Link variant="links.nav" sx={{ cursor: 'pointer' }} onClick={() => handleClick()}>||| CARRER MENU</Link>
    <Box sx={{
        width: '300px',
        height: '50px',
        background: 'default.headerImg',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '200px'    
    }}/>
    <Link variant="links.nav" href="/about">GRID TEST</Link>
    </>}
    {click && <>
    <Menu/>
    <Link variant="links.nav" sx={{cursor: 'pointer', color: 'white', marginTop: 0, zIndex: 1, position: 'absolute'}} onClick={() => handleClick()}>X CARRER MENU</Link>
    </> }
        
    </nav>
    <Switch variant="switchs.toggleV2Small" onClick={() => {
  setColorMode(colorMode === 'default' ? 'dark' : 'default')
}} ></Switch> 
          </>
  )
}
/* onClick={(e) => {
  setColorMode(colorMode === 'default' ? 'dark' : 'default')
}}  */