import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { newRegister } from "../api/auth";

import Dashboard from "../layouts/Dashboard";

function AddUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role] = useState("user");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await newRegister(name, email, password, role);
            // Show toast on successful registration
            toast.success("User added successfully!");
            // Clear input fields after successful registration
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            // Handle error cases here if needed
            toast.error("Error adding user!");
        }
    };

    return (
        <Dashboard>
            <Typography color={"white"} variant="h4" component="h1" gutterBottom>
                Add User
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    margin: "auto",
                    gap: "10px",
                }}
            >
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        fontSize: "1rem",
                        backgroundColor: "transparent", // Light background
                        color: "white", // Dark text
                        padding: "10px",
                        border: "1px solid #CCCCCC",
                        borderRadius: "4px",
                        outline: "none",
                    }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        fontSize: "1rem",
                        backgroundColor: "transparent", // Light background
                        color: "white", // Dark text
                        padding: "10px",
                        border: "1px solid #CCCCCC",
                        borderRadius: "4px",
                        outline: "none",
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        fontSize: "1rem",
                        backgroundColor: "transparent", // Light background
                        color: "white", // Dark text
                        padding: "10px",
                        border: "1px solid #CCCCCC",
                        borderRadius: "4px",
                        outline: "none",
                    }}
                />
                <select
                    value={role}
                    onChange={(e) => console.log(e.target.value)}
                    style={{
                        fontSize: "1rem",
                        backgroundColor: "transparent", // Light background
                        color: "white", // Dark text
                        padding: "10px",
                        border: "1px solid #CCCCCC",
                        borderRadius: "4px",
                        outline: "none",
                    }}
                >
                    <option style={{ color: "black" }} value="user">User</option>
                    <option style={{ color: "black" }} value="admin">Admin</option>
                </select>
                <Button type="submit" variant="contained" color="primary">
                    Add User
                </Button>
            </Box>
        </Dashboard>
    );
}

export default AddUser;