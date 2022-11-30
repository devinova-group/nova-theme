const checkbox = {
  width: "24px",
  height: "24px",
  border: "default",
  borderColor: "check.borderColor",
  boxShadow: "radio",
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
    border: "default",
    borderColor: "check.borderDisabled",
    background: "check.backgroundDisabled",
  },
};
export default checkbox;
