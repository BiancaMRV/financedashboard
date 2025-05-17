import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

export default function PortfolioChart() {
  const [mode, setMode] = useState("mensal");

  const monthlyData = {
    labels: [
      "Nov",
      "Dez",
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
    ],
    datasets: [
      {
        label: "Valor Mensal",
        data: [
          20000, 26000, 30000, 45000, 60000, 58000, 72000, 80000, 90000, 100000,
          110000,
        ],
        borderColor: "#3B82F6",
        backgroundColor: "#3B82F6",
        tension: 0.4,
        fill: { target: "origin", above: "rgba(59, 130, 246, 0.1)" },
        pointBackgroundColor: "#3B82F6",
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const annualData = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Valor Anual",
        data: [15000, 35000, 55000, 85000, 127000],
        borderColor: "#10B981",
        backgroundColor: "#10B981",
        tension: 0.4,
        fill: { target: "origin", above: "rgba(16, 185, 129, 0.1)" },
        pointBackgroundColor: "#10B981",
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: "#94a3b8" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#94a3b8" },
        grid: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#fff",
        bodyColor: "#cbd5e1",
      },
    },
  };

  return (
    <div className="h-[400px] flex flex-col gap-4">
      <div className="flex gap-4">
        <button
          onClick={() => setMode("mensal")}
          className={`px-4 py-2 rounded-full text-xs ${
            mode === "mensal"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Mensal
        </button>
        <button
          onClick={() => setMode("anual")}
          className={`px-4 py-2 rounded-full text-xs ${
            mode === "anual"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Anual
        </button>
      </div>
      <div className="h-[400px] w-full">
        <Line
          data={mode === "mensal" ? monthlyData : annualData}
          options={options}
        />
      </div>
    </div>
  );
}
