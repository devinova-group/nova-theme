import { Theme } from "theme-ui";

const cards: Theme["cards"] = {
  default: {
    position: 'relative',
    width: "300px",
    height: "600px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    background: "#45239c",
    textAlign: "left",
    boxShadow: "card",
    borderRadius: "20px",
    margin: 10,
    img: {},
  },
  primary: {
    width: "353px",
    height: "550px",
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

    h2: {
      color: "text.titleCard",
      marginLeft: 8,
    },

    ".overline": {
      color: "text.overline",
    },

    span: {
      color: "default.black",
      width: "100%",
      padding: "0px 6px 6px 24px",
    },

    button: {
      marginLeft: 8,
    },
  },
};

export default cards;
