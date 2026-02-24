import TableHeader from "./elements/TableHeader";
import Pagination from "./elements/Pagination";

function Table({
  header = { title: "لیست آیتم‌ها", Buttons: undefined },
  pagination = { item: null, setItem: null, itemsPerPage: null },
  children,
}) {
  return (
    <div className="space-y-4">
      <TableHeader header={header} />
      <div>{children}</div>
      <Pagination {...pagination} />
    </div>
  );
}

export default Table;
