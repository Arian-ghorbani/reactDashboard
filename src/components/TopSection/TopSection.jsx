function TopSection({ title, buttons, Summary }) {
  return (
    <section className="top-section p-4 space-y-4 bg-card rounded-2xl">
      <div className="title-section">
        <div className="flex items-center justify-between">
          <h1 className="title font-kalameh-bold text-2xl">{title}</h1>

          <div className="buttons-wrapper">{buttons}</div>
        </div>
      </div>

      {Summary}
    </section>
  );
}

export default TopSection;
