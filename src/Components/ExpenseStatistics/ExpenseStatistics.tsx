"use client";

import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { ScriptableContext } from "chart.js";
import "./ExpenseStatistics.css";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

// Register the required components for Chart.js
Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

// Component Definition
const ExpenseStatistics: React.FC = () => {
  // Data for the Pie Chart
  const pieData = {
    labels: ["Recept et", "Analiz yokla", "Rezerv et"],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: ["#FFA600", "#0022FF", "#FF00F6"],
        borderWidth: 0,
      },
    ],
  };

  // Data for the Bar Chart
  const barData = {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "$12,500",
        data: [6, 9, 7, 3, 12.5, 8],
        backgroundColor: (context: ScriptableContext<"bar">) => {
          return context.dataIndex === 4 ? "#0FD0FF" : "#D9D9D9";
        },
        borderRadius: 4,
      },
    ],
  };

  const barOptions = {
    plugins: { legend: { display: false } },
    responsive: true,
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { display: false },
        ticks: { display: false },
      },
    },
  };

  return (
    <div
      style={{
        width: "270px",
        height: "271px",
        border: "1px solid #E0E0E0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      {/* Pie Chart */}
      <div style={{ width: "50%", height: "100%" }}>
        <Doughnut
          data={pieData}
          options={{
            cutout: "65%",
            plugins: { legend: { display: false } },
          }}
        />
      </div>

      {/* Bar Chart */}
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "8px" }}
        >
          $12,500
        </div>
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
};

export default ExpenseStatistics;
