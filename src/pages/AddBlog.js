import React, { useState, useCallback } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useDropzone } from "react-dropzone";
import uploadImage from "../utils/uploadImage";

import { useHistory } from "react-router-dom";

import { addBlog } from "../api/blog";

import useAuthStore from "../store/auth";
import toast from "react-hot-toast";

function AddBlogPage() {
    const history = useHistory();
    const [blogData, setBlogData] = useState({
        title: "",
        image: "",
        text: "",
    });

    const user = useAuthStore((state) => state.user);
    const isLoading = useAuthStore((state) => state.isLoading);

    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];

        if (file) {
            const imageUrl = await uploadImage(file);
            setBlogData({
                ...blogData,
                image: imageUrl,
            });
        }
    }, [blogData]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBlogData({
            ...blogData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (blogData.image === "" && blogData.title === "" && blogData.text === "") {
            toast.error("Form data is required.");
            return;
        }

        if (blogData.image !== "") {
            await uploadImage(blogData.image);
        }

        const blog = await addBlog(blogData.title, blogData.text, blogData.image);

        history.push(`/blog/${blog._id}`);
    };

    if (!user && !isLoading) return null;

    return (
        <Box
            paddingY={"100px"}
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
                    width: "80%",
                    marginTop: "50px",
                    padding: "20px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
            >
                <Typography variant="h4" sx={{ marginBottom: "20px" }}>
                    Add New Blog
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="title"
                        label="Title"
                        fullWidth
                        value={blogData.title}
                        onChange={handleInputChange}
                        sx={{ marginBottom: "20px" }}
                    />
                    <div
                        {...getRootProps()}
                        sx={{
                            border: "2px dashed #fff",
                            borderRadius: "4px",
                            padding: "20px",
                            marginBottom: "20px",
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <input {...getInputProps()} />
                        {blogData.image ? (
                            <Box sx={{ cursor: "pointer" }} padding={"10px"} marginBottom={"20px"} border={"1px solid gray"} borderRadius={"16px"}>
                                <img src={blogData.image} style={{ borderRadius: "16px", objectFit: "cover" }} alt="Blog" width="100%" />
                            </Box>
                        ) : (
                            <Box sx={{ cursor: "pointer" }} padding={"60px"} marginBottom={"20px"} border={"1px solid gray"} borderRadius={"16px"}>
                                <Typography textAlign={"center"} variant="body1">
                                    Drag & Drop or Click to Upload Image
                                </Typography>
                            </Box>
                        )}
                    </div>
                    <TextField
                        name="text"
                        label="Text"
                        multiline
                        fullWidth
                        rows={6}
                        value={blogData.text}
                        onChange={handleInputChange}
                        sx={{ marginBottom: "20px" }}
                    />
                    <Button variant="outlined" type="submit">
                        Add Blog
                    </Button>
                </form>
            </Box>
        </Box>
    );
}

export default AddBlogPage;
