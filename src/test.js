/* fontSizes: [12, 14, 16, 21, 24, 32, 48, 64, 96], */
 /*  space: {
    d0: 4,
    d1: 8,
    d2: 12,
    d3: 14,
    d4: 16,
    d5: 18,
    d6: 21,
    d7: 24,
    d8: 28,
    d9: 32,
    d10: 36,
    d11: 40,
    d12: 42,
    d13: 46,
    d14: 48,
    d15: 52,
    d16: 56,
    d17: 60,
    d18: 64,
    d19: 66,
    d20: 72,
    d21: 78,
    d22: 80
  }, */

  colors: {
    transparent: 'transparent',
    daisy: [
      '#ECE8F6',
      '#CFC6E8',
      '#B0A1DA',
      '#917BCC',
      '#785EC0',
      '#6044B5',
      '#573FAF',
      '#4A37A6',
      '#3F319D',
      '#2B268D'
    ],
    oath: [
      '#FFF4FF',
      '#FAF2FF',
      '#F5ECFE',
      '#E9E1FA',
      '#C7BED7',
      '#A8A1B8',
      '#7E778D',
      '#6B6278',
      '#4A4458',
      '#292336'
    ],
    lightMode: {
      primary: '#6044B5',
      second: '#4C3A80',
      secondVariant: '#6E6893',
      background: '#FFFEFB',
      textColor: '#08011C',
      textColorV2: '#585858',
      errors: '#C12945',
      positive1: '#26962B',
      positive2: '#9AE79D',
      black: '#000000',
      white: '#FFFFFF',
      errorInput: '#700519',

    },
    darkModePurple: {
      highLight: '#A689FF',
      purple: '#7B4EFF'
    },
    badgeColorsdarkMode: {
      inActive: '#FF6768',
      active: '#3CC13B',
      error: '#FFC34E',
      disabled: '#C2C9D1',
      primary: '#B2C3FF'
    },
    badgeColorsLightMode: {
      inActive: '#F03738',
      active: '#3CC13B',
      error: '#CC9428',
      disabled: '#B4B4B4',
      primary: '#4B88CF',
    },
/*     
    text: 'black',
    error: '#c12945',
    success: '#26962b',
     */
    radioDisabled: '#B4B4B4',
    primaryDisabled: '#6044B559',
    errorDisabled: '#d48092',
    successDisabled: '#8ac18e',

  },


  transparent: 'transparent',
  daisy: [
    '#ECE8F6',
    '#CFC6E8',
    '#B0A1DA',
    '#917BCC',
    '#785EC0',
    '#6044B5',
    '#573FAF',
    '#4A37A6',
    '#3F319D',
    '#2B268D'
  ],
  oath: [
    '#FFF4FF',
    '#FAF2FF',
    '#F5ECFE',
    '#E9E1FA',
    '#C7BED7',
    '#A8A1B8',
    '#7E778D',
    '#6B6278',
    '#4A4458',
    '#292336'
  ],
  lightMode: {
    primary: '#6044B5',
    second: '#4C3A80',
    secondVariant: '#6E6893',
    background: '#FFFEFB',
    textColor: '#08011C',
    textColorV2: '#585858',
    errors: '#C12945',
    positive1: '#26962B',
    positive2: '#9AE79D',
    black: '#000000',
    white: '#FFFFFF',
    errorInput: '#700519',

  },
  badgeColorsdarkMode: {
    inActive: '#FF6768',
    active: '#3CC13B',
    error: '#FFC34E',
    disabled: '#C2C9D1',
    primary: '#B2C3FF'
  },
  badgeColorsLightMode: {
    inActive: '#F03738',
    active: '#3CC13B',
    error: '#CC9428',
    disabled: '#B4B4B4',
    primary: '#4B88CF',
  },
/*     
  text: 'black',
  error: '#c12945',
  success: '#26962b',
   */
  radioDisabled: '#B4B4B4',
  primaryDisabled: '#6044B559',
  errorDisabled: '#d48092',
  successDisabled: '#8ac18e',

},

/** @jsxRuntime classic */

/** @jsx jsx */

import logo from 'assets/logo/logo.png';

import React, { useEffect } from 'react';

import ReactDOM from 'react-dom';

import { Box, Flex, jsx, Spinner, Text } from 'theme-ui';

 

interface DialogProps {

  children: React.ReactNode;

  closeModal: () => void;

  small?: boolean;

  xLarge?: boolean;

  blur?: boolean;

  closeOnOverlayClick?: boolean;

  isLoading?: boolean;

  loadingMsg?: string;

}

interface HeaderProps {

  children: React.ReactNode;

  withLogo?: boolean;

  small?: boolean;

}

const Header = ({ children, withLogo = true, small }: HeaderProps) => (

  <header

    sx={{

      borderTopLeftRadius: '15px',

      borderTopRightRadius: '15px',

      // width: 'auto',

      pl: '12px',

      background: 'linear-gradient(180deg, #F7FCFF 0%, #fff 100%)',

      height: '55px',

      display: 'flex',

      alignItems: 'center',

      wordBreak: 'break-all',

      wordWrap: 'break-word',

    }}

  >

    <Flex sx={{ alignItems: 'center' }}>

      {withLogo && (

        <img

          alt="Wireless Car logo"

          sx={{

            width: small ? '22px' : '30px',

            height: small ? '22px' : '30px',

            mr: small ? '8px' : '12px',

          }}

          src={logo}

        />

      )}

      <Text as="div" sx={{ variant: small ? 'text.h2' : 'text.h1', wordWrap: 'break-word' }}>

        {children}

      </Text>

    </Flex>

  </header>

);

