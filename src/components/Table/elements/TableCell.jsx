function TableCell({ children }) {
  return (
    <div className="table-cell flex-1 not-last:*:line-clamp-1 last:flex last:items-center last:justify-center last:gap-x-1.5">
      {children}
    </div>
  );
}

export default TableCell;
