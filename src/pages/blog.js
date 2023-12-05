import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import { getBlog } from "../api/blog";

import Navbar from "../component/navbar";
import Footer from "../component/footer";

function SingleBlogPage() {
    const [singleBlog, setSingleBlog] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchBlog = async () => {
            const blog = await getBlog(id);
            console.log(blog);
            setSingleBlog(blog);
        };

        fetchBlog();
    }, [id]);

    console.log(id);

    return (
        <>
            <Navbar />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundImage:
                        "radial-gradient(ellipse 50% 80% at left, #12768F, #05293a, #021422, #021422)",
                }}
            >
                <Box
                    sx={{
                        color: "#fff",
                        width: "70%",
                        marginTop: "150px",
                        marginBottom: "30px",
                        borderRadius: "8px",
                    }}
                >
                    <Typography textAlign={"center"} variant="h4" sx={{ marginBottom: "20px" }}>
                        {singleBlog.title}
                    </Typography>

                    <img
                        alt={singleBlog.title}
                        src={singleBlog.image}
                        style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            marginBottom: "12px",
                        }}
                    />
                    <div dangerouslySetInnerHTML={{ __html: singleBlog.content }} />
                </Box>
            </Box>
            <Footer />
        </>
    );
}

export default SingleBlogPage;
