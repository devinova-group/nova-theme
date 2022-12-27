import React from "react";
import { Label } from "theme-ui";
import Checkbox from "../library/Checksbox";

function Checksboxes() {
  return (
    <div className="test">
      <Label>
        <Checkbox />
      </Label>
      <Label>
        <Checkbox />
      </Label>
      <Label>
        <Checkbox disabled />
      </Label>
    </div>
  );
}

export default Checksboxes;
