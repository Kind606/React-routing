import { Outlet } from "react-router";

export default function MediaPlayerLayout() {
  return (
    <div className="flex flex-col text-slate-50">
      <header className="px-4 py-2 flex justify-between bg-slate-950">
        <h1>Header</h1>
        <span>Right</span>
      </header>
      <div className="flex gap-2">
        <aside className="bg-slate-800 p-4 ">SideBar</aside>
        <main className="bg-slate-900  p-4 rounded flex-1">
        <Outlet />
        </main>
      </div>
    </div>
  );
}
