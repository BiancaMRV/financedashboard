import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="min-h-screen w-1/5 bg-slate-900 text-white p-6">
      <div className="flex items-center mb-10">
        <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center mr-3"></div>
        <h1 className="text-xl font-bold">E-CORP</h1>
      </div>

      <nav>
        <ul className="space-y-6">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => `
                flex items-center p-3 rounded-lg
                ${isActive ? "bg-slate-800" : ""}
              `}
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`h-3 w-3 rounded-full mr-3 
                      ${isActive ? "bg-blue-500" : "bg-slate-600"}
                    `}
                  ></div>
                  <span className={isActive ? "text-white" : "text-slate-400"}>
                    Dashboard
                  </span>
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/transactions"
              className={({ isActive }) => `
                flex items-center p-3 rounded-lg
                ${isActive ? "bg-slate-800" : ""}
              `}
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`h-3 w-3 rounded-full mr-3 
                      ${isActive ? "bg-blue-500" : "bg-slate-600"}
                    `}
                  ></div>
                  <span className={isActive ? "text-white" : "text-slate-400"}>
                    Transações
                  </span>
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/investments"
              className={({ isActive }) => `
                flex items-center p-3 rounded-lg
                ${isActive ? "bg-slate-800" : ""}
              `}
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`h-3 w-3 rounded-full mr-3 
                      ${isActive ? "bg-blue-500" : "bg-slate-600"}
                    `}
                  ></div>
                  <span className={isActive ? "text-white" : "text-slate-400"}>
                    Investimentos
                  </span>
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/crypto"
              className={({ isActive }) => `
                flex items-center p-3 rounded-lg
                ${isActive ? "bg-slate-800" : ""}
              `}
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`h-3 w-3 rounded-full mr-3 
                      ${isActive ? "bg-blue-500" : "bg-slate-600"}
                    `}
                  ></div>
                  <span className={isActive ? "text-white" : "text-slate-400"}>
                    Criptomoedas
                  </span>
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
