import React from 'react'
import { Box, Flex } from 'theme-ui'
import ReactDOM from 'react-dom';

const Header = ({children} :any) => (
        <header>
        <Flex>
       {children}
       </Flex>
      </header>
)
const Body = ({children} :any) => (
    <main>
        {children}
    </main>
)
const Footer = ({children} :any) => (
    <footer>
    <Flex variant="flex.spaceBetween" >
  {children}
  </Flex>
  </footer>
)

const Dialog = ({children} :any) => {
return ReactDOM.createPortal(
    <Box variant="modal.default">
        {children}
    </Box>,
    document.getElementById('portal')!
    )
}


const Modals = { Dialog, Header, Body, Footer };

export default Modals;

