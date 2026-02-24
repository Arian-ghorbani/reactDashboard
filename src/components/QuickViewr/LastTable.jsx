import { Link } from "react-router";

function LastTable({ title, itemCount, linkTo, children }) {
  return (
    <div className="w-120 h-115 p-4 flex flex-col justify-between bg-card rounded-2xl">
      <div>
        <div className="header-table mb-4">
          <h4 className="title-table font-kalameh-bold text-xl">{title}</h4>
        </div>

        <div className="content-table">{children}</div>
      </div>

      <div className="footer-table flex items-center justify-between">
        <p className="count-item">
          <span>{itemCount}</span> رکورد یافت شد.
        </p>

        <Link
          to={linkTo}
          type="button"
          className="cursor-pointer px-4 py-1.5 bg-primary text-white rounded-xl transition-colors duration-300 hover:bg-secondary"
        >
          نمایش کامل لیست
        </Link>
      </div>
    </div>
  );
}

export default LastTable;
