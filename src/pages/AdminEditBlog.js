import React, { useState, useCallback, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useDropzone } from "react-dropzone";
import uploadImage from "../utils/uploadImage";

import { useHistory, useParams } from "react-router-dom";

import { getBlog, updateBlog } from "../api/blog";

import useAuthStore from "../store/auth";
import Dashboard from "../layouts/Dashboard";

import toast from "react-hot-toast";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromHTML, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function AddBlogPage() {
    const { id } = useParams();

    const history = useHistory();
    const [blogData, setBlogData] = useState({
        title: "",
        image: "",
        content: "",
    });

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const html = draftToHtml(convertToRaw(contentState));
        setBlogData({
            ...blogData,
            content: html,
        });
    };

    useEffect(() => {
        const fetchBlog = async () => {
            const blog = await getBlog(id);
            setBlogData(blog);
            const blocksFromHTML = convertFromHTML(blog.content);
            const state = ContentState.createFromBlockArray(
                blocksFromHTML.contentBlocks,
                blocksFromHTML.entityMap
            );
            const editorState = EditorState.createWithContent(state);
            setEditorState(editorState);
            console.log(blog.content);
        }

        if (id) {
            fetchBlog();
        }
    }, [id]);

    const user = useAuthStore((state) => state.user);
    const isLoading = useAuthStore((state) => state.isLoading);

    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];

        if (file) {
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
        if (blogData.image === "" && blogData.title === "" && blogData.content === "") {
            toast.error("Please fill all fields");
            return;
        }

        try {
            const img = await uploadImage(blogData.image);
            setBlogData({
                ...blogData,
                image: img,
            });

            const blog = await updateBlog(id, blogData.title, blogData.content, blogData.image);
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
                    Edit Blog
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
                        Edit Blog
                    </Button>
                </form>
            </Box>
        </Dashboard>
    );
}

export default AddBlogPage;
