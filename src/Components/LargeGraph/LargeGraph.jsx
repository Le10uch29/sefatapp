"use client";

import React from "react";
import {
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Chart as ChartJS,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register required chart components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const LargeGraph = () => {
  // Line Chart Data
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        label: "Total Spent",
        data: [98, 100, 102, 101, 104, 105, 106, 108, 109, 110], // Example data
        borderColor: "#0F6E5B", // Line color
        backgroundColor: "rgba(15, 110, 91, 0.1)", // Light green background under line
        borderWidth: 2,
        pointBackgroundColor: "#7A6BFF", // Point highlight
        pointBorderColor: "#ffffff",
        pointRadius: 5, // Size of the point
        pointHoverRadius: 7,
        tension: 0.3, // Smooth curve
        fill: true, // Fill area under the line
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `$${(context.raw).toFixed(2)}`, // Custom tooltip label
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 50,
        max: 110,
        ticks: {
          stepSize: 10,
          callback: (value) => `$${value}`,
        },
        grid: { color: "rgba(0, 0, 0, 0.1)" },
      },
      x: {
        grid: { display: false }, // Remove vertical grid lines
      },
    },
  };

  return (
    <div
      style={{
        width: "270px",
        height: "271px",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#0F6E5B" }}>
        $682.5
      </h2>
      <p style={{ margin: "5px 0 20px", fontSize: "0.9rem", color: "#6b7280" }}>
        Total Spent &nbsp;
        <span style={{ color: "#10B981" }}>▲ +2.45%</span>
      </p>
      <Line data={data} options={options} />
    </div>
  );
};

export default LargeGraph;
