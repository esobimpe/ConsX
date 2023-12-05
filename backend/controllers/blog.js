import Blog from "../models/Blog.js";
import mongoose from "mongoose";

// All functions :

// getBlogs (read) -> GET /blogs
// inputs : none

// getBlog (read) -> GET /blogs/:id
// inputs : id

// createBlog (create) -> POST /blogs
// inputs : title, content, image

// updateBlog (update) -> PATCH /blogs/:id
// inputs : id, title, content, image

// deleteBlog (delete) -> DELETE /blogs/:id
// inputs : id

export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        res.status(200).json(blog);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createBlog = async (req, res) => {
    try {
        const { title, content, image } = req.body;
        const blog = await Blog.create({ title, content, image });
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, image } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No blog with id: ${id}`);
        }
        const updatedBlog = { title, content, image, _id: id };
        await Blog.findByIdAndUpdate(id, updatedBlog, { new: true });
        res.json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteBlog = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No blog with id: ${id}`);
    }

    const blog = await Blog.findByIdAndDelete(id);

    res.status(200).json({ message: "Blog deleted successfully." });
}