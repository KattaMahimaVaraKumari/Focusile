import Session from "../models/Session.js";

export const saveSession = async (req, res) => {
  try {
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
      lastWeek.reduce((acc, s) => acc + s.focusScore, 0) /
      lastWeek.length;

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