import { Outlet } from "react-router-dom";
import Navbar from '../organization/Navbar.tsx'


export default function MainLayout() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}