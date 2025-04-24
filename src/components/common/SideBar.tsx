import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div>
      logo
      <div>
        <span> E-CORP </span>
      </div>
      <nav>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `
      flex items-center p-3 rounded-lg
      ${
        isActive
          ? "bg-blue-500 bg-opacity-20"
          : "text-slate-400 hover:text-white"
      }
    `}
          >
            {({ isActive }) => (
              <>
                <div
                  className={`h-2 w-2 rounded-full mr-3 ${
                    isActive ? "bg-blue-500" : "bg-transparent"
                  }`}
                ></div>
                <span>Dashboard</span>
              </>
            )}
          </NavLink>
        </li>
      </nav>
    </div>
  );
}
