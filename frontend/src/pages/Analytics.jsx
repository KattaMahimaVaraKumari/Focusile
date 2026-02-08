export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-[#034078]">Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold text-[#001F54]">Daily Focus</h2>
          <div className="h-48 mt-4 bg-gray-100 rounded-lg flex items-center justify-center">
            Chart 
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold text-[#001F54]">Weekly Study Time</h2>
          <div className="h-48 mt-4 bg-gray-100 rounded-lg flex items-center justify-center">
            Chart 
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold text-[#001F54]">Distraction Trend</h2>
          <div className="h-48 mt-4 bg-gray-100 rounded-lg flex items-center justify-center">
            Chart 
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold text-[#001F54]">Productivity Pie</h2>
          <div className="h-48 mt-4 bg-gray-100 rounded-lg flex items-center justify-center">
            Chart 
          </div>
        </div>
      </div>
    </div>
  );
}
