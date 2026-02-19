function TooltipCustom({ payload }) {
  return (
    <div className="px-4 py-1.5 bg-primary/30 backdrop-blur-xl rounded-xl">
      <p className="text-primary-text">{`${payload[0]?.payload?.name}: ${payload[0]?.payload?.value}`}</p>
    </div>
  );
}

export default TooltipCustom;
