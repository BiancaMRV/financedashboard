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

export default function CryptoChart() {
  const [mode, setMode] = useState("mensal");

  const formatUSD = (value: any) => {
    return new Intl.NumberFormat("pt-PT", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

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
        label: "Bitcoin (USD)",
        data: [
          36500, 42000, 38000, 48000, 60000, 58000, 70000, 65000, 68000, 70000,
          72000,
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
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Bitcoin (USD)",
        data: [29000, 47000, 16500, 42000, 68000, 72000],
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
        ticks: {
          color: "#94a3b8",
          callback: (value: any) => formatUSD(value),
        },
        grid: { color: "rgba(148, 163, 184, 0.1)" },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#fff",
        bodyColor: "#cbd5e1",
        callbacks: {
          label: (context: any) => {
            return `${formatUSD(context.raw)}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col gap-4 bg-slate-900 p-6 rounded-lg text-white">
      <h2 className="text-xl font-bold">Performance do Bitcoin</h2>
      <p className="text-slate-400">Últimos 12 meses</p>

      <div className="flex gap-4 mt-2">
        <button
          onClick={() => setMode("mensal")}
          className={`px-4 py-2 rounded-full text-sm ${
            mode === "mensal"
              ? "bg-blue-600 text-white"
              : "bg-slate-700 text-slate-300"
          }`}
        >
          Mensal
        </button>
        <button
          onClick={() => setMode("anual")}
          className={`px-4 py-2 rounded-full text-sm ${
            mode === "anual"
              ? "bg-blue-600 text-white"
              : "bg-slate-700 text-slate-300"
          }`}
        >
          Anual
        </button>
      </div>

      <div className="h-64 w-full mt-2">
        <Line
          data={mode === "mensal" ? monthlyData : annualData}
          options={options}
        />
      </div>
    </div>
  );
}
