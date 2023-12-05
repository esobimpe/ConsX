import { Dialog, DialogContent, Button, Box, Typography } from "@mui/material";
import { useState } from "react";

import { login } from "../api/auth";
import { ButtonContained } from "../style/button";

import toast from "react-hot-toast";

import { Link } from "react-router-dom";

import useAuthStore from "../store/auth";

const LoginButton = () => {
    const { handleLogout } = useAuthStore();
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const setToken = useAuthStore((state) => state.setToken);
    const setUser = useAuthStore((state) => state.setUser);
    const user = useAuthStore((state) => state.user);

    const handleLogin = async (e) => {
        try {
            const { token, user } = await login(email, password);
            setToken(token);
            setUser(user);
            toast.success("Logged in successfully!");
            console.log("logged in");
        } catch (error) {
            toast.error("Error logging in!");
            console.log(error);
        }
    };

    const logout = () => {
        handleLogout();
    }

    if (user && user.role === "admin") return (
        <Button
            component={Link}
            to="/admin/blogs"
            sx={{
                height: '40px',
                backgroundColor: "none",
                fontFamily: "Source Sans Pro",
                fontSize: '16px',
                fontWeight: '700',
                lineHeight: '20px',
                fontStyle: 'normal',
                textAlign: 'center',
                textTransform: 'none',
                textShadow: '0px 2px 4px rgba(0, 0, 0, 0.37)',
                color: "#01EFFD",
                '&:hover': {
                    backgroundColor: "none",
                    color: "#ffffff",
                },
                '&:focus': {
                    outline: 'none',
                },
            }}
        >
            Dashboard
        </Button>
    );

    if (user && user.role === "user") return (
        <Button
            sx={{
                height: '40px',
                backgroundColor: "none",
                fontFamily: "Source Sans Pro",
                fontSize: '16px',
                fontWeight: '700',
                lineHeight: '20px',
                fontStyle: 'normal',
                textAlign: 'center',
                textTransform: 'none',
                textShadow: '0px 2px 4px rgba(0, 0, 0, 0.37)',
                color: "#01EFFD",
                '&:hover': {
                    backgroundColor: "none",
                    color: "#ffffff",
                },
                '&:focus': {
                    outline: 'none',
                },
            }}
            onClick={logout}
        >
            Log Out
        </Button>
    );

    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                sx={{
                    height: '40px',
                    backgroundColor: "none",
                    fontFamily: "Source Sans Pro",
                    fontSize: '16px',
                    fontWeight: '700',
                    lineHeight: '20px',
                    fontStyle: 'normal',
                    textAlign: 'center',
                    textTransform: 'none',
                    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.37)',
                    color: "#01EFFD",
                    '&:hover': {
                        backgroundColor: "none",
                        color: "#ffffff",
                    },
                    '&:focus': {
                        outline: 'none',
                    },
                }}
            >
                Member Only Log In
            </Button>

            <Dialog open={open} onClose={() => setOpen(false)} PaperProps={{
                style: {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    maxWidth: "960px",
                },
            }}
                scroll="body"
            >
                <DialogContent sx={{ padding: "0px" }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "30px",
                            background: "#0D2946",
                            borderRadius: "16px",
                            border: "1px solid #29426D",
                            boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.20)",
                            backgroundColor: "rgba(2, 18, 33, 0.30)",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <Typography color={"white"} fontSize={"1.75em"} textAlign={"center"} variant="h6" sx={{ marginBottom: "20px" }}>
                            Member Only Log In
                        </Typography>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                height: "40px",
                                marginBottom: "20px",
                                border: "1px solid #01EFFD",
                                borderRadius: "6px",
                                padding: "0 10px",
                                fontSize: "16px",
                                fontFamily: "Source Sans Pro, sans-serif",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "20px",
                                color: "#000000",
                            }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                height: "40px",
                                marginBottom: "20px",
                                border: "1px solid #01EFFD",
                                borderRadius: "6px",
                                padding: "0 10px",
                                fontSize: "16px",
                                fontFamily: "Source Sans Pro, sans-serif",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "20px",
                                color: "#000000",
                            }}
                        />
                        <ButtonContained onClick={handleLogin} style={{ width: "100%" }}>
                            Log In
                        </ButtonContained>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default LoginButton;