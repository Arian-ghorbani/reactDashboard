import Fillter from "./Fillter";

function TableHeader({ header }) {
  const { Buttons } = header;

  return (
    <div className="table-header flex items-center justify-between">
      <div className="right-div">
        <h4 className="table-title font-kalameh-bold text-xl">
          {header.title}
        </h4>
      </div>

      <div className="left-div">
        {Buttons === undefined ? (
          <>
            <Fillter />
          </>
        ) : (
          <Buttons />
        )}
      </div>
    </div>
  );
}

export default TableHeader;
