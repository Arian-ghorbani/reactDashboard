function SummaryCard({ title, value, Icon }) {
  return (
    <article className="card max-w-80 h-30 grow shrink p-4 border border-solid border-gray-300 rounded-2xl">
      <div className="top-card flex items-center gap-x-3">
        <span className="icon-wrapper p-2 bg-tertiary rounded-xl">
          <Icon className="text-lg text-primary" />
        </span>
        <h4 className="title font-kalameh-medium">{title}</h4>
      </div>

      <div className="bottom-card">
        <p className="card-details mt-4.5">
          <span className="value font-kalameh-bold text-3xl">{value}</span> عدد
        </p>
      </div>
    </article>
  );
}

export default SummaryCard;
