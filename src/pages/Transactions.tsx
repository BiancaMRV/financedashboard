import { useState } from "react";

export default function Transactions() {
  const [filterbutton, setFilterButton] = useState("Todos");

  const transactions = [
    {
      date: "26/04/2025",
      description: "Salário",
      category: "Receita",
      value: " +$15.000,00",
      status: "Completo",
    },
    {
      date: "25/04/2025",
      description: "Renda",
      category: "Habitação",
      value: " -$ 1.000.00",
      status: "Completo",
    },
    {
      date: "24/04/2025",
      description: "Supermercado",
      category: "Alimentação",
      value: "-$350.00",
      status: "Completo",
    },
    {
      date: "23/04/2025",
      description: "Transferencia bancária",
      category: "Receita",
      value: "+$500.00",
      status: "Pendente",
    },
  ];

  return (
    <div className="flex-1">
      {/* cabeçalho */}
      <div className="w-2/3">
        <h1 className="text-white text-2xl font-bold"> Transações </h1>
        <h2 className="text-white text-xs mt-2 opacity-70">
          {new Date().toLocaleDateString("pt-BR")}
        </h2>
      </div>

      {/*filtros*/}
      <div className="flex items-center bg-gray-900 p-4 rounded-xl mt-4 gap-3">
        <h1 className="text-white text-sm font-medium"> Filtros: </h1>
        <div className="flex gap-2">
          <button
            onClick={() => setFilterButton("Todos")}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              filterbutton === "Todos"
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilterButton("Entradas")}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              filterbutton === "Entradas"
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Entradas
          </button>
          <button
            onClick={() => setFilterButton("Saídas")}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              filterbutton === "Saídas"
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Saídas
          </button>
        </div>
      </div>

      {/* tabela */}
      <div className="bg-gray-900 p-4 rounded-xl mt-4 w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-gray-400 text-sm font-medium text-left py-3 px-4">
                {" "}
                Data{" "}
              </th>
              <th className="text-gray-400 text-sm font-medium text-left py-3 px-4">
                {" "}
                Descrição{" "}
              </th>
              <th className="text-gray-400 text-sm font-medium text-left py-3 px-4">
                {" "}
                Categoria{" "}
              </th>
              <th className="text-gray-400 text-sm font-medium text-left py-3 px-4">
                {" "}
                Valor{" "}
              </th>
              <th className="text-gray-400 text-sm font-medium text-left py-3 px-4">
                {" "}
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions
              .filter((transaction) => {
                if (filterbutton === "Todos") return true;
                if (filterbutton === "Entradas")
                  return transaction.value.includes("+");
                if (filterbutton === "Saídas")
                  return transaction.value.includes("-");
                return true;
              })
              .map((transaction, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="text-white text-sm py-4 px-4">
                    {transaction.date}
                  </td>
                  <td className="text-white text-sm py-4 px-4">
                    {transaction.description}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        transaction.category === "Receita"
                          ? "bg-green-900/40 text-green-400"
                          : transaction.category === "Habitação"
                          ? "bg-red-900/40 text-red-400"
                          : transaction.category === "Alimentação"
                          ? "bg-orange-900/40 text-orange-400"
                          : "bg-blue-900/40 text-blue-400"
                      }`}
                    >
                      {transaction.category}
                    </span>
                  </td>
                  <td
                    className={`text-sm font-medium py-4 px-4 ${
                      transaction.value.includes("+")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {transaction.value}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        transaction.status === "Completo"
                          ? "bg-green-900/40 text-green-400"
                          : "bg-yellow-900/40 text-yellow-400"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