interface HeaderTitleProps {

  children: React.ReactNode;

  variant?: string;

}

const HeaderTitle = ({ children, variant }: HeaderTitleProps) => (

  <Text sx={{ variant: variant || 'text.h1' }}>{children}</Text>

);

interface BodyProps {

  children: React.ReactNode;

  size?: string;

}

const Body = ({ children, size }: BodyProps) => (

  <main sx={{ maxWidth: size || '100%' }}>{children}</main>

);

 

interface FooterProps {

  children: React.ReactNode;

}

const Footer = ({ children }: FooterProps) => (

  <footer

    sx={{

      py: 3,

      mt: 2,

      bg: 'primary5',

      borderBottomLeftRadius: '15px',

      borderBottomRightRadius: '15px',

      background: 'linear-gradient(0deg, #F7FCFF 0%, #fff 100%)',

    }}

  >

    {children}

  </footer>

);

interface LoaderProps {

  children?: React.ReactNode;

  message?: string;

}

const Loader = ({ children, message }: LoaderProps) => (

  <Flex

    sx={{

      position: 'fixed',

      alignItems: 'center',

      top: '30vh',

      right: '45vw',

      zIndex: '10000',

      bg: 'white',

      borderRadius: '20px',

      px: 3,

    }}

  >

    <Text

      as="div"

      variant="h1"

      px="20px"

      sx={{

        display: 'flex',

        alignItems: 'center',

      }}

    >

      <Spinner pr="16px" />

      {children}

      {message}

    </Text>

  </Flex>

);

 

const Dialog = ({

  children,

  closeModal,

  small,

  xLarge,

  blur = false,

  closeOnOverlayClick = true,

  isLoading,

  loadingMsg,

}: DialogProps) => {

  useEffect(() => {

    const KEY_NAME_ESC = 'Escape';

    const KEY_EVENT_TYPE = 'keyup';

    const handleEscKey = (event: KeyboardEvent) => {

      if (event.key === KEY_NAME_ESC) {

        closeModal();

      }

    };

    document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

    return () => {

      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);

    };

  });

 

  return ReactDOM.createPortal(

    <Box>

      {isLoading && (

        <Flex

          sx={{

            position: 'fixed',

            alignItems: 'center',

            top: '30vh',

            right: '45vw',

            zIndex: '10000',

            bg: 'white',

            borderRadius: '20px',

            px: 3,

          }}

        >

          <Text

            as="div"

            variant="h1"

            px="20px"

            sx={{

              display: 'flex',

              alignItems: 'center',

            }}

          >

            <Spinner pr="16px" />

            {loadingMsg}

          </Text>

        </Flex>

      )}

      <Box //Backdrop

        sx={{

          position: 'fixed',

          left: 0,

          top: 0,

          height: '100%',

          width: '100%',

          zIndex: 500,

          backdropFilter: 'invert(30%) blur(5px)',

        }}

        onClick={() => closeOnOverlayClick && closeModal()}

      >

        <Flex // Dialog Container

          sx={{

            p: '100px',

            justifyContent: 'center',

            outline: 0,

            overflowX: 'auto',

            overflowY: 'auto',

            zIndex: 1000,

            background: 'transparent',

          }}

          aria-modal={true}

          aria-hidden={true}

          tabIndex={-1}

          role="dialog"

        >

          <Flex // Dialog Element

            onClick={(e) => e.stopPropagation()}

            sx={{

              flexDirection: 'column',

              alignItems: 'center',

              zIndex: 100,

              boxShadow:

                'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',

              borderRadius: '15px',

              bg: 'background',

              // width: small ? 'auto' : xLarge ? '95%' : '80%',

              maxWidth: small ? '600px' : xLarge ? '95%' : '80%',

              filter: blur && 'blur(4px)',

            }}

          >

            <main sx={{ width: '100%' }}>{children}</main>

            {/* {isLoading && <Loader message="processing.."></Loader> */}

          </Flex>

        </Flex>

      </Box>

    </Box>,

    document.body

  );

};


const Modal = { Dialog, Body, Header, HeaderTitle, Footer, Loader };

export default Modal;
<Modal.Dialog
            closeModal={handleClose}
            xLarge={true}
            blur={isLoading}
            closeOnOverlayClick={!isLoading}
            isLoading={isLoading}
            loadingMsg="Creating request..."
          >
            <Modal.Header>
              <Modal.HeaderTitle>New Request</Modal.HeaderTitle>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={(e) => e.preventDefault()}>
                <CreateNewRequestForm setNewRequest={setNewRequest} newRequest={newRequest} />
                <Modal.Footer>
                  <Flex sx={{ justifyContent: 'flex-end' }}>
                    <Button
                      onClick={handleClose}
                      variant="outline"
                      mr="16px"
                      disabled={isLoading}
                      type="button"
                    >
                      Cancel
                    </Button>
                    <Button
                      id="createRequestButton"
                      sx={{ opacity: formValid ? '1' : '0.5' }}
                      mr="32px"
                      onClick={handleRequest}
                      disabled={formValid === 0 || isLoading}
                    >
                      Request
                    </Button>
                  </Flex>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal.Dialog>

    