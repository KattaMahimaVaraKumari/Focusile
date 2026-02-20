import express from "express";
import protect from "../middleware/authMiddleware.js";
import { saveSession } from "../controllers/sessionController.js";

const router = express.Router();

router.post("/save", protect, saveSession);

export default router;