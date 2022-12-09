import React from 'react'
import { Box, Button, Heading } from 'theme-ui'
import Navbar from './Navbar'

function HeaderMainPage() {
  return (
    <header className="bg-cover">
        <Navbar />
        <Box className="overlay" sx={{ backgroundColor: "default.overlay" }}>
          <Heading
            variant="heading.h2.quicksand"
            sx={{
              color: "default.textColor",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Great software is built with <br /> amazing developers
          </Heading>
          <Button variant="activeMedium">Connect</Button>
        </Box>
      </header>
  )
}

export default HeaderMainPage