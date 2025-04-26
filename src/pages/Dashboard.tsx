export default function Dashboard() {
  return (
    <div className="flex-1 p-8">
      {/* Cabeçalho */}
      <div className="w-2/3 ">
        <h1 className="text-white text-2xl "> Visão Geral Financeira </h1>
        <h2 className="text-white text-xs mt-[10px]"> 26 de Abril de 2025</h2>
      </div>
      {/* cards */}
      <div className="grid grid-cols-3 gap-x-6 mt-9">
        {/*Patrimonio total*/}
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h1 className="text-gray-400 text-sm"> Património total </h1>
          <p className="text-2xl text-white mt-2"> $127.345.89 </p>
          <p className="text-xs text-green-500 mt-2"> +8,4% </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h1 className="text-gray-400 text-sm"> Receita Mensal</h1>
          <p className="text-2xl text-white mt-2"> $12.823.00</p>
          <p className="text-xs text-green-500 mt-2"> +2,1%</p>
        </div>
        {/* Despesas Mensais */}
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h1 className="text-gray-400 text-sm">Despesas Mensais</h1>
          <p className="text-2xl text-white mt-2"> $7891.90 </p>
          <p className="text-xs text-red-500 mt-2"> -3,8%</p>
        </div>
      </div>
    </div>
  );
}
