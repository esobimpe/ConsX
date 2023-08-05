import { Box, Typography, Drawer, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useHistory, useLocation } from "react-router-dom";
import { Button_Contained, LoginButton } from "../style/button";
import { DISPLAY_FLEX_ROW, DISPLAY_FLEX_COLUMN } from "../style/default";
import FormDialog from "./formdialog";

const PAGE_TABS = ["Home", "Demos", "Why ConsX", "Blog", "FAQ"];
const PAGE_TAB_URLS = ["/home", "/demos", "/whyconsx", "/blog", "/faq"];

function Navbar() {
  let history = useHistory();
  const location = useLocation();

  const [currentTab, setCurrentTab] = useState(PAGE_TAB_URLS[0]);
  const [showDrawerFlag, setShowDrawerFlag] = useState(false);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let pathName = location.pathname;
    if (!PAGE_TAB_URLS.includes(pathName)) pathName = "";
    setCurrentTab(pathName);
  }, [location]);

  return (
    <Box
      sx={{
        ...DISPLAY_FLEX_ROW,
        ...{
          width: "100vw",
          position: "fixed",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(15px)",
          justifyContent: "center",
        },
      }}
    >
      <Box
        sx={{
          ...DISPLAY_FLEX_ROW,
          ...{
            justifyContent: "center",
            width: "80%",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "32px 23px 10px 0px",
          },
        }}
      >
        <Box
          sx={{
            ...DISPLAY_FLEX_ROW,
            ...{
              maxWidth: "992px",
              paddingRight: "0px",
              alignItems: "center",
              gap: "24px",
            },
          }}
        >
          <Box
            sx={{
              ...DISPLAY_FLEX_ROW,
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                textShadow: "0px 2px 4px rgba(0, 0, 0, 0.37)",
                fontFamily: "Inter",
                fontSize: "36px",
                fontStyle: "italic",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              Cons
            </Typography>
            <Typography
              sx={{
                color: "#01EFFD",
                fontFamily: "Inter",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              X
            </Typography>
          </Box>

          <Box
            sx={{
              ...DISPLAY_FLEX_ROW,
              ...{
                maxWidth: "1024px",
                paddingRight: "0px",
                alignItems: "center",
                gap: "15.99px",
                visibility: { md: "visible", xs: "hidden" },
                width: { md: "100%", xs: "0px" },
              },
            }}
          >
            {PAGE_TAB_URLS.map((item, index) => (
              <Box
                onClick={() => {
                  setCurrentTab(item);
                  history.push(item);
                }}
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    padding: "14px 17.63px 14px 18px",
                    alignItems: "flex-start",
                    borderBottom: "4px solid",
                    borderColor:
                      item === currentTab ? "#00F0FF" : "transparent",
                    cursor: "pointer",
                    "&:hover": {
                      borderBottom: "4px solid",
                      borderColor: "#00F0FF",
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    color: item === currentTab ? "#00F0FF" : "#fff",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "20px",
                  }}
                >
                  {PAGE_TABS[index]}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            ...DISPLAY_FLEX_ROW,
          }}
        >
          <Box
            sx={{
              ...DISPLAY_FLEX_ROW,
              ...{
                padding: "8.47px 0px",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
                visibility: { md: "visible", xs: "hidden" },
                width: { md: "100%", xs: "0px" },
              },
            }}
          >
            <LoginButton>Log in</LoginButton>
            <Button_Contained onClick={handleOpen}>
              Get Started
            </Button_Contained>
          </Box>

          <IconButton
            sx={{
              visibility: { md: "hidden", xs: "visible" },
              width: { md: "0px", xs: "20px" },
            }}
            onClick={() => {
              setShowDrawerFlag(true);
            }}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>

      <FormDialog open={open} onClose={handleClose} />

      <Drawer
        open={showDrawerFlag}
        anchor="right"
        onClose={() => {
          setShowDrawerFlag(false);
        }}
      >
        <Box
          sx={{
            ...DISPLAY_FLEX_ROW,
            ...{
              width: "100%",
              height: "100%",
              background: "#021422",
            },
          }}
        >
          <Box
            sx={{
              ...DISPLAY_FLEX_COLUMN,
              ...{
                width: "200px",
                padding: "10px 20px",
              },
            }}
          >
            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  justifyContent: "right",
                },
              }}
            >
              <IconButton
                onClick={() => {
                  setShowDrawerFlag(false);
                }}
              >
                <CloseIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </IconButton>
            </Box>
            {PAGE_TAB_URLS.map((item, index) => (
              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    padding: "14px 17.63px 14px 18px",
                    alignItems: "flex-start",
                  },
                }}
                onClick={() => {
                  setCurrentTab(item);
                  history.push(item);
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "20px",
                  }}
                >
                  {PAGE_TABS[index]}
                </Typography>
              </Box>
            ))}

            <LoginButton>Log in</LoginButton>
            <Button_Contained onClick={handleOpen}>Get Started</Button_Contained>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;
