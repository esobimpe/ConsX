import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { REASONS } from "../../constants";
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from "../../style/default";
import { ButtonOutlined } from "../../style/button";

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
          paddingTop: "100px",
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
        Why Choose ConsX for Your Market Research Needs?
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
            flexWrap: "wrap",
          },
        }}
      >
        {REASONS.map((item, index) => (
          <Box
            key={index}
            sx={{
              ...DISPLAY_FLEX_COLUMN,
              ...{
                paddingTop: "95px",
                alignItems: "center",
                justifyContent: "center",
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
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: { xs: 'center', md: 'space-between' },
          alignItems: 'center',
          width: { xs: '80%', md: '75%' },
          padding: { xs: '30px 20px 30px 20px', md: '45px 65px 46px 65px' },
          marginTop: { xs: '100px', md: '203px' },
          marginBottom: '100px',
          borderRadius: '12px',
          border: '1px solid #093A70',
          background: 'linear-gradient(90deg, #DB00FF 0%, #01EFFD 100%)',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', flexShrink: 0, marginRight: { xs: '0px', md: '112px' }, gap: '10px' }}>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: { xs: '12px', md: '20px' },
              fontWeight: '400',
              lineHeight: 'normal',
              color: '#000',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Ready to Transform Your Idea into Reality?
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: { xs: '20px', md: '28px' },
              fontWeight: '700',
              lineHeight: 'normal',
              color: '#000',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Request a Demo Today!
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: { xs: '20px', md: '0px' } }}>
          <ButtonOutlined onClick={handleOpen}>Get Started</ButtonOutlined>
        </Box>
      </Box>
      <FormDialog open={open} onClose={handleClose} />
    </Box>
  );
}

export default Reason;
