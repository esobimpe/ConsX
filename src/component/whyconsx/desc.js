import { Box, Typography } from "@mui/material";
import React from "react";
import { DESCS } from "../../constants";

function Desc() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "radial-gradient(ellipse 50% 80% at right, #12768F, #05293a, #021422, #021422)",
        paddingY: "100px",
        paddingX: { xs: "0px", md: "5vw" },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box width={["80%", "50%"]} display={"flex"} flexDirection={"column"} gap={"50px"}>
        {DESCS.map((item, index) => (
          <Box
            key={index}
            sx={{
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexDirection: { xs: "column", md: "row" },
              gap: "0.8px",
            }}
          >
            <Box sx={{ width: { md: "450px", xs: "100%" }, marginRight: { xs: 0, md: "20px" } }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Raleway",
                  fontWeight: "700",
                  color: "#6DDFF6",
                  fontSize: { xs: "1.75em", md: "2em" },
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "DM Sans",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 0.70)",
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ flex: "0 0 auto", width: { xs: "80%", sm: "50%",  md: "30%" } }} paddingLeft={["0", "10%", "10%", "0"]} paddingTop={["50px", "50px", "0"]}>
        <img
          alt=""
          style={{
            width: "100%",
            objectFit: "cover",
            mixBlendMode: "exclusion",
          }}
          src="./images/asset13.png"
        />
      </Box>
    </Box>
  );
}

export default Desc;
