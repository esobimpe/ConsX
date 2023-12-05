import axios from "axios";

const serverURL = "https://api.consx.io";
const token = localStorage.getItem("token");

export const addBlog = async (title, content, image) => {
    const { data } = await axios.post(
        `${serverURL}/blog`,
        { title, content, image },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return data;
}

export const getBlogs = async () => {
    const { data } = await axios.get(`${serverURL}/blog`);
    return data;
}

export const getBlog = async (id) => {
    const { data } = await axios.get(`${serverURL}/blog/${id}`);
    return data;
}

export const updateBlog = async (id, title, content, image) => {
    const { data } = await axios.patch(
        `${serverURL}/blog/${id}`,
        { title, content, image },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return data;
}

export const deleteBlog = async (id) => {
    const { data } = await axios.delete(
        `${serverURL}/blog/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return data;
}