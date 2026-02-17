import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchFromUrl = searchParams.get('search');
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    } else if (location.pathname !== '/catalog') {
      setSearchQuery("");
    }
  }, [searchParams, location.pathname]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    
    const updateSearch = (searchValue: string) => {
      const url = new URL(window.location.href);
      if (searchValue.trim()) {
        url.searchParams.set('search', searchValue.trim());
      } else {
        url.searchParams.delete('search');
      }
      window.history.replaceState({}, '', url.toString());
      window.dispatchEvent(new CustomEvent('searchUpdate', { detail: searchValue.trim() }));
    };

    if (value.trim()) {
      if (location.pathname !== '/catalog') {
        navigate(`/catalog?search=${encodeURIComponent(value.trim())}`, { replace: true });
        setTimeout(() => {
          updateSearch(value);
        }, 50);
      } else {
        updateSearch(value);
      }
    } else {
      if (location.pathname === '/catalog') {
        updateSearch('');
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
            <img src="https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/5d583b7f-57c1-4641-8520-987e84a3e33e.jpg" alt="Electro Motors" className="w-8 h-8 md:w-12 md:h-12 rounded-lg" />
            <span className="text-[10px] md:text-base font-normal tracking-[0.15em] md:tracking-[0.2em] text-[#e5e5e5] hidden sm:inline">ELECTRO MOTORS</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/catalog" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">Каталог</Link>
            <Link to="/about" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">О нас</Link>
            <Link to="/delivery" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">Доставка</Link>
            <Link to="/warranty" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">Гарантия</Link>
            <Link to="/contacts" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">Контакты</Link>
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
            <a
              href="tel:+375291299245"
              className="inline-flex items-center bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-none px-3 md:px-8 py-1.5 md:py-2 text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.15em] font-light transition-all duration-300"
            >
              <span className="hidden sm:inline">+375 (29) 129-92-45</span>
              <span className="sm:hidden">Позвонить</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;