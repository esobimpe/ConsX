import { register, login, getUser, updatePassword, updateUser, getUsers } from "../controllers/auth.js";
import { Router } from "express";
import verifyToken from "../middleware/verifyToken.js";
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
router.patch("/password", verifyToken, updatePassword);
router.patch("/user", verifyToken, updateUser);

router.get("/", getUsers)

export default router;