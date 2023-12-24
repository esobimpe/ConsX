import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { ButtonContained } from "../../style/button";
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
        height: "80vh",
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
            paddingTop: { xs: "50%", sm: "40%", md: "190px" },
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Box
          sx={{
            ...DISPLAY_FLEX_COLUMN,
            ...{
              height: "auto",
              justifyContent: "center",
              padding: "0 20px",
              textAlign: "center",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Source Sans Pro",
              fontSize: { xs: "35px", sm: "40px", md: "64px" },
              fontWeight: "700",
              textAlign: "center",
              fontStyle: "normal",
              color: "#ffffff",
            }}
          >
           ConsX Financial Consulting & Wealth Management
          </Typography>
        </Box>
        <Box
          sx={{
            ...DISPLAY_FLEX_COLUMN,
            ...{
              height: "auto",
              justifyContent: "center",
              padding: "0 20px",
              textAlign: "center",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Source Sans Pro",
              fontSize: { xs: "16px", sm: "24px", md: "40px" },
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
          Your Path to Financial Success Starts Here!

          </Typography>
        </Box>
        <Typography
          sx={{
            width: { xs: "90%", sm: "80%", md: "60%" },
            fontFamily: "Source Sans Pro, sans-serif",
            fontSize: { xs: "12px", sm: "15px", md: "20px" },
            fontWeight: "100",
            textAlign: "center",
            fontStyle: "normal",
            color: "#FFFFFF",
            padding: "10px 0",
          }}
        >
          ConsX Financial Consulting & Wealth Management is your dedicated ally 
          in achieving financial success through strategic consulting, effective 
          wealth management, and the application of advanced quantitative 
          strategies with a meticulous risk management approach. With our
          singular focus on personalized service, our seasoned financial consultant 
          is committed to providing tailored solutions that align with your goals, 
          whether you're a young professional eager to build wealth or an 
          individual seeking expert guidance on managing your financial portfolio.
        </Typography>

        <Box
          sx={{
            ...DISPLAY_FLEX_ROW,
            ...{
              justifyContent: "center",
              margin: "20px 0",
            },
          }}
        >
          <ButtonContained onClick={handleOpen}>Schedule an Appointment for just $100</ButtonContained>
        </Box>
      </Box>
      <FormDialog open={open} onClose={handleClose} />
    </Box>
  );
}

export default Banner;
