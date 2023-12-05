import React, { useState, useCallback } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useDropzone } from "react-dropzone";
import uploadImage from "../utils/uploadImage";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { useHistory } from "react-router-dom";

import { addBlog } from "../api/blog";

import useAuthStore from "../store/auth";
import Dashboard from "../layouts/Dashboard";

import toast from "react-hot-toast";

function AddBlogPage() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const html = draftToHtml(convertToRaw(contentState));
        setBlogData({
            ...blogData,
            text: html,
        });
    };

    const history = useHistory();
    const [blogData, setBlogData] = useState({
        title: "",
        image: "",
        text: "",
    });

    const [file, setFile] = useState(null);

    const user = useAuthStore((state) => state.user);
    const isLoading = useAuthStore((state) => state.isLoading);

    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];

        if (file) {
            setFile(file);
            const imagePath = URL.createObjectURL(file);
            setBlogData({
                ...blogData,
                image: imagePath,
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
        if (blogData.title === "" || blogData.text === "") {
            toast.error("Please fill all fields");
            return;
        }

        try {
            let imgUrl = blogData.image; // Use the already set image URL
            if (file) {
                imgUrl = await uploadImage(file); // Upload the image if a file is present
            }

            const blog = await addBlog(blogData.title, blogData.text, imgUrl);
            toast.success("Blog created successfully");

            history.push(`/blog/${blog._id}`);
        } catch (error) {
            toast.error("Error creating blog");
        }
    };

    if (!user && !isLoading) return null;

    return (
        <Dashboard>
            <Box
                sx={{
                    color: "#fff",
                    borderRadius: "8px",
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
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onEditorStateChange}
                        toolbarStyle={{
                            backgroundColor: 'transparent', // Change toolbar background color to black
                            color: 'black', // Change toolbar text color to black
                        }}
                        editorStyle={{
                            color: 'white', // Change editor text color to white (example)
                        }}
                    />

                    <Button variant="outlined" type="submit">
                        Add Blog
                    </Button>
                </form>
            </Box>
        </Dashboard>
    );
}

export default AddBlogPage;
