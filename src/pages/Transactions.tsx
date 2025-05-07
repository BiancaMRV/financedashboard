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
        <h1 className="text-white text-2xl "> Transações </h1>
        <h2 className="text-white text-xs mt-[10px] "> data </h2>
      </div>

      {/*filtros*/}

      <div className=" flex flex-1 bg-gray-900 p-4 rounded-xl mt-4 gap-1">
        <h1 className="text-white text-sm self-center"> Filtros: </h1>
        <div className=" flex gap-2">
          <button
            onClick={() => setFilterButton("Todos")}
            className={`px-4 py-2 rounded-full text-sm  ${
              filterbutton === "Todos"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilterButton("Entradas")}
            className={`px-4 py-2 rounded-full text-sm  ${
              filterbutton === "Entradas"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Entradas
          </button>
          <button
            onClick={() => setFilterButton("Saídas")}
            className={`px-4 py-2 rounded-full text-sm  ${
              filterbutton === "Saídas"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Saídas
          </button>
        </div>
      </div>
      {/* tabela */}
      <div className="flex flex-1 bg-gray-900 p-4 rounded-xl mt-4 gap-1">
        <table>
          <tr>
            <th className=" text-gray-600 text-sm"> Data </th>
            <th className="text-gray-600 text-sm"> Descrição </th>
            <th className="text-gray-600 text-sm"> Categoria </th>
            <th className="text-gray-600 text-sm"> Valor </th>
            <th className="text-gray-600 text-sm"> Status</th>
          </tr>
          <tbody>
            <tr>
              <td> 26/04/2025 </td>
              <td> Salário </td>
              <td> Trabalho </td>
              <td> R$ 5.000,00 </td>
              <td> Recebido </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
