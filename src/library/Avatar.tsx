import { useState } from "react";
import { Image, Box, Flex, Heading } from "theme-ui";

export interface AvatarProps {
  src?: string;
  variant?:
    | "notAvailable"
    | "busy"
    | "away"
    | "notdisturb"
    | "edit"
    | "active"
    | "default"
    | "noImage"
    | "error";
  onClick?: () => void;
  sx?: any;
  username?: string;
}

const Avatar = ({ username, src, variant, onClick, sx }: AvatarProps) => {
  const [status, setStatus] = useState(true);
  const [clicked, setClick] = useState("");

  const allStatus = [
    { id: 1, value: "notAvailable" },
    { id: 2, value: "busy" },
    { id: 3, value: "away" },
    { id: 4, value: "notdisturb" },
    { id: 5, value: "edit" },
    { id: 6, value: "active" },
    { id: 7, value: "error" },
  ];
  const handleClick = (status: any) => {
    setClick(status);
    setStatus(true);
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        variant={clicked ? `avatars.${clicked}` : `avatars.${variant}`}
        onClick={onClick}
        sx={sx}
      >
        <Image src={src} />
        <Heading as={"h6"} variant="heading.h6.quicksand">
          {username}
        </Heading>
        <Box
          sx={{ position: "absolute" }}
          onClick={() => setStatus(!status)}
        ></Box>
      </Box>
      {!status &&
        allStatus.map((status) => (
          <Flex
            key={status.id}
            onClick={() => handleClick(status.value)}
            sx={{
              display: "flex",
              flexDirection: "row",
              height: 30,
              width: 70,
              position: "relative",
            }}
          >
            <Box
              variant={`avatars.${status.value}`}
              sx={{
                background: "none",
                top: 0,
                left: 14,
                position: "absolute",
              }}
            >
              <Box />
            </Box>
          </Flex>
        ))}
    </Box>
  );
};

export default Avatar;
