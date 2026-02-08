import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import BreakModal from "../components/BreakModal";

export default function Session() {
  const { state } = useLocation();

  const totalTime = state.focus * 60;
  const breakAfter = state.breakAfter * 60;

  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [showBreak, setShowBreak] = useState(false);
  const [focusScore, setFocusScore] = useState(100);

  const idleSeconds = useRef(0);
  const tabSwitches = useRef(0);

  // Main timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Break trigger
  useEffect(() => {
    if (timeLeft > 0 && timeLeft % breakAfter === 0) {
      setShowBreak(true);
    }
  }, [timeLeft, breakAfter]);

  // Idle tracking
  useEffect(() => {
    const resetIdle = () => {
      idleSeconds.current = 0;
    };

    const idleInterval = setInterval(() => {
      idleSeconds.current += 1;

      if (idleSeconds.current > 5) {
        setFocusScore((prev) => Math.max(prev - 1, 0));
      }
    }, 1000);

    window.addEventListener("mousemove", resetIdle);
    window.addEventListener("keydown", resetIdle);

    return () => {
      clearInterval(idleInterval);
      window.removeEventListener("mousemove", resetIdle);
      window.removeEventListener("keydown", resetIdle);
    };
  }, []);

  // Tab switching tracking
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        tabSwitches.current += 1;
        setFocusScore((prev) => Math.max(prev - 3, 0));
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-[#034078]">Focus Session</h1>

      <div className="mt-6 bg-white p-10 rounded-xl shadow text-center">
        <p className="text-gray-500">Time Remaining</p>

        <h2 className="text-5xl font-bold text-[#1282A2]">
          {formatTime(timeLeft)}
        </h2>

        <p className="mt-4 text-[#001F54]">
          Mode: <span className="font-semibold">{state.mode}</span>
        </p>

        <p className="mt-2">
          Focus Score:{" "}
          <span
            className={`font-bold ${
              focusScore > 70
                ? "text-green-600"
                : focusScore > 40
                ? "text-yellow-500"
                : "text-red-600"
            }`}
          >
            {focusScore}%
          </span>
        </p>
      </div>

      {showBreak && (
        <BreakModal
          breakTime={state.breakTime}
          close={() => setShowBreak(false)}
        />
      )}
    </div>
  );
}
