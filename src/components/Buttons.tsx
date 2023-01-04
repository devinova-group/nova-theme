import React from "react";
import Button from "../library/Button";

function Buttons() {
  return (
    <>
      <div className="test">
        <Button variant="primary" size="large">
          + Button
        </Button>
        <Button variant="primary" size="medium">
          + Button
        </Button>
        <Button variant="primary" size="small">
          $ Button
        </Button>
      </div>
      <div className="test">
        {/*  <Button variant="mobile" disabled>
          +
        </Button>
        <Button variant="mobileMedium">+</Button>
        <Button variant="mobileSmall">+</Button>
      </div>

      <div className="test">
        <Button variant="mobileError">+</Button>
        <Button variant="mobileErrorMedium">+</Button>
        <Button variant="mobileErrorSmall">+</Button>
      </div>
      <div className="test">
        <Button variant="mobileSuccess">+</Button>
        <Button variant="mobileSuccessMedium">+</Button>
        <Button variant="mobileSuccessSmall">+</Button> */}
      </div>
    </>
  );
}

export default Buttons;
