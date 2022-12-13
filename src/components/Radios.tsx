import React from "react";
import { Label, Radio } from "theme-ui";

function Radios() {
  return (
    <div className="test">
      <Label>
        <Radio name="test" value="true" />
      </Label>
      <Label>
        <Radio name="test" value="true" />
      </Label>
      <Label>
        <Radio name="test" disabled />
      </Label>
    </div>
  );
}

export default Radios;
