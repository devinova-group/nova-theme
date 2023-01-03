import React from "react";
import { Box } from "theme-ui";
import Avatar from "../library/Avatar";

import cat from "../images/cat.jpg";

function Avatars() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Avatar variant="error" src={cat}></Avatar>
      <Avatar variant="busy" src={cat}></Avatar>
      <Avatar variant="away" src={cat}></Avatar>
      <Avatar variant="active" src={cat}></Avatar>
      <Avatar variant="notAvailable" src={cat}></Avatar>
      <Avatar variant="notdisturb" username="NW"></Avatar>
      <Avatar variant="edit" username="LJ"></Avatar>
      <Avatar variant="default" username="MS"></Avatar>
    </Box>
  );
}

export default Avatars;
