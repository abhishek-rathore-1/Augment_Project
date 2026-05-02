function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const isLight = tone === "light";

  return (
    <div className={alignment}>
      {eyebrow ? (
        <span
          className={
            isLight
              ? "inline-flex items-center rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200 backdrop-blur-sm"
              : "section-chip"
          }
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`section-title mt-5 font-heading ${
          isLight ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 ${isLight ? "text-lg leading-8 text-slate-300" : "section-copy"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
