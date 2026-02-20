import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    focusScore: {
      type: Number,
      required: true,
    },

    activeTime: {
      type: Number,
      required: true,
    },

    idleTime: {
      type: Number,
      required: true,
    },

    tabSwitches: {
      type: Number,
      required: true,
    },

    sessionDuration: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Session = mongoose.model("Session", sessionSchema);

export default Session;
