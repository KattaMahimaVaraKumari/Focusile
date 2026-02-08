import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-[#034078]">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Today's Focus</p>
          <h2 className="text-3xl font-bold text-[#1282A2]">85%</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Study Time</p>
          <h2 className="text-3xl font-bold text-[#1282A2]">4h 20m</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Sessions</p>
          <h2 className="text-3xl font-bold text-[#1282A2]">5</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Distractions</p>
          <h2 className="text-3xl font-bold text-[#1282A2]">11</h2>
        </div>
      </div>

      <div className="mt-10">
        <Link
          to="/session-setup"
          className="inline-block px-6 py-3 bg-[#1282A2] text-white rounded-lg hover:bg-[#034078] transition"
        >
          Start Focus Session
        </Link>
      </div>
    </div>
  );
}
