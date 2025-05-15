export default function Investments() {
  return (
    <div className="flex-1">
      <div className="w-2/3">
        <h1 className="text-white text-2xl"> Investimentos </h1>
        <h2 className="text-white text-xs mt-2 opacity-70">
          {new Date().toLocaleDateString("pt-BR")}
        </h2>
      </div>
      {/* primeiros cards */}
      <div className="grid grid-cols-3 gap-x-6 mt-9">
        {/*Total Investido*/}
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h1 className="text-gray-400 text-sm"> Total Investido </h1>
          <p className="text-2xl text-white mt-2"> $95.345.89 </p>
          <p className="text-xs text-green-500 mt-2"> +12.7% este ano </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h1 className="text-gray-400 text-sm"> Retorno Mensal</h1>
          <p className="text-2xl text-white mt-2"> $1.823.00</p>
          <p className="text-xs text-green-500 mt-2"> +3.2% este mês</p>
        </div>
        {/* ROI médio */}
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h1 className="text-gray-400 text-sm">ROI médio</h1>
          <p className="text-2xl text-white mt-2"> 8.4% </p>
          <p className="text-xs text-green-500 mt-2"> +0.8% que o benchmark</p>
        </div>
      </div>
    </div>
  );
}
