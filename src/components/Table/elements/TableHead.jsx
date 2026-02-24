function TableHead({ children }) {
  return (
    <div className="table-head-row w-full h-12 px-4 flex items-center bg-gray-950/20 rounded-t-xl">
      {children}
    </div>
  );
}

export default TableHead;
