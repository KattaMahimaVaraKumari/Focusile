import Session from "../models/Session.js";
import { validationResult } from "express-validator";

export const saveSession = async (req, res) => {
  
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { activeTime, idleTime, tabSwitches, sessionDuration } = req.body;

    const focusScore =
      ((activeTime / sessionDuration) * 100) -
      tabSwitches * 2 -
      (idleTime / sessionDuration) * 50;

    const session = await Session.create({
      user: req.user._id,
      focusScore: Math.max(0, Math.min(100, focusScore)), 
      activeTime,
      idleTime,
      tabSwitches,
      sessionDuration,
    });

    res.status(201).json(session);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getUserSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    res.json(sessions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getWeeklyReport = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.user._id });

    if (!sessions.length) {
      return res.json({ message: "No sessions found" });
    }

    const lastWeek = sessions.filter((s) => {
      const diff =
        (new Date() - new Date(s.createdAt)) / (1000 * 60 * 60 * 24);
      return diff <= 7;
    });

    const avgFocus =
      lastWeek.length > 0
        ? lastWeek.reduce((acc, s) => acc + s.focusScore, 0) /
        lastWeek.length
        : 0;

    let suggestion = "Great work! Keep focusing.";

    if (avgFocus < 40) {
      suggestion =
        "Your focus is low. Try reducing distractions and tab switching.";
    } else if (avgFocus < 70) {
      suggestion =
        "Good focus. Try deep work sessions and Pomodoro technique.";
    }

    res.json({
      totalSessions: lastWeek.length,
      avgFocus: Math.round(avgFocus),
      suggestion,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getFocusTrend = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.user._id }).sort({
      createdAt: 1,
    });

    const data = sessions.map((s) => ({
      date: s.createdAt.toISOString().split("T")[0],
      focusScore: s.focusScore,
    }));

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getDailyFocusTrend = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.user._id });

    const grouped = {};

    sessions.forEach((s) => {
      const date = s.createdAt.toISOString().split("T")[0];
      if (!grouped[date]) grouped[date] = [];
      grouped[date].push(s.focusScore);
    });

    const data = Object.keys(grouped).map((date) => ({
      date,
      avgFocus: Math.round(
        grouped[date].reduce((a, b) => a + b, 0) / grouped[date].length
      ),
    }));

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getStreak = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.user._id }).sort({
      createdAt: 1,
    });

    if (!sessions.length) {
      return res.json({ currentStreak: 0, longestStreak: 0 });
    }

    // Unique sorted dates
    const uniqueDates = [
      ...new Set(
        sessions.map((s) =>
          new Date(s.createdAt).toISOString().split("T")[0]
        )
      ),
    ];

    let longestStreak = 1;
    let tempStreak = 1;

    for (let i = 1; i < uniqueDates.length; i++) {
      const prev = new Date(uniqueDates[i - 1]);
      const curr = new Date(uniqueDates[i]);

      const diff = (curr - prev) / (1000 * 60 * 60 * 24);

      if (diff === 1) {
        tempStreak++;
        longestStreak = Math.max(longestStreak, tempStreak);
      } else {
        tempStreak = 1;
      }
    }

    // Calculate current streak
    let currentStreak = 0;
    const today = new Date().toISOString().split("T")[0];

    for (let i = uniqueDates.length - 1; i >= 0; i--) {
      const date = uniqueDates[i];
      const diff =
        (new Date(today) - new Date(date)) / (1000 * 60 * 60 * 24);

      if (diff === currentStreak) {
        currentStreak++;
      } else {
        break;
      }
    }

    res.json({ currentStreak, longestStreak });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};