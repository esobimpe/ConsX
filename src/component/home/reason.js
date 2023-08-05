import { Box, Typography } from "@mui/material";
import React, {useState} from "react";
import { REASONS } from "../../constants";
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from "../../style/default";
import { Button_Outlined } from "../../style/button";

import FormDialog from "../formdialog";

function Reason() {
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
        ...DISPLAY_FLEX_COLUMN,
        ...{
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "radial-gradient(ellipse 50% 80% at right, #12768F, #05293a, #021422, #021422)",
          paddingTop:"238px",
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
        }}
      >
        All-in-one Solution
      </Typography>

      <Typography
        sx={{
          fontFamily: "Source Sans Pro, sans-serif",
          fontSize: {md: "40px", xs: "30px"},
          fontWeight: "400",
          textAlign: "center",
          lineHeight: "60px",
          fontStyle: "normal",
          color: "#FFF",
          marginTop: "15px",
          padding: "0px 20px",
        }}
      >
        Why Choose ConsX for Your Market Research Needs?
      </Typography>

      <Box
        sx={{
          ...DISPLAY_FLEX_ROW,
          ...{
            width: "100vw",
            paddingTop: "60px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { md: "row", xs: "column" },
          },
        }}
      >
        {REASONS.map((item) => (
          <Box
            sx={{
              ...DISPLAY_FLEX_COLUMN,
              ...{
                paddingTop: "95px",
                alignItems: "center",
                justifyContent: "center",
                marginRight: {md: "70px", xs:"0px"},
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
                width: "231px",
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
          ...DISPLAY_FLEX_ROW,
          ...{
            marginTop: {md: "203px", xs: "150px"},
            marginBottom: "167px",
            width: {md: "992px", xs: "200px"},
            maxWidth: "992px",
            padding: "45px 65px 46px 65px",
            justifyContent: {md: "space-between", xs: "center"},
            alignItems: "center",
            borderRadius: "12px",
            border: "1px solid #093A70",
            background: "linear-gradient(90deg, #DB00FF 0%, #01EFFD 100%)",
            flexDirection: {md: "row", xs: "column"},
          },
        }}
      >
        <Box
          sx={{
            ...DISPLAY_FLEX_COLUMN,
            ...{
              width: {md: "640px", xs: "250px"},
              flexShrink: 0,
              marginRight:{md:"112px", xs: "0px"},
              gap:"10px",
              
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: {md: "20px", xs:"12px"},
              fontWeight: "400",
              lineHeight: "normal",
              fontStyle: "normal",
              color: "#000",
            }}
          >
            Ready to Transform Your Idea into Reality?
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: {md: "28px", xs:"20px"},
              fontWeight: "700",
              lineHeight: "normal",
              fontStyle: "normal",
              color: "#000",
            }}
          >
            Request a Demo Today!
          </Typography>
        </Box>

        <Box
          sx={{
            ...DISPLAY_FLEX_ROW,
            ...{
              justifyContent: "center",
              marginTop:{md:"0px", xs:"50px"},
            },
          }}
        >
          <Button_Outlined onClick={handleOpen}>Get Started</Button_Outlined>
        </Box>
      </Box>
      <FormDialog open={open} onClose={handleClose} />
    </Box>
  );
}

export default Reason;
