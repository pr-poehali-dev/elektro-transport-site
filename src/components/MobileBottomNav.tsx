import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface MobileBottomNavProps {
  onFilterClick?: () => void;
}

const MobileBottomNav = ({ onFilterClick }: MobileBottomNavProps) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  const handleBuyClick = () => {
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleCatalogClick = () => {
    navigate('/catalog');
    setShowMenu(false);
  };

  return (
    <>
      {/* Mobile Search Modal */}
      {showSearch && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-50" onClick={() => setShowSearch(false)}>
          <div className="bg-[#0a0a0a] border-b border-[#2a2a2a] p-6" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearch} className="flex gap-3">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-[#3a3a3a] text-white placeholder:text-[#707070] rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-white"
                autoFocus
              />
              <Button type="submit" size="sm" className="bg-white text-black hover:bg-[#e5e5e5] rounded-none px-6 tracking-[0.15em] font-light">НАЙТИ</Button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu Modal */}
      {showMenu && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-50" onClick={() => setShowMenu(false)}>
          <div className="absolute bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-[#2a2a2a] p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-sm font-light tracking-[0.25em] uppercase text-[#a0a0a0]">Меню</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowMenu(false)} className="text-white hover:bg-white/5 rounded-none">
                <Icon name="X" size={20} />
              </Button>
            </div>
            <nav className="space-y-1">
              <Link to="/" className="flex items-center justify-between p-4 border-b border-[#2a2a2a] text-white hover:bg-white/5 transition-colors" onClick={() => setShowMenu(false)}>
                <span className="text-sm font-light tracking-[0.1em]">Главная</span>
                <Icon name="ChevronRight" size={16} className="text-[#707070]" />
              </Link>
              <button onClick={handleCatalogClick} className="flex items-center justify-between p-4 border-b border-[#2a2a2a] text-white hover:bg-white/5 transition-colors w-full">
                <span className="text-sm font-light tracking-[0.1em]">Каталог</span>
                <Icon name="ChevronRight" size={16} className="text-[#707070]" />
              </button>
              <a href="#" className="flex items-center justify-between p-4 border-b border-[#2a2a2a] text-white hover:bg-white/5 transition-colors">
                <span className="text-sm font-light tracking-[0.1em]">О нас</span>
                <Icon name="ChevronRight" size={16} className="text-[#707070]" />
              </a>
              <a href="#" className="flex items-center justify-between p-4 border-b border-[#2a2a2a] text-white hover:bg-white/5 transition-colors">
                <span className="text-sm font-light tracking-[0.1em]">Доставка</span>
                <Icon name="ChevronRight" size={16} className="text-[#707070]" />
              </a>
              <a href="#" className="flex items-center justify-between p-4 border-b border-[#2a2a2a] text-white hover:bg-white/5 transition-colors">
                <span className="text-sm font-light tracking-[0.1em]">Гарантия</span>
                <Icon name="ChevronRight" size={16} className="text-[#707070]" />
              </a>
              <a href="tel:+74951234567" className="flex items-center justify-between p-4 text-white hover:bg-white/5 transition-colors">
                <span className="text-sm font-light tracking-[0.1em]">+7 (495) 123-45-67</span>
                <Icon name="Phone" size={16} className="text-[#707070]" />
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-[#2a2a2a] z-40 pb-safe">
        <div className={`grid ${onFilterClick ? 'grid-cols-5' : 'grid-cols-4'} h-16`}>
          <Link to="/" className="flex flex-col items-center justify-center gap-1 text-[#707070] hover:text-white transition-colors">
            <Icon name="Home" size={20} />
            <span className="text-[9px] tracking-wider uppercase font-light">Главная</span>
          </Link>
          <button 
            onClick={() => setShowSearch(true)}
            className="flex flex-col items-center justify-center gap-1 text-[#707070] hover:text-white transition-colors"
          >
            <Icon name="Search" size={20} />
            <span className="text-[9px] tracking-wider uppercase font-light">Поиск</span>
          </button>
          {onFilterClick && (
            <button 
              onClick={onFilterClick}
              className="flex flex-col items-center justify-center gap-1 text-[#707070] hover:text-white transition-colors"
            >
              <Icon name="SlidersHorizontal" size={20} />
              <span className="text-[9px] tracking-wider uppercase font-light">Фильтры</span>
            </button>
          )}
          <button 
            onClick={handleBuyClick}
            className="flex flex-col items-center justify-center gap-1 text-white"
          >
            <Icon name="ShoppingCart" size={20} />
            <span className="text-[9px] tracking-wider uppercase font-light">Купить</span>
          </button>
          <button 
            onClick={() => setShowMenu(true)}
            className="flex flex-col items-center justify-center gap-1 text-[#707070] hover:text-white transition-colors"
          >
            <Icon name="Menu" size={20} />
            <span className="text-[9px] tracking-wider uppercase font-light">Меню</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default MobileBottomNav;