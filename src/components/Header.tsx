import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value.trim()) {
      if (location.pathname !== '/catalog') {
        navigate(`/catalog?search=${encodeURIComponent(value.trim())}`, { replace: true });
      } else {
        const url = new URL(window.location.href);
        url.searchParams.set('search', value.trim());
        window.history.replaceState({}, '', url.toString());
        window.dispatchEvent(new CustomEvent('searchUpdate', { detail: value.trim() }));
      }
    } else {
      if (location.pathname === '/catalog') {
        const url = new URL(window.location.href);
        url.searchParams.delete('search');
        window.history.replaceState({}, '', url.toString());
        window.dispatchEvent(new CustomEvent('searchUpdate', { detail: '' }));
      }
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-blue-400/30 sticky top-0 z-[100] shadow-[0_0_20px_rgba(96,165,250,0.2),inset_0_0_20px_rgba(96,165,250,0.08)]">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-5">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <Link to="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-[#c4c4c4] to-[#8a8a8a] rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-[10px] md:text-sm">EM</span>
            </div>
            <span className="text-[10px] md:text-base font-normal tracking-[0.15em] md:tracking-[0.2em] text-[#e5e5e5] hidden sm:inline">ELECTRO MOTORS</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/catalog" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">Каталог</Link>
            <a href="#" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">О нас</a>
            <a href="#" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">Доставка</a>
            <a href="#" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">Гарантия</a>
          </nav>

          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full bg-white/5 border border-white/20 text-white placeholder:text-[#a0a0a0] rounded-none pr-10 h-9 text-sm focus:border-white/40 transition-colors"
              />
              <button type="submit" className="absolute right-0 top-0 h-full px-3 text-[#a0a0a0] hover:text-white transition-colors">
                <Icon name="Search" className="h-4 w-4" />
              </button>
            </div>
          </form>
          
          <div className="flex items-center gap-2 md:gap-3">
            <Button 
              size="sm" 
              onClick={() => setShowMobileSearch(true)}
              className="md:hidden bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-none px-3 py-1.5 text-[10px] tracking-[0.1em] font-light transition-all duration-300"
            >
              <Icon name="Search" className="h-4 w-4" />
            </Button>
            <Button size="sm" className="bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-none px-3 md:px-8 py-1.5 md:py-2 text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.15em] font-light transition-all duration-300">
              <span className="hidden sm:inline">+7 (495) 123-45-67</span>
              <span className="sm:hidden">Звонок</span>
            </Button>
          </div>
        </div>

        {showMobileSearch && (
          <div className="md:hidden mt-3">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                autoFocus
                className="w-full bg-white/5 border border-white/20 text-white placeholder:text-[#a0a0a0] rounded-none pr-20 h-9 text-sm focus:border-white/40 transition-colors"
              />
              <div className="absolute right-0 top-0 h-full flex items-center">
                <button type="submit" className="h-full px-3 text-[#a0a0a0] hover:text-white transition-colors">
                  <Icon name="Search" className="h-4 w-4" />
                </button>
                <button 
                  type="button" 
                  onClick={() => {
                    setShowMobileSearch(false);
                    setSearchQuery("");
                    if (location.pathname === '/catalog') {
                      const url = new URL(window.location.href);
                      url.searchParams.delete('search');
                      window.history.replaceState({}, '', url.toString());
                      window.dispatchEvent(new CustomEvent('searchUpdate', { detail: '' }));
                    }
                  }}
                  className="h-full px-3 text-[#a0a0a0] hover:text-white transition-colors"
                >
                  <Icon name="X" className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;