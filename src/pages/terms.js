import { Box, Typography } from "@mui/material";
import React from "react";
import { TERMS } from "../constants";
import { DISPLAY_FLEX_COLUMN } from "../style/default";

function Terms() {
  return (
    <>
      <Box
        sx={{
          ...DISPLAY_FLEX_COLUMN,
          ...{
            alignItems: "center",
            justifyContent: "center",
            backgroundImage:
              "radial-gradient(ellipse at left, #12768F, #05293a, #021422, #021422), radial-gradient(ellipse at right, #12768F, #05293a, #021422, #021422)",
          },
        }}
      >
        <Box
          sx={{
            ...DISPLAY_FLEX_COLUMN,
            ...{
              width: "80vw",
              justifyContent: "flex-start",
              alignItems: "left",
              paddingTop: "200px",
            },
          }}
        >
          <Box
            sx={{
              ...DISPLAY_FLEX_COLUMN,
              ...{
                justifyContent: "flex-start",
                alignItems: "left",
                paddingBottom: "125px",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Source Sans Pro",
                fontSize: "64px",
                fontWeight: "700",
                lineHeight: "44.96px",
                fontStyle: "normal",
                color: "#00F0FF",
                marginBottom: "45px",
              }}
            >
              ConsX Terms of Service
            </Typography>

            <Typography
              sx={{
                fontFamily: "Source Sans Pro",
                fontSize: { md: "24px", xs: "20px" },
                fontWeight: "400",
                lineHeight: "normal",
                fontStyle: "normal",
                color: "#fff",
              }}
            >
              Welcome to ConsX! These Terms of Service ("ToS") govern your use
              of the ConsX website and services. By accessing or using our
              website and services, you agree to be bound by these ToS. If you
              do not agree with these terms, please refrain from using our
              website and services.
            </Typography>
          </Box>

          {TERMS.map((item) => (
            <Box
              sx={{
                ...DISPLAY_FLEX_COLUMN,
                ...{
                  width: "100%",
                  justifyContent: "flex-start",
                  paddingBottom: "70px",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Source Sans Pro",
                  fontSize: "30px",
                  fontWeight: "700",
                  lineHeight: "150%",
                  fontStyle: "normal",
                  color: "#fff",
                }}
              >
                {item.title}
              </Typography>

              {item.desc &&
                item.desc.split("\n").map((sentence) => (
                  <Typography
                    sx={{
                      fontFamily: "Source Sans Pro",
                      fontSize: { md: "24px", xs: "20px" },
                      fontWeight: "400",
                      lineHeight: "normal",
                      fontStyle: "normal",
                      color: "#fff",
                    }}
                  >
                    {sentence}
                  </Typography>
                ))}
            </Box>
          ))}

          <Typography
            sx={{
              fontFamily: "Source Sans Pro",
              fontSize: "30px",
              fontWeight: "700",
              lineHeight: "150%",
              fontStyle: "normal",
              color: "#fff",
              paddingBottom: "70px",
            }}
          >
            Thank you for choosing ConsX! We look forward to serving you.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Source Sans Pro",
              fontSize: { md: "24px", xs: "20px" },
              fontWeight: "400",
              lineHeight: "normal",
              fontStyle: "normal",
              color: "#fff",
              paddingBottom:'30px'
            }}
          >
            Last Updated: 2023-07-13
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Terms;
