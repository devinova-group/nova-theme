const grids = {
  default: {
    width: [350, 600, 1200],
    gap: "30px",
    margin: "16px",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "auto",
    "div:nth-of-type(1)": {
      width: ["3.75em", "4.375em", "65%"],
      height: "64px",
      gridColumn: [1 / 3, 1 / 3, 1 / 3],
      background: "#000",
      /*  padding: '16px', */
    },
    "div:nth-of-type(2)": {
      "@media (max-width: 601px)": {},
      width: ["3.75em", "30em", "170%"],
      height: "64px",
      gridColumn: "3/5",
      justifySelf: "end",
      bg: "#3333",
    },
    "div:nth-of-type(3)": {
      height: "64px",
      gridColumn: "1/5",
      bg: "#3333",
    },
    "div:nth-of-type(4)": {
      height: "64px",
      gridColumn: "1/3",
      bg: "#3333",
    },
    "div:nth-of-type(5)": {
      height: "64px",
      gridColumn: "3/5",
      bg: "#3333",
    },
    "div:nth-of-type(6)": {
      height: "64px",
      gridColumn: "1/5",
      bg: "#3333",
    },
    "div:nth-of-type(7)": {
      "@media (min-width: 830px)": {
        height: "335px",
        gridColumn: "1/3",
        bg: "#3333",
        gridRow: "5 / 7",
      },
      height: "335px",
      gridColumn: "1/5",
      bg: "#3333",
      gridRow: "5 / 7",
    },
    "div:nth-of-type(8)": {
      "@media (min-width: 830px)": {
        display: "flex",
        height: "335px",
        gridColumn: "3/5",
        bg: "#3333",
      },
      display: "none",
      height: "64px",
      gridColumn: "1/3",
      bg: "#3333",
    },
    "div:nth-of-type(9)": {
      "@media (min-width: 830px)": {
        gridColumn: "1/5",
        bg: "#3333",
      },
      height: "64px",
      gridColumn: "1/3",
      bg: "#3333",
    },
    "div:nth-of-type(10)": {
      "@media (min-width: 830px)": {
        display: "none",
      },
      height: "64px",
      gridColumn: "3/5",
      bg: "#3333",
    },

    "div:nth-of-type(11)": {
      "@media (min-width: 830px)": {
        gridColumn: "1/2",
      },
      height: "64px",
      gridColumn: "1/5",
      bg: "#3333",
    },
    "div:nth-of-type(12)": {
      "@media (min-width: 830px)": {
        gridColumn: "2/3",
        display: "flex",
      },
      height: "64px",
      gridColumn: "1/5",
      bg: "#3333",

      display: "none",
    },
    "div:nth-of-type(13)": {
      "@media (min-width: 830px)": {
        gridColumn: "3/4",
        display: "flex",
      },
      display: "none",
      height: "64px",
      gridColumn: "1/5",
      bg: "#3333",
    },
    "div:nth-of-type(14)": {
      "@media (min-width: 830px)": {
        display: "flex",
        gridColumn: "4/5",
      },
      display: "none",
      height: "64px",
      gridColumn: "1/5",
      bg: "#3333",
    },
  },
};
export default grids;
