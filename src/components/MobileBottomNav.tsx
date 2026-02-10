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
    const catalog = document.getElementById('catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
      setShowMenu(false);
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      setShowMenu(false);
    }
  };

  return (
    <>
      {/* Mobile Search Modal */}
      {showSearch && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setShowSearch(false)}>
          <div className="bg-white p-4" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
                autoFocus
              />
              <Button type="submit" size="sm">Найти</Button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu Modal */}
      {showMenu && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setShowMenu(false)}>
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Меню</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowMenu(false)}>
                <Icon name="X" size={20} />
              </Button>
            </div>
            <nav className="space-y-3">
              <Link to="/" className="flex items-center gap-3 p-3 hover:bg-slate-100 rounded-lg" onClick={() => setShowMenu(false)}>
                <Icon name="Home" size={20} />
                <span>Главная</span>
              </Link>
              <button onClick={handleCatalogClick} className="flex items-center gap-3 p-3 hover:bg-slate-100 rounded-lg w-full">
                <Icon name="Grid" size={20} />
                <span>Каталог</span>
              </button>
              <a href="#" className="flex items-center gap-3 p-3 hover:bg-slate-100 rounded-lg">
                <Icon name="Info" size={20} />
                <span>О нас</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 hover:bg-slate-100 rounded-lg">
                <Icon name="Truck" size={20} />
                <span>Доставка</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 hover:bg-slate-100 rounded-lg">
                <Icon name="Shield" size={20} />
                <span>Гарантия</span>
              </a>
              <a href="tel:+74951234567" className="flex items-center gap-3 p-3 hover:bg-slate-100 rounded-lg">
                <Icon name="Phone" size={20} />
                <span>+7 (495) 123-45-67</span>
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40 pb-safe">
        <div className="grid grid-cols-5 h-16">
          <Link to="/" className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-foreground">
            <Icon name="Home" size={24} />
            <span className="text-xs">Главная</span>
          </Link>
          <button 
            onClick={() => setShowSearch(true)}
            className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-foreground"
          >
            <Icon name="Search" size={24} />
            <span className="text-xs">Поиск</span>
          </button>
          {onFilterClick && (
            <button 
              onClick={onFilterClick}
              className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-foreground"
            >
              <Icon name="SlidersHorizontal" size={24} />
              <span className="text-xs">Фильтры</span>
            </button>
          )}
          <button 
            onClick={handleBuyClick}
            className="flex flex-col items-center justify-center gap-1 text-primary"
          >
            <Icon name="ShoppingCart" size={24} />
            <span className="text-xs font-semibold">Купить</span>
          </button>
          <button 
            onClick={() => setShowMenu(true)}
            className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-foreground"
          >
            <Icon name="Menu" size={24} />
            <span className="text-xs">Меню</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default MobileBottomNav;