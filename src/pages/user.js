import { Box, Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { updatePassword } from "../api/auth";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import useAuthStore from "../store/auth";

const User = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const user = useAuthStore((state) => state.user);
    const isLoading = useAuthStore((state) => state.isLoading);

    const handleSubmit = (event) => {
        event.preventDefault();
        updatePassword(oldPassword, newPassword);
    };

    const handleShowPasswordClick = () => {
        setShowPassword(!showPassword);
    };

    if (isLoading) return null;

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            paddingTop={"200px"}
            sx={{
                alignItems: "center",
                justifyContent: "center",
                backgroundImage:
                    "radial-gradient(ellipse 50% 80% at left, #12768F, #05293a, #021422, #021422)",
            }}
            height={"fit-content"}
            color={"white"}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                User Profile
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
                Name: {user.name}
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
                Email: {user.email}
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    type={showPassword ? "text" : "password"}
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    label="Old Password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    InputProps={{
                        style: { color: 'white' },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleShowPasswordClick}
                                    edge="end"
                                    aria-label="toggle password visibility"
                                    color="inherit"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    label="New Password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    InputProps={{
                        style: { color: 'white' },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleShowPasswordClick}
                                    edge="end"
                                    aria-label="toggle password visibility"
                                    color="inherit"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button type="submit" variant="outlined" color="info">
                    Update Password
                </Button>
            </form>
        </Box>
    );
}

export default User;
