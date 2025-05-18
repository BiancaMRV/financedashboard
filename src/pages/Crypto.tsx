import CryptoChart from "../components/crypto/cryptoChart"; // Fixed import path casing

export default function Crypto() {
  return (
    <div>
      {/* Cabeçalho */}
      <div className="w-2/3">
        <h1 className="text-white text-2xl"> CryptoMoedas </h1>
        <h2 className="text-white text-xs mt-2 opacity-70">
          {new Date().toLocaleDateString("pt-BR")}
        </h2>
      </div>
      {/* primeiros cards */}
      <div className="grid grid-cols-3 gap-x-6 mt-9">
        {/*Patrimonio total*/}
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h1 className="text-gray-400 text-xs"> Portfolio Crypto </h1>
          <p className="text-2xl text-white mt-2"> $32,313.00</p>
          <p className="text-xs text-green-500 mt-2"> +5.2% (24h) </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h1 className="text-gray-400 text-xs"> Lucro Total</h1>
          <p className="text-2xl text-white mt-2"> $8,342.00</p>
          <p className="text-xs text-green-500 mt-2"> +37,1%(desde o inicio)</p>
        </div>
        {/* Despesas Mensais */}
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h1 className="text-gray-400 text-xs">Mercado Geral</h1>
          <p className="text-2xl text-white mt-2"> $2.17T </p>
          <p className="text-xs text-green-500 mt-2"> +3,7% (24h)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-8 gap-4 ">
        <CryptoChart />
      </div>
    </div>
  );
}
