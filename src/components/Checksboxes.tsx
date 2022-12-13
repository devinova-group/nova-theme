import React from "react";
import { Checkbox, Label } from "theme-ui";

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
