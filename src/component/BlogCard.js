import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link, useHistory } from "react-router-dom";

import useAuthStore from "../store/auth";

const BlogCard = ({ blog, handleDelete }) => {
  const history = useHistory();
  const { user } = useAuthStore();

  return (
    <Box
      as={Link}
      to={`/blog/${blog._id}`}
      sx={{
        width: "300px",
        margin: "20px",
        backgroundColor: "#021422",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        color: "#fff",
        border: "1px solid #6DDFF6",
      }}
    >
      <img
        alt={blog.title}
        src={blog.image}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <Box padding={"16px"}>
        <Typography variant="h6" sx={{ marginBottom: "8px" }}>
          {blog.title}
        </Typography>
      </Box>

      {user && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
          }}
        >
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              history.push(`/admin/blog/edit/${blog._id}`);
            }}
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              textTransform: "none",
            }}
          >
            Edit
          </Button>

          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleDelete(blog._id);
            }}
            variant="outlined"
            color="error"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              textTransform: "none",
              marginLeft: "8px",
            }}
          >
            Delete
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default BlogCard;