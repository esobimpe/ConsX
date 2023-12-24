import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import React, { useState } from "react";
import { ButtonContained } from "../style/button";
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from "../style/default";
import CloseIcon from '@mui/icons-material/Close';
import "../index.css";
import ConsX from "./extra/ConsX";
import PrivacyDialog from "./extra/Privacy";

import { addForm } from "../api/form";
import toast from "react-hot-toast";

function FormDialog({ open, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    status: "",
    dateTime: "",
    researchMethod: "",
    comments: "",
    industry: "",
    businessSummary: "",
    businessType: "",
    objectives: "",
    competitors: "",
    timelineBudget: "",
    consent: false,
    consentName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (state) => {
    setFormData({ ...formData, consent: state });
    console.log(formData);
  };

  const handleSubmit = async () => {
    if (!formData.consent) {
      toast.error("Please sign the Consent and Privacy");
      return;
    }
    try {
      const data = await addForm(formData);
      toast.success(data.message);
      onClose();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleClose = () => {
    onClose();
  };

  const boxStyles = {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    border: "1px solid #4675A5",
    padding: "34px 21px",
    gap: "12px",
    marginBottom: "20px",
    width: "85%",
  }

  const inputStyles = {
    width: "100%",
    background: "#092038",
    borderRadius: "8px",
    border: "none",
    color: "white",
    fontFamily: "DM Sans",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "22px",
    padding: "7.5px",
  }

  const inputStylesTwo = {
    color: "white",
    fontFamily: "DM Sans",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "22px",
    padding: "7.5px",
    width: "100%",
    background: "#092038",
    borderRadius: "8px",
    border: "none",
    resize: "none",
  }

  const typographyStyles = {
    position: "absolute",
    top: "-10px",
    left: "10px",
    background: "#0D2946",
    paddingX: "5px",
    color: "white",
    fontFamily: "DM Sans",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "22px",
    textAlign: "left",
  }

  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
          maxWidth: "960px",
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
        <CloseIcon sx={{ position: 'absolute', right: "20px", color: "white", cursor: 'pointer' }} onClick={onClose} />

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
            <ConsX />

            <Box
              sx={{
                ...DISPLAY_FLEX_COLUMN,
                ...{
                  ...boxStyles
                },
              }}
            >
              <Typography
                sx={{
                  ...typographyStyles
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
                  name="firstName"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="First Name*"
                  required
                  style={{
                    ...inputStyles,
                    width: "40%",
                  }}
                  className="custom-input"
                />

                <input
                  name="lastName"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Last Name*"
                  required
                  style={{
                    ...inputStyles,
                    width: "40%"
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
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Email*"
                  required
                  style={{
                    ...inputStyles
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
                  name="phone"
                  onChange={handleInputChange}
                  type="phone"
                  placeholder="Phone Number*"
                  required
                  style={{
                    ...inputStyles,
                    width: "50%",
                  }}
                  className="custom-input"
                />

                <input
                  name="country"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Country/Region"
                  required
                  style={{
                    ...inputStyles,
                    width: "30%",
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
                  name="status"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Marital Status (if applicable)"
                  required
                  style={{
                    ...inputStyles
                  }}
                  className="custom-input"
                />
              </Box>
            </Box> 

            <Box
              sx={{
                ...DISPLAY_FLEX_COLUMN,
                ...{
                  ...boxStyles,
                },
              }}
            >
              <Typography
                sx={{
                  ...typographyStyles
                }}
              >
                Availability*
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
                  name="dateTime"
                  onChange={handleInputChange}
                  type="datetime-local"
                  required
                  style={{
                    ...inputStyles
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
                name="researchMethod"
                onChange={handleInputChange}
                type="text"
                placeholder="Preferred Research Method"
                required
                style={{
                  ...inputStylesTwo
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
                name="comments"
                onChange={handleInputChange}
                type="text"
                placeholder="Additional Comments*"
                required
                style={{
                  ...inputStylesTwo
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
                  ...boxStyles,
                },
              }}
            >
              <Typography
                sx={{
                  ...typographyStyles
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
                  name="industry"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Industry/Market Segment*"
                  required
                  style={{
                    ...inputStyles
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
                  name="businessSummary"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Business Idea/Project Summary*"
                  required
                  style={{
                    ...inputStylesTwo
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
                    ...inputStyles,
                    width: "50%",
                  }}
                >
                  <option value="1">Financial Consulting</option>
                  <option value="2">Financial Consulting</option>
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
                name="objectives"
                onChange={handleInputChange}
                type="text"
                placeholder="Research Objectives"
                required
                style={{
                  ...inputStylesTwo
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
                name="competitors"
                onChange={handleInputChange}
                type="text"
                placeholder="Competitor Information"
                required
                style={{
                  ...inputStylesTwo
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
                name="timelineBudget"
                onChange={handleInputChange}
                type="text"
                placeholder="Timeline and Budget*"
                required
                style={{
                  ...inputStylesTwo
                }}
                className="custom-input"
              />
            </Box>

            <PrivacyDialog handleCheckboxChange={handleCheckboxChange} handleInputChange={handleInputChange} />

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
              <ButtonContained onClick={handleSubmit}>Request a Demo</ButtonContained>
            </Box>
          </Box>
        </Box>
      </DialogContent >
    </Dialog >
  );
}

export default FormDialog;
