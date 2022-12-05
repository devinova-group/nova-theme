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
    /* "div.arrowDown": {
      width: "25px",
      height: "20px",
      background: "card.arrowDown",
      marginTop: 0,
    },
    "div.arrowUp": {
      width: "25px",
      height: "30px",
      background: "card.arrowUp",
      marginTop: 0,
    }, */
    span: {},
    img: {
      borderRadius: "20px 20px 0px 0px",
    },
  },

  noImgnoBtn: {
    variant: "cards.primary",
    height: "",
    div: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      padding: 8,
    },
    span: {
      marginTop: 2,
      marginBottom: 2,
    },
    img: {
      display: "none",
    },
  },
  noImg: {
    variant: "cards.primary",
    height: "",
    div: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      padding: 8,
    },
    span: {
      marginTop: 4,
      marginBottom: 2,
    },
    img: {
      display: "none",
    },
    button: { marginTop: 4 },
  },
};

export default cards;
