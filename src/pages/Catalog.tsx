import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GlowCard, GlowCardContent } from "@/components/ui/glow-card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  maxSpeed: number;
  range: number;
  weight: number;
  power: number;
  brand: string;
  deliveryDays: number;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "E-Bike Pro 3000",
    category: "Электровелосипеды",
    price: 89900,
    image: "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/468bb9c8-33c9-4cac-b03e-f99275a9ba64.jpg",
    maxSpeed: 45,
    range: 80,
    weight: 22,
    power: 750,
    brand: "Xiaomi",
    deliveryDays: 7,
    inStock: true
  },
  {
    id: 2,
    name: "Urban Cruiser X",
    category: "Электровелосипеды",
    price: 65900,
    image: "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/468bb9c8-33c9-4cac-b03e-f99275a9ba64.jpg",
    maxSpeed: 35,
    range: 60,
    weight: 19,
    power: 500,
    brand: "Ninebot",
    deliveryDays: 14,
    inStock: true
  },
  {
    id: 3,
    name: "Smart Scooter Z1",
    category: "Электроскутеры",
    price: 149900,
    image: "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/726f93d2-7124-40c0-a336-d7135051fdf2.jpg",
    maxSpeed: 60,
    range: 100,
    weight: 85,
    power: 3000,
    brand: "Yadea",
    deliveryDays: 30,
    inStock: false
  },
  {
    id: 4,
    name: "City Scooter Pro",
    category: "Электроскутеры",
    price: 119900,
    image: "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/726f93d2-7124-40c0-a336-d7135051fdf2.jpg",
    maxSpeed: 50,
    range: 80,
    weight: 72,
    power: 2000,
    brand: "Sunra",
    deliveryDays: 21,
    inStock: true
  },
  {
    id: 5,
    name: "Cargo Trike Max",
    category: "Электротрициклы",
    price: 179900,
    image: "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/8928e07e-6b0a-4bdc-a4af-dcf6583abb8b.jpg",
    maxSpeed: 40,
    range: 90,
    weight: 95,
    power: 1500,
    brand: "Eltreco",
    deliveryDays: 14,
    inStock: true
  },
  {
    id: 6,
    name: "Family Trike Comfort",
    category: "Электротрициклы",
    price: 139900,
    image: "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/8928e07e-6b0a-4bdc-a4af-dcf6583abb8b.jpg",
    maxSpeed: 30,
    range: 70,
    weight: 88,
    power: 1000,
    brand: "Xiaomi",
    deliveryDays: 7,
    inStock: true
  },
  {
    id: 7,
    name: "Urban Kick S",
    category: "Электросамокаты",
    price: 45900,
    image: "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/726f93d2-7124-40c0-a336-d7135051fdf2.jpg",
    maxSpeed: 30,
    range: 40,
    weight: 14,
    power: 350,
    brand: "Ninebot",
    deliveryDays: 3,
    inStock: true
  },
  {
    id: 8,
    name: "Pro Kick Max",
    category: "Электросамокаты",
    price: 69900,
    image: "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/726f93d2-7124-40c0-a336-d7135051fdf2.jpg",
    maxSpeed: 40,
    range: 60,
    weight: 18,
    power: 500,
    brand: "Yadea",
    deliveryDays: 7,
    inStock: false
  }
];

