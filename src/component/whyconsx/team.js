import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { TEAMS } from "../../constants";
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from "../../style/default";

function Team() {
  return (
    <Box
      sx={{
        ...DISPLAY_FLEX_COLUMN,
        ...{
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "radial-gradient(ellipse 50% 80% at left, #12768F, #05293a, #021422, #021422)",
          paddingBottom: "300px",
        },
      }}
    >
      <Box
        sx={{
          ...DISPLAY_FLEX_COLUMN,
          ...{
            justifyContent: "center",
            alignItems: "center",
            padding:"10px"
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Source Sans Pro",
            fontSize: "48px",
            fontWeight: "700",
            lineHeight: "normal",
            fontStyle: "normal",
            color: "#fff",
            marginBottom: "8px",
          }}
        >
          Meet Our Team
        </Typography>

        <Typography
          sx={{
            fontFamily: "Source Sans Pro",
            fontSize: {md: "24px", xs: '20px'},
            fontWeight: "400",
            lineHeight: "normal",
            fontStyle: "normal",
            color: "#fff",
          }}
        >
          The Faces Behind ConsX - Your Research Partners!
        </Typography>
      </Box>
      <Grid container spacing={2}
      sx={{
        width: {md: '60%', xs: '90%'},
        paddingTop: '60px',
      }}>
        {TEAMS.map((item) => (
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              sx={{
                ...DISPLAY_FLEX_COLUMN,
                ...{
                alignItems: "center",
                justifyContent: "center",
                },
              }}
            >
              <Box
                sx={{
                  borderRadius: "5px",
                  height: '250px',
                  width: '300px',
                  paddingBottom:'20px',
                }}
              >
                <img alt="" style={{width:'100%', height:'100%', objectFit:'cover'}}src={item.pic} />
              </Box>


              <Typography
                sx={{
                  color: "var(--primary-white, #FFF)",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                  letterSpacing: "1.6px",
                  paddingTop: '10px',
                }}
              >
                {item.name}
              </Typography>

              <Typography
                sx={{
                  color: "var(--secondary-white, rgba(255, 255, 255, 0.80))",
                  fontFamily: "Biotif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "450",
                  lineHeight: "normal",
                  letterSpacing: "0.7px",
                  paddingTop: '10px',
                }}
              >
                {item.role}
              </Typography>

              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    alignItems: "center",
                    gap: "15px",
                    paddingTop: '10px',
                  },
                }}
              >
                <Box>
                  <img alt="" src="./images/bxl-facebook-square 1.png" />
                </Box>
                <Box>
                  <img alt="" src="./images/bxl-twitter 1.png" />
                </Box>
                <Box>
                  <img alt="" src="./images/bxl-linkedin-square 1.png" />
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          ...DISPLAY_FLEX_COLUMN,
          ...{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: '200px',
            paddingLeft:'5px',
            paddingRight: '5px',
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Source Sans Pro",
            fontSize: "48px",
            fontWeight: "700",
            lineHeight: "normal",
            fontStyle: "normal",
            color: "#fff",
            marginBottom: "8px",
            
          }}
        >
          Our Values
        </Typography>

        <Typography
          sx={{
            fontFamily: "Source Sans Pro",
            fontSize: {md: "24px", xs: '20px'},
            fontWeight: "400",
            lineHeight: "normal",
            fontStyle: "normal",
            color: "#fff",
          }}
        >
          The Pillars of ConsX - Guiding Our Every Move!
        </Typography>
      </Box>
    </Box>
  );
}

export default Team;
