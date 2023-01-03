import React from "react";
import { Box } from "theme-ui";
import Text from "../library/Text";
import Toaster from "../library/Toaster";

function Toasters() {
  return (
    <>
      <Box>
        <h2>V1</h2>
        <Toaster variant="primaryV1">
          <Text variant="quicksand" size="body2">
            Success
          </Text>
          <Text variant="quicksand" size="body2">
            Success Message
          </Text>
          <Text variant="quicksand" size="body2">
            ACTION
          </Text>
        </Toaster>
        <Toaster variant="warningV1">
          <Text variant="quicksand" size="body2">
            Success
          </Text>
          <Text variant="quicksand" size="body2">
            Success Message
          </Text>
          <Text variant="quicksand" size="body2">
            ACTION
          </Text>
        </Toaster>
        <Toaster variant="errorV1">
          <Text variant="quicksand" size="body2">
            Success
          </Text>
          <Text variant="quicksand" size="body2">
            Success Message
          </Text>
          <Text variant="quicksand" size="body2">
            ACTION
          </Text>
        </Toaster>
        <Toaster variant="noticeV1">
          <Text variant="quicksand" size="body2">
            Success
          </Text>
          <Text variant="quicksand" size="body2">
            Success Message
          </Text>
          <Text variant="quicksand" size="body2">
            ACTION
          </Text>
        </Toaster>
        <Toaster variant="infoV1">
          <Text variant="quicksand" size="body2">
            Success
          </Text>
          <Text variant="quicksand" size="body2">
            Success Message
          </Text>
          <Text variant="quicksand" size="body2">
            ACTION
          </Text>
        </Toaster>
      </Box>
      <Box>
        <h2>V2</h2>
        <Toaster variant="primaryV2">
          <Text variant="quicksand" size="body2">
            Success Message
          </Text>
          <Text variant="quicksand" size="body2">
            ACTION
          </Text>
        </Toaster>
        <Toaster variant="warningV2">
          <Text variant="quicksand" size="body2">
            Success Message
          </Text>
          <Text variant="quicksand" size="body2">
            ACTION
          </Text>
        </Toaster>
        <Toaster variant="errorV2">
          <Text variant="quicksand" size="body2">
            Success Message
          </Text>
          <Text variant="quicksand" size="body2">
            ACTION
          </Text>
        </Toaster>
        <Toaster variant="noticeV2">
          <Text variant="quicksand" size="body2">
            Success Message
          </Text>
          <Text variant="quicksand" size="body2">
            ACTION
          </Text>
        </Toaster>
        <Toaster variant="infoV2">
          <Text variant="quicksand" size="body2">
            Success Message
          </Text>
          <Text variant="quicksand" size="body2">
            ACTION
          </Text>
        </Toaster>
      </Box>
    </>
  );
}

export default Toasters;
