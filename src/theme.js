

export const theme = {
  spaces:[ 0, 2, 4, 8, 12, 14, 16, 18, 21, 24, 28, 32, 36, 40, 42, 46, 48, 52, 56, 60, 64, 72, 78, 80], 
  
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

/* Light/Night Mode */
  config: {
    initialColorModeName: 'light',
  },
/* Colors */
  colors: {
    lightMode: {
      primary: '#6044B5',
      primaryDisabled: '#bcb1dc',
      second: '#4C3A80',
      secondVariant: '#6E6893',
      background: '#FFFEFB',
      textColor: '#08011C',
      textColorV2: '#585858',
      errors: '#C12945',
      errorsDisabled: '#d48092',
      positive1: '#26962B',
      positive1Disabled: '#8ac18e',
      positive2: '#9AE79D',
      black: '#000000',
      white: '#FFFFFF',
      errorInput: '#700519',
    },

  check: {
    background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjIyIiByeD0iMyIgZmlsbD0iIzRDM0E4MCIgc3Ryb2tlPSIjNEMzQTgwIiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTE3LjkyMzMgNy42NDQ4M0MxNy4xODAxIDYuOTE3MDQgMTUuOTc4NSA2LjkyOTA4IDE1LjI1ODggNy42ODAxM1Y3LjY4MDEzTDExLjM3OTIgMTEuNTU5N0MxMC42MDg2IDEyLjMzMDQgOS4zNjI3NiAxMi4zNDIxIDguNTc3NzEgMTEuNTg2MUw4LjQ1NjY5IDExLjQ2OTZMOC40MjgyNyAxMS40NDEyQzcuNjkwNTMgMTAuNzAzNCA2LjQ5NDQyIDEwLjcwMzQgNS43NTY2OSAxMS40NDEyVjExLjQ0MTJDNS4wMTg5NSAxMi4xNzg5IDUuMDE4OTUgMTMuMzc1IDUuNzU2NjkgMTQuMTEyOEw1Ljc4NTExIDE0LjE0MTJMOC42MjcyMSAxNi45ODMzVjE2Ljk4MzNDOS4zNDQ3MSAxNy43MzIgMTAuNTM3NCAxNy43NDQ3IDExLjI3MDcgMTcuMDExNEwxMS4yOTg4IDE2Ljk4MzNMMTcuOTMwNCAxMC4zNTE3TDE3Ljk0NDcgMTAuMzM3NEMxOC42ODc5IDkuNTk0MTkgMTguNjc0NCA4LjM4MDIgMTcuOTIzMyA3LjY0NDgzVjcuNjQ0ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K")
    no-repeat center center`,
    backgroundDisabled: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjIyIiByeD0iMyIgZmlsbD0iI0FBQUFBQSIgc3Ryb2tlPSIjQzVDNUM1IiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTE3LjI4ODQgNy4wMjMxQzE2Ljg5MDggNi42MzM3NyAxNi4yNTE4IDYuNjQzOTMgMTUuODY2OCA3LjA0NTcxTDE1LjI1ODggNy42ODAxM0wxMC42ODUzIDEyLjI1MzZDMTAuMyAxMi42Mzg5IDkuNjc3MDkgMTIuNjQ0OCA5LjI4NDU3IDEyLjI2NjhMOC40NTY2OSAxMS40Njk2TDcuNzk5NTggMTAuODEyNUM3LjQwOTA2IDEwLjQyMiA2Ljc3NTg5IDEwLjQyMiA2LjM4NTM3IDEwLjgxMjVMNS4xMjgwMSAxMi4wNjk5QzQuNzM3NDggMTIuNDYwNCA0LjczNzQ4IDEzLjA5MzYgNS4xMjgwMSAxMy40ODQxTDUuNzg1MTEgMTQuMTQxMkw4LjYyNzIxIDE2Ljk4MzNMOS4yMjc4IDE3LjYxQzkuNjE1NjkgMTguMDE0NyAxMC4yNjA1IDE4LjAyMTYgMTAuNjU2OSAxNy42MjUyTDExLjI5ODggMTYuOTgzM0wxNy45MzA0IDEwLjM1MTdMMTguNTggOS43MDIwOUMxOC45NzM0IDkuMzA4NjUgMTguOTcwMSA4LjY2OTc0IDE4LjU3MjUgOC4yODA0N0wxNy4yODg0IDcuMDIzMVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=")
    no-repeat center center`,
  },
  radio: {
    primary: '#4C3A80',
    borderColor: '#4C3A80',
    backgroundColor: '#ffffff',
    bColor: '#4C3A80',
    disabled: '#C5C5C5',
    disabledBorder: '#B4B4B4',
    background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjciIGZpbGw9IiM0QzNBODAiLz4KPC9zdmc+Cg==")
    no-repeat center center`
  },
  test: {
    bColor: '#4C3A80',
    
  },
  field:{
    background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDBDNC41IDAgMyAxLjUgMyAxLjVWNy42MzVDMi43NzUgNy41NiAyLjUwNSA3LjUgMi4yNSA3LjVDMS4wMDUgNy41IDAgOC41MDUgMCA5Ljc1QzAgMTAuOTk1IDEuMDA1IDEyIDIuMjUgMTJDMy40OTUgMTIgNC41IDEwLjk5NSA0LjUgOS43NVYzLjc5NUM1LjU5NSAzLjQ1IDcuNDg1IDMuMTM1IDEwLjUgMy4wNDVWNi4xMzVDMTAuMjc1IDYuMDYgMTAuMDA1IDYgOS43NSA2QzguNTA1IDYgNy41IDcuMDA1IDcuNSA4LjI1QzcuNSA5LjQ5NSA4LjUwNSAxMC41IDkuNzUgMTAuNUMxMC45OTUgMTAuNSAxMiA5LjQ5NSAxMiA4LjI1VjBaIiBmaWxsPSIjNTg1ODU4Ii8+Cjwvc3ZnPgo=")
    no-repeat 16px center
    `,
    backgroundColor: 'white',
    borderColorClick: '#aca4c5',
    borderColor: '#d5d5d5',
    disabled: '#d3d2d3',
    disabledBorder: '#c5c5c5',
    errorBorder: '#d16b7f',
    placeholder: '#A3A3A3',
    errorBackground: '#e6ced7',
    errorBg:  `
    url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDBDNC41IDAgMyAxLjUgMyAxLjVWNy42MzVDMi43NzUgNy41NiAyLjUwNSA3LjUgMi4yNSA3LjVDMS4wMDUgNy41IDAgOC41MDUgMCA5Ljc1QzAgMTAuOTk1IDEuMDA1IDEyIDIuMjUgMTJDMy40OTUgMTIgNC41IDEwLjk5NSA0LjUgOS43NVYzLjc5NUM1LjU5NSAzLjQ1IDcuNDg1IDMuMTM1IDEwLjUgMy4wNDVWNi4xMzVDMTAuMjc1IDYuMDYgMTAuMDA1IDYgOS43NSA2QzguNTA1IDYgNy41IDcuMDA1IDcuNSA4LjI1QzcuNSA5LjQ5NSA4LjUwNSAxMC41IDkuNzUgMTAuNUMxMC45OTUgMTAuNSAxMiA5LjQ5NSAxMiA4LjI1VjBaIiBmaWxsPSIjNTg1ODU4Ii8+Cjwvc3ZnPgo=")
    no-repeat left 16px center, 
    url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEiIHN0cm9rZT0iI0MxMjk0NSIgc3Ryb2tlLW9wYWNpdHk9IjAuNyIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjExIiB5PSI1IiB3aWR0aD0iMiIgaGVpZ2h0PSIxMCIgcng9IjEiIGZpbGw9IiNDMTI5NDUiIGZpbGwtb3BhY2l0eT0iMC43Ii8+CjxyZWN0IHg9IjExIiB5PSIxNyIgd2lkdGg9IjIiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IiNDMTI5NDUiIGZpbGwtb3BhY2l0eT0iMC43Ii8+Cjwvc3ZnPgo=")
    no-repeat right 16px center`,
    searchBg: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMjU3NSAwLjAwNzVDNS4yNTI3IDAuMDEyMzAyMiA1LjI0NjEzIDAuMDE0OTk3MSA1LjIzOTMzIDAuMDE1MDEwN0MyLjM0OTIyIDAuMDIwNzg2IDAgMi4zNzM1NiAwIDUuMjY1QzAgOC4xNiAyLjM1NSAxMC41MTUgNS4yNSAxMC41MTVDNi4wMzgyNCAxMC41MTUgNi44MTQ1OCAxMC4zNDg0IDcuNDk0MjMgMTAuMDI1OEM3LjYzOTA0IDkuOTU3MSA3LjgxMTcyIDkuOTkyNTYgNy45MzUgMTAuMDk1VjEwLjA5NUw5LjQzNSAxMS41OTVDOS41NzM1MSAxMS43NTA5IDkuNzQyNCAxMS44NzY3IDkuOTMxMzMgMTEuOTY1QzEwLjEyMDIgMTIuMDUzMiAxMC4zMjUyIDEyLjEwMTggMTAuNTMzNiAxMi4xMDhDMTAuNzQyIDEyLjExNDEgMTAuOTQ5NSAxMi4wNzc2IDExLjE0MzMgMTIuMDAwNkMxMS4zMzcxIDExLjkyMzcgMTEuNTEzMSAxMS44MDc5IDExLjY2MDUgMTEuNjYwNUMxMS44MDc5IDExLjUxMzEgMTEuOTIzNyAxMS4zMzcxIDEyLjAwMDYgMTEuMTQzM0MxMi4wNzc2IDEwLjk0OTUgMTIuMTE0MSAxMC43NDIgMTIuMTA4IDEwLjUzMzZDMTIuMTAxOCAxMC4zMjUyIDEyLjA1MzIgMTAuMTIwMiAxMS45NjUgOS45MzEzM0MxMS44NzY3IDkuNzQyNCAxMS43NTA5IDkuNTczNTEgMTEuNTk1IDkuNDM1TDEwLjA5NSA3LjkzNVY3LjkzNUM5Ljk3MTQ2IDcuODExNDIgOS45MjEyMSA3LjYyMjE3IDkuOTk2ODcgNy40NjQ2NkMxMC4zMTg2IDYuNzk0ODggMTAuNTE1IDYuMDM5NzcgMTAuNTE1IDUuMjVDMTAuNTE1IDIuMzU4NTYgOC4xNjU3OCAwLjAwNTc4NTk4IDUuMjc1NjcgMS4wNjU1M2UtMDVDNS4yNjg4NyAtMi45MTU3NGUtMDYgNS4yNjIzIDAuMDAyNjk3ODMgNS4yNTc1IDAuMDA3NVYwLjAwNzVaTTUuMjQyNSAxLjUyMjVDNS4yNDczIDEuNTE3NyA1LjI1Mzg4IDEuNTE1IDUuMjYwNjcgMS41MTUwMUM3LjM0MDY4IDEuNTIwNjggOSAzLjE4MzU2IDkgNS4yNjVDOSA2LjI1NSA4LjY0IDcuMTcgOC4wMSA3Ljg0NUM3Ljk5NSA3Ljg2IDcuOTggNy44NzUgNy45NjUgNy44OUM3Ljg5NDE1IDcuOTQ4ODcgNy44Mjg4NyA4LjAxNDE1IDcuNzcgOC4wODVDNy4xMSA4LjY4NSA2LjIxIDkuMDMgNS4yMzUgOS4wM0MzLjE1IDkuMDMgMS40ODUgNy4zNjUgMS40ODUgNS4yOEMxLjQ4NSAzLjE5ODU2IDMuMTQ0MzIgMS41MzU2OCA1LjIyNDMzIDEuNTMwMDFDNS4yMzExMiAxLjUzIDUuMjM3NyAxLjUyNzMgNS4yNDI1IDEuNTIyNVYxLjUyMjVaIiBmaWxsPSIjNkI2Mjc4Ii8+Cjwvc3ZnPgo=")
          no-repeat 16px center
          `,
  },
  toggle: {
    bgDeactive: '#C2C9D1',
    bgActive: '#3CC13B',
  },
    text: 'black',
    textButtonDisabled: '#ded8ee',
    background: 'white',
    
    modes: {
      dark: {
        darkMode: {
          primary: '#7b4eff',
          primaryDisabled: '#493683',
          second: '#4C3A80',
          secondVariant: '#6E6893',
          background: '#FFFEFB',
          textColor: '#08011C',
          textColorV2: '#585858',
          errors: '#C12945',
          errorsDisabled: '#7f2943',
          positive1: '#26962B',
          positive1Disabled: '#2b6035',
          positive2: '#9AE79D',
          black: '#000000',
          white: '#FFFFFF',
          errorInput: '#700519',
        },
        darkModePurple: {
          highLight: '#2b6035',
          purple: '#7B4EFF'
        },
        check: {
          background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzFfMTMpIj4KPHBhdGggZD0iTTIwIDFINEMyLjM0MzE1IDEgMSAyLjM0MzE1IDEgNFYyMEMxIDIxLjY1NjkgMi4zNDMxNSAyMyA0IDIzSDIwQzIxLjY1NjkgMjMgMjMgMjEuNjU2OSAyMyAyMFY0QzIzIDIuMzQzMTUgMjEuNjU2OSAxIDIwIDFaIiBmaWxsPSIjN0I0RUZGIiBzdHJva2U9IiM3QjRFRkYiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTcuOTIzMyA3LjY0NDgzQzE3LjE4MDEgNi45MTcwNCAxNS45Nzg1IDYuOTI5MDggMTUuMjU4OCA3LjY4MDEzTDExLjM3OTIgMTEuNTU5N0MxMC42MDg2IDEyLjMzMDQgOS4zNjI3NiAxMi4zNDIxIDguNTc3NzEgMTEuNTg2MUw4LjQ1NjY5IDExLjQ2OTZMOC40MjgyNyAxMS40NDEyQzcuNjkwNTMgMTAuNzAzNCA2LjQ5NDQyIDEwLjcwMzQgNS43NTY2OSAxMS40NDEyQzUuMDE4OTUgMTIuMTc4OSA1LjAxODk1IDEzLjM3NSA1Ljc1NjY5IDE0LjExMjhMNS43ODUxMSAxNC4xNDEyTDguNjI3MjEgMTYuOTgzM0M5LjM0NDcxIDE3LjczMiAxMC41Mzc0IDE3Ljc0NDcgMTEuMjcwNyAxNy4wMTE0TDExLjI5ODggMTYuOTgzM0wxNy45MzA0IDEwLjM1MTdMMTcuOTQ0NyAxMC4zMzc0QzE4LjY4NzkgOS41OTQxOSAxOC42NzQ0IDguMzgwMiAxNy45MjMzIDcuNjQ0ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzFfMTMiPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==")
          no-repeat center center`,
          backgroundDisabled: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjIyIiByeD0iMSIgZmlsbD0iI0M1QzVDNSIvPgo8cGF0aCBkPSJNMTguMzQ2MyA3LjUzNjM1QzE3LjU2NjUgNi44MDk1MiAxNi4zMDU3IDYuODIxNTQgMTUuNTUwNSA3LjU3MTZMMTEuNDc5OSAxMS40NDYxQzEwLjY3MTQgMTIuMjE1OCA5LjM2NDE5IDEyLjIyNzQgOC41NDA0OCAxMS40NzI0TDguNDEzNSAxMS4zNTYxTDguMzgzNjggMTEuMzI3N0M3LjYwOTYxIDEwLjU5MDkgNi4zNTQ2MSAxMC41OTA5IDUuNTgwNTUgMTEuMzI3N0M0LjgwNjQ4IDEyLjA2NDUgNC44MDY0OCAxMy4yNTkgNS41ODA1NSAxMy45OTU4TDUuNjEwMzcgMTQuMDI0Mkw4LjU5MjQyIDE2Ljg2MjZDOS4zNDUyNSAxNy42MTAzIDEwLjU5NjcgMTcuNjIzIDExLjM2NjEgMTYuODkwNkwxMS4zOTU2IDE2Ljg2MjZMMTguMzUzNyAxMC4yMzk3TDE4LjM2ODcgMTAuMjI1NEMxOS4xNDg1IDkuNDgzMTUgMTkuMTM0MyA4LjI3MDc2IDE4LjM0NjMgNy41MzYzNVoiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjEiIHk9IjEiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgcng9IjEiIHN0cm9rZT0iI0M1QzVDNSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=")
          no-repeat center center`,
        },
        radio: {
          primary: '#A8A1B8',
          backgroundColor: '#A8A1B8',
          bColor: '#7b4eff',
          borderColor: '#C7BED7',
          disabled: '#C5C5C5',
          disabledBorder: '#B4B4B4',
          background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTRDMTAuODY2IDE0IDE0IDEwLjg2NiAxNCA3QzE0IDMuMTM0MDEgMTAuODY2IDAgNyAwQzMuMTM0MDEgMCAwIDMuMTM0MDEgMCA3QzAgMTAuODY2IDMuMTM0MDEgMTQgNyAxNFoiIGZpbGw9IiM3QjRFRkYiLz4KPC9zdmc+Cg==")
          no-repeat center center`
        },
        test: {
          borderColor: '#7b4eff',
        },
        field:{
          background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDBDNC41IDAgMyAxLjUgMyAxLjVWNy42MzVDMi43NzUgNy41NiAyLjUwNSA3LjUgMi4yNSA3LjVDMS4wMDUgNy41IDAgOC41MDUgMCA5Ljc1QzAgMTAuOTk1IDEuMDA1IDEyIDIuMjUgMTJDMy40OTUgMTIgNC41IDEwLjk5NSA0LjUgOS43NVYzLjc5NUM1LjU5NSAzLjQ1IDcuNDg1IDMuMTM1IDEwLjUgMy4wNDVWNi4xMzVDMTAuMjc1IDYuMDYgMTAuMDA1IDYgOS43NSA2QzguNTA1IDYgNy41IDcuMDA1IDcuNSA4LjI1QzcuNSA5LjQ5NSA4LjUwNSAxMC41IDkuNzUgMTAuNUMxMC45OTUgMTAuNSAxMiA5LjQ5NSAxMiA4LjI1VjBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K")
          no-repeat 16px center
          `,
          backgroundColor: '#282437',
          borderColor: '#332F41',
          borderColorClick: '#A689FF',
          disabled: '#5F5B6C',
          disabledBorder: '#73717D',
          errorBorder: '#AD2944',
          placeholder: '#FFFFFF',
          errorBackground: '#5B2943',
          errorBg:  `
          url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDBDNC41IDAgMyAxLjUgMyAxLjVWNy42MzVDMi43NzUgNy41NiAyLjUwNSA3LjUgMi4yNSA3LjVDMS4wMDUgNy41IDAgOC41MDUgMCA5Ljc1QzAgMTAuOTk1IDEuMDA1IDEyIDIuMjUgMTJDMy40OTUgMTIgNC41IDEwLjk5NSA0LjUgOS43NVYzLjc5NUM1LjU5NSAzLjQ1IDcuNDg1IDMuMTM1IDEwLjUgMy4wNDVWNi4xMzVDMTAuMjc1IDYuMDYgMTAuMDA1IDYgOS43NSA2QzguNTA1IDYgNy41IDcuMDA1IDcuNSA4LjI1QzcuNSA5LjQ5NSA4LjUwNSAxMC41IDkuNzUgMTAuNUMxMC45OTUgMTAuNSAxMiA5LjQ5NSAxMiA4LjI1VjBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K")
              no-repeat left 16px center, 
          url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEiIHN0cm9rZT0iI0MxMjk0NSIgc3Ryb2tlLW9wYWNpdHk9IjAuNyIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjExIiB5PSI1IiB3aWR0aD0iMiIgaGVpZ2h0PSIxMCIgcng9IjEiIGZpbGw9IiNDMTI5NDUiIGZpbGwtb3BhY2l0eT0iMC43Ii8+CjxyZWN0IHg9IjExIiB5PSIxNyIgd2lkdGg9IjIiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IiNDMTI5NDUiIGZpbGwtb3BhY2l0eT0iMC43Ii8+Cjwvc3ZnPgo=")
              no-repeat right 16px center`,
          searchBg: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMjU3NSAwLjAwNzVDNS4yNTI3IDAuMDEyMzAyMiA1LjI0NjEzIDAuMDE0OTk3MSA1LjIzOTMzIDAuMDE1MDEwN0MyLjM0OTIyIDAuMDIwNzg2IDAgMi4zNzM1NiAwIDUuMjY1QzAgOC4xNiAyLjM1NSAxMC41MTUgNS4yNSAxMC41MTVDNi4wMzgyNCAxMC41MTUgNi44MTQ1OCAxMC4zNDg0IDcuNDk0MjMgMTAuMDI1OEM3LjYzOTA0IDkuOTU3MSA3LjgxMTcyIDkuOTkyNTYgNy45MzUgMTAuMDk1VjEwLjA5NUw5LjQzNSAxMS41OTVDOS41NzM1MSAxMS43NTA5IDkuNzQyNCAxMS44NzY3IDkuOTMxMzMgMTEuOTY1QzEwLjEyMDIgMTIuMDUzMiAxMC4zMjUyIDEyLjEwMTggMTAuNTMzNiAxMi4xMDhDMTAuNzQyIDEyLjExNDEgMTAuOTQ5NSAxMi4wNzc2IDExLjE0MzMgMTIuMDAwNkMxMS4zMzcxIDExLjkyMzcgMTEuNTEzMSAxMS44MDc5IDExLjY2MDUgMTEuNjYwNUMxMS44MDc5IDExLjUxMzEgMTEuOTIzNyAxMS4zMzcxIDEyLjAwMDYgMTEuMTQzM0MxMi4wNzc2IDEwLjk0OTUgMTIuMTE0MSAxMC43NDIgMTIuMTA4IDEwLjUzMzZDMTIuMTAxOCAxMC4zMjUyIDEyLjA1MzIgMTAuMTIwMiAxMS45NjUgOS45MzEzM0MxMS44NzY3IDkuNzQyNCAxMS43NTA5IDkuNTczNTEgMTEuNTk1IDkuNDM1TDEwLjA5NSA3LjkzNVY3LjkzNUM5Ljk3MTQ2IDcuODExNDIgOS45MjEyMSA3LjYyMjE3IDkuOTk2ODcgNy40NjQ2NkMxMC4zMTg2IDYuNzk0ODggMTAuNTE1IDYuMDM5NzcgMTAuNTE1IDUuMjVDMTAuNTE1IDIuMzU4NTYgOC4xNjU3OCAwLjAwNTc4NTk4IDUuMjc1NjcgMS4wNjU1M2UtMDVDNS4yNjg4NyAtMi45MTU3NGUtMDYgNS4yNjIzIDAuMDAyNjk3ODMgNS4yNTc1IDAuMDA3NVYwLjAwNzVaTTUuMjQyNSAxLjUyMjVDNS4yNDczIDEuNTE3NyA1LjI1Mzg4IDEuNTE1IDUuMjYwNjcgMS41MTUwMUM3LjM0MDY4IDEuNTIwNjggOSAzLjE4MzU2IDkgNS4yNjVDOSA2LjI1NSA4LjY0IDcuMTcgOC4wMSA3Ljg0NUM3Ljk5NSA3Ljg2IDcuOTggNy44NzUgNy45NjUgNy44OUM3Ljg5NDE1IDcuOTQ4ODcgNy44Mjg4NyA4LjAxNDE1IDcuNzcgOC4wODVDNy4xMSA4LjY4NSA2LjIxIDkuMDMgNS4yMzUgOS4wM0MzLjE1IDkuMDMgMS40ODUgNy4zNjUgMS40ODUgNS4yOEMxLjQ4NSAzLjE5ODU2IDMuMTQ0MzIgMS41MzU2OCA1LjIyNDMzIDEuNTMwMDFDNS4yMzExMiAxLjUzIDUuMjM3NyAxLjUyNzMgNS4yNDI1IDEuNTIyNVYxLjUyMjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K")
          no-repeat 16px center
          `,
        },
        toggle: {
          bgDeactive: '#B4B4B4',
          bgActive: '#3CC13B',
        },
        text: 'white',
        textButtonDisabled: '#ded8ee',
        background: '#2e2840',
      }
    }
  },
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
    },
    body: {
        fontFamily: 'heading.1',
        fontWeight: 'heading.0',
    }
  },
