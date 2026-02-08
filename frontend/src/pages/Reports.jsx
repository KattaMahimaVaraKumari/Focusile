export default function Reports() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-[#034078]">
        Study Reports
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold text-[#001F54]">Daily Summary</h2>
          <p className="mt-2 text-gray-600">
            Study Time: 4h 30m
          </p>
          <p className="text-gray-600">
            Focus Score: 82%
          </p>
          <p className="text-gray-600">
            Breaks Taken: 3
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold text-[#001F54]">Weekly Summary</h2>
          <p className="mt-2 text-gray-600">
            Total Study: 26h
          </p>
          <p className="text-gray-600">
            Avg Focus: 79%
          </p>
          <p className="text-gray-600">
            Best Day: Tuesday
          </p>
        </div>
      </div>
    </div>
  );
}
