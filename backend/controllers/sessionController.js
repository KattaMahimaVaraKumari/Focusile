import Session from "../models/Session.js";

export const saveSession = async (req, res) => {
  try {
    const {
      focusScore,
      activeTime,
      idleTime,
      tabSwitches,
      sessionDuration,
    } = req.body;

    const session = await Session.create({
      user: req.user._id,
      focusScore,
      activeTime,
      idleTime,
      tabSwitches,
      sessionDuration,
    });

    res.status(201).json({
      message: "Session saved",
      session,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};