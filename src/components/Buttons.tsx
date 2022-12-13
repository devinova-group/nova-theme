import React from "react";
import { Button } from "theme-ui";

function Buttons() {
  return (
    <>
      <div className="test">
        <Button variant="primary" disabled>
          + Button
        </Button>
        <Button variant="activeMedium">+ Button</Button>
        <Button variant="activeSmall">$ Button</Button>
      </div>

      <div className="test">
        <Button variant="error">$ Button</Button>
        <Button variant="errorMedium" disabled>
          $ Button
        </Button>
        <Button variant="errorSmall">$ Button</Button>
      </div>
      <div className="test">
        <Button variant="success">+ Button</Button>
        <Button variant="successMedium">+ Button</Button>
        <Button variant="successSmall" disabled>
          $ Button
        </Button>
      </div>

      <div className="test">
        <Button variant="mobile" disabled>
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
        <Button variant="mobileSuccessSmall">+</Button>
      </div>
    </>
  );
}

export default Buttons;
