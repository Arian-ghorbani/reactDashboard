import { MdFilterAlt } from "react-icons/md";

function Fillter() {
  return (
    <button
      type="button"
      className="px-3 py-1 flex items-center gap-x-1 border border-solid border-gray-300 rounded-xl cursor-pointer transition-colors duration-200 hover:text-primary hover:border-primary"
    >
      <MdFilterAlt className="size-5" />
      فیلتر
    </button>
  );
}

export default Fillter;
