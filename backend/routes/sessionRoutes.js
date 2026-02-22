import express from "express";
import protect from "../middleware/authMiddleware.js";
import { saveSession, getUserSessions, getWeeklyReport } from "../controllers/sessionController.js";

const router = express.Router();

router.post("/save", protect, saveSession);
router.get("/my-sessions", protect, getUserSessions);
router.get("/weekly-report", protect, getWeeklyReport);

export default router;