import { Outlet } from "react-router";
import SideBar from "./SideBar";

export default function MainLayout() {
  return (
    <div className="flex">
      <SideBar />

      <main className="flex-1 p-6 bg-slate-950 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
