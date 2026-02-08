export default function Insights() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-[#034078]">
        AI Study Insights
      </h1>

      <div className="bg-white p-6 rounded-xl shadow mt-6 space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          🔹 You focus best between <b>9 AM - 11 AM</b>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg">
          🔹 Reduce tab switching during video learning.
        </div>

        <div className="p-4 bg-gray-100 rounded-lg">
          🔹 Take shorter breaks after long coding sessions.
        </div>

        <div className="p-4 bg-gray-100 rounded-lg">
          🔹 You're overthinking problem-solving sessions — try timed practice.
        </div>
      </div>
    </div>
  );
}
