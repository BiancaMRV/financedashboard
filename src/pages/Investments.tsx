import Alocacao from "../components/investments/Alocacao";

export default function Investments() {
  return (
    <div className="flex-1">
      <div className="w-2/3">
        <h1 className="text-white text-2xl"> Investimentos </h1>
        <h2 className="text-white text-sm mt-2 opacity-70">
          {new Date().toLocaleDateString("pt-BR")}
        </h2>
      </div>

      {/* primeiros cards */}
      <div className="grid grid-cols-3 gap-x-6 mt-9">
        {/*Total Investido*/}
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h1 className="text-gray-400 text-sm"> Total Investido </h1>
          <p className="text-2xl text-white mt-2"> $95.345.89 </p>
          <p className="text-sm text-green-500 mt-2"> +12.7% este ano </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h1 className="text-gray-400 text-sm"> Retorno Mensal</h1>
          <p className="text-2xl text-white mt-2"> $1.823.00</p>
          <p className="text-sm text-green-500 mt-2"> +3.2% este mês</p>
        </div>
        {/* ROI médio */}
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h1 className="text-gray-400 text-sm">ROI médio</h1>
          <p className="text-2xl text-white mt-2"> 8.4% </p>
          <p className="text-sm text-green-500 mt-2"> +0.8% que o benchmark</p>
        </div>
      </div>

      {/* Conteúdo principal*/}
      <div className="flex flex-row gap-6 mt-8">
        {/* Gráfico de pizza - primeira coluna */}
        <div className="bg-gray-900 p-5 rounded-2xl w-1/2">
          <h2 className="text-gray-400 text-sm mb-4">Distribuição de Ativos</h2>
          <div className="h-60">
            <Alocacao />
          </div>
        </div>

        {/* Tabela de Principais Investimentos - segunda coluna */}
        <div className="bg-gray-900 p-5 rounded-2xl w-1/2 relative">
          <h2 className="text-gray-400 text-sm mb-4">
            Principais Investimentos
          </h2>

          {/* Cabeçalho da tabela */}
          <div className="grid grid-cols-4 mb-2 border-b border-gray-800 pb-1">
            <div className="text-gray-400 text-sm">Ativo</div>
            <div className="text-gray-400 text-sm">Valor</div>
            <div className="text-gray-400 text-sm">Retorno</div>
            <div className="text-gray-400 text-sm">Alocação</div>
          </div>

          {/* Linhas da tabela */}
          <div className="grid grid-cols-4 py-2 border-b border-gray-800">
            <div className="text-white text-sm font-medium">PETR4</div>
            <div className="text-white text-sm">$15,230.00</div>
            <div className="text-green-500 text-sm">+18.5%</div>
            <div className="text-gray-300 text-sm">16.0%</div>
          </div>
          <div className="grid grid-cols-4 py-2 order-b border-gray-800">
            <div className="text-white text-sm font-medium">Tesouro IPCA+</div>
            <div className="text-white text-sm">$12,500.00</div>
            <div className="text-green-500 text-sm">+7.3%</div>
            <div className="text-gray-300 text-sm">13.1%</div>
          </div>
          <div className="grid grid-cols-4 py-2 border-b border-gray-800">
            <div className="text-white text-sm font-medium">HGLG11</div>
            <div className="text-white text-sm">$8,450.00</div>
            <div className="text-red-500 text-sm">-2.1%</div>
            <div className="text-gray-300 text-sm">8.9%</div>
          </div>
          <div className="grid grid-cols-4 py-2 border-b border-gray-800">
            <div className="text-white text-sm font-medium">IVVB11</div>
            <div className="text-white text-sm">$7,890.00</div>
            <div className="text-green-500 text-sm">+12.7%</div>
            <div className="text-gray-300 text-sm">8.3%</div>
          </div>
          <div className="grid grid-cols-4 py-2 border-b border-gray-800">
            <div className="text-white text-sm font-medium">CDB Banco XYZ</div>
            <div className="text-white text-sm">$6,500.00</div>
            <div className="text-green-500 text-sm">+5.8%</div>
            <div className="text-gray-300 text-sm">6.8%</div>
          </div>
          <div className="grid grid-cols-4 py-2 border-b border-gray-800">
            <div className="text-white text-sm font-medium">VALE3</div>
            <div className="text-white text-sm">$5,200.00</div>
            <div className="text-green-500 text-sm">+9.2%</div>
            <div className="text-gray-300 text-sm">5.5%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
