import { Outlet } from "react-router-dom";

export default function SearchLayout() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}