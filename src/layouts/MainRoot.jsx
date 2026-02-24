import { Outlet } from "react-router";
import Topbar from "../features/Topbar/Topbar";
import Sidebar from "../features/Sidebar/Sidebar";

function MainRoot() {
  return (
    <>
      <div className="container h-dvh">
        <header className="bg-transparent py-6">
          <Topbar />
        </header>

        <div className="h-[calc(100%-94px)] pb-6 flex">
          <Sidebar />

          <main className="pr-10 grow shrink space-y-4 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default MainRoot;
