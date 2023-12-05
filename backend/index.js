import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

import authRouter from "./routes/auth.js";
import blogRouter from "./routes/blog.js";
import formRouter from "./routes/form.js";

const connection = mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB");
        console.log(err);
    });

app.use("/auth", authRouter);
app.use("/blog", blogRouter);
app.use("/form", formRouter);

app.get("*", (req, res) => {
    res.send("You've reached the ConsX API");
});

const server = app.listen(port, () => {
    console.log("Server started on port 5000");
});
server.setTimeout(1000 * 60 * 2);

export default connection;
