import { Box, Typography } from "@mui/material";
import React from "react";
import { IDEAS } from "../../constants";
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from "../../style/default";

function Ideas() {
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
      <Typography
        sx={{
          fontFamily: "Source Sans Pro, sans-serif",
          fontSize: "14px",
          fontWeight: "700",
          textAlign: "center",
          lineHeight: "20px",
          fontStyle: "normal",
          color: "#DB00FF",
          paddingTop: "5vh",
        }}
      >
        All-in-one Solution
      </Typography>

      <Typography
        sx={{
          fontFamily: "Source Sans Pro, sans-serif",
          fontSize: { md: "40px", xs: "1.75em" },
          fontWeight: "400",
          textAlign: "center",
          lineHeight: "1.2em",
          fontStyle: "normal",
          color: "#FFF",
          marginTop: "15px",
          padding: "0px 20px",
        }}
      >
        Comprehensive Financial Guidance and Wealth Management Mastery!
      </Typography>

      <Box
        sx={{
          ...DISPLAY_FLEX_ROW,
          ...{
            width: "100vw",
            paddingTop: "20px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { md: "row", xs: "column" },
            flexWrap: "wrap"
          },
        }}
      >
        {IDEAS.map((item, index) => (
          <Box
            key={index}
            sx={{
              ...DISPLAY_FLEX_COLUMN,
              ...{
                paddingTop: "95px",
                alignItems: "center",
                justifyContent: "center",
                marginX: "20px",
                padding: "27px 16px 0px 16px",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: "600",
                textAlign: "center",
                lineHeight: "30px",
                fontStyle: "normal",
                color: "#01EFFD",
                marginBottom: "8px",
              }}
            >
              {item.title}
            </Typography>

            <Box
              sx={{
                width: "300px",
                flexShrink: 0,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                  textAlign: "center",
                  lineHeight: "24px",
                  fontStyle: "normal",
                  color: "#fff",
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          width: "60%",
          marginTop: { md: "173px", xs: "100px" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src="./images/Frame.png"
        />
      </Box>
    </Box>
  );
}

export default Ideas;
