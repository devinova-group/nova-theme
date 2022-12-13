import React from "react";
import { Field } from "theme-ui";

function Fields() {
  return (
    <>
      <div className="test">
        <Field
          variant="field.text"
          name="email"
          defaultValue=""
          placeholder="Placeholder Text"
        />
        <Field
          disabled
          variant="field.text"
          name="email"
          defaultValue=""
          placeholder="Placeholder Text"
        />
        <Field
          variant="field.textError"
          name="email"
          defaultValue=""
          placeholder="Placeholder Text"
        />
      </div>
      <div className="test">
        <Field
          variant="field.search"
          name="email"
          defaultValue=""
          placeholder="Search"
        />
        <Field
          disabled
          variant="field.search"
          name="email"
          defaultValue=""
          placeholder="Search"
        />
      </div>
    </>
  );
}

export default Fields;
