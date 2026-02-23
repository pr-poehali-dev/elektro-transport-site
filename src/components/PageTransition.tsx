import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const prevPath = useRef(location.pathname);

  useEffect(() => {
    const from = prevPath.current;
    const to = location.pathname;
    prevPath.current = to;

    // Не показываем при переходе с главной в каталог (скролл)
    if (from === "/" && to === "/catalog") return;

    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname + location.search]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[300] bg-[#0a0a0a] flex items-center justify-center pointer-events-none animate-[pageOut_0.5s_ease-in-out_forwards]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border border-blue-400/30 rounded-full animate-ping" />
          <div className="absolute inset-0 border border-blue-400/60 rounded-full" style={{ boxShadow: '0 0 20px rgba(96,165,250,0.4)' }} />
          <div className="absolute inset-[4px] border-t border-blue-400 rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
};

export default PageTransition;