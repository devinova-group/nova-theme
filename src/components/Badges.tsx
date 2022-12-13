import React from "react";
import { Badge } from "theme-ui";


function Badges() {
  return (
    <div className="test">
      <Badge variant="inActive">inActive</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="disabled">Disabled</Badge>
      <Badge variant="active">Active</Badge>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="selected">Selected</Badge>
      <Badge variant="secondary">Secondary</Badge>
    </div>
  );
}

export default Badges;
