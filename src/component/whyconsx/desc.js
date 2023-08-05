import { Box, Typography } from "@mui/material";
import React from "react";
import { DESCS } from "../../constants";
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from "../../style/default";

function Desc() {
  return (
    <Box
      sx={{
        ...DISPLAY_FLEX_COLUMN,
        ...{
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "radial-gradient(ellipse 50% 80% at right, #12768F, #05293a, #021422, #021422)",
          paddingBottom: "210px",
        },
      }}
    >
      <Box
        sx={{
          ...DISPLAY_FLEX_ROW,
          ...{
            justifyContent: "flex-start",
            paddingTop: "100px",
            gap: "200px",
            flexDirection: {md: 'row', xs: 'column'},
            
          },
        }}
      >
        <Box
          sx={{
            ...DISPLAY_FLEX_COLUMN,
            ...{
              justifyContent: "flex-start",
              alignItems: "center",
            },
          }}
        >
          <Box
            sx={{
              ...DISPLAY_FLEX_COLUMN,
              ...{
                justifyContent: "center",
                display: "inline-flex",
                alignItems: "flex-start",
                gap: "50px",
              },
            }}
          >
            {DESCS.map((item) => (
              <Box
                sx={{
                  ...DISPLAY_FLEX_COLUMN,
                  ...{
                    paddingBottom: "0px",
                    alignItems: "flex-start",
                    gap: "0.8px",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontSize: {md: "24px", xs: '20px'},
                    fontWeight: "700",
                    lineHeight: "40.8px",
                    fontStyle: "normal",
                    color: "#6DDFF6",
                  }}
                >
                  {item.title}
                </Typography>

                <Box
                  sx={{
                    width: {md: "450px", xs:"300px"}
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "DM Sans",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      fontStyle: "normal",
                      color: "rgba(255, 255, 255, 0.70)",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            ...DISPLAY_FLEX_COLUMN,
            ...{
              justifyContent: {md: "flex-start", xs: "center"},
              alignItems: 'center',
              flexShrink: '0',
              paddingLeft: '20px'
            },
          }}
        >
          <img
            alt=""
            style={{
              width:'80%',
              objectFit: "cover",
              mixBlendMode: "exclusion"
            }}
            src="./images/asset13.png"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Desc;
