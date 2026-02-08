import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEFCFB] to-[#E3F2F7]">
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center mt-28 px-4">
        <h1 className="text-5xl font-bold text-[#034078] mb-6">
          Focus Better. Learn Smarter.
        </h1>

        <p className="text-lg text-[#001F54] max-w-2xl mb-8">
          Focusile is a smart study companion that helps you track attention,
          avoid distractions, and optimize learning using intelligent insights.
        </p>

        <div className="flex gap-4">
          <Link
            to="/register"
            className="bg-[#1282A2] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#034078] transition"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-[#1282A2] text-[#1282A2] px-6 py-3 rounded-lg text-lg hover:bg-[#E3F2F7] transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
