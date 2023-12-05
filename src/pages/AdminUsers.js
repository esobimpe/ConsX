import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsers } from "../api/auth"; // Assuming there's an API function getUsers()

import UserCard from "../component/UserCard"; // Assuming you have a UserCard component

import Dashboard from "../layouts/Dashboard";

function UsersPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await getUsers();
                setUsers(fetchedUsers);
            } catch (error) {
                // Handle error cases if needed
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <Dashboard>
            <Typography variant="h4" sx={{ marginBottom: "16px" }}>
                Users
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                }}
            >
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </Box>
        </Dashboard>
    );
}

export default UsersPage;
