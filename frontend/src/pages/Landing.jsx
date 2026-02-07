import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center mt-24 px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Focus Better. Learn Smarter.
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Focusile is an AI-powered smart study companion that helps you track
          attention, avoid distractions, and optimize learning using intelligent insights.
        </p>

        <div className="flex gap-4">
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-700"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg text-lg hover:bg-indigo-50"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
