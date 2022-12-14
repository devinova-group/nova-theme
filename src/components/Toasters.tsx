import React from "react";
import { Box, Text } from "theme-ui";
import { ReactComponent as Check } from "../icons/checkCircle.svg";
import { ReactComponent as Xcircle } from "../icons/xCircle.svg";
import { ReactComponent as Warning } from "../icons/warning.svg";
import { ReactComponent as WarningCircle } from "../icons/warningCircle.svg";
import { ReactComponent as Square } from "../icons/square.svg";
import { ReactComponent as Info } from "../icons/info.svg";
import { ReactComponent as CheckV2 } from "../icons/check.svg";
import { ReactComponent as CircleXV2 } from "../icons/circleXV2.svg";
import { ReactComponent as Message } from "../icons/message.svg";
import { ReactComponent as InfoV2 } from "../icons/infoV2.svg";
import { ReactComponent as WarningV2 } from "../icons/warningV2.svg";







function Toasters() {
  return (
    <>
    <Box>
    <h2>V1</h2>
      <Box variant="toaster.primaryV1">
        <Check />
        <Text variant="body2.quicksand">Success</Text>
        <Text variant="body2.quicksand">Success Message</Text>
        <Text variant="body2.quicksand">ACTION</Text>
        <Xcircle />
      </Box>
      <Box variant="toaster.warningV1">
        <Warning />
        <Text variant="body2.quicksand">Success</Text>
        <Text variant="body2.quicksand">Success Message</Text>
        <Text variant="body2.quicksand">ACTION</Text>
        <Xcircle />
      </Box>
      <Box variant="toaster.errorV1">
        <WarningCircle />
        <Text variant="body2.quicksand">Success</Text>
        <Text variant="body2.quicksand">Success Message</Text>
        <Text variant="body2.quicksand">ACTION</Text>
        <Xcircle />
      </Box>
      <Box variant="toaster.noticeV1">
        <Square />
        <Text variant="body2.quicksand">Success</Text>
        <Text variant="body2.quicksand">Success Message</Text>
        <Text variant="body2.quicksand">ACTION</Text>
        <Xcircle />
      </Box>
      <Box variant="toaster.infoV1">
        <Info />
        <Text variant="body2.quicksand">Success</Text>
        <Text variant="body2.quicksand">Success Message</Text>
        <Text variant="body2.quicksand">ACTION</Text>
        <Xcircle />
      </Box>
      </Box>
      <Box>
    <h2>V2</h2>
      <Box variant="toaster.primaryV2">
        <CheckV2 />
        <Text variant="body2.quicksand">Success Message</Text>
        <Text variant="body2.quicksand">ACTION</Text>
        <CircleXV2 />
      </Box>
      <Box variant="toaster.warningV2">
        <Warning />
        <Text variant="body2.quicksand">Success Message</Text>
        <Text variant="body2.quicksand">ACTION</Text>
        <WarningV2 />
      </Box>
      <Box variant="toaster.errorV2">
        <WarningCircle />
        <Text variant="body2.quicksand">Success Message</Text>
        <Text variant="body2.quicksand">ACTION</Text>
        <CircleXV2 />
      </Box>
      <Box variant="toaster.noticeV2">
        <Message />
        <Text variant="body2.quicksand">Success Message</Text>
        <Text variant="body2.quicksand">ACTION</Text>
        <CircleXV2 />
      </Box>
      <Box variant="toaster.infoV2">
        <InfoV2 />
        <Text variant="body2.quicksand">Success Message</Text>
        <Text variant="body2.quicksand">ACTION</Text>
        <CircleXV2 />
      </Box>
    </Box>
    </>
  );
}

export default Toasters;
