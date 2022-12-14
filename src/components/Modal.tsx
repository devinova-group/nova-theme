import React from "react";
import { Box, Button, Checkbox, Label, Text } from "theme-ui";
import { ReactComponent as Warning } from "../icons/warningModal.svg";


function Modal() {
  return (
    <Box variant="modal.default">
      <Warning />
      <Text as={"b"} variant="display.quicksand">
        Test
      </Text>
      <Text as={"p"} variant="body1.notoSans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus neque
        velit vel egestas congue venenatis elementum, quam. Libero nullam urna
        odio ornare fusce consectetur.
      </Text>
      <Label>
        <Checkbox />
      </Label>
      <Text variant="body1.notoSans">Remeber me</Text>
      <Text as={"strong"} variant="button.notoSans">
        Cancel
      </Text>
      <Button variant="activeMedium">Button</Button>
    </Box>
  );
}

export default Modal;
