import "./Sidebar.css";
import { NavLink } from "react-router";
import sidebarData from "../../data/SidebarData";
import { RxExit } from "react-icons/rx";
import clsx from "clsx";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handlerToggleSidebar = (e) => {
    const button = e.target.closest(".toggle-btn");
    button.classList.toggle("open");
    setIsOpen(button.className.includes("open"));
  };

  return (
    <aside
      className={clsx(
        "p-4.5 flex flex-col justify-between relative bg-card rounded-2xl",
        isOpen ? "w-50" : "w-fit",
      )}
    >
      <ToggleButton
        onToggleSidebar={handlerToggleSidebar}
        isOpenTheSidebar={isOpen}
      />

      <section className="navlinks-wrapper space-y-2">
        {sidebarData.map((item) => {
          return (
            <NavLink
              key={item.id}
              to={item.link}
              className={clsx("sidebar-item", ({ isActive }) => isActive)}
              end
            >
              <span className="icon">{item.icon}</span>
              {isOpen && <span className="title">{item.title}</span>}
            </NavLink>
          );
        })}
      </section>

      <section className="sidebar-bottom">
        <button className="exit-btn bg-tertiary cursor-pointer **:text-primary">
          <RxExit className="icon" />
          {isOpen && <span>خروج از حساب</span>}
        </button>
      </section>
    </aside>
  );
}

export default Sidebar;
