import React from "react";
import { Box } from "theme-ui";
import Switch from "../library/Switch";

function Switches() {
  return (
    <div className="test">
      <Box>
        <Switch variant="large"></Switch>
        <Switch variant="small"></Switch>
        <Switch variant="largeV1"></Switch>
        <Switch variant="smallV1"></Switch>
        <Switch variant="largeV2"></Switch>
        <Switch variant="smallV2"></Switch>
      </Box>
    </div>
  );
}

export default Switches;
