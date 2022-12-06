import { Theme } from "theme-ui";

import moonBig from '../static/svg/moonBig.svg'
import backgroundV2Big from '../static/svg/backgroundV2Big.svg'
import backgroundV1BigMoon from '../static/svg/backgroundV1BigMoon.svg'
import backgroundV1BigSun from '../static/svg/backgroundV1BigSun.svg'
import backgroundV1SmallMoon from '../static/svg/backgroundV1SmallMoon.svg'
import backgroundV1SmallSun from '../static/svg/backgroundV1SmallSun.svg'
import backgroundV2BigLight from '../static/svg/backgroundV2BigLight.svg'
import backgroundV2BigSun from '../static/svg/backgroundV2BigSun.svg'
import bgV2SmallDark from '../static/svg/bgV2SmallDark.svg'
import moonSmall from '../static/svg/moonSmall.svg'
import bgV2SmallLight from '../static/svg/bgV2SmallLight.svg'
import bgV2SmallSun from '../static/svg/bgV2SmallSun.svg'
import logoBlack from '../static/logoBlack.png'
import logoWhite from '../static/logoWhite.png'

const daisy = {
  color: [
    "#ECE8F6",
    "#CFC6E8",
    "#B0A1DA",
    "#917BCC",
    "#785EC0",
    "#6044B5",
    "#573FAF",
    "#4A37A6",
    "#3F319D",
    "#2B268D",
  ],
};
const oath = {
  color: [
    "#FFF4FF",
    "#FAF2FF",
    "#F5ECFE",
    "#E9E1FA",
    "#C7BED7",
    "#A8A1B8",
    "#7E778D",
    "#6B6278",
    "#4A4458",
    "#292336",
  ],
};
const noRep = {
  second: "#4C3A80",
  secondVariant: "#6E6893",
  disabled: "#C5C5C5",
  disabledV2: "#B4B4B4",
  errorInput: "#700519",
  black: "#000000",
  white: "#FFFFFF",
  darkPrimary: "#4C3A80",
  darkSecond: "#7B4EFF",
  badge: "#565555",
  badgeBorder: "#5E4D8C",
  badgeError: "#FFC34E",
};

