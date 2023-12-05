import React, { useState } from 'react';
import { Box, Typography, Dialog, DialogContent, Button, TextField } from '@mui/material';
import { DISPLAY_FLEX_ROW, DISPLAY_FLEX_COLUMN } from '../../style/default';

import { PRIVACY } from '../../constants';

function PrivacyDialog({ handleCheckboxChange, handleInputChange }) {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setChecked(true);
        handleCheckboxChange(true);
        setOpen(false);
    };

    const handleChange = (event) => {
        if(event.target.checked) {
            handleOpen();
        }
        setChecked(event.target.checked);
        handleCheckboxChange(!checked);
    }

    return (
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
                onChange={handleChange}
                checked={checked}
                required
                type="checkbox"
                style={{
                    backgroundColor: "#092038",
                }}
            />
            <div onClick={handleOpen}>
                <Typography
                    sx={{
                        color: "white",
                        fontFamily: "DM Sans",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "22px",
                        paddingLeft: "10px",
                    }}
                >
                    Consent and Privacy*
                </Typography>
            </div>
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
                    <Box
                        sx={{
                            ...DISPLAY_FLEX_COLUMN,
                            ...{
                                justifyContent: "flex-start",
                                alignItems: "left",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                ...DISPLAY_FLEX_COLUMN,
                                ...{
                                    paddingBottom: "125px",
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Source Sans Pro",
                                    fontWeight: "700",
                                    lineHeight: "44.96px",
                                    fontStyle: "normal",
                                    color: "#00F0FF",
                                    marginBottom: "45px",
                                }}
                                fontSize={["2.5em", "4em"]}
                            >
                                ConsX Privacy Statement
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
                                At ConsX, we are committed to protecting your privacy and ensuring
                                the security of your personal information. This Privacy Statement
                                explains how we collect, use, and safeguard your data when you
                                access our website and use our services. By using our website and
                                services, you consent to the practices described in this
                                statement.
                            </Typography>
                        </Box>

                        {PRIVACY.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        width: "100%",
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
                                fontSize: { md: "24px", xs: "20px" },
                                fontWeight: "400",
                                lineHeight: "normal",
                                fontStyle: "normal",
                                color: "#fff",
                                paddingBottom: "30px",
                            }}
                        >
                            Last Updated: 2023-07-13
                        </Typography>
                    </Box>

                    <Box width={"100%"}>
                        <Typography sx={{ color: "#fff" }} marginBottom={"10px"}>Your Name</Typography>
                        <TextField name='consentName' onChange={(e) => { handleInputChange(e) }} fullWidth id="outlined" label="Your Name" variant="outlined" />
                    </Box>
                    <Button onClick={handleClose} style={{ marginTop: '20px' }}>Confirm</Button>
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default PrivacyDialog;