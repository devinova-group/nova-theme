import colors from "./colors";
import text from "./text";
import buttons from "./buttons";
import badges from "./badges";
import cards from "./cards";

export const theme = {
  space: [
    0, 2, 4, 8, 12, 14, 16, 18, 21, 24, 28, 32, 36, 40, 42, 46, 48, 52, 56, 60,
    64, 72, 78, 80,
  ],
  fontSizes: [14, 15, 16, 18, 20, 21, 25, 28, 48, 56, 64, 104],
  fonts: {
    body: ["Noto Sans", "Quicksand"],
    heading: ["Neucha", "Quicksand"],
  },

  fontWeights: {
    body: [300, 400, 500, 600],
    heading: [400, 500],
  },

  letterSpacings: [1, 2, 2.5, 3, 3.5],
label: {
width: '30px',
},
  /* Fields */
  field: {
    text: {
      width: "314px",
      height: "50px",
      border: "2px solid",
      borderColor: "field.borderColor",
      boxShadow: "2px 5px 10px rgba(76, 58, 128, 0.25)",
      borderRadius: "6px",
      background: "field.background",
      backgroundColor: "field.backgroundColor",
      margin: 10,
      textIndent: "32px",
      "&::placeholder": {
        fontFamily: "body.1",
        fontSize: 2,
        fontWeight: 2,
        letterSpacing: 0,
        color: "field.placeholder",
      },
      "&:focus": {
        outline: "none",
        borderColor: "field.borderColorClick",
      },
      "&:disabled": {
        backgroundColor: "field.disabled",
        borderColor: "field.disabledBorder",
        cursor: "not-allowed",
      },
    },
    textError: {
      variant: "field.text",
      borderColor: "field.disabledBorder",
      background: "field.errorBg",
      /*         backgroundPosition: 'left 16px center, right 16px center',
        backgroundRepeat: 'no-repeat, no-repeat', */
      backgroundColor: "field.errorBackground",
    },
    search: {
      variant: "field.text",
      width: "240px",
      height: "50px",
      background: "field.searchBg",
      "&:focus": {
        outline: "none",
        borderColor: "#9b91b8",
      },
    },
  },
  /* Radio */
  radio: {
    width: "24px",
    height: "24px",
    border: "2px solid",
    borderColor: "lightMode.second",
    backgroundColor: "lightMode.white",
    boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.25)",
    color: "lightMode.second",
    "> path": {
      fill: "none",
      d: 'circle cx="6.75" cy:"6.75" r="6.75" ',
    },
    "input:checked ~ &": {
      borderColor: "radio.borderColor",
      background: "radio.background",
      /*  color: 'radio.primary', */
    },
    "input:disabled ~ &": {
      width: "24px",
      height: "24px",
      cursor: "not-allowed",
      background: "radio.disabled",
      border: "2px solid",
      borderColor: "badgeColorsLightMode.disabled",
    },
  },

  /* Check Box */
  checkbox: {
    width: "24px",
    height: "24px",
    border: "2px solid #9d93b9",
    boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.25)",
    fill: "none",
    appearance: "none",

    "input:focus ~ &": {
      background: "transparent",
    },

    "input:checked ~ &": {
      fill: "none",
      border: "none",
      background: "check.background",
    },
    "input:disabled ~ &": {
      width: "24px",
      height: "24px",
      cursor: "not-allowed",
      border: "2px solid #C5C5C5",
      background: "check.backgroundDisabled",
    },
  },

  /* Switch */
  switchs: {
    toggleBig: {
      width: "145px",
      height: "67px",
      backgroundColor: "badge.disabled",
      boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "40px",
      display: "flex",
      alignItems: "center",
      margin: 6,

      div: {
        marginLeft: 2,
        width: "54px",
        height: "54px",
        background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA1NCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjciIGN5PSIyNyIgcj0iMjciIGZpbGw9IiNGRkZFRkIiLz4KPHBhdGggZD0iTTE5LjkzNzEgMTUuNzA3MUMxOS41NDY2IDE1LjMxNjYgMTguOTEzNCAxNS4zMTY2IDE4LjUyMjkgMTUuNzA3MUwxNS43MDcxIDE4LjUyMjlDMTUuMzE2NiAxOC45MTM0IDE1LjMxNjYgMTkuNTQ2NiAxNS43MDcxIDE5LjkzNzFMMTcuMTYgMjEuMzlMMjEuODA0NyAyNi4xMTI5QzIyLjE4OTYgMjYuNTA0NCAyMi4xODcgMjcuMTMzIDIxLjc5ODggMjcuNTIxMkwxNy4xNiAzMi4xNkwxNS43Mjk4IDMzLjUzMDZDMTUuMzI4IDMzLjkxNTcgMTUuMzE3OSAzNC41NTQ2IDE1LjcwNzIgMzQuOTUyMkwxOC41MjMgMzcuODI3OUMxOC45MTIyIDM4LjIyNTUgMTkuNTUxMiAzOC4yMjg4IDE5Ljk0NDYgMzcuODM1NEwyMS4zOSAzNi4zOUwyNi4xMDcgMzEuNjczQzI2LjQ5OTggMzEuMjgwMiAyNy4xMzc1IDMxLjI4MjkgMjcuNTI3MSAzMS42NzlMMzIuMTYgMzYuMzlMMzMuNTIzMiAzNy44MTI1QzMzLjkxMTEgMzguMjE3MiAzNC41NTU5IDM4LjIyNDEgMzQuOTUyMyAzNy44Mjc3TDM3LjgyNzcgMzQuOTUyM0MzOC4yMjQxIDM0LjU1NTkgMzguMjE3MiAzMy45MTExIDM3LjgxMjUgMzMuNTIzMkwzNi4zOSAzMi4xNkwzMS42NzkgMjcuNTI3MUMzMS4yODI5IDI3LjEzNzUgMzEuMjgwMiAyNi40OTk4IDMxLjY3MyAyNi4xMDdMMzYuMzkgMjEuMzlMMzcuODM1NCAxOS45NDQ2QzM4LjIyODggMTkuNTUxMiAzOC4yMjU1IDE4LjkxMjIgMzcuODI3OSAxOC41MjNMMzQuOTUyMiAxNS43MDcyQzM0LjU1NDYgMTUuMzE3OSAzMy45MTU3IDE1LjMyOCAzMy41MzA2IDE1LjcyOThMMzIuMTYgMTcuMTZMMjcuNTIxMiAyMS43OTg4QzI3LjEzMyAyMi4xODcgMjYuNTA0NCAyMi4xODk2IDI2LjExMjkgMjEuODA0N0wyMS4zOSAxNy4xNkwxOS45MzcxIDE1LjcwNzFaIiBmaWxsPSIjQjRCNEI0Ii8+Cjwvc3ZnPgo=")
      no-repeat center center`,
      },
      "input:checked ~ &": {
        backgroundColor: "badge.active",
        div: {
          background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA1NCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjciIGN5PSIyNyIgcj0iMjciIGZpbGw9IiNGRkZFRkIiLz4KPHBhdGggZD0iTTM0Ljk1MjIgMTcuNzA3MkMzNC41NTQ2IDE3LjMxNzkgMzMuOTE1NyAxNy4zMjggMzMuNTMwNiAxNy43Mjk4TDMyLjE2IDE5LjE2TDI0LjUxMzkgMjYuODA2MUMyNC4xMjg2IDI3LjE5MTQgMjMuNTA1NyAyNy4xOTczIDIzLjExMzEgMjYuODE5M0wyMS4zOSAyNS4xNkwxOS45MzcxIDIzLjcwNzFDMTkuNTQ2NiAyMy4zMTY2IDE4LjkxMzQgMjMuMzE2NiAxOC41MjI5IDIzLjcwNzFMMTUuNzA3MSAyNi41MjI5QzE1LjMxNjYgMjYuOTEzNCAxNS4zMTY2IDI3LjU0NjYgMTUuNzA3MSAyNy45MzcxTDE3LjE2IDI5LjM5TDIxLjY2IDMzLjg5TDIzLjAyMzIgMzUuMzEyNUMyMy40MTExIDM1LjcxNzIgMjQuMDU1OSAzNS43MjQxIDI0LjQ1MjMgMzUuMzI3N0wyNS44OSAzMy44OUwzNi4zOSAyMy4zOUwzNy44MzU0IDIxLjk0NDZDMzguMjI4OCAyMS41NTEyIDM4LjIyNTUgMjAuOTEyMiAzNy44Mjc5IDIwLjUyM0wzNC45NTIyIDE3LjcwNzJaIiBmaWxsPSIjM0NDMTNCIi8+Cjwvc3ZnPgo=")
      no-repeat center center`,
          marginLeft: 10,
        },
      },
    },
    toggleSmall: {
      variant: "switchs.toggleBig",
      width: "68px",
      height: "32px",
      div: {
        marginLeft: 2,
        width: "26px",
        height: "26px",
        background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTMiIGN5PSIxMyIgcj0iMTMiIGZpbGw9IiNGRkZFRkIiLz4KPHBhdGggZD0iTTkuODIyMTEgNy43MDcxMUM5LjQzMTU4IDcuMzE2NTggOC43OTg0MiA3LjMxNjU4IDguNDA3ODkgNy43MDcxMUw3LjcwNzExIDguNDA3ODlDNy4zMTY1OCA4Ljc5ODQyIDcuMzE2NTggOS40MzE1OCA3LjcwNzExIDkuODIyMTFMOC4wOCAxMC4xOTVMMTAuMDU0NyAxMi4yMDI5QzEwLjQzOTYgMTIuNTk0NCAxMC40MzcgMTMuMjIzIDEwLjA0ODggMTMuNjExMkw4LjA4IDE1LjU4TDcuNzI5NzkgMTUuOTE1NkM3LjMyODAxIDE2LjMwMDcgNy4zMTc4NSAxNi45Mzk2IDcuNzA3MTggMTcuMzM3Mkw4LjQwNzk3IDE4LjA1MjlDOC43OTcyNCAxOC40NTA1IDkuNDM2MTUgMTguNDUzOCA5LjgyOTU5IDE4LjA2MDRMMTAuMTk1IDE3LjY5NUwxMi4xOTcgMTUuNjkzQzEyLjU4OTggMTUuMzAwMiAxMy4yMjc1IDE1LjMwMjkgMTMuNjE3MSAxNS42OTlMMTUuNTggMTcuNjk1TDE1LjkwODIgMTguMDM3NUMxNi4yOTYxIDE4LjQ0MjIgMTYuOTQwOSAxOC40NDkxIDE3LjMzNzMgMTguMDUyN0wxOC4wNTI3IDE3LjMzNzNDMTguNDQ5MSAxNi45NDA5IDE4LjQ0MjIgMTYuMjk2MSAxOC4wMzc1IDE1LjkwODJMMTcuNjk1IDE1LjU4TDE1LjY5OSAxMy42MTcxQzE1LjMwMjkgMTMuMjI3NSAxNS4zMDAyIDEyLjU4OTggMTUuNjkzIDEyLjE5N0wxNy42OTUgMTAuMTk1TDE4LjA2MDQgOS44Mjk1OUMxOC40NTM4IDkuNDM2MTUgMTguNDUwNSA4Ljc5NzI0IDE4LjA1MjkgOC40MDc5N0wxNy4zMzcyIDcuNzA3MThDMTYuOTM5NiA3LjMxNzg1IDE2LjMwMDcgNy4zMjgwMSAxNS45MTU2IDcuNzI5NzlMMTUuNTggOC4wOEwxMy42MTEyIDEwLjA0ODhDMTMuMjIzIDEwLjQzNyAxMi41OTQ0IDEwLjQzOTYgMTIuMjAyOSAxMC4wNTQ3TDEwLjE5NSA4LjA4TDkuODIyMTEgNy43MDcxMVoiIGZpbGw9IiNCNEI0QjQiLz4KPC9zdmc+Cg==")
      no-repeat center center`,
      },
      "input:checked ~ &": {
        backgroundColor: "badge.active",
        div: {
          background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTMiIGN5PSIxMyIgcj0iMTMiIGZpbGw9IiNGRkZFRkIiLz4KPHBhdGggZD0iTTE3LjMzNzIgOC43MDcxOEMxNi45Mzk2IDguMzE3ODUgMTYuMzAwNyA4LjMyODAxIDE1LjkxNTYgOC43Mjk3OUwxNS41OCA5LjA4TDEyLjEwMzkgMTIuNTU2MUMxMS43MTg2IDEyLjk0MTQgMTEuMDk1NyAxMi45NDczIDEwLjcwMzEgMTIuNTY5M0wxMC4xOTUgMTIuMDhMOS44MjIxMSAxMS43MDcxQzkuNDMxNTggMTEuMzE2NiA4Ljc5ODQyIDExLjMxNjYgOC40MDc4OSAxMS43MDcxTDcuNzA3MTEgMTIuNDA3OUM3LjMxNjU4IDEyLjc5ODQgNy4zMTY1OCAxMy40MzE2IDcuNzA3MTEgMTMuODIyMUw4LjA4IDE0LjE5NUwxMC4zMyAxNi40NDVMMTAuNjU4MiAxNi43ODc1QzExLjA0NjEgMTcuMTkyMiAxMS42OTA5IDE3LjE5OTEgMTIuMDg3MyAxNi44MDI3TDEyLjQ0NSAxNi40NDVMMTcuNjk1IDExLjE5NUwxOC4wNjA0IDEwLjgyOTZDMTguNDUzOCAxMC40MzYyIDE4LjQ1MDUgOS43OTcyNCAxOC4wNTI5IDkuNDA3OTdMMTcuMzM3MiA4LjcwNzE4WiIgZmlsbD0iIzNDQzEzQiIvPgo8L3N2Zz4K")
      no-repeat center center`,
          marginLeft: 3,
        },
      },
    },
    toggleBigDayNight: {
      variant: "switchs.toggleBig",
      background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ1IiBoZWlnaHQ9IjY3IiB2aWV3Qm94PSIwIDAgMTQ1IDY3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTQ1IiBoZWlnaHQ9IjY3IiByeD0iMzMuNSIgZmlsbD0iIzRDM0E4MCIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9mXzZfNDYpIj4KPGNpcmNsZSBjeD0iMTA2LjUiIGN5PSIzMy41IiByPSIyMy41IiBmaWxsPSIjRUNFOEY2IiBmaWxsLW9wYWNpdHk9IjAuMyIvPgo8L2c+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF82XzQ2KSI+CjxwYXRoIGQ9Ik0xMDQuMjI0IDE3LjQyMTFDMTA0LjIyNCAxNy40MjExIDEwNC4yMjQgMTcuNDIxMSAxMDQuMjI0IDE3LjQyMTFDOTguMzYxNiAxOS4zODc2IDk0LjEzMTYgMjQuOTE2MyA5NC4xMzE2IDMxLjQ0NjhDOTQuMTMxNiAzOS42NDcxIDEwMC43NzMgNDYuMjg4OSAxMDguOTc0IDQ2LjI4ODlDMTE0LjgwMSA0Ni4yODg5IDExOS44MyA0Mi45MjE0IDEyMi4yNDMgMzguMDMxM0MxMjIuNjA2IDM3LjI5NDcgMTIxLjg4NiAzNi41NDMxIDEyMS4wODIgMzYuNzFDMTIwLjE2OCAzNi44OTk2IDExOS4yMjIgMzcuMDEyNiAxMTguMjUgMzcuMDEyNkMxMTAuMDUgMzcuMDEyNiAxMDMuNDA4IDMwLjM3MDggMTAzLjQwOCAyMi4xNzA1QzEwMy40MDggMjAuNTAwOCAxMDMuNzA1IDE4LjkwNTMgMTA0LjIyNCAxNy40MjExQzEwNC4yMjQgMTcuNDIxMSAxMDQuMjI0IDE3LjQyMTEgMTA0LjIyNCAxNy40MjExVjE3LjQyMTFaIiBmaWxsPSIjRkZGRUZCIi8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZl82XzQ2IiB4PSI4MSIgeT0iOCIgd2lkdGg9IjUxIiBoZWlnaHQ9IjUxIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl82XzQ2Ii8+CjwvZmlsdGVyPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzZfNDYiPgo8cmVjdCB4PSI5NC4xMzE2IiB5PSIxNy40MjExIiB3aWR0aD0iMjkuNjg0MiIgaGVpZ2h0PSIyOS42ODQyIiByeD0iMSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K")
      no-repeat center right`,

      div: {
        marginLeft: 2,
        width: "54px",
        height: "54px",
      },
      "input:checked ~ &": {
        background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ1IiBoZWlnaHQ9IjY3IiB2aWV3Qm94PSIwIDAgMTQ1IDY3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTQ1IiBoZWlnaHQ9IjY3IiByeD0iMzMuNSIgZmlsbD0iI0Y5RDE4MyIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9mXzZfNDYpIj4KPGNpcmNsZSBjeD0iMzkuNSIgY3k9IjMzLjUiIHI9IjIzLjUiIGZpbGw9IiNBOEExQjgiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjwvZz4KPHBhdGggZD0iTTM5LjA3ODkgMTdDMzcuOTUzNCAxNyAzNy4wNjkxIDE3Ljg4NDMgMzcuMDY5MSAxOS4wMDk5QzM3LjA2OTEgMjAuMTM1NCAzNy45NTM0IDIxLjAxOTcgMzkuMDc4OSAyMS4wMTk3QzQwLjIwNDUgMjEuMDE5NyA0MS4wODg4IDIwLjEzNTQgNDEuMDg4OCAxOS4wMDk5QzQxLjA4ODggMTcuODg0MyA0MC4yMDQ1IDE3IDM5LjA3ODkgMTdaTTI5LjAyOTYgMjEuMDE5N0MyNy45MDQxIDIxLjAxOTcgMjcuMDE5NyAyMS45MDQxIDI3LjAxOTcgMjMuMDI5NkMyNy4wMTk3IDI0LjE1NTEgMjcuOTA0MSAyNS4wMzk1IDI5LjAyOTYgMjUuMDM5NUMzMC4xNTUxIDI1LjAzOTUgMzEuMDM5NSAyNC4xNTUxIDMxLjAzOTUgMjMuMDI5NkMzMS4wMzk1IDIxLjkwNDEgMzAuMTU1MSAyMS4wMTk3IDI5LjAyOTYgMjEuMDE5N1pNNDkuMTI4MyAyMS4wMTk3QzQ4LjAwMjggMjEuMDE5NyA0Ny4xMTg0IDIxLjkwNDEgNDcuMTE4NCAyMy4wMjk2QzQ3LjExODQgMjQuMTU1MSA0OC4wMDI4IDI1LjAzOTUgNDkuMTI4MyAyNS4wMzk1QzUwLjI1MzggMjUuMDM5NSA1MS4xMzgyIDI0LjE1NTEgNTEuMTM4MiAyMy4wMjk2QzUxLjEzODIgMjEuOTA0MSA1MC4yNTM4IDIxLjAxOTcgNDkuMTI4MyAyMS4wMTk3Wk0zOS4wNzg5IDI1LjAzOTVDMzQuNjU3MiAyNS4wMzk1IDMxLjAzOTUgMjguNjU3MiAzMS4wMzk1IDMzLjA3ODlDMzEuMDM5NSAzNy41MDA3IDM0LjY1NzIgNDEuMTE4NCAzOS4wNzg5IDQxLjExODRDNDMuNTAwNyA0MS4xMTg0IDQ3LjExODQgMzcuNTAwNyA0Ny4xMTg0IDMzLjA3ODlDNDcuMTE4NCAyOC42NTcyIDQzLjUwMDcgMjUuMDM5NSAzOS4wNzg5IDI1LjAzOTVaTTI1LjAwOTkgMzEuMDY5MUMyMy44ODQzIDMxLjA2OTEgMjMgMzEuOTUzNCAyMyAzMy4wNzg5QzIzIDM0LjIwNDUgMjMuODg0MyAzNS4wODg4IDI1LjAwOTkgMzUuMDg4OEMyNi4xMzU0IDM1LjA4ODggMjcuMDE5NyAzNC4yMDQ1IDI3LjAxOTcgMzMuMDc4OUMyNy4wMTk3IDMxLjk1MzQgMjYuMTM1NCAzMS4wNjkxIDI1LjAwOTkgMzEuMDY5MVpNNTMuMTQ4IDMxLjA2OTFDNTIuMDIyNSAzMS4wNjkxIDUxLjEzODIgMzEuOTUzNCA1MS4xMzgyIDMzLjA3ODlDNTEuMTM4MiAzNC4yMDQ1IDUyLjAyMjUgMzUuMDg4OCA1My4xNDggMzUuMDg4OEM1NC4yNzM2IDM1LjA4ODggNTUuMTU3OSAzNC4yMDQ1IDU1LjE1NzkgMzMuMDc4OUM1NS4xNTc5IDMxLjk1MzQgNTQuMjczNiAzMS4wNjkxIDUzLjE0OCAzMS4wNjkxWk0yOS4wMjk2IDQxLjExODRDMjcuOTA0MSA0MS4xMTg0IDI3LjAxOTcgNDIuMDAyOCAyNy4wMTk3IDQzLjEyODNDMjcuMDE5NyA0NC4yNTM4IDI3LjkwNDEgNDUuMTM4MiAyOS4wMjk2IDQ1LjEzODJDMzAuMTU1MSA0NS4xMzgyIDMxLjAzOTUgNDQuMjUzOCAzMS4wMzk1IDQzLjEyODNDMzEuMDM5NSA0Mi4wMDI4IDMwLjE1NTEgNDEuMTE4NCAyOS4wMjk2IDQxLjExODRaTTQ5LjEyODMgNDEuMTE4NEM0OC4wMDI4IDQxLjExODQgNDcuMTE4NCA0Mi4wMDI4IDQ3LjExODQgNDMuMTI4M0M0Ny4xMTg0IDQ0LjI1MzggNDguMDAyOCA0NS4xMzgyIDQ5LjEyODMgNDUuMTM4MkM1MC4yNTM4IDQ1LjEzODIgNTEuMTM4MiA0NC4yNTM4IDUxLjEzODIgNDMuMTI4M0M1MS4xMzgyIDQyLjAwMjggNTAuMjUzOCA0MS4xMTg0IDQ5LjEyODMgNDEuMTE4NFpNMzkuMDc4OSA0NS4xMzgyQzM3Ljk1MzQgNDUuMTM4MiAzNy4wNjkxIDQ2LjAyMjUgMzcuMDY5MSA0Ny4xNDhDMzcuMDY5MSA0OC4yNzM2IDM3Ljk1MzQgNDkuMTU3OSAzOS4wNzg5IDQ5LjE1NzlDNDAuMjA0NSA0OS4xNTc5IDQxLjA4ODggNDguMjczNiA0MS4wODg4IDQ3LjE0OEM0MS4wODg4IDQ2LjAyMjUgNDAuMjA0NSA0NS4xMzgyIDM5LjA3ODkgNDUuMTM4MloiIGZpbGw9IiNGRkZFRkIiLz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZl82XzQ2IiB4PSIxNCIgeT0iOCIgd2lkdGg9IjUxIiBoZWlnaHQ9IjUxIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl82XzQ2Ii8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=")`,
        div: {
          marginLeft: 10,
        },
      },
    },
    toggleSmallDayNight: {
      width: "68px",
      height: "32px",
      variant: "switchs.toggleSmall",
      background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA2OCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY4IiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiM0QzNBODAiLz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZl8xMV8xMTkpIj4KPGNpcmNsZSBjeD0iNDguNSIgY3k9IjE2LjUiIHI9IjEwLjUiIGZpbGw9IiNFQ0U4RjYiIGZpbGwtb3BhY2l0eT0iMC4zIi8+CjwvZz4KPHBhdGggZD0iTTQ3LjUwOTUgMTBDNDcuNTA5NSAxMCA0Ny41MDk1IDEwIDQ3LjUwOTUgMTBDNDQuODkgMTAuODc4NyA0MyAxMy4zNDg5IDQzIDE2LjI2NjhDNDMgMTkuOTMwOCA0NS45Njc2IDIyLjg5ODQgNDkuNjMxNiAyMi44OTg0QzUxLjg0MTkgMjIuODk4NCA1My43OTU0IDIxLjgxMzkgNTQuOTk0OCAyMC4xNDkzQzU1LjQ3NSAxOS40ODI4IDU0Ljc3MzUgMTguNzI1NCA1My45NTI1IDE4Ljc1MDlDNTMuODk0IDE4Ljc1MjggNTMuODM1MiAxOC43NTM3IDUzLjc3NjMgMTguNzUzN0M1MC4xMTI0IDE4Ljc1MzcgNDcuMTQ0NyAxNS43ODYxIDQ3LjE0NDcgMTIuMTIyMUM0Ny4xNDQ3IDExLjM3NjEgNDcuMjc3NCAxMC42NjMyIDQ3LjUwOTUgMTBDNDcuNTA5NSAxMCA0Ny41MDk1IDEwIDQ3LjUwOTUgMTBWMTBaIiBmaWxsPSIjRkZGRUZCIi8+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2ZfMTFfMTE5IiB4PSIzNiIgeT0iNCIgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xMV8xMTkiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg=="), 
      no-repeat, center center`,

      div: {
        marginLeft: 2,
        width: "26px",
        height: "26px",
      },
      "input:checked ~ &": {
        background: `
        url("data:image/svg+xml;base64,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")
        no-repeat, left center, 
        
        url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA2OCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY4IiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiNGOUQxODMiLz4KPC9zdmc+Cg=="),
        no-repeat, center center`,
        backgroundPosition: "15% center",
        backgroundRepeat: "no-repeat, repeat",
        div: {
          marginLeft: 3,
        },
      },
    },
    toggleSmallDayNightV2: {},
  },
  spinner: {
    primary: {
      box: {
        background: `url("data:image/svg+xml;base64,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")
        no-repeat, left center`,
      },
    },
  },
  colors,
  text,
  buttons,
  badges,
  cards,
};
