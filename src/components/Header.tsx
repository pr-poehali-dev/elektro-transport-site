import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-[#2a2a2a] sticky top-0 z-[100] shadow-[0_0_20px_rgba(96,165,250,0.15),inset_0_0_20px_rgba(96,165,250,0.05)]">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-5">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-[#c4c4c4] to-[#8a8a8a] rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-[10px] md:text-sm">EM</span>
            </div>
            <span className="text-[10px] md:text-base font-normal tracking-[0.15em] md:tracking-[0.2em] text-[#e5e5e5]">ELECTRO MOTORS</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/catalog" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">Каталог</Link>
            <a href="#" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">О нас</a>
            <a href="#" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">Доставка</a>
            <a href="#" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">Гарантия</a>
          </nav>
          
          <div className="flex items-center gap-2 md:gap-3">
            <Button size="sm" className="bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-none px-3 md:px-8 py-1.5 md:py-2 text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.15em] font-light transition-all duration-300">
              <span className="hidden sm:inline">+7 (495) 123-45-67</span>
              <span className="sm:hidden">Звонок</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;