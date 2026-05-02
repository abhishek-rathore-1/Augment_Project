import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const isContactPage =
    location.pathname === "/contact" || location.pathname === "/LetsConnect";

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 320);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isContactPage) {
    return (
      <a
        href="https://wa.me/916267138940"
        target="_blank"
        rel="noreferrer"
        className="fixed right-6 bottom-6 z-50 inline-flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_45px_-22px_rgba(37,211,102,0.6)] transition-transform hover:-translate-y-1"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    );
  }

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-6 bottom-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white shadow-[0_20px_45px_-22px_rgba(15,23,42,0.6)] transition-transform hover:-translate-y-1"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}

export default ScrollTopButton;
