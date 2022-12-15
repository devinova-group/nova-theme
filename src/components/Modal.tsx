import React from "react";
import { Box, Button, Checkbox, Flex, Label, Text } from "theme-ui";
import { ReactComponent as Warning } from "../icons/warningModal.svg";
import Modals from "./Modals/ModalsSet";

function Modal() {
  return (
    <Modals.Dialog>
      <Modals.Header>
        <Warning />
        <Text variant="display.quicksand" >Test</Text>
      </Modals.Header>
      <Modals.Body>
      <Text variant="body1.notoSans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus neque
        velit vel egestas congue venenatis elementum, quam. Libero nullam urna
        odio ornare fusce consectetur.
      </Text>
      </Modals.Body>
      <Modals.Footer>
        <Flex variant="flex.alignCentar">
      <Label>
        <Checkbox />
      </Label>
      <Text variant="body1.notoSans" 
      sx={{
        color:'#939393',
        letterSpacing: '1px',}}
        >Remember me</Text>
        </Flex>
      <Box>
      <Text variant="button.notoSans">
        Cancel
      </Text>
      <Button variant="activeMedium">Button</Button>
      </Box>
      </Modals.Footer>
    </Modals.Dialog>
  );
}

export default Modal;
































/* import React from "react";
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
 */
