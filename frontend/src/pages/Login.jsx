export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-[#034078] mb-6 text-center">
          Login
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1282A2]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1282A2]"
          />

          <button
            className="w-full py-3 bg-[#1282A2] text-white rounded-lg hover:bg-[#034078] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
