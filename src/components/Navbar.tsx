import React from "react";
/** @jsx jsx */
import { Flex, jsx, Text } from "theme-ui";

import { useState } from "react";
import { useColorMode, Link, Box, Switch, Image } from "theme-ui";
import Menu from "./Menu";
import HamMenu from "../assets/svg/hamburgerMenu.svg";
import Share from "../assets/svg/share.svg";
import Close from "../assets/svg/close.svg";

export default function Navbar() {
  const [colorMode, setColorMode] = useColorMode();
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick((current) => !current);
  };
  return (
    <>
      <nav
        style={{
          width: "95%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {!click && (
          <>
            <Link variant="links" onClick={() => handleClick()}>
              <Flex variant="flex.alignCentar">
                <HamMenu
                  sx={{
                    width: "24px",
                    marginRight: "10px",
                    "> path": {
                      fill: "default.black",
                    },
                  }}
                />
                <Text>CARRER MENU</Text>
              </Flex>
            </Link>
            <Link href="/">
              <Box
                sx={{
                  width: "300px",
                  height: "50px",
                  background: "default.headerImg",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "200px",
                }}
              />
            </Link>
            <Flex variant="flex.alignCentar">
              <Share
                sx={{
                  width: "24px",
                  height: "24px",
                  transform: "rotate(-90deg)",
                  cursor: "pointer",
                  "> path": {
                    fill: "default.black",
                  },
                }}
              />
              <Switch
                variant="switchs.toggleV2Small"
                onClick={() => {
                  setColorMode(colorMode === "default" ? "dark" : "default");
                }}
              ></Switch>
            </Flex>
          </>
        )}
        {click && (
          <>
            <Menu />
            <Flex
              variant="flex.alignCentar"
              sx={{
                cursor: "pointer",
                position: "absolute",
                zIndex: 1,
                color: "default.black",
              }}
              onClick={() => handleClick()}
            >
              <Close
                sx={{
                  width: "24px",
                  marginRight: "10px",
                  
                  "> path": {
                    fill: "default.black",
                  },
                }}
              />
              <Text>CARRER MENU</Text>
            </Flex>
          </>
        )}
      </nav>
    </>
  );
}
