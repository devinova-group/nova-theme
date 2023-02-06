import {Theme} from "theme-ui";

const tooltip: Theme["buttons"] = {
  primary: {
    backgroundColor: "default.secondary",
    padding: 2,
    borderRadius: 4,
    color: "white",
  },
  top: {
    primary: {
      variant: "tooltip.primary",
    },
    arrow: {
      variant: "tooltip.primary",
      "::after": {
        content: '" "',
        position: "absolute",
        top: "100%",
        left: "50%",
        marginLeft: "-5px",
        borderWidth: "5px",
        borderStyle: "solid",
        borderColor: "transparent",
        borderTopColor: "default.secondary",
      },
    },
  },
  bottom: {
    primary: {
      variant: "tooltip.primary",
    },
    arrow: {
      variant: "tooltip.primary",
      "::after": {
        content: '" "',
        position: "absolute",
        bottom: "100%",
        left: "50%",
        marginLeft: "-5px",
        borderWidth: "5px",
        borderStyle: "solid",
        borderColor: "transparent",
        borderBottomColor: "default.secondary",
      },
    },
  },
  right: {
    primary: {
      variant: "tooltip.primary",
    },
    arrow: {
      variant: "tooltip.primary",
      "::after": {
        content: '" "',
        position: "absolute",
        right: "100%",
        top: "50%",
        marginTop: "-5px",
        borderWidth: "5px",
        borderStyle: "solid",
        borderColor: "transparent",
        borderRightColor: "default.secondary",
      },
    },
  },
  left: {
    primary: {
      variant: "tooltip.primary",
    },
    arrow: {
      variant: "tooltip.primary",
      "::after": {
        content: '" "',
        position: "absolute",
        top: "50%",
        left: "100%",
        marginTop: "-5px",
        borderWidth: "5px",
        borderStyle: "solid",
        borderColor: "transparent",
        borderLeftColor: "default.secondary",
      },
    },
  },
  // dark: {
  //   primary: {
  //     variant: "tooltip.primary",
  //   },
  //   arrow: {
  //     variant: "tooltip.arrow",
  //   },
  // },
};

export default tooltip;
