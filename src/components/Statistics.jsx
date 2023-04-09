import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";
const data = [
  {
    name: "A1",
    Mark: 60,
  },
  {
    name: "A2",
    Mark: 59,
  },
  {
    name: "A3",
    Mark: 58,
  },
  {
    name: "A4",
    Mark: 58,
  },
  {
    name: "A5",
    Mark: 60,
  },
  {
    name: "A6",
    Mark: 60,
  },
  {
    name: "A7",
    Mark: 60,
  },
  {
    name: "A8",
    Mark: 60,
  },
];

const Statistics = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="mb-20 text-3xl font-bold text-black my-20">
          Assignment Analytics
        </h1>
      </div>
      <div
        style={{ width: "75%", height: 300 }}
        className="w-full lg:w-2/4 h-3/6"
      >
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray=" 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Mark"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
