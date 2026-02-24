import clsx from "clsx";
import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

function Pagination({ item, setItem, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const mainProducts = item.slice(startIndex, endIndex);
    setItem(mainProducts);
  }, [currentPage]);

  const prevPageHandler = () => setCurrentPage(currentPage - 1);
  const nextPageHandler = () => setCurrentPage(currentPage + 1);
  const choosePageHandler = (id) => setCurrentPage(id);

  const countPage = Math.ceil(item.length / itemsPerPage);
  const paginationButtons = [];

  for (let i = 1; i <= countPage; i++) {
    paginationButtons.push(
      <button
        type="button"
        key={i}
        className={clsx("pagination-button", {
          "active-tab": currentPage === i,
        })}
        onClick={(e) => choosePageHandler(+e.target.innerHTML)}
      >
        {i}
      </button>,
    );
  }

  return (
    <div className="flex items-center justify-center gap-x-4">
      <button
        type="button"
        className="pagination-prev-btn"
        disabled={currentPage === 1}
        onClick={prevPageHandler}
      >
        <FaChevronRight />
      </button>

      {...paginationButtons}

      <button
        type="button"
        className="pagination-next-btn"
        disabled={currentPage === countPage}
        onClick={nextPageHandler}
      >
        <FaChevronLeft />
      </button>
    </div>
  );
}

export default Pagination;
