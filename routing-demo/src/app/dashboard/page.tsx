import React from "react";

const BarChart = () => {
  return (
    <div>
      <h1>Bar Chart</h1>
    </div>
  );
};

// export default BarChart;

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <BarChart />
    </div>
  );
}
