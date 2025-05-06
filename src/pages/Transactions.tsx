import { useState } from "react";

export default function Transactions() {
  const [filterbutton, setFilterButton] = useState("Todos");

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
        <div></div>
      </div>
    </div>
  );
}
