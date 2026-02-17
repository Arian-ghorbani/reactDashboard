import clsx from "clsx";
import { FaChevronLeft } from "react-icons/fa6";

function ToggleButton({ onToggleSidebar, isOpenTheSidebar }) {
  return (
    <button
      type="button"
      className="toggle-btn size-8 flex items-center justify-center absolute top-1/2 -left-4 -translate-y-1/2 bg-card rounded-full cursor-pointer transition-colors duration-300 hover:bg-primary hover:*:text-white"
      onClick={(e) => onToggleSidebar(e)}
    >
      <FaChevronLeft
        className={clsx(
          "text-primary-text transition-[color,rotate] duration-300",
          isOpenTheSidebar && "-rotate-180",
        )}
      />
    </button>
  );
}

export default ToggleButton;
