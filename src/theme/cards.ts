import { grid } from "styled-system";
import { Theme } from "theme-ui";

const cards: Theme["cards"] = {
  primary: {
    width: "353px",
    height: "642px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "card.backgroundColor",
    textAlign: "left",
    boxShadow: "card",
    borderRadius: "20px",
    margin: 10,
    img: {
      width: "353px",
      height: "316px",
      borderRadius: "20px 20px 0px 0px",
      margin: 0,
      padding: 0,
    },
    span: {
      width: "100%",
      padding: "0px 6px 6px 24px",
    },
    button: {
      marginLeft: 8,
    },
  },

  expandable: {
    variant: "cards.primary",
    height: "none",
    padding: 0,
    "div.arrowDown": {
      width: "25px",
      height: "20px",
      backgroundColor: "black",
      background: "card.arrowDown",
      marginTop: 0,
    },
    "div.arrowUp": {
      width: "25px",
      height: "30px",
      background: "card.arrowUp",
      marginTop: 0,
    },
    span: {},
  },
  short: {
    variant: "cards.primary",
    height: "675px",
  },
  noImgnoBtn: {
    img: {
      display: "none",
    },
    height: "300px",
  },
  noImg: {},
};

export default cards;
