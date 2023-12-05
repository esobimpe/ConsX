import { Box } from "@mui/material";
import React from "react";
import Banner from "../component/blogs/banner";

import { getBlogs } from "../api/blog";

import BlogCard from "../component/BlogCard";

import { deleteBlog } from "../api/blog";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

function BlogsPage() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getBlogs();
      setBlogs(blogs);
    };

    fetchBlogs();
  }, [])

  const handleDelete = async (id) => {
    await deleteBlog(id);
    setBlogs(blogs.filter((blog) => blog._id !== id));
  };

  return (
    <>
      <Navbar />
      <Banner />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "40px",
          backgroundImage:
            "radial-gradient(ellipse 50% 80% at left, #12768F, #05293a, #021422, #021422)",
        }}
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} handleDelete={handleDelete} />
        ))}
      </Box>
      <Footer />
    </>
  );
}

export default BlogsPage;
