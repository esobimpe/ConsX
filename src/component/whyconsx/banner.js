import { Box, Typography } from "@mui/material";
import React from "react";
import { DISPLAY_FLEX_COLUMN } from "../../style/default";

function Banner() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "70vh",
        backgroundColor: "#021422",
        position: "relative",
      }}
    >
      <img
        alt=""
        src="./images/whycons.png"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          mixBlendMode: "exclusion"
        }}
      />
      <Box
        sx={{
          ...DISPLAY_FLEX_COLUMN,
          ...{
            position: "absolute",
            width: "100vw",
            paddingTop: "250px",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Box
          sx={{
            ...DISPLAY_FLEX_COLUMN,
            ...{
              height: "105px",
              justifyContent: "center",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Source Sans Pro",
              fontSize: { md: "64px", sm: "40px", xs: "40px" },
              fontWeight: "700",
              textAlign: "center",
              fontStyle: "normal",
              color: "#00F0FF",
            }}
          >
            Why ConsX Page
          </Typography>
        </Box>

        <Typography
          sx={{
            width: { md: "1200px" },
            fontFamily: "Source Sans Pro, sans-serif",
            fontSize: { md: "26px", sm: "16px", xs: "16px" },
            fontWeight: "100",
            textAlign: "center",
            fontStyle: "normal",
            color: "#FFFFFF",
          }}
        >
          Discover ConsX - Empowering Your Business with Market Intelligence!
        </Typography>
        
      </Box>
    </Box>
  );
}

export default Banner;
