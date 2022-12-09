import { Theme } from "theme-ui";

const buttons: Theme["buttons"] = {
  primary: {
    width: "259px",
    height: "73px",
    fontFamily: "body.1",
    fontWeight: "body.3",
    fontSize: 4,
    letterSpacing: "0px",
    cursor: "pointer",
    backgroundColor: "default.primary",
    boxShadow: "button",
    borderRadius: "8px",
    margin: 2,
    padding: "0",

    "&:hover": {
      backgroundColor: "transparent",
      color: "default.primary",
      border: "default",
      borderColor: "default.primary",
    },
    "&:disabled": {
      backgroundColor: "default.primary",
      color: "white",
      opacity: "0.5",
      "&:hover": {
        cursor: "not-allowed",
        backgroundColor: "none",
        color: "none",
        border: "none",
        borderColor: "none",
      },
    },
    "&:focus": {
      backgroundColor: "default.second",
      color: "white",
    },
  },
  activeMedium: {
    variant: "buttons.primary",
    width: "150px",
    height: "50px",
    fontFamily: "body.1",
    fontStyle: "normal",
    fontSize: 5,
  },
  activeSmall: {
    variant: "buttons.primary",
    width: "105px",
    height: "35px",
    fontSize: 14,
  },
  /* Error buttons */
  error: {
    variant: "buttons.primary",
    backgroundColor: "default.errors",
    "&:hover": {
      backgroundColor: "transparent",
      color: "default.errors",
      border: "default",
      borderColor: "default.errors",
    },
    "&:focus": {
      backgroundColor: "default.errors",
      color: "white",
    },
    "&:disabled": {
      backgroundColor: "default.errorsDisabled",
      "&:hover": {
        cursor: "not-allowed",
        backgroundColor: "none",
        border: "none",
        borderColor: "none",
        color: "white",
      },
    },
  },
  errorMedium: {
    variant: "buttons.error",
    width: "150px",
    height: "50px",
    fontFamily: "body.1",
    fontStyle: "normal",
    fontSize: 4,
  },
  errorSmall: {
    variant: "buttons.error",
    width: "105px",
    height: "35px",
    fontSize: 14,
  },
  /* Success buttons */
  success: {
    variant: "buttons.primary",
    backgroundColor: "default.positive1",
    "&:hover": {
      backgroundColor: "transparent",
      color: "default.positive1",
      border: "default",
      borderColor: "default.positive1",
    },
    "&:focus": {
      backgroundColor: "default.positive1",
      color: "default.white",
    },
    "&:disabled": {
      backgroundColor: "default.positive1Disabled",
      "&:hover": {
        cursor: "not-allowed",
        backgroundColor: "none",
        border: "none",
        borderColor: "none",
        color: "default.white",
      },
    },
  },
  successMedium: {
    variant: "buttons.success",
    width: "150px",
    height: "50px",
    fontFamily: "body.1",
    fontStyle: "normal",
    fontSize: 5,
  },

  successSmall: {
    variant: "buttons.success",
    width: "105px",
    height: "35px",
    fontSize: 14,
  },
  /* Mobile buttons */
  mobile: {
    variant: "buttons.primary",
    width: "72px",
    height: "72px",
  },
  mobileMedium: {
    variant: "buttons.primary",
    width: "60px",
    height: "60px",
  },
  mobileSmall: {
    variant: "buttons.primary",
    width: "42px",
    height: "42px",
  },
  /* Mobile error */
  mobileError: {
    variant: "buttons.error",
    width: "72px",
    height: "72px",
  },
  mobileErrorMedium: {
    variant: "buttons.error",
    width: "60px",
    height: "60px",
  },
  mobileErrorSmall: {
    variant: "buttons.error",
    width: "42px",
    height: "42px",
  },
  /* Mobile Success */
  mobileSuccess: {
    variant: "buttons.success",
    width: "72px",
    height: "72px",
  },
  mobileSuccessMedium: {
    variant: "buttons.success",
    width: "60px",
    height: "60px",
  },
  mobileSuccessSmall: {
    variant: "buttons.success",
    width: "42px",
    height: "42px",
  },
  learnMore: {
    width: "150px",
    height: "59px",
    fontFamily: "body.0",
    fontWeight: "body.3",
    boxShadow: "button",
    fontSize: 5,
    borderRadius: "6px",
    backgroundColor: "default.primary",
  },
};

export default buttons;
