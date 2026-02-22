import express from "express";
import protect from "../middleware/authMiddleware.js";
import { saveSession, getUserSessions, getWeeklyReport,getFocusTrend,getDailyFocusTrend} from "../controllers/sessionController.js";

const router = express.Router();

router.post("/save", protect, saveSession);
router.get("/my-sessions", protect, getUserSessions);
router.get("/weekly-report", protect, getWeeklyReport);
router.get("/focus-trend", protect, getFocusTrend);
router.get("/daily-focus-trend", protect, getDailyFocusTrend);

export default router;