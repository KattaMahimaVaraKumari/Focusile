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