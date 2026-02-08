import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SessionSetup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    mode: "Video",
    focus: 25,
    breakAfter: 25,
    breakTime: 5,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const startSession = () => {
    navigate("/session", { state: form });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-[#034078] mb-6 text-center">
          Setup Focus Session
        </h2>

        <div className="space-y-4">
          <select
            name="mode"
            value={form.mode}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          >
            <option>Video Lectures</option>
            <option>Coding</option>
            <option>Reading</option>
            <option>Problem Solving</option>
          </select>

          <input
            name="focus"
            type="number"
            value={form.focus}
            onChange={handleChange}
            placeholder="Focus Duration (mins)"
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            name="breakAfter"
            type="number"
            value={form.breakAfter}
            onChange={handleChange}
            placeholder="Break After (mins)"
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            name="breakTime"
            type="number"
            value={form.breakTime}
            onChange={handleChange}
            placeholder="Break Duration (mins)"
            className="w-full px-4 py-3 border rounded-lg"
          />

          <button
            onClick={startSession}
            className="w-full py-3 bg-[#1282A2] text-white rounded-lg hover:bg-[#034078] transition"
          >
            Start Focus Session
          </button>
        </div>
      </div>
    </div>
  );
}
