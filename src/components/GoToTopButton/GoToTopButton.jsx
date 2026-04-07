import { useEffect, useState } from "react";

function GoToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // show after 300px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={goToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "8px 14px",
        borderRadius: "50%",
        border: "none",
        backgroundColor: "#2563eb",
        color: "#fff",
        cursor: "pointer",
        fontSize: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      ↑
    </button>
  );
}

export default GoToTopButton;
