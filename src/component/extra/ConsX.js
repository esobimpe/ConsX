import React from "react";
import { Box, Typography } from "@mui/material";
import { DISPLAY_FLEX_ROW } from "../../style/default";

const ConsX = () => {
    return (
        <>
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
                    color: "white",
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
        </>
    )
}

export default ConsX