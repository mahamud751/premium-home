"use client";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function PropertyChart() {
  // Sample profit data
  const data = [
    { name: "Jan", profit: 12000 },
    { name: "Feb", profit: 19000 },
    { name: "Mar", profit: 3000 },
    { name: "Apr", profit: 5000 },
    { name: "May", profit: 20000 },
    { name: "Jun", profit: 30000 },
  ];

  return (
    <div className=" flex flex-col items-center justify-center">
      {/* Main Content */}
      <main className="w-full max-w-4xl">
        <div className="grid grid-cols-1 gap-6">
          {/* Graph Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Profit share Overview
            </h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                  label={{
                    value: "Profit ($)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="profit"
                  stroke="#4F46E5" // Indigo
                  fill="rgba(79, 70, 229, 0.2)"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 mb-5 md:mb-0 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">
                Total Profit
              </h3>
              <p className="text-2xl text-indigo-600">$81,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">
                Highest Month
              </h3>
              <p className="text-2xl text-indigo-600">June</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">
                Growth Rate
              </h3>
              <p className="text-2xl text-indigo-600">+25%</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-gray-500">
        <p>Updated as of April 10, 2025</p>
      </footer>
    </div>
  );
}
