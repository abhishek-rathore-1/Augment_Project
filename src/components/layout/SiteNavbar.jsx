import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import LogoMark from "../ui/LogoMark";
import {
  companyMenu,
  primaryNav,
  solutionsMenu,
} from "../../content/siteNavigation";

const dropdowns = [
  { label: "Company", items: companyMenu },
  { label: "Specialties", items: solutionsMenu },
];

function SiteNavbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeNavigation = () => {
    setMenuOpen(false);
    setActiveDropdown("");
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-4">
        <div className="site-shell">
          <div
            className={`rounded-[28px] border border-white/10 bg-slate-950/76 px-4 py-3 text-white backdrop-blur-xl transition-all md:px-6 ${
              scrolled ? "shadow-[0_26px_80px_-44px_rgba(2,6,23,0.88)]" : ""
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <LogoMark compact inverted />

              <nav className="hidden items-center gap-2 lg:flex">
                {primaryNav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={closeNavigation}
                    className={({ isActive }) =>
                      `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-cyan-300 text-slate-950 shadow-[0_16px_38px_-22px_rgba(34,211,238,0.75)]"
                          : "text-slate-300 hover:text-white"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                {dropdowns.map((group) => (
                  <div
                    key={group.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(group.label)}
                    onMouseLeave={() => setActiveDropdown("")}
                  >
                    <button
                      className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                        group.items.some((item) => item.to.toLowerCase() === location.pathname.toLowerCase())
                          ? "bg-white/10 text-white"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {group.label}
                      <ChevronDown size={16} />
                    </button>

                    {activeDropdown === group.label ? (
                      <div className="absolute left-0 top-full mt-3 w-80 rounded-[28px] border border-white/10 bg-slate-950/96 p-3 shadow-[0_24px_70px_-35px_rgba(2,6,23,0.95)] backdrop-blur-xl">
                        {group.items.map((item) => (
                          <NavLink
                            key={item.to}
                            to={item.to}
                            onClick={closeNavigation}
                            className={({ isActive }) =>
                              `block rounded-2xl border px-4 py-3 transition-colors ${
                                isActive
                                  ? "border-cyan-300/20 bg-cyan-300 text-slate-950"
                                  : "border-transparent hover:border-white/10 hover:bg-white/6"
                              }`
                            }
                          >
                            <p
                              className={`text-sm font-semibold ${
                                location.pathname.toLowerCase() === item.to.toLowerCase()
                                  ? "text-slate-950"
                                  : "text-white"
                              }`}
                            >
                              {item.label}
                            </p>
                            {item.description ? (
                              <p
                                className={`mt-1 text-xs leading-6 ${
                                  location.pathname.toLowerCase() === item.to.toLowerCase()
                                    ? "text-slate-700"
                                    : "text-slate-400"
                                }`}
                              >
                                {item.description}
                              </p>
                            ) : null}
                          </NavLink>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </nav>

              <div className="hidden lg:block">
                <NavLink
                  to="/contact"
                  onClick={closeNavigation}
                  className="button-secondary is-inverted"
                >
                  Start a conversation
                </NavLink>
              </div>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/14 text-white lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-60 bg-slate-950/45 backdrop-blur-sm transition-opacity lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 right-0 z-[61] w-full max-w-sm bg-slate-950 px-6 py-6 text-white transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <LogoMark compact inverted />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12"
            aria-label="Close navigation menu"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-10 space-y-2">
          {primaryNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeNavigation}
              className={({ isActive }) =>
                `block rounded-2xl border px-4 py-3 text-base font-semibold transition-colors ${
                  isActive
                    ? "border-cyan-300/30 bg-cyan-300 text-slate-950"
                    : "border-white/8 text-slate-100 hover:bg-white/6"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {dropdowns.map((group) => (
            <div key={group.label} className="rounded-[28px] border border-white/8 bg-white/4 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                {group.label}
              </p>
              <div className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={closeNavigation}
                    className={({ isActive }) =>
                      `block rounded-2xl px-3 py-3 transition-colors ${
                        isActive ? "bg-cyan-300 text-slate-950" : "hover:bg-white/6"
                      }`
                    }
                  >
                    <p
                      className={`text-sm font-semibold ${
                        location.pathname.toLowerCase() === item.to.toLowerCase()
                          ? "text-slate-950"
                          : "text-slate-100"
                      }`}
                    >
                      {item.label}
                    </p>
                    {item.description ? (
                      <p
                        className={`mt-1 text-xs leading-6 ${
                          location.pathname.toLowerCase() === item.to.toLowerCase()
                            ? "text-slate-700"
                            : "text-slate-400"
                        }`}
                      >
                        {item.description}
                      </p>
                    ) : null}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>

        <NavLink
          to="/contact"
          onClick={closeNavigation}
          className="button-primary mt-8 w-full"
        >
          Start a conversation
        </NavLink>
      </aside>
    </>
  );
}

export default SiteNavbar;
