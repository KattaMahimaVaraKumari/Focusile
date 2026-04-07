import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  saveSession,
  getUserSessions,
  getWeeklyReport,
  getFocusTrend,
  getDailyFocusTrend,
} from "../controllers/sessionController.js";
import { getStreak } from "../controllers/sessionController.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/save",
  protect,
  [
    body("activeTime")
      .isNumeric()
      .withMessage("Active time must be a number")
      .custom((value) => value >= 0)
      .withMessage("Active time cannot be negative"),

    body("idleTime")
      .isNumeric()
      .withMessage("Idle time must be a number")
      .custom((value) => value >= 0)
      .withMessage("Idle time cannot be negative"),

    body("tabSwitches")
      .isNumeric()
      .withMessage("Tab switches must be a number")
      .custom((value) => value >= 0)
      .withMessage("Tab switches cannot be negative"),

    body("sessionDuration")
      .isNumeric()
      .withMessage("Session duration must be a number")
      .custom((value) => value > 0)
      .withMessage("Session duration must be greater than 0"),
  ],
  saveSession
);

router.get("/my-sessions", protect, getUserSessions);
router.get("/weekly-report", protect, getWeeklyReport);
router.get("/focus-trend", protect, getFocusTrend);
router.get("/daily-focus-trend", protect, getDailyFocusTrend);
router.get("/streak", protect, getStreak);

export default router;