import { Link } from "react-router-dom";

function LogoMark({
  compact = false,
  inverted = false,
  onClick,
}) {
  const infoTechColor = inverted ? "text-slate-300" : "text-[#555555]";
  const legalColor = inverted ? "text-slate-400" : "text-slate-500";

  if (compact) {
    return (
      <Link
        to="/"
        onClick={onClick}
        className="inline-flex items-center"
        aria-label="Augment Infotech home"
      >
        <span className="flex items-center tracking-[-0.04em] sm:tracking-normal">
          <span className="font-heading text-lg font-black italic leading-none sm:text-xl">
            <span className="text-[#1A1A8B]">AUG</span>
            <span className="text-[#1A1A8B]">M</span>
            <span className="text-[#2D2DBE]">ENT</span>
          </span>
          <span
            className={`ml-2 font-heading text-lg font-black italic leading-none sm:text-xl ${infoTechColor}`}
          >
            INFOTECH
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      to="/"
      onClick={onClick}
      className="inline-flex flex-col items-start"
      aria-label="Augment Infotech home"
    >
      <span className="flex items-center tracking-[-0.05em] sm:tracking-normal">
        <span className="font-heading text-2xl font-black italic leading-none sm:text-3xl">
          <span className="text-[#1A1A8B]">AUG</span>
          <span className="text-[#1A1A8B]">M</span>
          <span className="text-[#2D2DBE]">ENT</span>
        </span>
        <span
          className={`ml-2 font-heading text-2xl font-black italic leading-none sm:text-3xl ${infoTechColor}`}
        >
          INFOTECH
        </span>
      </span>
      <span
        className={`mt-1 text-[11px] font-semibold uppercase tracking-[0.34em] ${legalColor} sm:text-xs`}
      >
        Private Limited
      </span>
    </Link>
  );
}

export default LogoMark;
