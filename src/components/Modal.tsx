import React, { useState } from "react";
import Modals from "../library/Modal";
import Button from "../library/Button";
import Text from "../library/Text";
import Heading from "../library/Heading";

function Modal() {
  const [clicked, setClick] = useState(false);

  return (
    <>
      <Button variant="primary" size="medium" onClick={() => setClick(true)}>
        Modal
      </Button>
      {clicked && (
        <Modals.Dialog size="large">
          <Modals.Header>
            <Heading>Module Heading</Heading>
          </Modals.Header>
          <Modals.Body>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              neque velit vel egestas congue venenatis elementum, quam.
            </Text>
          </Modals.Body>
          <Modals.Footer>
            <Button
              variant="primary"
              size="medium"
              onClick={() => setClick(false)}
              sx={{ background: "black" }}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="medium"
              onClick={() => setClick(false)}
            >
              Click me
            </Button>
          </Modals.Footer>
        </Modals.Dialog>
      )}
    </>
  );
}

export default Modal;
