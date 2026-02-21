import { Outlet } from "react-router";
import Topbar from "../features/Topbar/Topbar";
import Sidebar from "../features/Sidebar/Sidebar";

function MainRoot() {
  return (
    <>
      <div className="container flex flex-col h-dvh">
        <header className="bg-transparent py-6">
          <Topbar />
        </header>

        <div className="pb-6 flex grow shrink">
          <Sidebar />

          <main className="pr-10 grow shrink space-y-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default MainRoot;
