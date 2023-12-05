import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { TEAMS } from "../../constants";
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from "../../style/default";

function Team() {
  return (
    <Box
      sx={{
        ...DISPLAY_FLEX_COLUMN,
        alignItems: "center",
        backgroundImage:
          "radial-gradient(ellipse 50% 80% at left, #12768F, #05293a, #021422, #021422)",
        paddingBottom: "100px", // Adjusted paddingBottom
      }}
    >
      <Box sx={{ ...DISPLAY_FLEX_COLUMN, padding: "20px", textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "Source Sans Pro",
            fontSize: "48px",
            fontWeight: "700",
            color: "#fff",
            marginBottom: "8px",
          }}
        >
          Meet Our Team
        </Typography>

        <Typography
          sx={{
            fontFamily: "Source Sans Pro",
            fontSize: { md: "24px", xs: "20px" },
            fontWeight: "400",
            color: "#fff",
          }}
        >
          The Faces Behind ConsX - Your Research Partners!
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ width: { md: "60%", xs: "90%" } }}>
        {TEAMS.map((item, index) => (
          <Grid key={index} item xs={12} sm={12} md={6} lg={6}>
            <Box
              sx={{
                ...DISPLAY_FLEX_COLUMN,
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Box
                sx={{
                  borderRadius: "5px",
                  height: "250px",
                  width: "100%",
                  maxWidth: "300px",
                  paddingBottom: "20px",
                  overflow: "hidden", // Ensure images maintain aspect ratio
                }}
              >
                <img
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={item.pic}
                />
              </Box>

              <Typography
                variant="h6"
                sx={{
                  color: "#FFF",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  paddingTop: "10px",
                }}
              >
                {item.name}
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.80)",
                  fontFamily: "Biotif",
                  fontWeight: "450",
                  paddingTop: "5px",
                }}
              >
                {item.role}
              </Typography>

              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  alignItems: "center",
                  gap: "15px",
                  paddingTop: "10px",
                }}
              >
                <img alt="" src="./images/bxl-facebook-square 1.png" />
                <img alt="" src="./images/bxl-twitter 1.png" />
                <img alt="" src="./images/bxl-linkedin-square 1.png" />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Team;
