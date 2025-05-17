import {
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
export function CryptoChart() {
  const [bitcoinData, setBitcoinData] = useState({ prices: [], labels: [] });

  const [timeframe, setTimeframe] = useState("24h");
  const [loading, setLoading] = useState(true);

  const formatTrillions = (value: number) => {
    return (value / 1000000000000).toFixed(2) + "T";
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${
            timeframe === "24h"
              ? 1
              : timeframe === "7d"
              ? 7
              : timeframe === "30d"
              ? 30
              : 365
          }&interval=${timeframe === "24h" ? "hourly" : "daily"}`
        );
        const data = await response.json();
        const prices = data.prices.map((price: number[]) => price[1]);
        const labels = data.prices.map((price: number[]) => {
          const date = new Date(price[0]);
          return timeframe === "24h"
            ? date.toLocaleTimeString()
            : date.toLocaleDateString();
        });
        setBitcoinData({ prices, labels });
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 120000);
    return () => clearInterval(interval);
  }, [timeframe]);

  const chartData = {
    labels: bitcoinData.labels,
    datasets: [
      {
        data: bitcoinData.prices,
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "#3b82f6",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 5,
        borderWidth: 3,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#fff",
        bodyColor: "#cbd5e1",
        displayColors: true,
        callbacks: {
          title: (context: any) => {
            return `Bitcoin (BTC)`;
          },
          label: (context: { raw: any }) => {
            return `${formatUSD(context.raw)}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#94a3b8",
          maxRotation: 0,
          font: {
            size: 10,
          },
        },
      },
      y: {
        grid: {
          color: "rgba(148, 163, 184, 0.1)",
          drawBorder: false,
        },
        ticks: {
          color: "#94a3b8",
          callback: (value: any) => formatUSD(value),
          font: {
            size: 10,
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
  };
  return (
    <div>
      <div className="flex space-x-2">
        <button
          onClick={() => setTimeframe("24h")}
          className={`px-4 py-1 rounded-full text-sm ${
            timeframe === "24h"
              ? "bg-blue-500 text-white"
              : "bg-slate-700 text-slate-300 border border-slate-600"
          }`}
        >
          24h
        </button>
        <button
          onClick={() => setTimeframe("7d")}
          className={`px-4 py-1 rounded-full text-sm ${
            timeframe === "7d"
              ? "bg-blue-500 text-white"
              : "bg-slate-700 text-slate-300 border border-slate-600"
          }`}
        >
          7d
        </button>
        <button
          onClick={() => setTimeframe("30d")}
          className={`px-4 py-1 rounded-full text-sm ${
            timeframe === "30d"
              ? "bg-blue-500 text-white"
              : "bg-slate-700 text-slate-300 border border-slate-600"
          }`}
        >
          30d
        </button>
        <button
          onClick={() => setTimeframe("1a")}
          className={`px-4 py-1 rounded-full text-sm ${
            timeframe === "1a"
              ? "bg-blue-500 text-white"
              : "bg-slate-700 text-slate-300 border border-slate-600"
          }`}
        >
          1a
        </button>
      </div>

      <div className="h-64">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
function formatUSD(raw: any): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(raw);
}
