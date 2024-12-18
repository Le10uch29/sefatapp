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
    <div
      style={{
        border: "1px solid #E5E7EB",
        borderRadius: "8px",
        width: "500px",
        margin: "0",
        padding: "16px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ margin: 0 }}>Balance</h3>
        <p style={{ color: "#6B7280", margin: 0, fontSize: "14px" }}>Monthly</p>
      </div>

      {/* Cards */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Card */}
        <div
          style={{
            backgroundColor: "#F9FAFB",
            borderRadius: "8px",
            padding: "12px",
            textAlign: "left",
            width: "45%",
          }}
        >
          <p style={{ margin: 0, color: "#9CA3AF", fontSize: "14px" }}>Saves</p>
          <h3 style={{ margin: "5px 0", fontSize: "20px", fontWeight: "600" }}>
            43.50%
          </h3>
          <p style={{ margin: 0, color: "#10B981", fontSize: "14px" }}>
            +2.45%
          </p>
        </div>

        {/* Right Card */}
        <div
          style={{
            backgroundColor: "#F9FAFB",
            borderRadius: "8px",
            padding: "12px",
            textAlign: "left",
            width: "45%",
          }}
        >
          <p style={{ margin: 0, color: "#9CA3AF", fontSize: "14px" }}>
            Balance
          </p>
          <h3 style={{ margin: "5px 0", fontSize: "20px", fontWeight: "600" }}>
            $52,422
          </h3>
          <p style={{ margin: 0, color: "#EF4444", fontSize: "14px" }}>
            -4.75%
          </p>
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
