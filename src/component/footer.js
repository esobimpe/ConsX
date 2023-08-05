import { Box, Input, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { SubscribeButton } from "../style/button";
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from "../style/default";
import FormDialog from "./formdialog";

const PAGE_TABS = ["Home", "Demos", "Why ConsX", "Blog", "FAQ"];
const PAGE_TAB_URLS = ["/home", "/demos", "/whyconsx", "/blog", "/faq"];

function Footer() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let history = useHistory();
  const location = useLocation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentTab, setCurrentTab] = useState(PAGE_TABS[0]);

  useEffect(() => {
    let pathName = location.pathname;
    if (!PAGE_TAB_URLS.includes(pathName)) pathName = "";
    setCurrentTab(pathName);
  }, [location]);

  useEffect(() => {
    function handleResize() {
      console.log("Navbar handleResize log - 1 : ", window.innerWidth);
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <Box
      sx={{
        ...DISPLAY_FLEX_ROW,
        ...{
          width: "100vw",
          backgroundColor: "#021422",
          justifyContent: "center",
        },
      }}
    >
      <Box
        sx={{
          ...DISPLAY_FLEX_COLUMN,
          ...{
            width: "80%",
            padding: "64px 0px 48px 0px",
            gap: "64px",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            ...{
              width: "100%",
              paddingRight: "0px",
              justifyContent: "space-between",
              alignItems: "flex-start",
            },
          }}
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  maxWidth: "230px",
                  alignItems: "flex-start",
                  gap: "16px",
                  flex: "1 0 0",
                },
              }}
            >
              <img alt="" src="./images/sightx-new-icon.svg.png" />

              <Box
                sx={{
                  ...DISPLAY_FLEX_COLUMN,
                  ...{
                    maxWidth: "230px",
                    paddingBottom: "0px",
                    alignItems: "flex-start",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "Source Sans Pro",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "31.2px",
                  }}
                >
                  The Future of
                </Typography>

                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "Source Sans Pro",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "31.2px",
                  }}
                >
                  Market Research
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  width: "100%",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                },
              }}
            >
              <Box
                sx={{
                  ...DISPLAY_FLEX_COLUMN,
                  ...{
                    paddingBottom: "0px",
                    alignItems: "flex-start",
                    gap: "12px",
                  },
                }}
              >
                <Typography
                  component="a"
                  href="/whyconsx"
                  sx={{
                    color: "#FFF",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "20px",
                  }}
                >
                  Why ConsX?
                </Typography>

                <Typography
                component="a"
                href="/about"
                  sx={{
                    color: "#FFF",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "20px",
                  }}
                >
                  About
                </Typography>
                <Typography
                component="a"
                href="/demos"
                  sx={{
                    color: "#FFF",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "20px",
                  }}
                >
                  Demos
                </Typography>
              </Box>

              <Box
                sx={{
                  ...DISPLAY_FLEX_COLUMN,
                  ...{
                    paddingBottom: "0px",
                    alignItems: "flex-start",
                    gap: "12px",
                  },
                }}
              >
                <Typography
                component="a"
                href="/blog"
                  sx={{
                    color: "#FFF",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "20px",
                  }}
                >
                  Blog
                </Typography>

                <Typography
                component="a"
                href="/faq"
                  sx={{
                    color: "#FFF",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "20px",
                  }}
                >
                  FAQ
                </Typography>
              </Box>

              <Box
                sx={{
                  ...DISPLAY_FLEX_COLUMN,
                  ...{
                    paddingBottom: "0px",
                    alignItems: "flex-start",
                    gap: "12px",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "20px",
                    cursor:'pointer'
                  }}
                  onClick={handleOpen}
                >
                  Request Demo
                </Typography>

                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "20px",
                    cursor:'pointer',
                  }}
                >
                  Log in
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={3}>
            <Box
              sx={{
                ...DISPLAY_FLEX_COLUMN,
                ...{
                  alignItems: { lg: "flex-start", md: "center" },
                  gap: "32px",
                },
              }}
            >
              <Box
                sx={{
                  ...DISPLAY_FLEX_COLUMN,
                  ...{
                    alignItems: "flex-start",
                    maxWidth: "460px",
                    gap: "16px",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "20px",
                  }}
                >
                  Stay up to date on new features and releases
                </Typography>

                <Box
                  sx={{
                    ...DISPLAY_FLEX_ROW,
                    ...{
                      alignItems: "flex-start",
                      gap: "16px",
                    },
                  }}
                >
                  <Input
                    placeholder="Enter your email*"
                    type="email"
                    sx={{
                      width: "60%",
                      height: "40px",
                      padding: "7.5px 16px",
                      borderRadius: "6px",
                      background: "#FFF",
                    }}
                  />

                  <SubscribeButton>Subscribe</SubscribeButton>
                </Box>

                <Box
                  sx={{
                    ...DISPLAY_FLEX_ROW,
                    ...{
                      alignItems: "flex-start",
                      paddingRight: "0px",
                      gap: "16px",
                    },
                  }}
                >
                  <Box>
                    <img alt="" src="./images/li-social.svg.png" />
                  </Box>
                  <Box>
                    <img alt="" src="./images/fb-social.svg.png" />
                  </Box>
                  <Box>
                    <img alt="" src="./images/twitter-social.svg.png" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            ...DISPLAY_FLEX_ROW,
            ...{
              width: "100%",
              alignItems: "flex-start",
              paddingTop: "48px",
              justifyContent: "space-between",
            },
          }}
        >
          <Typography
            sx={{
              color: "#98A2B3",
              fontFamily: "Source Sans Pro",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              textAlign: "center",
              lineHeight: "20px",
            }}
          >
            © 2023 ConsX. All rights reserved.
          </Typography>

          <Box
            sx={{
              ...DISPLAY_FLEX_ROW,
              ...{
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              },
            }}
          >
            <Typography
              component="a"
              href="/terms"
              sx={{
                color: "#98A2B3",
                fontFamily: "Source Sans Pro",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                textAlign: "center",
                lineHeight: "20px",
              }}
            >
              Terms of Service
            </Typography>

            <Typography
              component="a"
              href="/privacy"
              sx={{
                color: "#98A2B3",
                fontFamily: "Source Sans Pro",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                textAlign: "center",
                lineHeight: "20px",
              }}
            >
              Privacy Statement
            </Typography>
          </Box>
        </Box>
      </Box>
      <FormDialog open={open} onClose={handleClose} />
    </Box>
  );
}

export default Footer;
