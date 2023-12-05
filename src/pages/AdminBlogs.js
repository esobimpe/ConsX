import { Box, Typography } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";

import { getBlogs } from "../api/blog";
import { deleteBlog } from "../api/blog";
import BlogCard from "../component/BlogCard";
import Dashboard from "../layouts/Dashboard";

function BlogsPage() {
    const [blogs, setBlogs] = React.useState([]);

    React.useEffect(() => {
        const fetchBlogs = async () => {
            const blogs = await getBlogs();
            setBlogs(blogs);
        };

        fetchBlogs();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteBlog(id);
            setBlogs(blogs.filter((blog) => blog._id !== id));
            // Show toast on successful deletion
            toast.success("Blog deleted successfully!");
        } catch (error) {
            // Handle error cases here if needed
            toast.error("Error deleting blog!");
        }
    };

    return (
        <Dashboard>
            <Typography variant="h4" sx={{ marginBottom: "16px" }}>
                Blogs
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                }}
            >
                {blogs.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} handleDelete={handleDelete} />
                ))}
            </Box>
        </Dashboard>
    );
}

export default BlogsPage;
