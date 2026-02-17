import { Outlet } from "react-router";
import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/Sidebar/Sidebar";

function MainRoot() {
  return (
    <>
      <div className="container flex flex-col h-dvh">
        <header className="bg-transparent py-6">
          <Topbar />
        </header>

        <div className="pb-6 flex grow shrink">
          <Sidebar />

          <main></main>
        </div>
      </div>
    </>
  );
}

export default MainRoot;
