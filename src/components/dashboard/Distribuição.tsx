import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DistributionChart() {
  const data = {
    labels: ["Categoria A", "Categoria B", "Categoria C", "Categoria D"],
    datasets: [
      {
        data: [24.6, 30, 20, 25.4],
        backgroundColor: ["#22d3ee", "#3b82f6", "#a855f7", "#f59e0b"],
        borderWidth: 0,
        cutout: "50%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
    <div className="relative w-full h-[250px]">
      <Doughnut data={data} options={options} />
      {/* Texto no meio */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-lg font-semibold">+24.6%</span>
      </div>
    </div>
  );
}
