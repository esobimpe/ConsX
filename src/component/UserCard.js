import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function UserCard({ user }) {
    return (
        <Card
            sx={{
                minWidth: 275,
                margin: 2,
                backgroundColor: "#1976D2", // Dark blue background
                color: "#FFFFFF", // White text for contrast
            }}
        >
            <CardContent>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ color: "#FFFFFF" }} // White text for contrast
                >
                    {user.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#BBDEFB" }}>
                    Email: {user.email}
                </Typography>
                {/* Display other user information as needed */}
            </CardContent>
        </Card>
    );
}

export default UserCard;