const categories = [
  { name: "Электровелосипеды", icon: "Bike" },
  { name: "Электроскутеры", icon: "Bike" },
  { name: "Электротрициклы", icon: "Bike" },
  { name: "Электросамокаты", icon: "Bike" }
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [compareList, setCompareList] = useState<number[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [powerRange, setPowerRange] = useState<[number, number]>([0, 3000]);
  const [deliveryDays, setDeliveryDays] = useState(30);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const handleOpenFilters = () => setShowFilters(true);
    window.addEventListener('openFilters', handleOpenFilters);
    return () => window.removeEventListener('openFilters', handleOpenFilters);
  }, []);

  const brands = ["Xiaomi", "Ninebot", "Yadea", "Sunra", "Eltreco"];

  const filteredProducts = products.filter((p) => {
    if (selectedCategory && p.category !== selectedCategory) return false;
    if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
    if (p.power < powerRange[0] || p.power > powerRange[1]) return false;
    if (p.deliveryDays > deliveryDays) return false;
    if (onlyInStock && !p.inStock) return false;
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !p.category.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !p.brand.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleCompare = (id: number) => {
    setCompareList((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const compareProducts = products.filter((p) => compareList.includes(p.id));

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedBrands([]);
    setPowerRange([0, 3000]);
    setDeliveryDays(30);
    setOnlyInStock(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <section className="relative py-12 md:py-24 mb-16 md:mb-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="hidden md:block absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            <path d="M960,0 L980,120 L940,160 L970,280 L930,350 L965,480 L945,560 L975,680 L940,760 L970,880 L950,960 L975,1080" 
                  stroke="#60a5fa" strokeWidth="3" fill="none" opacity="0.6"/>
            <path d="M960,0 L980,120 L940,160 L970,280 L930,350 L965,480 L945,560 L975,680 L940,760 L970,880 L950,960 L975,1080" 
                  stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.8"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-[280px_1fr] gap-6">
            <aside className="hidden lg:block">
              <GlowCard glowIntensity="low" hoverEffect={false} className="bg-gradient-to-br from-[#3a3f47] to-[#2a2e35] backdrop-blur-sm">
                <GlowCardContent className="p-6">
                  <h3 className="text-lg font-light mb-4 text-white tracking-wide">Категории</h3>
                  <div className="space-y-1 mb-8">
                    <Button
                      variant="ghost"
                      className={`w-full justify-start rounded-none border-l-2 ${
                        selectedCategory === null 
                          ? 'border-white bg-white/10 text-white' 
                          : 'border-transparent text-[#b0b0b0] hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setSelectedCategory(null)}
                    >
                      <Icon name="LayoutGrid" className="mr-2 h-4 w-4" />
                      Все категории
                    </Button>
                    {categories.map((cat) => (
                      <Button
                        key={cat.name}
                        variant="ghost"
                        className={`w-full justify-start rounded-none border-l-2 ${
                          selectedCategory === cat.name 
                            ? 'border-white bg-white/10 text-white' 
                            : 'border-transparent text-[#b0b0b0] hover:text-white hover:bg-white/5'
                        }`}
                        onClick={() => setSelectedCategory(cat.name)}
                      >
                        <Icon name="Bike" className="mr-2 h-4 w-4" />
                        {cat.name}
                      </Button>
                    ))}
                  </div>

                  <div className="mb-6 pb-6 border-b border-[#2a2a2a]">
                    <h4 className="text-sm font-light mb-3 text-white tracking-wide">Бренд</h4>
                    <div className="space-y-2">
                      {brands.map((brand) => (
                        <div key={brand} className="flex items-center space-x-2">
                          <Checkbox
                            id={brand}
                            checked={selectedBrands.includes(brand)}
                            onCheckedChange={() => toggleBrand(brand)}
                            className="border-[#3a3a3a] data-[state=checked]:bg-white data-[state=checked]:text-black"
                          />
                          <label htmlFor={brand} className="text-sm cursor-pointer text-[#b0b0b0] hover:text-white transition-colors">
                            {brand}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 pb-6 border-b border-[#2a2a2a]">
                    <h4 className="text-sm font-light mb-3 text-white tracking-wide">Мощность (Вт)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-[#707070]">
                        <span>{powerRange[0]}</span>
                        <span>{powerRange[1]}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="3000"
                        step="100"
                        value={powerRange[1]}
                        onChange={(e) => setPowerRange([0, parseInt(e.target.value)])}
                        className="w-full h-1 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer accent-white"
                      />
                    </div>
                  </div>

                  <div className="mb-6 pb-6 border-b border-[#2a2a2a]">
                    <h4 className="text-sm font-light mb-3 text-white tracking-wide">Доставка (до {deliveryDays} дней)</h4>
                    <div className="space-y-2">
                      <input
                        type="range"
                        min="3"
                        max="30"
                        step="1"
                        value={deliveryDays}
                        onChange={(e) => setDeliveryDays(parseInt(e.target.value))}
                        className="w-full h-1 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer accent-white"
                      />
                      <div className="flex justify-between text-xs text-[#707070]">
                        <span>3 дня</span>
                        <span>30 дней</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="inStock"
                        checked={onlyInStock}
                        onCheckedChange={(checked) => setOnlyInStock(checked as boolean)}
                        className="border-[#3a3a3a] data-[state=checked]:bg-white data-[state=checked]:text-black"
                      />
                      <label htmlFor="inStock" className="text-sm cursor-pointer text-[#b0b0b0] hover:text-white transition-colors">
                        Только в наличии
                      </label>
                    </div>
                  </div>

                  <Button className="w-full bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-none tracking-wide font-light transition-all duration-300" onClick={resetFilters}>
                    Сбросить фильтры
                  </Button>
                </GlowCardContent>
              </GlowCard>
            </aside>

            <div className="w-full">
              <div className="flex items-center justify-between mb-6 md:mb-10">
                <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">Каталог</h2>
                {compareList.length > 0 && (
                  <Button
                    onClick={() => setShowCompare(!showCompare)}
                    className="bg-white text-black hover:bg-[#e5e5e5] rounded-none px-6 py-2 font-light tracking-wide"
                  >
                    <Icon name="GitCompare" size={18} className="mr-2" />
                    Сравнить ({compareList.length})
                  </Button>
                )}
              </div>

              {showCompare && compareProducts.length > 0 && (
                <GlowCard glowIntensity="medium" hoverEffect={false} className="mb-8 bg-gradient-to-br from-[#3a3f47] to-[#2a2e35] backdrop-blur-sm">
                  <GlowCardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-light text-white">Сравнение моделей</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setShowCompare(false);
                          setCompareList([]);
                        }}
                        className="text-[#b0b0b0] hover:text-white hover:bg-white/5"
                      >
                        <Icon name="X" size={18} />
                      </Button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-[#2a2a2a]">
                            <th className="text-left py-3 px-2 text-[#707070] font-light">Параметр</th>
                            {compareProducts.map((p) => (
                              <th key={p.id} className="text-left py-3 px-2 text-white font-light">{p.name}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="text-[#b0b0b0]">
                          <tr className="border-b border-[#2a2a2a]">
                            <td className="py-3 px-2 text-[#707070]">Цена</td>
                            {compareProducts.map((p) => (
                              <td key={p.id} className="py-3 px-2 font-light text-white">{p.price.toLocaleString()} ₽</td>
                            ))}
                          </tr>
                          <tr className="border-b border-[#2a2a2a]">
                            <td className="py-3 px-2 text-[#707070]">Макс. скорость</td>
                            {compareProducts.map((p) => (
                              <td key={p.id} className="py-3 px-2">{p.maxSpeed} км/ч</td>
                            ))}
                          </tr>
                          <tr className="border-b border-[#2a2a2a]">
                            <td className="py-3 px-2 text-[#707070]">Запас хода</td>
                            {compareProducts.map((p) => (
                              <td key={p.id} className="py-3 px-2">{p.range} км</td>
                            ))}
                          </tr>
                          <tr className="border-b border-[#2a2a2a]">
                            <td className="py-3 px-2 text-[#707070]">Вес</td>
                            {compareProducts.map((p) => (
                              <td key={p.id} className="py-3 px-2">{p.weight} кг</td>
                            ))}
                          </tr>
                          <tr className="border-b border-[#2a2a2a]">
                            <td className="py-3 px-2 text-[#707070]">Мощность</td>
                            {compareProducts.map((p) => (
                              <td key={p.id} className="py-3 px-2">{p.power} Вт</td>
                            ))}
                          </tr>
                          <tr>
                            <td className="py-3 px-2 text-[#707070]">Доставка</td>
                            {compareProducts.map((p) => (
                              <td key={p.id} className="py-3 px-2">{p.deliveryDays} дней</td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </GlowCardContent>
                </GlowCard>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <GlowCard key={product.id} glowIntensity="medium" className="group overflow-hidden bg-gradient-to-br from-[#3a3f47] to-[#2a2e35] backdrop-blur-sm">
                    <GlowCardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden bg-[#1a1a1a]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {!product.inStock && (
                          <Badge className="absolute top-3 left-3 bg-white/10 text-white border border-white/20">
                            Под заказ
                          </Badge>
                        )}
                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => toggleCompare(product.id)}
                            className={`h-9 w-9 rounded-none backdrop-blur-sm transition-all duration-300 ${
                              compareList.includes(product.id)
                                ? 'bg-white text-black hover:bg-white/90 border border-white'
                                : 'bg-black/40 text-white hover:bg-white hover:text-black border border-white/20'
                            }`}
                          >
                            <Icon name="GitCompare" size={16} />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-light text-white text-lg mb-1 tracking-tight">{product.name}</h3>
                            <p className="text-xs text-[#707070] tracking-wider uppercase">{product.brand}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 mb-5">
                          <div className="bg-white/5 border border-[#2a2a2a] p-2">
                            <div className="text-[9px] text-[#707070] tracking-wider uppercase mb-1">Скорость</div>
                            <div className="text-sm font-light text-white">{product.maxSpeed} км/ч</div>
                          </div>
                          <div className="bg-white/5 border border-[#2a2a2a] p-2">
                            <div className="text-[9px] text-[#707070] tracking-wider uppercase mb-1">Запас хода</div>
                            <div className="text-sm font-light text-white">{product.range} км</div>
                          </div>
                          <div className="bg-white/5 border border-[#2a2a2a] p-2">
                            <div className="text-[9px] text-[#707070] tracking-wider uppercase mb-1">Мощность</div>
                            <div className="text-sm font-light text-white">{product.power} Вт</div>
                          </div>
                          <div className="bg-white/5 border border-[#2a2a2a] p-2">
                            <div className="text-[9px] text-[#707070] tracking-wider uppercase mb-1">Доставка</div>
                            <div className="text-sm font-light text-white">{product.deliveryDays} дн</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-[#3a3a3a]">
                          <div>
                            <div className="text-2xl font-light text-white tracking-tight">{product.price.toLocaleString()} ₽</div>
                          </div>
                          <Link to={`/product/${product.id}`}>
                            <Button size="sm" className="bg-white text-black hover:bg-[#e5e5e5] rounded-none px-6 py-2 font-light tracking-wider uppercase text-xs transition-all duration-300">
                              Подробнее
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </GlowCardContent>
                  </GlowCard>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <Icon name="SearchX" size={64} className="mx-auto mb-4 text-[#707070]" />
                  <h3 className="text-xl font-light text-white mb-2">Товары не найдены</h3>
                  <p className="text-[#b0b0b0] mb-6">Попробуйте изменить параметры фильтра</p>
                  <Button onClick={resetFilters} className="bg-white text-black hover:bg-[#e5e5e5] rounded-none px-8 font-light tracking-wide">
                    Сбросить фильтры
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {showFilters && (
        <div className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-[110]" onClick={() => setShowFilters(false)}>
          <GlowCard glowIntensity="medium" hoverEffect={false} className="absolute bottom-0 left-0 right-0 bg-gradient-to-br from-[#3a3f47] to-[#2a2e35] border-t border-[#2a2a2a] max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-br from-[#3a3f47] to-[#2a2e35] border-b border-[#2a2a2a] p-4 flex items-center justify-between z-10">
              <h3 className="text-lg font-light text-white tracking-wide">Фильтры</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)} className="text-[#b0b0b0] hover:text-white hover:bg-white/5">
                <Icon name="X" size={20} />
              </Button>
            </div>
            
            <div className="p-4 space-y-6">
              <div>
                <h4 className="text-sm font-light mb-3 text-white tracking-wide">Категории</h4>
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    className={`w-full justify-start rounded-none border-l-2 ${
                      selectedCategory === null 
                        ? 'border-white bg-white/10 text-white' 
                        : 'border-transparent text-[#b0b0b0]'
                    }`}
                    onClick={() => setSelectedCategory(null)}
                  >
                    Все категории
                  </Button>
                  {categories.map((cat) => (
                    <Button
                      key={cat.name}
                      variant="ghost"
                      className={`w-full justify-start rounded-none border-l-2 ${
                        selectedCategory === cat.name 
                          ? 'border-white bg-white/10 text-white' 
                          : 'border-transparent text-[#b0b0b0]'
                      }`}
                      onClick={() => setSelectedCategory(cat.name)}
                    >
                      {cat.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#2a2a2a]">
                <h4 className="text-sm font-light mb-3 text-white tracking-wide">Бренд</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={`mobile-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => toggleBrand(brand)}
                        className="border-[#3a3a3a] data-[state=checked]:bg-white data-[state=checked]:text-black"
                      />
                      <label htmlFor={`mobile-${brand}`} className="text-sm cursor-pointer text-[#b0b0b0]">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#2a2a2a]">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="mobile-inStock"
                    checked={onlyInStock}
                    onCheckedChange={(checked) => setOnlyInStock(checked as boolean)}
                    className="border-[#3a3a3a] data-[state=checked]:bg-white data-[state=checked]:text-black"
                  />
                  <label htmlFor="mobile-inStock" className="text-sm cursor-pointer text-[#b0b0b0]">
                    Только в наличии
                  </label>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2a2a2a] flex gap-3">
                <Button className="flex-1 bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-none font-light" onClick={resetFilters}>
                  Сбросить
                </Button>
                <Button className="flex-1 bg-white text-black hover:bg-[#e5e5e5] rounded-none font-light" onClick={() => setShowFilters(false)}>
                  Применить
                </Button>
              </div>
            </div>
          </GlowCard>
        </div>
      )}
    </div>
  );
};

export default Catalog;