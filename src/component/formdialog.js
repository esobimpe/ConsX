import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import React from "react";
import { Button_Contained } from "../style/button";
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from "../style/default";
import CloseIcon from '@mui/icons-material/Close';
import "../index.css";

function FormDialog({ open, onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
          maxWidth: "960px",
        //   height: "200vh",
        },
      }}
      BackdropProps={{
        style: {
          backgroundColor: "rgba(2, 18, 33, 0.30)",
          backdropFilter: "blur(10px)",
        },
      }}
      scroll="body"
      open={open}
      onClose={handleClose}
    >
      <DialogContent
        sx={{
          background: "#0D2946",
          borderRadius: "16px",
          border: "1px solid #29426D",
          boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.20)",
        }}
      >
        <CloseIcon sx={{ position:'absolute', right:"20px", color: "white", cursor: 'pointer' }} onClick={onClose} />
        <Box
          sx={{
            ...DISPLAY_FLEX_ROW,
            ...{
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              flexDirection: { md: "row", xs: "column" },
            },
          }}
        >
          <Box
            sx={{
              ...DISPLAY_FLEX_COLUMN,
              ...{
                justifyContent: "center",
                alignItems: "center",
                width: { md: "48%", xs: "100%" },
                paddingTop: "20px",
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
                  color: "#D704FF",
                  fontFamily: "DM Sans",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >
                Cons
              </Typography>
              <Typography
                sx={{
                  color: "#00EFFF",
                  fontFamily: "DM Sans",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >
                X
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#4675A5",
                fontFamily: "DM Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "22px",
                paddingBottom: "28px",
              }}
            >
              Automate Your Curiosity Today
            </Typography>

            <Box
              sx={{
                ...DISPLAY_FLEX_COLUMN,
                ...{
                  position: "relative",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                  border: "1px solid #4675A5",
                  padding: "34px 21px",
                  gap: "12px",
                  marginBottom: "20px",
                },
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  top: "-10px",
                  left: "10px",
                  background: "#0D2946",
                  paddingX: "5px",
                  color: "#4675A5",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  textAlign: "left",
                }}
              >
                Contact Information*
              </Typography>
              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    width: "100%",
                    justifyContent: "space-between",
                  },
                }}
              >
                <input
                  type="text"
                  placeholder="First Name*"
                  required
                  style={{
                    width: "40%",
                    background: "#092038",
                    borderRadius: "8px",
                    color: "#4675A5",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    padding: "7.5px",
                    border: "none",
                    "@::placeholder": {
                      color: "#4675A5",
                    },
                  }}
                  className="custom-input"
                />

                <input
                  type="text"
                  placeholder="Last Name*"
                  required
                  style={{
                    width: "40%",
                    background: "#092038",
                    borderRadius: "8px",
                    color: "#4675A5",
                    border: "none",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                  className="custom-input"
                />
              </Box>

              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    width: "100%",
                  },
                }}
              >
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  style={{
                    width: "100%",
                    background: "#092038",
                    borderRadius: "8px",
                    border: "none",
                    color: "#4675A5",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                  className="custom-input"
                />
              </Box>

              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    width: "100%",
                    justifyContent: "space-between",
                  },
                }}
              >
                <input
                  type="phone"
                  placeholder="Phone Number*"
                  required
                  style={{
                    width: "50%",
                    background: "#092038",
                    borderRadius: "8px",
                    border: "none",
                    color: "#4675A5",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                  className="custom-input"
                />

                <input
                  type="text"
                  placeholder="Country/Region"
                  required
                  style={{
                    width: "30%",
                    background: "#092038",
                    borderRadius: "8px",
                    border: "none",
                    color: "#4675A5",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                  className="custom-input"
                />
              </Box>

              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    width: "100%",
                  },
                }}
              >
                <input
                  type="text"
                  placeholder="Company (if applicable)"
                  required
                  style={{
                    width: "100%",
                    background: "#092038",
                    borderRadius: "8px",
                    border: "none",
                    color: "#4675A5",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                  className="custom-input"
                />
              </Box>
            </Box>

            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  width: "100%",
                  marginBottom: "12px",
                },
              }}
            >
              <input
                type="text"
                placeholder="Target Audience"
                required
                style={{
                  width: "100%",
                  background: "#092038",
                  borderRadius: "8px",
                  border: "none",
                  color: "#4675A5",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  padding: "7.5px",
                }}
                className="custom-input"
              />
            </Box>

            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  width: "100%",
                  marginBottom: "12px",
                },
              }}
            >
              <input
                type="text"
                placeholder="Preferred Research Method"
                required
                style={{
                  width: "100%",
                  background: "#092038",
                  borderRadius: "8px",
                  border: "none",
                  color: "#4675A5",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  padding: "7.5px",
                }}
                className="custom-input"
              />
            </Box>

            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  width: "100%",
                  marginBottom: "30px",
                },
              }}
            >
              <textarea
                type="text"
                placeholder="Additional Comments*"
                required
                style={{
                  width: "100%",
                  resize: "none",
                  background: "#092038",
                  borderRadius: "8px",
                  border: "none",
                  color: "#4675A5",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  padding: "7.5px",
                }}
                className="custom-input"
              />
            </Box>
          </Box>

          <Box
            sx={{
              ...DISPLAY_FLEX_COLUMN,
              ...{
                justifyContent: "flex-start",
                alignItems: "start",
                width: { md: "48%", xs: "100%" },
              },
            }}
          >
            <Box
              sx={{
                ...DISPLAY_FLEX_COLUMN,
                ...{
                  position: "relative",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                  border: "1px solid #4675A5",
                  padding: "23px 33px 23px 23px",
                  gap: "12px",
                  marginBottom: "20px",
                  width: "80%",
                },
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  top: "-10px",
                  left: "10px",
                  background: "#0D2946",
                  paddingX: "5px",
                  color: "#4675A5",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  textAlign: "left",
                }}
              >
                Business Information*
              </Typography>
              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    width: "100%",
                  },
                }}
              >
                <input
                  type="text"
                  placeholder="Industry/Market Segment*"
                  required
                  style={{
                    width: "100%",
                    background: "#092038",
                    borderRadius: "8px",
                    border: "none",
                    color: "#4675A5",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                  className="custom-input"
                />
              </Box>

              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    width: "100%",
                  },
                }}
              >
                <textarea
                  type="text"
                  placeholder="Business Idea/Project Summary*"
                  required
                  style={{
                    width: "100%",
                    resize: "none",
                    background: "#092038",
                    borderRadius: "8px",
                    border: "none",
                    color: "#4675A5",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                  className="custom-input"
                />
              </Box>

              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    width: "100%",
                  },
                }}
              >
                <select
                  type="text"
                  style={{
                    width: "50%",
                    background: "#092038",
                    borderRadius: "8px",
                    border: "none",
                    color: "#fff",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                >
                  <option value="1">Startup</option>
                </select>
              </Box>
            </Box>

            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  width: "100%",
                  marginBottom: "12px",
                },
              }}
            >
              <textarea
                type="text"
                placeholder="Research Objectives"
                required
                style={{
                  width: "100%",
                  resize: "none",
                  background: "#092038",
                  borderRadius: "8px",
                  border: "none",
                  color: "#4675A5",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  padding: "7.5px",
                }}
                className="custom-input"
              />
            </Box>

            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  width: "100%",
                  marginBottom: "12px",
                },
              }}
            >
              <input
                type="text"
                placeholder="Competitor Information"
                required
                style={{
                  width: "100%",
                  background: "#092038",
                  borderRadius: "8px",
                  border: "none",
                  color: "#4675A5",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  padding: "7.5px",
                }}
                className="custom-input"
              />
            </Box>

            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  width: "100%",
                  marginBottom: "12px",
                },
              }}
            >
              <input
                type="text"
                placeholder="Timeline and Budget*"
                required
                style={{
                  width: "100%",
                  background: "#092038",
                  borderRadius: "8px",
                  border: "none",
                  color: "#4675A5",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  padding: "7.5px",
                }}
                className="custom-input"
              />
            </Box>

            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  width: "100%",
                  marginBottom: "30px",
                },
              }}
            >
              <input
                type="checkbox"
                style={{
                  backgroundColor: "#092038",
                }}
              />
              <Typography
                sx={{
                  color: "#4675A5",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  padding: "7.5px",
                }}
              >
                Consent and Privacy*
              </Typography>
            </Box>

            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                },
              }}
            >
              <Button_Contained>Request a Demo</Button_Contained>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default FormDialog;
