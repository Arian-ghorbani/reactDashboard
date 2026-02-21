import { GoBell } from "react-icons/go";

function Bell() {
  return (
    <button className="text-primary-text cursor-pointer hover:*:fill-primary">
      <GoBell className="size-6 transition duration-200" />
    </button>
  );
}

export default Bell;
