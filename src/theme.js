

export const theme = {
   space:[ 0, 2, 4, 8, 12, 14, 16, 18, 21, 24, 28, 32, 36, 40, 42, 46, 48, 52, 56, 60, 64, 72, 78, 80], 
  
  fontSizes: [14, 15, 16, 18, 20, 21, 25, 28, 48, 56, 64, 104],
  fonts: {
    body: ['Noto Sans', 'Quicksand'],
    heading: ['Neucha', 'Quicksand'],
  },
  fontWeight: {
    body: [300, 400, 500, 600],
    heading: [400, 500],

  },
  letterSpacings: [1, 2, 2.5, 3, 3.5],

  text: {
    
/* h1 */
    h1: {
      neucha: {
        variant: 'text.heading.neucha',
        fontSize: 11,
        letterSpacing: 4,
      },
      quicksand: {
        variant: 'text.heading.quicksand',
        fontSize: 11,
        letterSpacing: 2
      }
    },

/* h2 */
    h2: {
      neucha: {
        variant: 'text.heading.neucha',
        fontSize: 10,
        letterSpacing: 1
      },
      quicksand: {
        variant: 'text.heading.quicksand',
        fontSize: 10,
        letterSpacing: 1
      }
    },

/* h3 */
    h3: {
      neucha: {
        variant: 'text.heading.neucha',
        fontSize: 9,
        letterSpacing: 1
      },
      quicksand: {
        variant: 'text.heading.quicksand',
        fontSize: 9,
        letterSpacing: 0
      }
    },

/* h4 */
    h4: {
      neucha: {
        variant: 'text.heading.neucha',
        fontSize: 8,
        letterSpacing: 0
      },
      quicksand: {
        variant: 'text.heading.quicksand',
        fontSize: 8,
        letterSpacing: 0
      }
    },

/* h5 */
    h5: {
      neucha: {
        variant: 'text.heading.neucha',
        fontSize: 7,
        letterSpacing: 1
      },
      quicksand: {
        variant: 'text.heading.quicksand',
        fontWeight: 'heading.1',
        fontSize: 6,
        letterSpacing: 3
      }
    },

/* h6 */
    h6: {
      neucha: {
        variant: 'text.heading.neucha',
        fontSize: 5,
        letterSpacing: 1
      },
      quicksand: {
        variant: 'text.heading.quicksand',
        fontWeight: 'heading.1',
        fontSize: 5,
        letterSpacing: 0
      }
    },

/* heading */
    heading: {
      neucha: {
        fontFamily: 'heading.0',
        fontWeight: 'heading.0',
      },
      quicksand: {
        fontFamily: 'heading.1',
        fontWeight: 'heading.0',
      }
    }
  },

/* Colors */
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
/* Radio */
  radio: {
    width: '24px' ,
    height: '24px',
    border: '2px solid lightMode.second',
    boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.25)', 
    color: 'lightMode.second',
    "> path": {
      fill: "none",  
     d: 'circle cx="6.75" cy:"6.75" r="6.75" '
     },
    'input:checked ~ &':{
      background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjciIGZpbGw9IiM0QzNBODAiLz4KPC9zdmc+Cg==")
       no-repeat center center`,
      color: 'lightMode.second',
    },
    'input:disabled ~ &': {
      width: '24px',
      height: '24px',
      cursor: 'not-allowed',
      background: 'radioDisabled',
      border: '2px solid badgeColorsLightMode.disabled',
      
    }, 
    
    
  }, 

/* Check Box */
  checkbox: {
    width: '24px',
    height: '24px',
    border: '2px solid #9d93b9',
    boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.25)', 
    fill: 'none',
    appearance: 'none',
    
    "input:focus ~ &": {
      background: "transparent",
    },

    'input:checked ~ &':{
     fill: 'none',
      border: 'none',
      background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjIyIiByeD0iMyIgZmlsbD0iIzRDM0E4MCIgc3Ryb2tlPSIjNEMzQTgwIiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTE3LjkyMzMgNy42NDQ4M0MxNy4xODAxIDYuOTE3MDQgMTUuOTc4NSA2LjkyOTA4IDE1LjI1ODggNy42ODAxM1Y3LjY4MDEzTDExLjM3OTIgMTEuNTU5N0MxMC42MDg2IDEyLjMzMDQgOS4zNjI3NiAxMi4zNDIxIDguNTc3NzEgMTEuNTg2MUw4LjQ1NjY5IDExLjQ2OTZMOC40MjgyNyAxMS40NDEyQzcuNjkwNTMgMTAuNzAzNCA2LjQ5NDQyIDEwLjcwMzQgNS43NTY2OSAxMS40NDEyVjExLjQ0MTJDNS4wMTg5NSAxMi4xNzg5IDUuMDE4OTUgMTMuMzc1IDUuNzU2NjkgMTQuMTEyOEw1Ljc4NTExIDE0LjE0MTJMOC42MjcyMSAxNi45ODMzVjE2Ljk4MzNDOS4zNDQ3MSAxNy43MzIgMTAuNTM3NCAxNy43NDQ3IDExLjI3MDcgMTcuMDExNEwxMS4yOTg4IDE2Ljk4MzNMMTcuOTMwNCAxMC4zNTE3TDE3Ljk0NDcgMTAuMzM3NEMxOC42ODc5IDkuNTk0MTkgMTguNjc0NCA4LjM4MDIgMTcuOTIzMyA3LjY0NDgzVjcuNjQ0ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K")
       no-repeat center center`,
    /*   background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjkyMzMgMC42NDQ4MjhDMTIuMTgwMSAtMC4wODI5NTc5IDEwLjk3ODUgLTAuMDcwOTIwOCAxMC4yNTg4IDAuNjgwMTI4TDYuMzc5MjEgNC41NTk3MkM1LjYwODU2IDUuMzMwMzcgNC4zNjI3NiA1LjM0MjEyIDMuNTc3NzEgNC41ODYxNEwzLjQ1NjY5IDQuNDY5NkwzLjQyODI3IDQuNDQxMThDMi42OTA1MyAzLjcwMzQ0IDEuNDk0NDIgMy43MDM0NCAwLjc1NjY4OCA0LjQ0MTE4QzAuMDE4OTUxOCA1LjE3ODkyIDAuMDE4OTUxMiA2LjM3NTAyIDAuNzU2Njg3IDcuMTEyNzZMMC43ODUxMDkgNy4xNDExOEwzLjYyNzIxIDkuOTgzMjlDNC4zNDQ3MSAxMC43MzIgNS41Mzc0MSAxMC43NDQ3IDYuMjcwNjggMTAuMDExNEw2LjI5ODc5IDkuOTgzMjlMMTIuOTMwNCAzLjM1MTcxTDEyLjk0NDcgMy4zMzc0MkMxMy42ODc5IDIuNTk0MTkgMTMuNjc0NCAxLjM4MDIgMTIuOTIzMyAwLjY0NDgyOFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=")`,
      'input:after ~ &':{
        background: 'lightMode.second',
      } */
     /*  "> path": {
        d: "M12.9233 0.644828C12.1801 -0.0829579 10.9785 -0.0709208 10.2588 0.680128L6.37921 4.55972C5.60856 5.33037 4.36276 5.34212 3.57771 4.58614L3.45669 4.4696L3.42827 4.44118C2.69053 3.70344 1.49442 3.70344 0.756688 4.44118C0.0189518 5.17892 0.0189512 6.37502 0.756687 7.11276L0.785109 7.14118L3.62721 9.98329C4.34471 10.732 5.53741 10.7447 6.27068 10.0114L6.29879 9.98329L12.9304 3.35171L12.9447 3.33742C13.6879 2.59419 13.6744 1.3802 12.9233 0.644828Z"
      }, */
       /*  */
    },
    'input:disabled ~ &': {
      width: '24px',
      height: '24px',
      cursor: 'not-allowed',
      border: '2px solid #C5C5C5',
      background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjIyIiByeD0iMyIgZmlsbD0iI0FBQUFBQSIgc3Ryb2tlPSIjQzVDNUM1IiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTE3LjI4ODQgNy4wMjMxQzE2Ljg5MDggNi42MzM3NyAxNi4yNTE4IDYuNjQzOTMgMTUuODY2OCA3LjA0NTcxTDE1LjI1ODggNy42ODAxM0wxMC42ODUzIDEyLjI1MzZDMTAuMyAxMi42Mzg5IDkuNjc3MDkgMTIuNjQ0OCA5LjI4NDU3IDEyLjI2NjhMOC40NTY2OSAxMS40Njk2TDcuNzk5NTggMTAuODEyNUM3LjQwOTA2IDEwLjQyMiA2Ljc3NTg5IDEwLjQyMiA2LjM4NTM3IDEwLjgxMjVMNS4xMjgwMSAxMi4wNjk5QzQuNzM3NDggMTIuNDYwNCA0LjczNzQ4IDEzLjA5MzYgNS4xMjgwMSAxMy40ODQxTDUuNzg1MTEgMTQuMTQxMkw4LjYyNzIxIDE2Ljk4MzNMOS4yMjc4IDE3LjYxQzkuNjE1NjkgMTguMDE0NyAxMC4yNjA1IDE4LjAyMTYgMTAuNjU2OSAxNy42MjUyTDExLjI5ODggMTYuOTgzM0wxNy45MzA0IDEwLjM1MTdMMTguNTggOS43MDIwOUMxOC45NzM0IDkuMzA4NjUgMTguOTcwMSA4LjY2OTc0IDE4LjU3MjUgOC4yODA0N0wxNy4yODg0IDcuMDIzMVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=")
       no-repeat center center`,
    },
  },
avatar: {
  img: {
    width: '64px',
  height: '64px',
  boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.25)', 
  margin: 'space.4',
  border: 'none',
  },

  noImg: {
  width: '64px',
  height: '64px',
  boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.25)', 
  backgroundColor: '#6044B5',
  border: '2px solid #6044B5',
  margin: 'space.4',
  },

},
/* Buttons */
  buttons: {
    /* Active buttons */
    primary: {
      width: '259px',
      height: '73px',
      fontFamily: 'body.1',
      fontStyle: 'normal',
      /* fontWeight: '600', */
      fontSize: 5,
      cursor: 'pointer',
      backgroundColor: 'daisy.5',
      border: '2px solid daisy.5',
      boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.25)',
      borderRadius: '8px',
      margin: 2,
      padding: '0',

      '&:hover': {
        backgroundColor: "transparent",
        color: "daisy.5",
        border: '2px solid',
        borderColor: "daisy.5",

      },
      '&:disabled': {
        backgroundColor: 'primaryDisabled',
        '&:hover': {
          cursor: 'not-allowed',
          backgroundColor: "none",
          color: "none",
          border: 'none',
          borderColor: "none",
          color: "white",
        },
      },
      '&:focus': {
        backgroundColor: 'daisy.9',
        color: 'white'
      }
    },
    activeMedium: {
      variant: 'buttons.primary',
      width: '150px',
      height: '50px',
      fontFamily: 'body.1',
      fontStyle: 'normal',
      /* fontWeight: '600', */
      fontSize: 5,
    },
    activeSmall: {
      variant: 'buttons.primary',
      width: '105px',
      height: '35px',
      fontSize: 14,
    },
    /* Error buttons */
    error: {
      variant: 'buttons.primary',
      backgroundColor: 'lightMode.errors',
      '&:hover': {
        backgroundColor: "transparent",
        color: "lightMode.errors",
        border: '2px solid',
        borderColor: "lightMode.errors",
      },
      '&:focus': {
        backgroundColor: 'lightMode.errors',
        color: 'white'
      },
      '&:disabled': {
        backgroundColor: 'errorDisabled',
        '&:hover': {
          cursor: 'not-allowed',
          backgroundColor: "none",
          color: "none",
          border: 'none',
          borderColor: "none",
          color: "white",
        },
      },
    },
    errorMedium: {
      variant: 'buttons.error',
      width: '150px',
      height: '50px',
      fontFamily: 'body.1',
      fontStyle: 'normal',
      fontSize: 4,
    },
    errorSmall: {
      variant: 'buttons.error',
      width: '105px',
      height: '35px',
      fontSize: 14,
    },
    /* Success buttons */
    success: {
      variant: 'buttons.primary',
      backgroundColor: 'lightMode.positive1',
      '&:hover': {
        backgroundColor: "transparent",
        color: "lightMode.positive1",
        border: '2px solid',
        borderColor: "lightMode.positive1",
      },
      '&:focus': {
        backgroundColor: 'lightMode.positive1',
        color: 'white'
      },
      '&:disabled': {
        backgroundColor: 'successDisabled',
        '&:hover': {
          cursor: 'not-allowed',
          backgroundColor: "none",
          color: "none",
          border: 'none',
          borderColor: "none",
          color: "white",
        },
      },
    },
    successMedium: {
      variant: 'buttons.success',
      width: '150px',
      height: '50px',
      fontFamily: 'body.1',
      fontStyle: 'normal',
      fontSize: 5,
    },
  },
  successSmall: {
    variant: 'buttons.success',
    width: '105px',
    height: '35px',
    fontSize: 14,
  },
  /* Mobile buttons */
  mobile: {
    variant: 'buttons.primary',
    width: '72px', 
    height: '72px',
  },
  mobileMedium: {
    variant: 'buttons.primary',
    width: '60px',
    height: '60px',
  },
  mobileSmall: {
    variant: 'buttons.primary',
    width: '42px',
    height: '42px',
  },
  /* Mobile error */
  mobileError: {
    variant: 'buttons.error',
    width: '72px',
    height: '72px',
  },
  mobileErrorMedium: {
    variant: 'buttons.error',
    width: '60px',
    height: '60px',
  },
  mobileErrorSmall: {
    variant: 'buttons.error',
    width: '42px',
    height: '42px',
  }
  ,
  /* Mobile Success */
  mobileSuccess: {
    variant: 'buttons.success',
    width: '72px',
    height: '72px',
  },
  mobileSuccessMedium: {
    variant: 'buttons.success',
    width: '60px',
    height: '60px',
  },
  mobileSuccessSmall: {
    variant: 'buttons.success',
    width: '42px',
    height: '42px',
  },
  /* Switch */
  switchs: {
    toggleBig: {
      width: '145px',
      height: '67px',
      backgroundColor: 'badgeColorsdarkMode.disabled',
      boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '40px',
      display: 'flex',
      alignItems: 'center',
      margin: 6,

      'div': {
        marginLeft: 2,
        width: '54px',
        height: '54px',
        background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA1NCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjciIGN5PSIyNyIgcj0iMjciIGZpbGw9IiNGRkZFRkIiLz4KPHBhdGggZD0iTTE5LjkzNzEgMTUuNzA3MUMxOS41NDY2IDE1LjMxNjYgMTguOTEzNCAxNS4zMTY2IDE4LjUyMjkgMTUuNzA3MUwxNS43MDcxIDE4LjUyMjlDMTUuMzE2NiAxOC45MTM0IDE1LjMxNjYgMTkuNTQ2NiAxNS43MDcxIDE5LjkzNzFMMTcuMTYgMjEuMzlMMjEuODA0NyAyNi4xMTI5QzIyLjE4OTYgMjYuNTA0NCAyMi4xODcgMjcuMTMzIDIxLjc5ODggMjcuNTIxMkwxNy4xNiAzMi4xNkwxNS43Mjk4IDMzLjUzMDZDMTUuMzI4IDMzLjkxNTcgMTUuMzE3OSAzNC41NTQ2IDE1LjcwNzIgMzQuOTUyMkwxOC41MjMgMzcuODI3OUMxOC45MTIyIDM4LjIyNTUgMTkuNTUxMiAzOC4yMjg4IDE5Ljk0NDYgMzcuODM1NEwyMS4zOSAzNi4zOUwyNi4xMDcgMzEuNjczQzI2LjQ5OTggMzEuMjgwMiAyNy4xMzc1IDMxLjI4MjkgMjcuNTI3MSAzMS42NzlMMzIuMTYgMzYuMzlMMzMuNTIzMiAzNy44MTI1QzMzLjkxMTEgMzguMjE3MiAzNC41NTU5IDM4LjIyNDEgMzQuOTUyMyAzNy44Mjc3TDM3LjgyNzcgMzQuOTUyM0MzOC4yMjQxIDM0LjU1NTkgMzguMjE3MiAzMy45MTExIDM3LjgxMjUgMzMuNTIzMkwzNi4zOSAzMi4xNkwzMS42NzkgMjcuNTI3MUMzMS4yODI5IDI3LjEzNzUgMzEuMjgwMiAyNi40OTk4IDMxLjY3MyAyNi4xMDdMMzYuMzkgMjEuMzlMMzcuODM1NCAxOS45NDQ2QzM4LjIyODggMTkuNTUxMiAzOC4yMjU1IDE4LjkxMjIgMzcuODI3OSAxOC41MjNMMzQuOTUyMiAxNS43MDcyQzM0LjU1NDYgMTUuMzE3OSAzMy45MTU3IDE1LjMyOCAzMy41MzA2IDE1LjcyOThMMzIuMTYgMTcuMTZMMjcuNTIxMiAyMS43OTg4QzI3LjEzMyAyMi4xODcgMjYuNTA0NCAyMi4xODk2IDI2LjExMjkgMjEuODA0N0wyMS4zOSAxNy4xNkwxOS45MzcxIDE1LjcwNzFaIiBmaWxsPSIjQjRCNEI0Ii8+Cjwvc3ZnPgo=")
      no-repeat center center`,
      },
      'input:checked ~ &': {
        backgroundColor: 'badgeColorsLightMode.active',
        'div': {
      background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA1NCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjciIGN5PSIyNyIgcj0iMjciIGZpbGw9IiNGRkZFRkIiLz4KPHBhdGggZD0iTTM0Ljk1MjIgMTcuNzA3MkMzNC41NTQ2IDE3LjMxNzkgMzMuOTE1NyAxNy4zMjggMzMuNTMwNiAxNy43Mjk4TDMyLjE2IDE5LjE2TDI0LjUxMzkgMjYuODA2MUMyNC4xMjg2IDI3LjE5MTQgMjMuNTA1NyAyNy4xOTczIDIzLjExMzEgMjYuODE5M0wyMS4zOSAyNS4xNkwxOS45MzcxIDIzLjcwNzFDMTkuNTQ2NiAyMy4zMTY2IDE4LjkxMzQgMjMuMzE2NiAxOC41MjI5IDIzLjcwNzFMMTUuNzA3MSAyNi41MjI5QzE1LjMxNjYgMjYuOTEzNCAxNS4zMTY2IDI3LjU0NjYgMTUuNzA3MSAyNy45MzcxTDE3LjE2IDI5LjM5TDIxLjY2IDMzLjg5TDIzLjAyMzIgMzUuMzEyNUMyMy40MTExIDM1LjcxNzIgMjQuMDU1OSAzNS43MjQxIDI0LjQ1MjMgMzUuMzI3N0wyNS44OSAzMy44OUwzNi4zOSAyMy4zOUwzNy44MzU0IDIxLjk0NDZDMzguMjI4OCAyMS41NTEyIDM4LjIyNTUgMjAuOTEyMiAzNy44Mjc5IDIwLjUyM0wzNC45NTIyIDE3LjcwNzJaIiBmaWxsPSIjM0NDMTNCIi8+Cjwvc3ZnPgo=")
      no-repeat center center`,
      marginLeft: 10,
        }
      },

    },
    toggleSmall: {
      variant: 'switchs.toggleBig',
      width: '68px',
      height: '32px',
      'div': {
        marginLeft: 2,
        width: '26px',
        height: '26px',
        background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTMiIGN5PSIxMyIgcj0iMTMiIGZpbGw9IiNGRkZFRkIiLz4KPHBhdGggZD0iTTkuODIyMTEgNy43MDcxMUM5LjQzMTU4IDcuMzE2NTggOC43OTg0MiA3LjMxNjU4IDguNDA3ODkgNy43MDcxMUw3LjcwNzExIDguNDA3ODlDNy4zMTY1OCA4Ljc5ODQyIDcuMzE2NTggOS40MzE1OCA3LjcwNzExIDkuODIyMTFMOC4wOCAxMC4xOTVMMTAuMDU0NyAxMi4yMDI5QzEwLjQzOTYgMTIuNTk0NCAxMC40MzcgMTMuMjIzIDEwLjA0ODggMTMuNjExMkw4LjA4IDE1LjU4TDcuNzI5NzkgMTUuOTE1NkM3LjMyODAxIDE2LjMwMDcgNy4zMTc4NSAxNi45Mzk2IDcuNzA3MTggMTcuMzM3Mkw4LjQwNzk3IDE4LjA1MjlDOC43OTcyNCAxOC40NTA1IDkuNDM2MTUgMTguNDUzOCA5LjgyOTU5IDE4LjA2MDRMMTAuMTk1IDE3LjY5NUwxMi4xOTcgMTUuNjkzQzEyLjU4OTggMTUuMzAwMiAxMy4yMjc1IDE1LjMwMjkgMTMuNjE3MSAxNS42OTlMMTUuNTggMTcuNjk1TDE1LjkwODIgMTguMDM3NUMxNi4yOTYxIDE4LjQ0MjIgMTYuOTQwOSAxOC40NDkxIDE3LjMzNzMgMTguMDUyN0wxOC4wNTI3IDE3LjMzNzNDMTguNDQ5MSAxNi45NDA5IDE4LjQ0MjIgMTYuMjk2MSAxOC4wMzc1IDE1LjkwODJMMTcuNjk1IDE1LjU4TDE1LjY5OSAxMy42MTcxQzE1LjMwMjkgMTMuMjI3NSAxNS4zMDAyIDEyLjU4OTggMTUuNjkzIDEyLjE5N0wxNy42OTUgMTAuMTk1TDE4LjA2MDQgOS44Mjk1OUMxOC40NTM4IDkuNDM2MTUgMTguNDUwNSA4Ljc5NzI0IDE4LjA1MjkgOC40MDc5N0wxNy4zMzcyIDcuNzA3MThDMTYuOTM5NiA3LjMxNzg1IDE2LjMwMDcgNy4zMjgwMSAxNS45MTU2IDcuNzI5NzlMMTUuNTggOC4wOEwxMy42MTEyIDEwLjA0ODhDMTMuMjIzIDEwLjQzNyAxMi41OTQ0IDEwLjQzOTYgMTIuMjAyOSAxMC4wNTQ3TDEwLjE5NSA4LjA4TDkuODIyMTEgNy43MDcxMVoiIGZpbGw9IiNCNEI0QjQiLz4KPC9zdmc+Cg==")
      no-repeat center center`,
      },
      'input:checked ~ &': {
        backgroundColor: 'badgeColorsLightMode.active',
        'div': {
      background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTMiIGN5PSIxMyIgcj0iMTMiIGZpbGw9IiNGRkZFRkIiLz4KPHBhdGggZD0iTTE3LjMzNzIgOC43MDcxOEMxNi45Mzk2IDguMzE3ODUgMTYuMzAwNyA4LjMyODAxIDE1LjkxNTYgOC43Mjk3OUwxNS41OCA5LjA4TDEyLjEwMzkgMTIuNTU2MUMxMS43MTg2IDEyLjk0MTQgMTEuMDk1NyAxMi45NDczIDEwLjcwMzEgMTIuNTY5M0wxMC4xOTUgMTIuMDhMOS44MjIxMSAxMS43MDcxQzkuNDMxNTggMTEuMzE2NiA4Ljc5ODQyIDExLjMxNjYgOC40MDc4OSAxMS43MDcxTDcuNzA3MTEgMTIuNDA3OUM3LjMxNjU4IDEyLjc5ODQgNy4zMTY1OCAxMy40MzE2IDcuNzA3MTEgMTMuODIyMUw4LjA4IDE0LjE5NUwxMC4zMyAxNi40NDVMMTAuNjU4MiAxNi43ODc1QzExLjA0NjEgMTcuMTkyMiAxMS42OTA5IDE3LjE5OTEgMTIuMDg3MyAxNi44MDI3TDEyLjQ0NSAxNi40NDVMMTcuNjk1IDExLjE5NUwxOC4wNjA0IDEwLjgyOTZDMTguNDUzOCAxMC40MzYyIDE4LjQ1MDUgOS43OTcyNCAxOC4wNTI5IDkuNDA3OTdMMTcuMzM3MiA4LjcwNzE4WiIgZmlsbD0iIzNDQzEzQiIvPgo8L3N2Zz4K")
      no-repeat center center`,
      marginLeft: 3,
        }
      },
    },
    toggleBigDayNight: {
      variant: 'switchs.toggleBig',
      background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ1IiBoZWlnaHQ9IjY3IiB2aWV3Qm94PSIwIDAgMTQ1IDY3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTQ1IiBoZWlnaHQ9IjY3IiByeD0iMzMuNSIgZmlsbD0iIzRDM0E4MCIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9mXzZfNDYpIj4KPGNpcmNsZSBjeD0iMTA2LjUiIGN5PSIzMy41IiByPSIyMy41IiBmaWxsPSIjRUNFOEY2IiBmaWxsLW9wYWNpdHk9IjAuMyIvPgo8L2c+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF82XzQ2KSI+CjxwYXRoIGQ9Ik0xMDQuMjI0IDE3LjQyMTFDMTA0LjIyNCAxNy40MjExIDEwNC4yMjQgMTcuNDIxMSAxMDQuMjI0IDE3LjQyMTFDOTguMzYxNiAxOS4zODc2IDk0LjEzMTYgMjQuOTE2MyA5NC4xMzE2IDMxLjQ0NjhDOTQuMTMxNiAzOS42NDcxIDEwMC43NzMgNDYuMjg4OSAxMDguOTc0IDQ2LjI4ODlDMTE0LjgwMSA0Ni4yODg5IDExOS44MyA0Mi45MjE0IDEyMi4yNDMgMzguMDMxM0MxMjIuNjA2IDM3LjI5NDcgMTIxLjg4NiAzNi41NDMxIDEyMS4wODIgMzYuNzFDMTIwLjE2OCAzNi44OTk2IDExOS4yMjIgMzcuMDEyNiAxMTguMjUgMzcuMDEyNkMxMTAuMDUgMzcuMDEyNiAxMDMuNDA4IDMwLjM3MDggMTAzLjQwOCAyMi4xNzA1QzEwMy40MDggMjAuNTAwOCAxMDMuNzA1IDE4LjkwNTMgMTA0LjIyNCAxNy40MjExQzEwNC4yMjQgMTcuNDIxMSAxMDQuMjI0IDE3LjQyMTEgMTA0LjIyNCAxNy40MjExVjE3LjQyMTFaIiBmaWxsPSIjRkZGRUZCIi8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZl82XzQ2IiB4PSI4MSIgeT0iOCIgd2lkdGg9IjUxIiBoZWlnaHQ9IjUxIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl82XzQ2Ii8+CjwvZmlsdGVyPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzZfNDYiPgo8cmVjdCB4PSI5NC4xMzE2IiB5PSIxNy40MjExIiB3aWR0aD0iMjkuNjg0MiIgaGVpZ2h0PSIyOS42ODQyIiByeD0iMSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K")
      no-repeat center right`,
      
      'div': {
        marginLeft: 2,
        width: '54px',
        height: '54px',
      },
      'input:checked ~ &': {
        background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ1IiBoZWlnaHQ9IjY3IiB2aWV3Qm94PSIwIDAgMTQ1IDY3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTQ1IiBoZWlnaHQ9IjY3IiByeD0iMzMuNSIgZmlsbD0iI0Y5RDE4MyIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9mXzZfNDYpIj4KPGNpcmNsZSBjeD0iMzkuNSIgY3k9IjMzLjUiIHI9IjIzLjUiIGZpbGw9IiNBOEExQjgiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjwvZz4KPHBhdGggZD0iTTM5LjA3ODkgMTdDMzcuOTUzNCAxNyAzNy4wNjkxIDE3Ljg4NDMgMzcuMDY5MSAxOS4wMDk5QzM3LjA2OTEgMjAuMTM1NCAzNy45NTM0IDIxLjAxOTcgMzkuMDc4OSAyMS4wMTk3QzQwLjIwNDUgMjEuMDE5NyA0MS4wODg4IDIwLjEzNTQgNDEuMDg4OCAxOS4wMDk5QzQxLjA4ODggMTcuODg0MyA0MC4yMDQ1IDE3IDM5LjA3ODkgMTdaTTI5LjAyOTYgMjEuMDE5N0MyNy45MDQxIDIxLjAxOTcgMjcuMDE5NyAyMS45MDQxIDI3LjAxOTcgMjMuMDI5NkMyNy4wMTk3IDI0LjE1NTEgMjcuOTA0MSAyNS4wMzk1IDI5LjAyOTYgMjUuMDM5NUMzMC4xNTUxIDI1LjAzOTUgMzEuMDM5NSAyNC4xNTUxIDMxLjAzOTUgMjMuMDI5NkMzMS4wMzk1IDIxLjkwNDEgMzAuMTU1MSAyMS4wMTk3IDI5LjAyOTYgMjEuMDE5N1pNNDkuMTI4MyAyMS4wMTk3QzQ4LjAwMjggMjEuMDE5NyA0Ny4xMTg0IDIxLjkwNDEgNDcuMTE4NCAyMy4wMjk2QzQ3LjExODQgMjQuMTU1MSA0OC4wMDI4IDI1LjAzOTUgNDkuMTI4MyAyNS4wMzk1QzUwLjI1MzggMjUuMDM5NSA1MS4xMzgyIDI0LjE1NTEgNTEuMTM4MiAyMy4wMjk2QzUxLjEzODIgMjEuOTA0MSA1MC4yNTM4IDIxLjAxOTcgNDkuMTI4MyAyMS4wMTk3Wk0zOS4wNzg5IDI1LjAzOTVDMzQuNjU3MiAyNS4wMzk1IDMxLjAzOTUgMjguNjU3MiAzMS4wMzk1IDMzLjA3ODlDMzEuMDM5NSAzNy41MDA3IDM0LjY1NzIgNDEuMTE4NCAzOS4wNzg5IDQxLjExODRDNDMuNTAwNyA0MS4xMTg0IDQ3LjExODQgMzcuNTAwNyA0Ny4xMTg0IDMzLjA3ODlDNDcuMTE4NCAyOC42NTcyIDQzLjUwMDcgMjUuMDM5NSAzOS4wNzg5IDI1LjAzOTVaTTI1LjAwOTkgMzEuMDY5MUMyMy44ODQzIDMxLjA2OTEgMjMgMzEuOTUzNCAyMyAzMy4wNzg5QzIzIDM0LjIwNDUgMjMuODg0MyAzNS4wODg4IDI1LjAwOTkgMzUuMDg4OEMyNi4xMzU0IDM1LjA4ODggMjcuMDE5NyAzNC4yMDQ1IDI3LjAxOTcgMzMuMDc4OUMyNy4wMTk3IDMxLjk1MzQgMjYuMTM1NCAzMS4wNjkxIDI1LjAwOTkgMzEuMDY5MVpNNTMuMTQ4IDMxLjA2OTFDNTIuMDIyNSAzMS4wNjkxIDUxLjEzODIgMzEuOTUzNCA1MS4xMzgyIDMzLjA3ODlDNTEuMTM4MiAzNC4yMDQ1IDUyLjAyMjUgMzUuMDg4OCA1My4xNDggMzUuMDg4OEM1NC4yNzM2IDM1LjA4ODggNTUuMTU3OSAzNC4yMDQ1IDU1LjE1NzkgMzMuMDc4OUM1NS4xNTc5IDMxLjk1MzQgNTQuMjczNiAzMS4wNjkxIDUzLjE0OCAzMS4wNjkxWk0yOS4wMjk2IDQxLjExODRDMjcuOTA0MSA0MS4xMTg0IDI3LjAxOTcgNDIuMDAyOCAyNy4wMTk3IDQzLjEyODNDMjcuMDE5NyA0NC4yNTM4IDI3LjkwNDEgNDUuMTM4MiAyOS4wMjk2IDQ1LjEzODJDMzAuMTU1MSA0NS4xMzgyIDMxLjAzOTUgNDQuMjUzOCAzMS4wMzk1IDQzLjEyODNDMzEuMDM5NSA0Mi4wMDI4IDMwLjE1NTEgNDEuMTE4NCAyOS4wMjk2IDQxLjExODRaTTQ5LjEyODMgNDEuMTE4NEM0OC4wMDI4IDQxLjExODQgNDcuMTE4NCA0Mi4wMDI4IDQ3LjExODQgNDMuMTI4M0M0Ny4xMTg0IDQ0LjI1MzggNDguMDAyOCA0NS4xMzgyIDQ5LjEyODMgNDUuMTM4MkM1MC4yNTM4IDQ1LjEzODIgNTEuMTM4MiA0NC4yNTM4IDUxLjEzODIgNDMuMTI4M0M1MS4xMzgyIDQyLjAwMjggNTAuMjUzOCA0MS4xMTg0IDQ5LjEyODMgNDEuMTE4NFpNMzkuMDc4OSA0NS4xMzgyQzM3Ljk1MzQgNDUuMTM4MiAzNy4wNjkxIDQ2LjAyMjUgMzcuMDY5MSA0Ny4xNDhDMzcuMDY5MSA0OC4yNzM2IDM3Ljk1MzQgNDkuMTU3OSAzOS4wNzg5IDQ5LjE1NzlDNDAuMjA0NSA0OS4xNTc5IDQxLjA4ODggNDguMjczNiA0MS4wODg4IDQ3LjE0OEM0MS4wODg4IDQ2LjAyMjUgNDAuMjA0NSA0NS4xMzgyIDM5LjA3ODkgNDUuMTM4MloiIGZpbGw9IiNGRkZFRkIiLz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZl82XzQ2IiB4PSIxNCIgeT0iOCIgd2lkdGg9IjUxIiBoZWlnaHQ9IjUxIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl82XzQ2Ii8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=")`,
        'div': {
      marginLeft: 10,
        }
      },
    },
    toggleSmallDayNight: {
      variant: 'switchs.toggleSmall',
      background: `url("data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAgCAYAAACrdt7+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIoSURBVHgB7ZpBbtpQFEXv+y6kalWJJTg7gEGlzkJmVSclO8gOsgTXO0h3wBLIzLO4s87KDuod1FLDIID98t53jILlJFakSMT/nwkCjGRf3X/9fR+Ejsym0Wi9xiwAnZTA2AAhAyMcIATkco6ZnOOSSkrN+/JqkcZ5x98+zexLFBYBXYBxfqgCdEEudB6UHC9+x9kzx7Wjjtiu8UMOuUCPIMbl/yOO00cc0yqIdYWha3FEiB4iomQB82mbW0zzg9nnaNxnMRQmhAXR9Te51uZ3ew7puzOatDllJ4hmRrGmP66IUaOiSKZM6kzZLRkNUNfEUHT5fLqlqH5vHaJLZWvoLxzmXcnHunSsQyQ3IjjOJqi2F1TtN+gfPPnNkI9NIdtxeJTRx435LkuGTuCxGOapkZQdw2OxD61yHw7hscgtNzRv+Qn2FRgZePYwWqbAU5NrqGbwWFhbNgnVJTw1S1OAf8FTof3rcIiFz5GKlZTRxrbRhDkcR/Jjrp2Ive1uCv4JxymkkddXK0giPQARLuEoLE18cl8j7jZmwYBjve3AMUSMbHVUuUPZCaJZIrY5dUkUFaOQkvnhjGZv6662GWz4zAVRVAze8lnSmM20Dqq+SscayDiCelo6185IugyqFOuUIU/6GLQaoJIZk+SRGe+zw+57t0Ry4DneLrk8s80L2V4kLx12N5lKGf1B+leSylF+pC1biMPtUjQkMznPZUmUrgblVdrx7xB3NkL1rQ0CMb8AAAAASUVORK5CYII="), 
      url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZl8xMl8xMDgpIj4KPGNpcmNsZSBjeD0iMTIuNSIgY3k9IjEyLjUiIHI9IjEwLjUiIGZpbGw9IiNFQ0U4RjYiIGZpbGwtb3BhY2l0eT0iMC4zIi8+CjwvZz4KPHBhdGggZD0iTTExLjQ4MzIgNS4zMTU4QzExLjQ4MzIgNS4zMTU4IDExLjQ4MzIgNS4zMTU4IDExLjQ4MzIgNS4zMTU4QzguODYzNjkgNi4xOTQ0OCA2Ljk3MzY5IDguNjY0NzQgNi45NzM2OSAxMS41ODI2QzYuOTczNjkgMTUuMjQ2NiA5Ljk0MTMyIDE4LjIxNDIgMTMuNjA1MyAxOC4yMTQyQzE1Ljc1MjMgMTguMjE0MiAxNy42NTcgMTcuMTkwOSAxOC44NjM2IDE1LjYwNjZDMTkuNDA1NSAxNC44OTUxIDE4LjY0NDMgMTQuMDY5NSAxNy43NSAxNC4wNjk1VjE0LjA2OTVDMTQuMDg2MSAxNC4wNjk1IDExLjExODQgMTEuMTAxOCAxMS4xMTg0IDcuNDM3OUMxMS4xMTg0IDYuNjkxODUgMTEuMjUxMSA1Ljk3ODk1IDExLjQ4MzIgNS4zMTU4QzExLjQ4MzIgNS4zMTU4IDExLjQ4MzIgNS4zMTU4IDExLjQ4MzIgNS4zMTU4VjUuMzE1OFoiIGZpbGw9IiNGRkZFRkIiLz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZl8xMl8xMDgiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMTJfMTA4Ii8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=")`,
     
      'div': {
        marginLeft: 2,
        width: '26px',
        height: '26px',
      },
      'input:checked ~ &': {
        background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA2OCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY4IiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiNGOUQxODMiLz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZl83Xzg1KSI+CjxjaXJjbGUgY3g9IjE5LjUyMzgiIGN5PSIxNS41MjM4IiByPSIxMS41MjM4IiBmaWxsPSIjQThBMUI4IiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8L2c+CjxwYXRoIGQ9Ik0xOSA5QzE4LjUxIDkgMTguMTI1IDkuMzg1IDE4LjEyNSA5Ljg3NUMxOC4xMjUgMTAuMzY1IDE4LjUxIDEwLjc1IDE5IDEwLjc1QzE5LjQ5IDEwLjc1IDE5Ljg3NSAxMC4zNjUgMTkuODc1IDkuODc1QzE5Ljg3NSA5LjM4NSAxOS40OSA5IDE5IDlaTTE0LjYyNSAxMC43NUMxNC4xMzUgMTAuNzUgMTMuNzUgMTEuMTM1IDEzLjc1IDExLjYyNUMxMy43NSAxMi4xMTUgMTQuMTM1IDEyLjUgMTQuNjI1IDEyLjVDMTUuMTE1IDEyLjUgMTUuNSAxMi4xMTUgMTUuNSAxMS42MjVDMTUuNSAxMS4xMzUgMTUuMTE1IDEwLjc1IDE0LjYyNSAxMC43NVpNMjMuMzc1IDEwLjc1QzIyLjg4NSAxMC43NSAyMi41IDExLjEzNSAyMi41IDExLjYyNUMyMi41IDEyLjExNSAyMi44ODUgMTIuNSAyMy4zNzUgMTIuNUMyMy44NjUgMTIuNSAyNC4yNSAxMi4xMTUgMjQuMjUgMTEuNjI1QzI0LjI1IDExLjEzNSAyMy44NjUgMTAuNzUgMjMuMzc1IDEwLjc1Wk0xOSAxMi41QzE3LjA3NSAxMi41IDE1LjUgMTQuMDc1IDE1LjUgMTZDMTUuNSAxNy45MjUgMTcuMDc1IDE5LjUgMTkgMTkuNUMyMC45MjUgMTkuNSAyMi41IDE3LjkyNSAyMi41IDE2QzIyLjUgMTQuMDc1IDIwLjkyNSAxMi41IDE5IDEyLjVaTTEyLjg3NSAxNS4xMjVDMTIuMzg1IDE1LjEyNSAxMiAxNS41MSAxMiAxNkMxMiAxNi40OSAxMi4zODUgMTYuODc1IDEyLjg3NSAxNi44NzVDMTMuMzY1IDE2Ljg3NSAxMy43NSAxNi40OSAxMy43NSAxNkMxMy43NSAxNS41MSAxMy4zNjUgMTUuMTI1IDEyLjg3NSAxNS4xMjVaTTI1LjEyNSAxNS4xMjVDMjQuNjM1IDE1LjEyNSAyNC4yNSAxNS41MSAyNC4yNSAxNkMyNC4yNSAxNi40OSAyNC42MzUgMTYuODc1IDI1LjEyNSAxNi44NzVDMjUuNjE1IDE2Ljg3NSAyNiAxNi40OSAyNiAxNkMyNiAxNS41MSAyNS42MTUgMTUuMTI1IDI1LjEyNSAxNS4xMjVaTTE0LjYyNSAxOS41QzE0LjEzNSAxOS41IDEzLjc1IDE5Ljg4NSAxMy43NSAyMC4zNzVDMTMuNzUgMjAuODY1IDE0LjEzNSAyMS4yNSAxNC42MjUgMjEuMjVDMTUuMTE1IDIxLjI1IDE1LjUgMjAuODY1IDE1LjUgMjAuMzc1QzE1LjUgMTkuODg1IDE1LjExNSAxOS41IDE0LjYyNSAxOS41Wk0yMy4zNzUgMTkuNUMyMi44ODUgMTkuNSAyMi41IDE5Ljg4NSAyMi41IDIwLjM3NUMyMi41IDIwLjg2NSAyMi44ODUgMjEuMjUgMjMuMzc1IDIxLjI1QzIzLjg2NSAyMS4yNSAyNC4yNSAyMC44NjUgMjQuMjUgMjAuMzc1QzI0LjI1IDE5Ljg4NSAyMy44NjUgMTkuNSAyMy4zNzUgMTkuNVpNMTkgMjEuMjVDMTguNTEgMjEuMjUgMTguMTI1IDIxLjYzNSAxOC4xMjUgMjIuMTI1QzE4LjEyNSAyMi42MTUgMTguNTEgMjMgMTkgMjNDMTkuNDkgMjMgMTkuODc1IDIyLjYxNSAxOS44NzUgMjIuMTI1QzE5Ljg3NSAyMS42MzUgMTkuNDkgMjEuMjUgMTkgMjEuMjVaIiBmaWxsPSIjRkZGRUZCIi8+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2ZfN184NSIgeD0iNiIgeT0iMiIgd2lkdGg9IjI3LjA0NzYiIGhlaWdodD0iMjcuMDQ3NiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfN184NSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K")
       `, 
        'div': {
        marginLeft: 3,
        }
      },
    },
    toggleSmallDayNightV2: {
      
    }
  }
}