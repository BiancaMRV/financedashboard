import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Investments from "./pages/Investments";
import Crypto from "./pages/Crypto";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Sidebar e layout aqui */}ß
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/crypto" element={<Crypto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
