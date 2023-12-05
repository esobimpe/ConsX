import { Router } from 'express';
import { sendForm } from "../controllers/form.js";

const router = Router();
router.post("/", sendForm);

export default router;