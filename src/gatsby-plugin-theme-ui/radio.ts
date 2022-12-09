const radio = {
  width: "24px",
  height: "24px",
  border: "default",
  borderColor: "radio.borderColor",
  backgroundColor: "radio.bg",
  boxShadow: "radio",
  "> path": {
    fill: "none",
    d: 'circle cx="6.75" cy:"6.75" r="6.75" ',
  },
  "input:checked ~ &": {
    borderColor: "radio.clicked",
    background: "radio.background",
  },
  "input:disabled ~ &": {
    width: "24px",
    height: "24px",
    cursor: "not-allowed",
    background: "radio.disabled",
    border: "primary",
    borderColor: "radio.disabledBorder",
  },
};
export default radio;
