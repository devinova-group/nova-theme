import { Theme } from "theme-ui";

const buttons: Theme["buttons"] = {
  primary: {
    medium: {
      width: "150px",
      height: "50px",
      fontFamily: "button.1",
      fontStyle: "normal",
      fontSize: 5,
      cursor: "pointer",
      backgroundColor: "default.primary",
      boxShadow: "button",
      borderRadius: "8px",
      margin: 2,
      padding: 0,

      "&:hover": {
        backgroundColor: "transparent",
        color: "default.primary",
        border: "default",
        borderColor: "default.primary",
      },
      "&:disabled": {
        backgroundColor: "default.primary",
        color: "default.white",
        opacity: "0.35",
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
    small: {
      variant: "buttons.primary.medium",
      width: "105px",
      height: "35px",
      fontSize: 14,
    },
    large: {
      variant: "buttons.primary.medium",
      width: "259px",
      height: "73px",
      fontFamily: "body.1",
      fontStyle: "normal",
      fontSize: 5,
    },
  },
  error: {
    medium: {
      variant: "buttons.primary.medium",
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
    small: {
      variant: "buttons.error.medium",
      width: "105px",
      height: "35px",
      fontSize: 14,
    },
    large: {
      variant: "buttons.error.medium",
      width: "259px",
      height: "73px",
      fontFamily: "body.1",
      fontStyle: "normal",
      fontSize: 4,
    },
  },
  success: {
    medium: {
      variant: "buttons.primary.medium",
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
    small: {
      variant: "buttons.success.medium",
      width: "105px",
      height: "35px",
      fontSize: 14,
    },
    large: {
      variant: "buttons.success.medium",
      width: "259px",
      height: "73px",
      fontFamily: "body.1",
      fontStyle: "normal",
      fontSize: 5,
    },
  },
  mobile: {
    large: {
      variant: "buttons.primary.large",
      width: "72px",
      height: "72px",
    },
    medium: {
      variant: "buttons.primary.medium",
      width: "60px",
      height: "60px",
    },
    small: {
      variant: "buttons.primary.small",
      width: "42px",
      height: "42px",
    },
  },

  mobileError: {
    large: {
      variant: "buttons.error.large",
      width: "72px",
      height: "72px",
    },
    medium: {
      variant: "buttons.error.medium",
      width: "60px",
      height: "60px",
    },
    small: {
      variant: "buttons.error.small",
      width: "42px",
      height: "42px",
    },
  },
  mobileSuccess: {
    large: {
      variant: "buttons.success.large",
      width: "72px",
      height: "72px",
    },
    medium: {
      variant: "buttons.success.small",
      width: "60px",
      height: "60px",
    },
    small: {
      variant: "buttons.success.small",
      width: "42px",
      height: "42px",
    },
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
  login: {
    variant: "buttons.primary",
    width: "314px",
    height: "50px",
    fontWeight: "body.3",
  },
};
export default buttons;

/* import { Theme } from "theme-ui";

const buttons: Theme["buttons"] = {
  primary: {
    medium: {
      minWidth: "150px",
      minHeight: "50px",
      fontFamily: "button.1",
      fontStyle: "normal",
      fontSize: 5,
      cursor: "pointer",
      backgroundColor: "default.primary",
      boxShadow: "button",
      borderRadius: "8px",
      margin: 2,
      padding: 0,

      "&:hover": {
        backgroundColor: "transparent",
        color: "default.primary",
        border: "default",
        borderColor: "default.primary",
      },
      "&:disabled": {
        backgroundColor: "default.primary",
        color: "default.white",
        opacity: "0.35",
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
    small: {
      variant: "buttons.primary.medium",
      minWidth: "105px",
      minHeight: "35px",
      fontSize: 14,
    },
    large: {
      variant: "buttons.primary.medium",
      minWidth: "259px",
      minHeight: "73px",
      fontFamily: "body.1",
      fontStyle: "normal",
      fontSize: 5,
    },
  },
  mobile: {
    large: { variant: "buttons.primary.medium", width: "72px", height: "72px" },
  },
  medium: {
    variant: "buttons.mobile.large",
    width: "60px",
    height: "60px",
  },
  small: {
    variant: "buttons.mobile.large",
    width: "42px",
    height: "42px",
  },
};
export default buttons; */
