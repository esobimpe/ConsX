import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { DISPLAY_FLEX_COLUMN } from "../../style/default";
import useAuthStore from "../../store/auth";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Banner() {
    const { user } = useAuthStore();

    return (
        <Box
            sx={{
                width: "100vw",
                height: "70vh",
                backgroundColor: "#021422",
                position: "relative",
            }}
        >
            <img
                alt=""
                src="./images/blogs-bg.jpg"
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    mixBlendMode: "exclusion"
                }}
            />
            <Box
                sx={{
                    ...DISPLAY_FLEX_COLUMN,
                    ...{
                        position: "absolute",
                        width: "100vw",
                        paddingTop: "250px",
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
                            fontSize: { md: "64px", sm: "40px", xs: "40px" },
                            fontWeight: "700",
                            textAlign: "center",
                            fontStyle: "normal",
                            color: "#00F0FF",
                        }}
                    >
                        Blogs
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        width: { md: "1200px" },
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontSize: { md: "26px", sm: "16px", xs: "16px" },
                        fontWeight: "100",
                        textAlign: "center",
                        fontStyle: "normal",
                        color: "#FFFFFF",
                    }}
                >
                    Discover Our Latest Insights and Stories
                </Typography>

                {user && user.role === "admin" && (
                    <Link to="/blog/new">
                        <Button
                            sx={{
                                width: "200px",
                                height: "40px",
                                textTransform: "none",
                                padding: "8px 16px 8px 15px",
                                borderRadius: "6px",
                                backgroundColor: "#01EFFD",
                                fontFamily: "Source Sans Pro, sans-serif",
                                fontSize: "16px",
                                fontWeight: "700",
                                lineHeight: "20px",
                                fontStyle: "normal",
                                textAlign: "center",
                                color: "#000000",
                                marginTop: "20px",
                                "&:hover": {
                                    backgroundColor: "none",
                                    border: "2px solid #01EFFD",
                                    color: "#ffffff",
                                },
                                "&:focus": {
                                    outline: "none",
                                },
                            }}
                        >
                            Create Blog
                        </Button>
                    </Link>
                )}
            </Box>
        </Box>
    );
}

export default Banner;
