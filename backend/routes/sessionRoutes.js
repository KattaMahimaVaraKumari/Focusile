import express from "express";
import protect from "../middleware/authMiddleware.js";
import { saveSession, getUserSessions } from "../controllers/sessionController.js";

const router = express.Router();

router.post("/save", protect, saveSession);
router.get("/my-sessions", protect, getUserSessions);

export default router;