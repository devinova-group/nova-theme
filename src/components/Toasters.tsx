import React from "react";
import { Box, Text } from "theme-ui";
import Toaster from "../library/Toaster";

function Toasters() {
  return (
    <>
      <Box>
        <h2>V1</h2>
        <Toaster variant="primaryV1">
          <Text variant="body2.quicksand">Success</Text>
          <Text variant="body2.quicksand">Success Message</Text>
          <Text variant="body2.quicksand">ACTION</Text>
        </Toaster>
        <Toaster variant="warningV1">
          <Text variant="body2.quicksand">Success</Text>
          <Text variant="body2.quicksand">Success Message</Text>
          <Text variant="body2.quicksand">ACTION</Text>
        </Toaster>
        <Toaster variant="errorV1">
          <Text variant="body2.quicksand">Success</Text>
          <Text variant="body2.quicksand">Success Message</Text>
          <Text variant="body2.quicksand">ACTION</Text>
        </Toaster>
        <Toaster variant="noticeV1">
          <Text variant="body2.quicksand">Success</Text>
          <Text variant="body2.quicksand">Success Message</Text>
          <Text variant="body2.quicksand">ACTION</Text>
        </Toaster>
        <Toaster variant="infoV1">
          <Text variant="body2.quicksand">Success</Text>
          <Text variant="body2.quicksand">Success Message</Text>
          <Text variant="body2.quicksand">ACTION</Text>
        </Toaster>
      </Box>
      <Box>
        <h2>V2</h2>
        <Toaster variant="primaryV2">
          <Text variant="body2.quicksand">Success Message</Text>
          <Text variant="body2.quicksand">ACTION</Text>
        </Toaster>
        <Toaster variant="warningV2">
          <Text variant="body2.quicksand">Success Message</Text>
          <Text variant="body2.quicksand">ACTION</Text>
        </Toaster>
        <Toaster variant="errorV2">
          <Text variant="body2.quicksand">Success Message</Text>
          <Text variant="body2.quicksand">ACTION</Text>
        </Toaster>
        <Toaster variant="noticeV2">
          <Text variant="body2.quicksand">Success Message</Text>
          <Text variant="body2.quicksand">ACTION</Text>
        </Toaster>
        <Toaster variant="infoV2">
          <Text variant="body2.quicksand">Success Message</Text>
          <Text variant="body2.quicksand">ACTION</Text>
        </Toaster>
      </Box>
    </>
  );
}

export default Toasters;