const colors: Theme["colors"] = {
  config: {
    initialColorModeName: "light",
  },

  default: {
    primary: daisy.color[5],
    primaryDisabled: "#BCB1DC",
    second: noRep.second,
    secondVariant: noRep.secondVariant,
    textColor: "#08011C",
    textColorV2: "#585858",
    errors: "#C12945",
    errorsDisabled: "#D48092",
    positive1: "#26962B",
    positive1Disabled: "#8AC18E",
    positive2: "#9AE79D",
    black: noRep.black,
    white: noRep.white,
    errorInput: noRep.errorInput,
    headerImg: `url(${logoBlack})`,
    overlay: 'none',
  },
  background: "#EDEBF1",
  text: {
    primary: noRep.black,
    overline: oath.color[5],
    titleCard: daisy.color[5],
  },
  badge: {
    inActive: "#F03738",
    active: "#3CC13B",
    selectedBg: noRep.white,
    bg: noRep.second,
    error: "#CC9428",
    disabled: noRep.disabledV2,
    primary: "#4B88CF",
    secondary: oath.color[4],
    /* Border Unlist */
    border: "#443F54",
    inActiveBorder: "#EED9DF",
    activeBorder: "#DAE6D9",
    borderTwo: noRep.badgeBorder,
    errorBorder: "#EAE3DD",
    disabledBorder: "#E3E2E2",
    primaryBorder: "#DBE1E8",
    selectedBorder: "#D8F3D8",
  },
  check: {
    borderColor: "#9D93B9",
    background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjIyIiByeD0iMyIgZmlsbD0iIzRDM0E4MCIgc3Ryb2tlPSIjNEMzQTgwIiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTE3LjkyMzMgNy42NDQ4M0MxNy4xODAxIDYuOTE3MDQgMTUuOTc4NSA2LjkyOTA4IDE1LjI1ODggNy42ODAxM1Y3LjY4MDEzTDExLjM3OTIgMTEuNTU5N0MxMC42MDg2IDEyLjMzMDQgOS4zNjI3NiAxMi4zNDIxIDguNTc3NzEgMTEuNTg2MUw4LjQ1NjY5IDExLjQ2OTZMOC40MjgyNyAxMS40NDEyQzcuNjkwNTMgMTAuNzAzNCA2LjQ5NDQyIDEwLjcwMzQgNS43NTY2OSAxMS40NDEyVjExLjQ0MTJDNS4wMTg5NSAxMi4xNzg5IDUuMDE4OTUgMTMuMzc1IDUuNzU2NjkgMTQuMTEyOEw1Ljc4NTExIDE0LjE0MTJMOC42MjcyMSAxNi45ODMzVjE2Ljk4MzNDOS4zNDQ3MSAxNy43MzIgMTAuNTM3NCAxNy43NDQ3IDExLjI3MDcgMTcuMDExNEwxMS4yOTg4IDE2Ljk4MzNMMTcuOTMwNCAxMC4zNTE3TDE3Ljk0NDcgMTAuMzM3NEMxOC42ODc5IDkuNTk0MTkgMTguNjc0NCA4LjM4MDIgMTcuOTIzMyA3LjY0NDgzVjcuNjQ0ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K")
    no-repeat center center`,
    backgroundDisabled: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjIyIiByeD0iMyIgZmlsbD0iI0FBQUFBQSIgc3Ryb2tlPSIjQzVDNUM1IiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTE3LjI4ODQgNy4wMjMxQzE2Ljg5MDggNi42MzM3NyAxNi4yNTE4IDYuNjQzOTMgMTUuODY2OCA3LjA0NTcxTDE1LjI1ODggNy42ODAxM0wxMC42ODUzIDEyLjI1MzZDMTAuMyAxMi42Mzg5IDkuNjc3MDkgMTIuNjQ0OCA5LjI4NDU3IDEyLjI2NjhMOC40NTY2OSAxMS40Njk2TDcuNzk5NTggMTAuODEyNUM3LjQwOTA2IDEwLjQyMiA2Ljc3NTg5IDEwLjQyMiA2LjM4NTM3IDEwLjgxMjVMNS4xMjgwMSAxMi4wNjk5QzQuNzM3NDggMTIuNDYwNCA0LjczNzQ4IDEzLjA5MzYgNS4xMjgwMSAxMy40ODQxTDUuNzg1MTEgMTQuMTQxMkw4LjYyNzIxIDE2Ljk4MzNMOS4yMjc4IDE3LjYxQzkuNjE1NjkgMTguMDE0NyAxMC4yNjA1IDE4LjAyMTYgMTAuNjU2OSAxNy42MjUyTDExLjI5ODggMTYuOTgzM0wxNy45MzA0IDEwLjM1MTdMMTguNTggOS43MDIwOUMxOC45NzM0IDkuMzA4NjUgMTguOTcwMSA4LjY2OTc0IDE4LjU3MjUgOC4yODA0N0wxNy4yODg0IDcuMDIzMVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=")
    no-repeat center center`,
    borderDisabled: noRep.disabled,
  },
  radio: {
    borderColor: oath.color[6],
    bg: "transparent",
    clicked: noRep.second,
    disabled: noRep.disabled,
    disabledBorder: noRep.disabledV2,
    background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjciIGZpbGw9IiM0QzNBODAiLz4KPC9zdmc+Cg==")
    no-repeat center center`,
  },
  field: {
    background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDBDNC41IDAgMyAxLjUgMyAxLjVWNy42MzVDMi43NzUgNy41NiAyLjUwNSA3LjUgMi4yNSA3LjVDMS4wMDUgNy41IDAgOC41MDUgMCA5Ljc1QzAgMTAuOTk1IDEuMDA1IDEyIDIuMjUgMTJDMy40OTUgMTIgNC41IDEwLjk5NSA0LjUgOS43NVYzLjc5NUM1LjU5NSAzLjQ1IDcuNDg1IDMuMTM1IDEwLjUgMy4wNDVWNi4xMzVDMTAuMjc1IDYuMDYgMTAuMDA1IDYgOS43NSA2QzguNTA1IDYgNy41IDcuMDA1IDcuNSA4LjI1QzcuNSA5LjQ5NSA4LjUwNSAxMC41IDkuNzUgMTAuNUMxMC45OTUgMTAuNSAxMiA5LjQ5NSAxMiA4LjI1VjBaIiBmaWxsPSIjNTg1ODU4Ii8+Cjwvc3ZnPgo=")
    no-repeat 16px center
    `,
    borderColorClick: "#ACA4C5",
    borderColor: "#D5D5D5",
    disabled: "#D3D2D3",
    disabledBorder: noRep.disabled,
    errorBorder: "#D16B7F",
    placeholder: "#A3A3A3",
    errorBackground: "#E6CED7",

    errorBg: `
    url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDBDNC41IDAgMyAxLjUgMyAxLjVWNy42MzVDMi43NzUgNy41NiAyLjUwNSA3LjUgMi4yNSA3LjVDMS4wMDUgNy41IDAgOC41MDUgMCA5Ljc1QzAgMTAuOTk1IDEuMDA1IDEyIDIuMjUgMTJDMy40OTUgMTIgNC41IDEwLjk5NSA0LjUgOS43NVYzLjc5NUM1LjU5NSAzLjQ1IDcuNDg1IDMuMTM1IDEwLjUgMy4wNDVWNi4xMzVDMTAuMjc1IDYuMDYgMTAuMDA1IDYgOS43NSA2QzguNTA1IDYgNy41IDcuMDA1IDcuNSA4LjI1QzcuNSA5LjQ5NSA4LjUwNSAxMC41IDkuNzUgMTAuNUMxMC45OTUgMTAuNSAxMiA5LjQ5NSAxMiA4LjI1VjBaIiBmaWxsPSIjNTg1ODU4Ii8+Cjwvc3ZnPgo=")
    no-repeat left 16px center, 
    url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEiIHN0cm9rZT0iI0MxMjk0NSIgc3Ryb2tlLW9wYWNpdHk9IjAuNyIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjExIiB5PSI1IiB3aWR0aD0iMiIgaGVpZ2h0PSIxMCIgcng9IjEiIGZpbGw9IiNDMTI5NDUiIGZpbGwtb3BhY2l0eT0iMC43Ii8+CjxyZWN0IHg9IjExIiB5PSIxNyIgd2lkdGg9IjIiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IiNDMTI5NDUiIGZpbGwtb3BhY2l0eT0iMC43Ii8+Cjwvc3ZnPgo=")
    no-repeat right 16px center`,
    searchBg: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMjU3NSAwLjAwNzVDNS4yNTI3IDAuMDEyMzAyMiA1LjI0NjEzIDAuMDE0OTk3MSA1LjIzOTMzIDAuMDE1MDEwN0MyLjM0OTIyIDAuMDIwNzg2IDAgMi4zNzM1NiAwIDUuMjY1QzAgOC4xNiAyLjM1NSAxMC41MTUgNS4yNSAxMC41MTVDNi4wMzgyNCAxMC41MTUgNi44MTQ1OCAxMC4zNDg0IDcuNDk0MjMgMTAuMDI1OEM3LjYzOTA0IDkuOTU3MSA3LjgxMTcyIDkuOTkyNTYgNy45MzUgMTAuMDk1VjEwLjA5NUw5LjQzNSAxMS41OTVDOS41NzM1MSAxMS43NTA5IDkuNzQyNCAxMS44NzY3IDkuOTMxMzMgMTEuOTY1QzEwLjEyMDIgMTIuMDUzMiAxMC4zMjUyIDEyLjEwMTggMTAuNTMzNiAxMi4xMDhDMTAuNzQyIDEyLjExNDEgMTAuOTQ5NSAxMi4wNzc2IDExLjE0MzMgMTIuMDAwNkMxMS4zMzcxIDExLjkyMzcgMTEuNTEzMSAxMS44MDc5IDExLjY2MDUgMTEuNjYwNUMxMS44MDc5IDExLjUxMzEgMTEuOTIzNyAxMS4zMzcxIDEyLjAwMDYgMTEuMTQzM0MxMi4wNzc2IDEwLjk0OTUgMTIuMTE0MSAxMC43NDIgMTIuMTA4IDEwLjUzMzZDMTIuMTAxOCAxMC4zMjUyIDEyLjA1MzIgMTAuMTIwMiAxMS45NjUgOS45MzEzM0MxMS44NzY3IDkuNzQyNCAxMS43NTA5IDkuNTczNTEgMTEuNTk1IDkuNDM1TDEwLjA5NSA3LjkzNVY3LjkzNUM5Ljk3MTQ2IDcuODExNDIgOS45MjEyMSA3LjYyMjE3IDkuOTk2ODcgNy40NjQ2NkMxMC4zMTg2IDYuNzk0ODggMTAuNTE1IDYuMDM5NzcgMTAuNTE1IDUuMjVDMTAuNTE1IDIuMzU4NTYgOC4xNjU3OCAwLjAwNTc4NTk4IDUuMjc1NjcgMS4wNjU1M2UtMDVDNS4yNjg4NyAtMi45MTU3NGUtMDYgNS4yNjIzIDAuMDAyNjk3ODMgNS4yNTc1IDAuMDA3NVYwLjAwNzVaTTUuMjQyNSAxLjUyMjVDNS4yNDczIDEuNTE3NyA1LjI1Mzg4IDEuNTE1IDUuMjYwNjcgMS41MTUwMUM3LjM0MDY4IDEuNTIwNjggOSAzLjE4MzU2IDkgNS4yNjVDOSA2LjI1NSA4LjY0IDcuMTcgOC4wMSA3Ljg0NUM3Ljk5NSA3Ljg2IDcuOTggNy44NzUgNy45NjUgNy44OUM3Ljg5NDE1IDcuOTQ4ODcgNy44Mjg4NyA4LjAxNDE1IDcuNzcgOC4wODVDNy4xMSA4LjY4NSA2LjIxIDkuMDMgNS4yMzUgOS4wM0MzLjE1IDkuMDMgMS40ODUgNy4zNjUgMS40ODUgNS4yOEMxLjQ4NSAzLjE5ODU2IDMuMTQ0MzIgMS41MzU2OCA1LjIyNDMzIDEuNTMwMDFDNS4yMzExMiAxLjUzIDUuMjM3NyAxLjUyNzMgNS4yNDI1IDEuNTIyNVYxLjUyMjVaIiBmaWxsPSIjNkI2Mjc4Ii8+Cjwvc3ZnPgo=")
          no-repeat 16px center
          `,
    searchBorder: "#F5F3F6",
    searchBackground: "#FCFBFC",
  },
  shadow: {
    default: "#00000040",
    field: "#4C3A8040",
  },
  border: {},
  card: {
    backgroundColor: noRep.white,
    arrowUp: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE0IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC42Njc5IDguNTQyODlDMTEuMDU4NCA4LjkzMzQyIDExLjY5MTYgOC45MzM0MiAxMi4wODIxIDguNTQyODlMMTMuMjkyOSA3LjMzMjExQzEzLjY4MzQgNi45NDE1OCAxMy42ODM0IDYuMzA4NDIgMTMuMjkyOSA1LjkxNzg5TDcuNzA3MTEgMC4zMzIxMDVDNy4zMTY1OCAtMC4wNTg0MTg5IDYuNjgzNDIgLTAuMDU4NDE4IDYuMjkyODkgMC4zMzIxMDZMMC43MDcxMDYgNS45MTc4OUMwLjMxNjU4MiA2LjMwODQyIDAuMzE2NTgzIDYuOTQxNTggMC43MDcxMDcgNy4zMzIxMUwxLjkxNzg5IDguNTQyODlDMi4zMDg0MiA4LjkzMzQyIDIuOTQxNTggOC45MzM0MiAzLjMzMjExIDguNTQyODlMNi4yOTI4OSA1LjU4MjExQzYuNjgzNDIgNS4xOTE1OCA3LjMxNjU4IDUuMTkxNTggNy43MDcxMSA1LjU4MjExTDEwLjY2NzkgOC41NDI4OVoiIGZpbGw9IiM2MDQ0QjUiLz4KPC9zdmc+Cg==")
        no-repeat center center`,
    arrowDown: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE0IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zLjMzMjExIDAuNDU3MTA3QzIuOTQxNTggMC4wNjY1ODMxIDIuMzA4NDIgMC4wNjY1ODI1IDEuOTE3ODkgMC40NTcxMDdMMC43MDcxMDcgMS42Njc4OUMwLjMxNjU4MyAyLjA1ODQyIDAuMzE2NTgzIDIuNjkxNTggMC43MDcxMDcgMy4wODIxMUw2LjI5Mjg5IDguNjY3ODlDNi42ODM0MiA5LjA1ODQyIDcuMzE2NTggOS4wNTg0MiA3LjcwNzExIDguNjY3ODlMMTMuMjkyOSAzLjA4MjExQzEzLjY4MzQgMi42OTE1OCAxMy42ODM0IDIuMDU4NDIgMTMuMjkyOSAxLjY2Nzg5TDEyLjA4MjEgMC40NTcxMDdDMTEuNjkxNiAwLjA2NjU4MjUgMTEuMDU4NCAwLjA2NjU4MjQgMTAuNjY3OSAwLjQ1NzEwN0w3LjcwNzExIDMuNDE3ODlDNy4zMTY1OCAzLjgwODQyIDYuNjgzNDIgMy44MDg0MiA2LjI5Mjg5IDMuNDE3ODlMMy4zMzIxMSAwLjQ1NzEwN1oiIGZpbGw9IiM2MDQ0QjUiLz4KPC9zdmc+Cg==")
        no-repeat center center`,
        icon: noRep.second,
  },
 switch: {
    bgV1BigMoon: `url(${backgroundV1BigMoon})`,
    bgV1BigSun: `url(${backgroundV1BigSun})`,
    bgV1SmallMoon: `url(${backgroundV1SmallMoon})`,
    bgV1SmallSun: `url(${backgroundV1SmallSun})`,
    bgV2BigDark: `url(${backgroundV2Big})`,
    bgV2BigMoon: `url(${moonBig})`,
    bgV2BigLight: `url(${backgroundV2BigLight})`,
    bgV2BigSun: `url(${backgroundV2BigSun})`,
    bgV2SmallDark: `url(${bgV2SmallDark})`,	
    bgV2SmallLight: `url(${bgV2SmallLight})`,
    bgV2SmallSun: `url(${bgV2SmallSun})`, 
    bgV2MoonSmall: `url(${moonSmall})`,
  },  
  
  link: {
      test: '#000',
  },
  modes: {
    dark: {
      default: {
        primary: noRep.darkPrimary,
        primaryDisabled: "#493683",
        second: noRep.darkSecond,
        secondVariant: noRep.secondVariant,
        textColor: "#ffffff",
        textColorV2: "#585858",
        errors: "#C12945",
        errorsDisabled: "#7F2943",
        positive1: "#26962B",
        positive1Disabled: "#2B6035",
        positive2: "#9AE79D",
        black: noRep.white,
        white: noRep.black,
        errorInput: noRep.errorInput,
        headerImg: `url(${logoWhite})`,
        overlay: '#563737',


      },
      background: "#2F2A41",
      text: {
        primary: noRep.white,
        overline: "#F5ECFE",
        titleCard: noRep.white,
      },
      badge: {
        inActive: "#FF6768",
        active: "#3CC13B",
        selectedBg: "#EAE9EC",
        bg: noRep.second,
        error: noRep.badgeError,
        disabled: "#C2C9D1",
        primary: "#B2C3FF",
        secondary: oath.color[4],

        /* Border unlist double? */
        border: "#443F54",
        inActiveBorder: "#423E53",
        activeBorder: "#4C6A54",
        borderTwo: noRep.badgeBorder,
        errorBorder: noRep.badgeError,
        disabledBorder: noRep.badge,
        primaryBorder: noRep.badge,
        selectedBorder: "#ECECEC",
      },
      check: {
        borderColor: "#9794A0",
        background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzFfMTMpIj4KPHBhdGggZD0iTTIwIDFINEMyLjM0MzE1IDEgMSAyLjM0MzE1IDEgNFYyMEMxIDIxLjY1NjkgMi4zNDMxNSAyMyA0IDIzSDIwQzIxLjY1NjkgMjMgMjMgMjEuNjU2OSAyMyAyMFY0QzIzIDIuMzQzMTUgMjEuNjU2OSAxIDIwIDFaIiBmaWxsPSIjN0I0RUZGIiBzdHJva2U9IiM3QjRFRkYiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTcuOTIzMyA3LjY0NDgzQzE3LjE4MDEgNi45MTcwNCAxNS45Nzg1IDYuOTI5MDggMTUuMjU4OCA3LjY4MDEzTDExLjM3OTIgMTEuNTU5N0MxMC42MDg2IDEyLjMzMDQgOS4zNjI3NiAxMi4zNDIxIDguNTc3NzEgMTEuNTg2MUw4LjQ1NjY5IDExLjQ2OTZMOC40MjgyNyAxMS40NDEyQzcuNjkwNTMgMTAuNzAzNCA2LjQ5NDQyIDEwLjcwMzQgNS43NTY2OSAxMS40NDEyQzUuMDE4OTUgMTIuMTc4OSA1LjAxODk1IDEzLjM3NSA1Ljc1NjY5IDE0LjExMjhMNS43ODUxMSAxNC4xNDEyTDguNjI3MjEgMTYuOTgzM0M5LjM0NDcxIDE3LjczMiAxMC41Mzc0IDE3Ljc0NDcgMTEuMjcwNyAxNy4wMTE0TDExLjI5ODggMTYuOTgzM0wxNy45MzA0IDEwLjM1MTdMMTcuOTQ0NyAxMC4zMzc0QzE4LjY4NzkgOS41OTQxOSAxOC42NzQ0IDguMzgwMiAxNy45MjMzIDcuNjQ0ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzFfMTMiPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==")
            no-repeat center center`,
        backgroundDisabled: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjIyIiByeD0iMSIgZmlsbD0iI0M1QzVDNSIvPgo8cGF0aCBkPSJNMTguMzQ2MyA3LjUzNjM1QzE3LjU2NjUgNi44MDk1MiAxNi4zMDU3IDYuODIxNTQgMTUuNTUwNSA3LjU3MTZMMTEuNDc5OSAxMS40NDYxQzEwLjY3MTQgMTIuMjE1OCA5LjM2NDE5IDEyLjIyNzQgOC41NDA0OCAxMS40NzI0TDguNDEzNSAxMS4zNTYxTDguMzgzNjggMTEuMzI3N0M3LjYwOTYxIDEwLjU5MDkgNi4zNTQ2MSAxMC41OTA5IDUuNTgwNTUgMTEuMzI3N0M0LjgwNjQ4IDEyLjA2NDUgNC44MDY0OCAxMy4yNTkgNS41ODA1NSAxMy45OTU4TDUuNjEwMzcgMTQuMDI0Mkw4LjU5MjQyIDE2Ljg2MjZDOS4zNDUyNSAxNy42MTAzIDEwLjU5NjcgMTcuNjIzIDExLjM2NjEgMTYuODkwNkwxMS4zOTU2IDE2Ljg2MjZMMTguMzUzNyAxMC4yMzk3TDE4LjM2ODcgMTAuMjI1NEMxOS4xNDg1IDkuNDgzMTUgMTkuMTM0MyA4LjI3MDc2IDE4LjM0NjMgNy41MzYzNVoiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjEiIHk9IjEiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgcng9IjEiIHN0cm9rZT0iI0M1QzVDNSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=")
            no-repeat center center`,
        borderDisabled: noRep.disabled,
      },
      radio: {
        borderColor: oath.color[4],
        bg: oath.color[5],
        clicked: noRep.darkSecond,
        disabled: noRep.disabled,
        disabledBorder: noRep.disabledV2,
        background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTRDMTAuODY2IDE0IDE0IDEwLjg2NiAxNCA3QzE0IDMuMTM0MDEgMTAuODY2IDAgNyAwQzMuMTM0MDEgMCAwIDMuMTM0MDEgMCA3QzAgMTAuODY2IDMuMTM0MDEgMTQgNyAxNFoiIGZpbGw9IiM3QjRFRkYiLz4KPC9zdmc+Cg==")
            no-repeat center center`,
      },

      field: {
        background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDBDNC41IDAgMyAxLjUgMyAxLjVWNy42MzVDMi43NzUgNy41NiAyLjUwNSA3LjUgMi4yNSA3LjVDMS4wMDUgNy41IDAgOC41MDUgMCA5Ljc1QzAgMTAuOTk1IDEuMDA1IDEyIDIuMjUgMTJDMy40OTUgMTIgNC41IDEwLjk5NSA0LjUgOS43NVYzLjc5NUM1LjU5NSAzLjQ1IDcuNDg1IDMuMTM1IDEwLjUgMy4wNDVWNi4xMzVDMTAuMjc1IDYuMDYgMTAuMDA1IDYgOS43NSA2QzguNTA1IDYgNy41IDcuMDA1IDcuNSA4LjI1QzcuNSA5LjQ5NSA4LjUwNSAxMC41IDkuNzUgMTAuNUMxMC45OTUgMTAuNSAxMiA5LjQ5NSAxMiA4LjI1VjBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K")
            no-repeat 16px center
            `,
        backgroundColor: "#282336",
        borderColor: "#343041",
        borderColorClick: "#A689FF",
        disabled: "#605B6C",
        disabledBorder: "#73717D",
        errorBorder: "#AD2944",
        placeholder: noRep.white,
        errorBackground: "#5B2943",

        errorBg: `
            url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDBDNC41IDAgMyAxLjUgMyAxLjVWNy42MzVDMi43NzUgNy41NiAyLjUwNSA3LjUgMi4yNSA3LjVDMS4wMDUgNy41IDAgOC41MDUgMCA5Ljc1QzAgMTAuOTk1IDEuMDA1IDEyIDIuMjUgMTJDMy40OTUgMTIgNC41IDEwLjk5NSA0LjUgOS43NVYzLjc5NUM1LjU5NSAzLjQ1IDcuNDg1IDMuMTM1IDEwLjUgMy4wNDVWNi4xMzVDMTAuMjc1IDYuMDYgMTAuMDA1IDYgOS43NSA2QzguNTA1IDYgNy41IDcuMDA1IDcuNSA4LjI1QzcuNSA5LjQ5NSA4LjUwNSAxMC41IDkuNzUgMTAuNUMxMC45OTUgMTAuNSAxMiA5LjQ5NSAxMiA4LjI1VjBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K")
                no-repeat left 16px center, 
            url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEiIHN0cm9rZT0iI0MxMjk0NSIgc3Ryb2tlLW9wYWNpdHk9IjAuNyIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjExIiB5PSI1IiB3aWR0aD0iMiIgaGVpZ2h0PSIxMCIgcng9IjEiIGZpbGw9IiNDMTI5NDUiIGZpbGwtb3BhY2l0eT0iMC43Ii8+CjxyZWN0IHg9IjExIiB5PSIxNyIgd2lkdGg9IjIiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IiNDMTI5NDUiIGZpbGwtb3BhY2l0eT0iMC43Ii8+Cjwvc3ZnPgo=")
                no-repeat right 16px center`,
        searchBg: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMjU3NSAwLjAwNzVDNS4yNTI3IDAuMDEyMzAyMiA1LjI0NjEzIDAuMDE0OTk3MSA1LjIzOTMzIDAuMDE1MDEwN0MyLjM0OTIyIDAuMDIwNzg2IDAgMi4zNzM1NiAwIDUuMjY1QzAgOC4xNiAyLjM1NSAxMC41MTUgNS4yNSAxMC41MTVDNi4wMzgyNCAxMC41MTUgNi44MTQ1OCAxMC4zNDg0IDcuNDk0MjMgMTAuMDI1OEM3LjYzOTA0IDkuOTU3MSA3LjgxMTcyIDkuOTkyNTYgNy45MzUgMTAuMDk1VjEwLjA5NUw5LjQzNSAxMS41OTVDOS41NzM1MSAxMS43NTA5IDkuNzQyNCAxMS44NzY3IDkuOTMxMzMgMTEuOTY1QzEwLjEyMDIgMTIuMDUzMiAxMC4zMjUyIDEyLjEwMTggMTAuNTMzNiAxMi4xMDhDMTAuNzQyIDEyLjExNDEgMTAuOTQ5NSAxMi4wNzc2IDExLjE0MzMgMTIuMDAwNkMxMS4zMzcxIDExLjkyMzcgMTEuNTEzMSAxMS44MDc5IDExLjY2MDUgMTEuNjYwNUMxMS44MDc5IDExLjUxMzEgMTEuOTIzNyAxMS4zMzcxIDEyLjAwMDYgMTEuMTQzM0MxMi4wNzc2IDEwLjk0OTUgMTIuMTE0MSAxMC43NDIgMTIuMTA4IDEwLjUzMzZDMTIuMTAxOCAxMC4zMjUyIDEyLjA1MzIgMTAuMTIwMiAxMS45NjUgOS45MzEzM0MxMS44NzY3IDkuNzQyNCAxMS43NTA5IDkuNTczNTEgMTEuNTk1IDkuNDM1TDEwLjA5NSA3LjkzNVY3LjkzNUM5Ljk3MTQ2IDcuODExNDIgOS45MjEyMSA3LjYyMjE3IDkuOTk2ODcgNy40NjQ2NkMxMC4zMTg2IDYuNzk0ODggMTAuNTE1IDYuMDM5NzcgMTAuNTE1IDUuMjVDMTAuNTE1IDIuMzU4NTYgOC4xNjU3OCAwLjAwNTc4NTk4IDUuMjc1NjcgMS4wNjU1M2UtMDVDNS4yNjg4NyAtMi45MTU3NGUtMDYgNS4yNjIzIDAuMDAyNjk3ODMgNS4yNTc1IDAuMDA3NVYwLjAwNzVaTTUuMjQyNSAxLjUyMjVDNS4yNDczIDEuNTE3NyA1LjI1Mzg4IDEuNTE1IDUuMjYwNjcgMS41MTUwMUM3LjM0MDY4IDEuNTIwNjggOSAzLjE4MzU2IDkgNS4yNjVDOSA2LjI1NSA4LjY0IDcuMTcgOC4wMSA3Ljg0NUM3Ljk5NSA3Ljg2IDcuOTggNy44NzUgNy45NjUgNy44OUM3Ljg5NDE1IDcuOTQ4ODcgNy44Mjg4NyA4LjAxNDE1IDcuNzcgOC4wODVDNy4xMSA4LjY4NSA2LjIxIDkuMDMgNS4yMzUgOS4wM0MzLjE1IDkuMDMgMS40ODUgNy4zNjUgMS40ODUgNS4yOEMxLjQ4NSAzLjE5ODU2IDMuMTQ0MzIgMS41MzU2OCA1LjIyNDMzIDEuNTMwMDFDNS4yMzExMiAxLjUzIDUuMjM3NyAxLjUyNzMgNS4yNDI1IDEuNTIyNVYxLjUyMjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K")
            no-repeat 16px center
            `,
        searchBorder: "#595661",
        searchBackground: "#43404C",
      },
      shadow: {
        default: "#00000040",
        field: "#00000040",
      },
      /* border: {}, */
      card: {
        backgroundColor: "rgba(107, 98, 120, 0.8)",
        arrowUp: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE0IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC42Njc5IDguNTQyODlDMTEuMDU4NCA4LjkzMzQyIDExLjY5MTYgOC45MzM0MiAxMi4wODIxIDguNTQyODlMMTMuMjkyOSA3LjMzMjExQzEzLjY4MzQgNi45NDE1OCAxMy42ODM0IDYuMzA4NDIgMTMuMjkyOSA1LjkxNzg5TDcuNzA3MTEgMC4zMzIxMDZDNy4zMTY1OCAtMC4wNTg0MTg4IDYuNjgzNDIgLTAuMDU4NDE4MSA2LjI5Mjg5IDAuMzMyMTA2TDAuNzA3MTA2IDUuOTE3ODlDMC4zMTY1ODIgNi4zMDg0MiAwLjMxNjU4MyA2Ljk0MTU4IDAuNzA3MTA3IDcuMzMyMTFMMS45MTc4OSA4LjU0Mjg5QzIuMzA4NDIgOC45MzM0MiAyLjk0MTU4IDguOTMzNDIgMy4zMzIxMSA4LjU0Mjg5TDYuMjkyODkgNS41ODIxMUM2LjY4MzQyIDUuMTkxNTggNy4zMTY1OCA1LjE5MTU4IDcuNzA3MTEgNS41ODIxMUwxMC42Njc5IDguNTQyODlaIiBmaWxsPSIjRkZGNEZGIi8+Cjwvc3ZnPgo=")
        no-repeat center center`,
        arrowDown: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE0IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zLjMzMjExIDAuNDU3MTA3QzIuOTQxNTggMC4wNjY1ODMxIDIuMzA4NDIgMC4wNjY1ODI1IDEuOTE3ODkgMC40NTcxMDdMMC43MDcxMDcgMS42Njc4OUMwLjMxNjU4MyAyLjA1ODQyIDAuMzE2NTgzIDIuNjkxNTggMC43MDcxMDcgMy4wODIxMUw2LjI5Mjg5IDguNjY3ODlDNi42ODM0MiA5LjA1ODQyIDcuMzE2NTggOS4wNTg0MiA3LjcwNzExIDguNjY3ODlMMTMuMjkyOSAzLjA4MjExQzEzLjY4MzQgMi42OTE1OCAxMy42ODM0IDIuMDU4NDIgMTMuMjkyOSAxLjY2Nzg5TDEyLjA4MjEgMC40NTcxMDdDMTEuNjkxNiAwLjA2NjU4MjUgMTEuMDU4NCAwLjA2NjU4MjQgMTAuNjY3OSAwLjQ1NzEwN0w3LjcwNzExIDMuNDE3ODlDNy4zMTY1OCAzLjgwODQyIDYuNjgzNDIgMy44MDg0MiA2LjI5Mjg5IDMuNDE3ODlMMy4zMzIxMSAwLjQ1NzEwN1oiIGZpbGw9IiNGRkY0RkYiLz4KPC9zdmc+Cg==")
        no-repeat center center`,
        icon: noRep.white,
      },
      switch: {
        bgV1BigMoon: `url(${backgroundV1BigMoon})`,
        bgV1BigSun: `url(${backgroundV1BigSun})`,
        bgV1SmallMoon: `url(${backgroundV1SmallMoon})`,
        bgV1SmallSun: `url(${backgroundV1SmallSun})`,
        bgV2BigDark: `url(${backgroundV2Big})`,
        bgV2BigMoon: `url(${moonBig})`,
        bgV2BigLight: `url(${backgroundV2BigLight})`,
        bgV2BigSun: `url(${backgroundV2BigSun})`,
        bgV2SmallDark: `url(${bgV2SmallDark})`,	
        bgV2SmallLight: `url(${bgV2SmallLight})`,
        bgV2SmallSun: `url(${bgV2SmallSun})`, 
        bgV2MoonSmall: `url(${moonSmall})`,
      }, 
      link: {
          test: '#FFF',
      },
    },
  },
};

export default colors;
