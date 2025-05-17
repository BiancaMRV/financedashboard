import { Pie } from "react-chartjs-2";

export default function Alocacao() {
  const data = {
    labels: ["Ações", "Renda Fixa", "Imóveis", "Internacional", "Outros"],
    datasets: [
      {
        data: [40, 30, 20, 10, 5],
        backgroundColor: [
          "#3B82F6",
          "#22D3EE",
          "#FBBF24",
          "#A855F7",
          "#F43F5E",
        ],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: { display: true },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#fff",
        bodyColor: "#cbd5e1",
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };
  return (
    <div className="relative w-full h-[250px]">
      <Pie data={data} options={options} />
    </div>
  );
}
