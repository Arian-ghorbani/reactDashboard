import { useState } from "react";
import { FiSearch } from "react-icons/fi";

function SearchBox() {
  const [search, setSearch] = useState("");

  return (
    <form
      action="#"
      className="w-70 h-10 flex items-center bg-card rounded-lg overflow-hidden"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="جستجو ..."
        className="h-full pr-4 grow shrink text-primary-text outline-none placeholder:text-secondary-text"
      />

      <button
        type="button"
        aria-label="Search Button"
        className="w-10 h-full flex items-center justify-center grow-0 shrink-0 cursor-pointer"
      >
        <FiSearch className="size-4 text-secondary-text" />
      </button>
    </form>
  );
}

export default SearchBox;
