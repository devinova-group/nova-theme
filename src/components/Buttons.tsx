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
        <Button variant="error" size="large">
          + Button
        </Button>
        <Button variant="error" size="medium">
          + Button
        </Button>
        <Button variant="error" size="small">
          $ Button
        </Button>
      </div>
      <div className="test">
        <Button variant="success" size="large">
          + Button
        </Button>
        <Button variant="success" size="medium">
          + Button
        </Button>
        <Button variant="success" size="small">
          $ Button
        </Button>
      </div>
      <div className="test">
        <Button variant="mobile" size="large" disabled>
          +
        </Button>
        <Button variant="mobile" size="medium">
          +
        </Button>
        <Button variant="mobile" size="small">
          +
        </Button>
      </div>

      <div className="test">
        <Button variant="mobileError" size="large">
          +
        </Button>
        <Button variant="mobileError" size="medium">
          +
        </Button>
        <Button variant="mobileError" size="small">
          +
        </Button>
      </div>
      <div className="test">
        <Button variant="mobileSuccess" size="large">
          +
        </Button>
        <Button variant="mobileSuccess" size="medium">
          +
        </Button>
        <Button variant="mobileSuccess" size="small">
          +
        </Button>
      </div>
    </>
  );
}

export default Buttons;
