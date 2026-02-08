import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#0A1128] shadow">
      <h1 className="text-2xl font-bold text-[#FEFCFB]">
        Focusile
      </h1>

      <div className="space-x-4">
        <Link
          to="/login"
          className="text-[#FEFCFB] hover:text-[#1282A2] transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-[#1282A2] text-white px-4 py-2 rounded-lg hover:bg-[#034078] transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
