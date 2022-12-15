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
      marginLeft: 8,
      color: 'text.overline',
    },
    h5: {
      marginLeft: 8,
      fontWeight: 700,
      color: 'text.titleCard',

    },
    p: {
      marginLeft: 8,
      lineHeight: "26.4px",
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
      background: "card.arrowDown",
      marginTop: 0,
      marginRight: 12,
      marginLeft: 8,
    },
    "div.arrowUp": {
      width: "25px",
      height: "30px",
      background: "card.arrowUp",
      position: "absolute",
      right: 0,
      top: 20,
      marginTop: 0,
    },
    ".hide": {
      textOverflow: "ellipsis", 
      overflow: "hidden", 
      whiteSpace: "nowrap"
    },
    ".show": {
      /* display: "none", */
    }
  },

  onlyText: {
    variant: "cards.primary",
    height: "",
    paddingBottom: 8,
    paddingTop: 8,
    img: {
      display: "none",
    },
  },
  noImg: {
    variant: "cards.onlyText",
  },
};

export default cards;
