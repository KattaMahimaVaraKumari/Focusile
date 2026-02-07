import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-indigo-600">Focusile</h1>

      <div className="space-x-4">
        <Link to="/login" className="text-gray-600 hover:text-indigo-600">
          Login
        </Link>
        <Link
          to="/register"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