/* Fields */
field: {
  text: {
    width: '314px',
    height: '50px',
    border: '2px solid',
    borderColor: 'field.borderColor',
    boxShadow: '2px 5px 10px rgba(76, 58, 128, 0.25)',
    borderRadius: '6px',
    background: 'field.background',
    backgroundColor: 'field.backgroundColor',
    margin: 10,
    textIndent: '32px',
    '&::placeholder':{
      fontFamily: 'body.1',
      fontSize: 2,
      fontWeight: 2,
      letterSpacing: 0,
      color: 'field.placeholder',
     
    },
    '&:focus':{
    outline:'none',
    borderColor:'field.borderColorClick',
    },
      '&:disabled': {
      backgroundColor: 'field.disabled',
      borderColor: 'field.disabledBorder',
      cursor: 'not-allowed'
    }, 
   
  },
  textError: {
    variant: 'field.text',
      borderColor: 'field.disabledBorder',
      background: 'field.errorBg',
/*         backgroundPosition: 'left 16px center, right 16px center',
        backgroundRepeat: 'no-repeat, no-repeat', */
        backgroundColor: 'field.errorBackground',
  },
  search: {
    variant: 'field.text',
    width: '240px',
    height: '50px',
    background: 'field.searchBg',
    '&:focus':{
      outline:'none',
      borderColor:'#9b91b8',
      },
  }
},
/* Radio */
  radio: {
    width: '24px' ,
    height: '24px',
    border: '2px solid',
    borderColor: 'radio.borderColor',
    backgroundColor: 'radio.backgroundColor',
    boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.25)',

    color: 'radio.primary',
    "> path": {
      fill: "none",  
     d: 'circle cx="6.75" cy:"6.75" r="6.75" '
     },
    'input:checked ~ &':{
      borderColor: 'radio.bColor',
      background: 'radio.background',
     /*  color: 'radio.primary', */
    },
    'input:disabled ~ &': {
      width: '24px',
      height: '24px',
      cursor: 'not-allowed',
      background: 'radio.disabled',
      border: '2px solid' ,
      borderColor: 'radio.disabledBorder'
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
      background: 'check.background',
    },
    'input:disabled ~ &': {
      width: '24px',
      height: '24px',
      cursor: 'not-allowed',
      border: '2px solid #C5C5C5',
      background: 'check.backgroundDisabled',
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
    backgroundColor: 'lightMode.primary',
    border: '2px solid lightMode.primary',
    boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
    margin: 2,
    padding: '0',

    '&:hover': {
      backgroundColor: "transparent",
      color: "lightMode.primary",
      border: '2px solid',
      borderColor: "lightMode.primary",

    },
    '&:disabled': {
      backgroundColor: 'lightMode.primaryDisabled',
      color: "textButtonDisabled",
      '&:hover': {
        cursor: 'not-allowed',
        backgroundColor: "none",
        color: "none",
        border: 'none',
        borderColor: "none",
      },
    },
    '&:focus': {
      backgroundColor: 'lightMode.second',
      color: 'white'
    }
  },
  activeMedium: {
    variant: 'buttons.primary',
    width: '150px',
    height: '50px',
    fontFamily: 'body.1',
    fontStyle: 'normal',
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
      backgroundColor: 'lightMode.errorsDisabled',
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
      color: 'lightMode.white'
    },
    '&:disabled': {
      backgroundColor: 'lightMode.positive1Disabled',
      '&:hover': {
        cursor: 'not-allowed',
        backgroundColor: "none",
        color: "none",
        border: 'none',
        borderColor: "none",
        color: "lightMode.white",
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
      backgroundColor: 'toggle.bgDeactive',
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
        backgroundColor: 'toggle.bgActive',
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
        backgroundColor: 'toggle.bgActive',
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
      width: '68px',
      height: '32px',
      variant: 'switchs.toggleSmall',
      background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA2OCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY4IiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiM0QzNBODAiLz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZl8xMV8xMTkpIj4KPGNpcmNsZSBjeD0iNDguNSIgY3k9IjE2LjUiIHI9IjEwLjUiIGZpbGw9IiNFQ0U4RjYiIGZpbGwtb3BhY2l0eT0iMC4zIi8+CjwvZz4KPHBhdGggZD0iTTQ3LjUwOTUgMTBDNDcuNTA5NSAxMCA0Ny41MDk1IDEwIDQ3LjUwOTUgMTBDNDQuODkgMTAuODc4NyA0MyAxMy4zNDg5IDQzIDE2LjI2NjhDNDMgMTkuOTMwOCA0NS45Njc2IDIyLjg5ODQgNDkuNjMxNiAyMi44OTg0QzUxLjg0MTkgMjIuODk4NCA1My43OTU0IDIxLjgxMzkgNTQuOTk0OCAyMC4xNDkzQzU1LjQ3NSAxOS40ODI4IDU0Ljc3MzUgMTguNzI1NCA1My45NTI1IDE4Ljc1MDlDNTMuODk0IDE4Ljc1MjggNTMuODM1MiAxOC43NTM3IDUzLjc3NjMgMTguNzUzN0M1MC4xMTI0IDE4Ljc1MzcgNDcuMTQ0NyAxNS43ODYxIDQ3LjE0NDcgMTIuMTIyMUM0Ny4xNDQ3IDExLjM3NjEgNDcuMjc3NCAxMC42NjMyIDQ3LjUwOTUgMTBDNDcuNTA5NSAxMCA0Ny41MDk1IDEwIDQ3LjUwOTUgMTBWMTBaIiBmaWxsPSIjRkZGRUZCIi8+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2ZfMTFfMTE5IiB4PSIzNiIgeT0iNCIgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xMV8xMTkiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg=="), 
      no-repeat, center center`,
      
      'div': {
        marginLeft: 2,
        width: '26px',
        height: '26px',
      },
      'input:checked ~ &': {
        background: `
        url("data:image/svg+xml;base64,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")
        no-repeat, left center, 
        
        url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA2OCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY4IiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiNGOUQxODMiLz4KPC9zdmc+Cg=="),
        no-repeat, center center`, 
        backgroundPosition: '15% center',
        backgroundRepeat: 'no-repeat, repeat',
        'div': {
        marginLeft: 3,
        }
      },
    },
    toggleSmallDayNightV2: {
      
    }
  }
}