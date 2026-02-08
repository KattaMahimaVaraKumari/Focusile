import { useEffect, useState } from "react";

export default function BreakModal({ breakTime, close }) {
  const [time, setTime] = useState(breakTime * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (time <= 0) close();
  }, [time]);

  const format = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-[#034078]">
          Time for a Break
        </h2>

        <p className="text-4xl font-bold text-[#1282A2] mt-4">
          {format(time)}
        </p>

        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <p className="text-[#001F54] font-semibold">
            Suggestions:
          </p>
          <ul className="text-gray-600 mt-2 text-sm space-y-1">
            <li>• Stretch your body</li>
            <li>• Drink water</li>
            <li>• Walk for 2 minutes</li>
          </ul>
        </div>

        <button
          onClick={close}
          className="mt-6 px-6 py-2 bg-[#1282A2] text-white rounded-lg hover:bg-[#034078]"
        >
          Resume
        </button>
      </div>
    </div>
  );
}
