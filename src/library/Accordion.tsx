/** @jsxRuntime classic */
/** @jsx jsx */

import { useEffect, useRef, useState } from "react";
import { Box, jsx } from "theme-ui";

interface Props {
  toggleAccordion?: boolean;
  children: React.ReactNode;
}

const Accordion = ({ toggleAccordion, children }: Props) => {
  const [height, setHeight] = useState("0px");
  useEffect(() => {
    setHeight(toggleAccordion ? `40px` : "0px");
  }, [toggleAccordion]);
  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: height,
        overflow: "hidden",
        transition: "max-height 0.6s ease",
      }}
    >
      {children}
    </Box>
  );
};

export default Accordion;
