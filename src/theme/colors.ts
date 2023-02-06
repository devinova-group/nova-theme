import {Theme} from "theme-ui";
/* Switch */
import moonBig from "./icons/switch/moonBig.svg";
import backgroundV2Big from "./icons/switch/backgroundV2Big.svg";
import backgroundV1BigMoon from "./icons/switch/backgroundV1BigMoon.svg";
import backgroundV1BigSun from "./icons/switch/backgroundV1BigSun.svg";
import backgroundV1SmallMoon from "./icons/switch/backgroundV1SmallMoon.svg";
import backgroundV1SmallSun from "./icons/switch/backgroundV1SmallSun.svg";
import backgroundV2BigLight from "./icons/switch/backgroundV2BigLight.svg";
import backgroundV2BigSun from "./icons/switch/backgroundV2BigSun.svg";
import bgV2SmallDark from "./icons/switch/bgV2SmallDark.svg";
import moonSmall from "./icons/switch/moonSmall.svg";
import bgV2SmallLight from "./icons/switch/bgV2SmallLight.svg";
import bgV2SmallSun from "./icons/switch/bgV2SmallSun.svg";
/* Login */
import password from "./icons/login/password.svg";
import username from "./icons/login/username.svg";
/* Radio */
import radioLight from "./icons/radio/radioLight.svg";
import radioDark from "./icons/radio/radioDark.svg";
/* Card */
import arrowDown from "./icons/card/arrowDown.svg";
import arrowUp from "./icons/card/arrowUp.svg";
import arrowDownDark from "./icons/card/arrowDownDark.svg";
import arrowUpDark from "./icons/card/arrowUpDark.svg";
/* Check */
import checkLightSvg from "./icons/check/checkLight.svg";
import checkLightDisabled from "./icons/check/checkDisabledLight.svg";
import checkDark from "./icons/check/checkDark.svg";
import checkDarkDisabled from "./icons/check/checkDarkDisabled.svg";
/* Field */
import errorDark from "./icons/field/fieldErrorDark.svg";
import fieldErrorDark from "./icons/field/fieldErrorDarkSvg.svg";
import fieldSearchDark from "./icons/field/textFieldSearchDark.svg";
import fieldBackground from "./icons/field/fieldBackground.svg";
import textField from "./icons/field/textField.svg";
import fieldError from "./icons/field/textFieldError.svg";
import fieldSearch from "./icons/field/textFieldSearch.svg";

/* Button lightmode Primary color, but dark mode is secondary color */
/* Badges boarder 10% of #fff, cant set opacity only on border, opacity affects the whole element */

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
    primary: "#6044B5",
    secondary: "#4C3A80",
    second: "#6E6893",
    primaryDisabled: "#BCB1DC",
    background: "#FFFEFB",
    textColor: "#08011C",
    textColorV2: "#585858",
    errors: "#C12945",
    positive1: "#26962B",
    positive2: "#9AE79D",
    black: "#000000",
    white: "#FFFFFF",
    errorInput: "#700519",
  },
  badge: {
    inActive: "#FF6768",
    active: "#3CC13B",
    error: "#FFC34E",
    disabled: "#C2C9D1",
    primary: "#B2C3FF",
  },
  check: {
    background: `url(${checkLightSvg}) no-repeat center center`,
    backgroundDisabled: `url(${checkLightDisabled}) no-repeat center center`,
  },
  radio: {
    borderColor: oath.color[6],
    bg: "transparent",
    clicked: noRep.second,
    disabled: noRep.disabled,
    disabledBorder: noRep.disabledV2,
    background: `url(${radioLight}) no-repeat center center`,
  },
  field: {
    background: `url(${textField}) no-repeat 16px center`,
    borderColorClick: "#ACA4C5",
    borderColor: "#D5D5D5",
    disabled: "#D3D2D3",
    disabledBorder: noRep.disabled,
    errorBorder: "#D16B7F",
    placeholder: "#A3A3A3",
    errorBackground: "#E6CED7",
    errorBg: `
    url(${textField}) no-repeat 16px center, 
    url(${fieldError}) no-repeat right 16px center`,
    searchBg: `url(${fieldSearch}) no-repeat 16px center`,
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
    arrowUp: `url(${arrowUp}) no-repeat center center`,
    arrowDown: `url(${arrowDown}) no-repeat center center`,
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
  login: {
    iconUsername: `url(${username}) no-repeat 16px center`,
    iconPassword: `url(${password}) no-repeat 16px center`,
  },
  modes: {
    dark: {
      default: {
        errors: "#C12945",
        positive1: "#26962B",
        primary: "#A689FF",
        secondary: "#7B4EFF",
        second: "#7E778D",
        background: "#292336",
        textColor: "#FFFEFB",
      },
      badge: {
        inActive: "#FF6768",
        active: "#3CC13B",
        error: "#FFC34E",
        disabled: "#C2C9D1",
        primary: "#B2C3FF",
      },
      check: {
        borderColor: "#9794A0",
        background: `url(${checkDark}) no-repeat center center`,
        backgroundDisabled: `url(${checkDarkDisabled}) no-repeat center center`,
        borderDisabled: noRep.disabled,
      },
      radio: {
        borderColor: oath.color[4],
        bg: oath.color[5],
        clicked: noRep.darkSecond,
        disabled: noRep.disabled,
        disabledBorder: noRep.disabledV2,
        background: `url(${radioDark}) no-repeat center center`,
      },

      field: {
        background: `url(${fieldBackground}) no-repeat 16px center`,
        backgroundColor: "#282336",
        borderColor: "#343041",
        borderColorClick: "#A689FF",
        disabled: "#605B6C",
        disabledBorder: "#73717D",
        errorBorder: "#AD2944",
        placeholder: noRep.white,
        errorBackground: "#5B2943",

        errorBg: `url(${errorDark}) no-repeat left 16px center, 
            url(${fieldErrorDark}) no-repeat right 16px center`,
        searchBg: `url(${fieldSearchDark}) no-repeat 16px center`,
        searchBorder: "#595661",
        searchBackground: "#43404C",
      },
      shadow: {
        default: "#00000040",
        field: "#00000040",
      },
      card: {
        backgroundColor: "rgba(107, 98, 120, 0.8)",
        arrowUp: `url(${arrowUpDark}) no-repeat center center`,
        arrowDown: `url(${arrowDownDark}) no-repeat center center`,
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
        test: "#FFF",
      },
    },
  },
};

export default colors;
