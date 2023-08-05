import { Box, Typography } from "@mui/material";
import React, {useState} from "react";
import { Button_Contained } from "../../style/button";
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from "../../style/default";
import FormDialog from "../formdialog";

function Banner() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        position: "relative",
      }}
    >
      <img
        alt=""
        src="./images/banner1.png"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          ...DISPLAY_FLEX_COLUMN,
          ...{
            position: "absolute",
            width: "100vw",
            paddingTop: "190px",
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
              fontSize: { md: "64px", sm: "40px", xs: "24px" },
              fontWeight: "700",
              textAlign: "center",
              fontStyle: "normal",
              color: "#ffffff",
            }}
          >
            Welcome to ConsX
          </Typography>
        </Box>
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
              fontSize: { md: "64px", sm: "40px", xs: "24px" },
              fontWeight: 700,
              textAlign: "center",
              fontStyle: "normal",
              background:
                "-webkit-linear-gradient(0deg, #DB00FF 0.05%, #00F0FF 63.78%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.7)",
            }}
          >
            Your Gateway to Market Insights!
          </Typography>
        </Box>
        <Typography
          sx={{
            width:{md: "1200px"},
            fontFamily: "Source Sans Pro, sans-serif",
            fontSize: { md: "26px", sm: "16px", xs: "12px" },
            fontWeight: "100",
            textAlign: "center",
            fontStyle: "normal",
            color: "#FFFFFF",
            padding: "0px 10px",
          }}
        >
          At ConsX, we understand that every dream deserves a chance to soar.
          Our expert team of researchers and strategists is committed to
          unraveling the true potential of your idea. Through data-driven
          methodologies and personalized approaches, we illuminate the most
          promising opportunities that lie ahead
        </Typography>

        <Box
          sx={{
            ...DISPLAY_FLEX_ROW,
            ...{
              justifyContent: "center",
              margin: "30px 0 10px",
            },
          }}
        >
          <Button_Contained onClick={handleOpen}>Request Demo</Button_Contained>
        </Box>
      </Box>
      <FormDialog open={open} onClose={handleClose} />
    </Box>
    
  );
}

export default Banner;
