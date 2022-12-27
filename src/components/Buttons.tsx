import React from "react";
import Button from "../library/Button";

function Buttons() {
  return (
    <>
      <div className="test">
        <Button variant="primary" size="Large" disabled>
          + Button
        </Button>
        <Button variant="primary" size="Medium">
          + Button
        </Button>
        <Button variant="primary" size="Small">
          $ Button
        </Button>
      </div>

      <div className="test">
        <Button variant="error" size="Large">
          $ Button
        </Button>
        <Button variant="error" size="Medium" disabled>
          $ Button
        </Button>
        <Button variant="error" size="Small">
          $ Button
        </Button>
      </div>
      <div className="test">
        <Button variant="success" size="Large">
          + Button
        </Button>
        <Button variant="success" size="Medium">
          + Button
        </Button>
        <Button variant="success" disabled size="Small">
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
