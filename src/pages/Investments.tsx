import Alocacao from "../components/investments/Alocacao";

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
          <h1 className="text-gray-400 text-xs"> Total Investido </h1>
          <p className="text-2xl text-white mt-2"> $95.345.89 </p>
          <p className="text-xs text-green-500 mt-2"> +12.7% este ano </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h1 className="text-gray-400 text-xs"> Retorno Mensal</h1>
          <p className="text-2xl text-white mt-2"> $1.823.00</p>
          <p className="text-xs text-green-500 mt-2"> +3.2% este mês</p>
        </div>
        {/* ROI médio */}
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h1 className="text-gray-400 text-xs">ROI médio</h1>
          <p className="text-2xl text-white mt-2"> 8.4% </p>
          <p className="text-xs text-green-500 mt-2"> +0.8% que o benchmark</p>
        </div>
      </div>

      {/* Conteúdo principal*/}
      <div className="flex flex-row gap-6 mt-8">
        {/* Gráfico de pizza - primeira coluna */}
        <div className="bg-gray-900 p-5 rounded-2xl w-1/2">
          <h2 className="text-gray-400 text-xs mb-2">Distribuição de Ativos</h2>
          <div className="h-60">
            <Alocacao />
          </div>
        </div>

        {/* Tabela de Principais Investimentos - segunda coluna */}
        <div className="bg-gray-900 p-5 rounded-2xl w-1/2 relative">
          <h2 className="text-gray-200 text-lg mb-4">
            Principais Investimentos
          </h2>

          {/* Cabeçalho da tabela */}
          <div className="grid grid-cols-4 mb-2 border-b border-gray-800 pb-1">
            <div className="text-gray-400 text-xs">Ativo</div>
            <div className="text-gray-400 text-xs">Valor</div>
            <div className="text-gray-400 text-xs">Retorno</div>
            <div className="text-gray-400 text-xs">Alocação</div>
          </div>

          {/* Linhas da tabela */}
          <div className="grid grid-cols-4 py-2 border-b border-gray-800">
            <div className="text-white text-xs font-medium">PETR4</div>
            <div className="text-white text-xs">$15,230.00</div>
            <div className="text-green-500 text-xs">+18.5%</div>
            <div className="text-gray-300 text-xs">16.0%</div>
          </div>
          <div className="grid grid-cols-4 py-2 order-b border-gray-800">
            <div className="text-white text-xs font-medium">Tesouro IPCA+</div>
            <div className="text-white text-xs">$12,500.00</div>
            <div className="text-green-500 text-xs">+7.3%</div>
            <div className="text-gray-300 text-xs">13.1%</div>
          </div>
          <div className="grid grid-cols-4 py-2 border-b border-gray-800">
            <div className="text-white text-xs font-medium">HGLG11</div>
            <div className="text-white text-xs">$8,450.00</div>
            <div className="text-red-500 text-xs">-2.1%</div>
            <div className="text-gray-300 text-xs">8.9%</div>
          </div>
          <div className="grid grid-cols-4 py-2 border-b border-gray-800">
            <div className="text-white text-xs font-medium">IVVB11</div>
            <div className="text-white text-xs">$7,890.00</div>
            <div className="text-green-500 text-xs">+12.7%</div>
            <div className="text-gray-300 text-xs">8.3%</div>
          </div>
          <div className="grid grid-cols-4 py-2 border-b border-gray-800">
            <div className="text-white text-xs font-medium">CDB Banco XYZ</div>
            <div className="text-white text-xs">$6,500.00</div>
            <div className="text-green-500 text-xs">+5.8%</div>
            <div className="text-gray-300 text-xs">6.8%</div>
          </div>
          <div className="grid grid-cols-4 py-2 border-b border-gray-800">
            <div className="text-white text-xs font-medium">VALE3</div>
            <div className="text-white text-xs">$5,200.00</div>
            <div className="text-green-500 text-xs">+9.2%</div>
            <div className="text-gray-300 text-xs">5.5%</div>
          </div>

          <button className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors">
            <span className="text-xl">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}
