import { Outlet } from "react-router";
import SideBar from "./SideBar";

export default function MainLayout() {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
}
