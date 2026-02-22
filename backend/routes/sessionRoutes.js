import express from "express";
import protect from "../middleware/authMiddleware.js";
import { saveSession, getUserSessions, getWeeklyReport,getFocusTrend} from "../controllers/sessionController.js";

const router = express.Router();

router.post("/save", protect, saveSession);
router.get("/my-sessions", protect, getUserSessions);
router.get("/weekly-report", protect, getWeeklyReport);
router.get("/focus-trend", protect, getFocusTrend);

export default router;