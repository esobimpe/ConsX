import { Box, Typography } from "@mui/material";
import React from "react";
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from "../../style/default";

function Mission() {
  const typographyStyles = {
    fontFamily: "Source Sans Pro",
    fontSize: "48px",
    fontWeight: "700",
    lineHeight: "normal",
    fontStyle: "normal",
    color: "#fff",
    marginBottom: "8px",
  };

  const typographyStylesTwo = {
    fontFamily: "Source Sans Pro",
    fontSize: "24px",
    fontWeight: "400",
    lineHeight: "normal",
    fontStyle: "normal",
    color: "#fff",
    textAlign: "center",
  }

  return (
    <Box
      sx={{
        ...DISPLAY_FLEX_COLUMN,
        ...{
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "radial-gradient(ellipse 50% 80% at left, #12768F, #05293a, #021422, #021422)",
        },
      }}
    >
      <Box
        sx={{
          ...DISPLAY_FLEX_ROW,
          ...{
            justifyContent: "flex-start",
            gap: "100px",
            flexDirection: { md: 'row', xs: 'column' },
          },
        }}
      >
        <Box
          sx={{
            ...DISPLAY_FLEX_COLUMN,
            ...{
              justifyContent: "flex-start",
              alignItems: "center"
            },
          }}
        >
          <Box
            sx={{
              ...DISPLAY_FLEX_COLUMN,
              ...{
                alignItems: "center",
                justifyContent: "center",
                width: "80%",
                height: "50%",
                paddingTop: "100px",
              },
            }}
          >
            <Typography
              sx={{
                ...typographyStyles
              }}
            >
              Our Mission
            </Typography>

            <Typography
              sx={{
                ...typographyStylesTwo
              }}
            >
              At ConsX, We Strive to Unleash the Full Potential of Entrepreneurs
            </Typography>
          </Box>

          <Box
            sx={{
              ...DISPLAY_FLEX_COLUMN,
              ...{
                justifyContent: "flex-start",
                height: "50%"
              },
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            ...DISPLAY_FLEX_ROW,
            ...{
              justifyContent: "center",
            },
          }}
        >
          <img
            alt=""
            style={{
              width: "60%",
              height: "100%",
              objectFit: "cover",
            }}
            src="./images/div.elementor-widget-wrap.png"
          />
        </Box>
      </Box>

      <Box
        sx={{
          ...DISPLAY_FLEX_ROW,
          ...{
            justifyContent: "center",
            paddingTop: "100px",
            gap: "100px",
            flexDirection: { md: 'row', xs: 'column-reverse' }
          },
        }}
      >
        <Box
          sx={{
            ...DISPLAY_FLEX_ROW,
            ...{
              justifyContent: "center",
              alignItems: 'center'
            },
          }}
        >
          <img
            alt=""
            style={{
              width: "60%",
              height: "100%",
              objectFit: "cover",
            }}
            src="./images/image2.png"
          />
        </Box>

        <Box
          sx={{
            ...DISPLAY_FLEX_COLUMN,
            ...{
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: "20px"
            },
          }}
        >
          <Box
            sx={{
              ...DISPLAY_FLEX_COLUMN,
              ...{
                justifyContent: "center",
                height: "50%"
              },
            }}
          >
            <Typography
              sx={{
                ...typographyStyles
              }}
            >
              Why Choose ConsX?
            </Typography>

            <Typography
              sx={{
                ...typographyStylesTwo
              }}
            >
              The Driving Force Behind Our Success!
            </Typography>
          </Box>

          <Box
            sx={{
              ...DISPLAY_FLEX_COLUMN,
              ...{
                justifyContent: "flex-start",
                height: "50%"
              },
            }}
          ></Box>
        </Box>


      </Box>
    </Box>
  );
}

export default Mission;
