import React from "react";
import Field from "../library/Field";

function Fields() {
  return (
    <>
      <div className="test">
        <Field
          variant="text"
          name="email"
          defaultValue=""
          placeholder="Placeholder Text"
        />
        <Field
          disabled
          variant="text"
          name="email"
          defaultValue=""
          placeholder="Placeholder Text"
        />
        <Field
          variant="textError"
          name="email"
          defaultValue=""
          placeholder="Placeholder Text"
        />
      </div>
      <div className="test">
        <Field
          variant="search"
          name="email"
          defaultValue=""
          placeholder="Search"
        />
        <Field
          disabled
          variant="search"
          name="email"
          defaultValue=""
          placeholder="Search"
        />
      </div>
    </>
  );
}

export default Fields;
