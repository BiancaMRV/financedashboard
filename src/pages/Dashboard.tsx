import Distribuição from "../components/dashboard/Distribuição";
import PortfolioChart from "../components/dashboard/PortfolioChart";

export default function Dashboard() {
  return (
    <div className="flex-1">
      {/* Cabeçalho */}
      <div className="w-2/3">
        <h1 className="text-white text-2xl"> Visão Geral Financeira </h1>
        <h2 className="text-white text-xs mt-[10px]"> 26 de Abril de 2025</h2>
      </div>

      {/* primeiros cards */}
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

      {/* segundos cards */}
      <div className="grid grid-cols-3 mt-8 gap-4">
        {/* grafico grande */}
        <div className="bg-gray-900 p-6 rounded-2xl col-span-2">
          <h2 className="text-gray-400 text-sm mb-2">
            Performance do Portfólio
          </h2>
          <p className="text-gray-500 text-xs mb-4">Últimos 12 meses</p>
          <div className="flex mb-4">
            <button className="bg-blue-600 text-white text-xs px-4 py-1 rounded-full mr-2">
              Mensal
            </button>
            <button className="text-gray-400 text-xs px-4 py-1">Anual</button>
          </div>
          <PortfolioChart />
        </div>

        {/* Coluna da direita - ocupa 1/3 do espaço com dois cards */}
        <div className="col-span-1 flex flex-col space-y-4">
          {/* Card do Mercado de Cripto */}
          <div className="bg-gray-900 p-6 rounded-2xl">
            <h2 className="text-gray-400 text-sm mb-4">Mercado de Cripto</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-white text-sm">Bitcoin</div>
                  <div className="text-gray-400 text-xs">BTC</div>
                </div>
                <div className="text-right">
                  <div className="text-white text-sm">$61,243.85</div>
                  <div className="text-green-400 text-xs">+2.3%</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-white text-sm">Ethereum</div>
                  <div className="text-gray-400 text-xs">ETH</div>
                </div>
                <div className="text-right">
                  <div className="text-white text-sm">$3,517.42</div>
                  <div className="text-green-400 text-xs">+1.8%</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-white text-sm">XRP</div>
                  <div className="text-gray-400 text-xs">XRP</div>
                </div>
                <div className="text-right">
                  <div className="text-white text-sm">$0.5842</div>
                  <div className="text-red-400 text-xs">-0.7%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card da Distribuição */}
          <div className="bg-gray-900 p-6 rounded-2xl flex-grow">
            <h2 className="text-gray-400 text-sm mb-2">Distribuição</h2>
            <Distribuição />
          </div>
        </div>
      </div>
    </div>
  );
}
