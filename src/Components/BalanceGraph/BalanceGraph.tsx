"use client";

import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./BalanceGraph.css";

// Register Chart.js components
ChartJS.register(
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Tooltip
);

const BalanceGraph: React.FC = () => {
  // Line Chart Data
  const lineData = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        data: [20, 30, 25, 40, 15, 50, 30, 45, 20, 30, 35, 40],
        borderColor: "#2D3E50", // Line color
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        pointRadius: 0,
        fill: true,
        backgroundColor: "rgba(45, 62, 80, 0.1)", // Faded fill color
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        display: false, // Hide X-axis
      },
      y: {
        display: false, // Hide Y-axis
      },
    },
  };

  return (
    <div className="balance-graph">
      {/* Header */}
      <div className="balance-content">
        <h3 className="graph-title">Balance</h3>
        <select name="monthly" className="graph-select">
          <option value="Monthly">Monthly</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="Апрель">Апрель</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="Август">Август</option>
          <option value="September">September</option>
          <option value="November">November</option>
          <option value="October">October</option>
          <option value="December">December</option>
        </select>
      </div>

      {/* Cards */}
      <div className="graph-info">
        {/* Left Card */}
        <div className="graph-saves">
          <span className="saves-block">Saves</span>
          <div className="saves-info">
            <strong className="saves-percent">43.50%</strong>
            <p className="percent-descr">+2.45%</p>
          </div>
        </div>

        {/* Right Card */}
        <div className="graph-balance">
          <span className="balance-block">Balance</span>
          <div className="balance-info">
            <strong className="balance-percent">$52,422</strong>
            <p className="percent-descr">-4.75%</p>
          </div>
        </div>
      </div>

      {/* Line Graph */}
      <div style={{ marginTop: "20px", height: "120px" }}>
        <Line data={lineData} options={lineOptions} />
      </div>
    </div>
  );
};

export default BalanceGraph;
