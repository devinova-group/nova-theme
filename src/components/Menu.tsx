import React from "react";
import { Text, Link, Box } from "theme-ui";

function Menu() {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          display: "grid",
          gridTemplateColumns: "10% 15% 73%",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "background",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            marginTop: 8,
            top: "10%",
            left: "30%",
            textAlign: "right",
          }}
        >
          <Link
            variant="links.menu"
            sx={{color: "default.black", fontSize: "40px", fontWeight: "bold" }}
            href="/about"
          >
            People
          </Link>
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "right",
            textAlign: "right",
            marginTop: 8,
          }}
        >
          <Text
            variant="h5.notoSans"
            sx={{
              color: "default.black",
              fontSize: "21px",
              fontWeight: "bold",
              marginTop: 12,
            }}
          >
            Employee
          </Text>
          <Link
            variant="links.menu"
            sx={{ color: "default.black", fontSize: "17px" }}
            href="/about"
          >
            Log in
          </Link>

          <Text
            variant="h5.notoSans"
            sx={{
              color: "default.black",
              fontSize: "21px",
              fontWeight: "bold",
              marginTop: 12,
            }}
          >
            Candidate
          </Text>
          <Link
            variant="links.menu"
            sx={{ color: "default.black", fontSize: "17px" }}
            href="/about"
          >
            Log in to Connect
          </Link>

          <Text
            variant="h5.notoSans"
            sx={{
              color: "default.black",
              fontSize: "21px",
              fontWeight: "bold",
              marginTop: 12,
            }}
          >
            Homepage
          </Text>
          <Link
            variant="links.menu"
            sx={{ color: "default.black", fontSize: "17px", width: "" }}
            href="/about"
          >
            devinova.se
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Menu;
