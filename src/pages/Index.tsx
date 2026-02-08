import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

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
    delivery: "7 дней",
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

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [compareList, setCompareList] = useState<number[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [powerRange, setPowerRange] = useState<[number, number]>([0, 3000]);
  const [deliveryDays, setDeliveryDays] = useState(30);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white shadow-sm sticky top-0 z-[100]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">ELECTRO MOTORS</span>
            </div>
            
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-full"
                />
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">О нас</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Доставка</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Гарантия</a>
            </nav>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Icon name="Heart" size={20} />
              </Button>
              <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-4 md:px-6">
                <Icon name="Phone" size={18} className="md:mr-2" />
                <span className="hidden md:inline">+7 (495) 123-45-67</span>
              </Button>
            </div>
          </div>
          
          {/* Mobile Search */}
          <div className="md:hidden mt-3">
            <div className="relative w-full">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50 h-[calc(100vh-72px)] relative flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-500/5 rounded-full blur-[180px]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
        </div>
        
        <div className="absolute top-4 left-0 right-0 z-[60] pointer-events-none px-4">
          <h1 className="text-[clamp(2rem,8vw,10rem)] font-bold leading-[1.1] tracking-tight text-center animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              НА ПОЛНОМ ЗАРЯДЕ
            </span>
          </h1>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          
          <div className="flex flex-col items-center gap-4 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end w-full h-[60vh] px-4 max-w-7xl mx-auto">
              <div className="flex items-end justify-center relative animate-scale-in group scale-125">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-2 bg-purple-500/30 rounded-full blur-lg group-hover:w-[250px] transition-all duration-500"></div>
                <img 
                  src="https://cdn.poehali.dev/files/b8881807-d273-44af-b7e1-6b32377493e2.png" 
                  alt="Electric Tricycle"
                  className="w-full h-full object-contain relative z-10 hover:scale-110 transition-transform duration-500"
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(168, 85, 247, 0.3)) drop-shadow(0 0 20px rgba(168, 85, 247, 0.15))'
                  }}
                />
              </div>
              
              <div className="flex flex-col items-center justify-center gap-4 animate-fade-in h-full pb-8">
                <p className="text-base md:text-xl text-slate-700 leading-relaxed text-center">
                  Современно. Экологично. Экономично. Комфортно.
                </p>
                
                <div className="flex flex-col gap-3 w-full">
                  <Button
                    size="lg"
                    className="relative overflow-hidden bg-primary hover:bg-primary/90 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl px-6 py-4 text-sm font-bold group"
                  >
                    <span className="relative flex items-center justify-center gap-3">
                      Перейти в каталог
                      <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-white hover:scale-105 transition-all duration-300 shadow-lg rounded-2xl px-6 py-4 text-sm font-bold flex items-center justify-center gap-3"
                  >
                    <Icon name="MessageCircle" size={20} />
                    Консультация эксперта
                  </Button>
                </div>
              </div>
              
              <div className="flex items-end justify-center relative animate-scale-in group scale-125" style={{ animationDelay: '0.2s' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-2 bg-primary/30 rounded-full blur-lg group-hover:w-[250px] transition-all duration-500"></div>
                <img 
                  src="https://cdn.poehali.dev/files/26aabfed-1ab2-4231-965b-7ab4d5c7bdef.png" 
                  alt="Electric Scooter"
                  className="w-full h-full object-contain relative z-10 hover:scale-110 transition-transform duration-500"
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(239, 68, 68, 0.3)) drop-shadow(0 0 20px rgba(239, 68, 68, 0.15))'
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 mb-12">
            <div className="relative group overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col justify-center items-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-2 italic">30%</div>
                <div className="text-xs text-slate-600 uppercase tracking-wider">Экономия</div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col justify-center items-center">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-secondary mb-2 italic">30</div>
                <div className="text-xs text-slate-600 uppercase tracking-wider">Дней доставка</div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col justify-center items-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-green-500 mb-2 italic">24/7</div>
                <div className="text-xs text-slate-600 uppercase tracking-wider">Поддержка</div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col justify-center items-center">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-orange-500 mb-2 italic">14</div>
                <div className="text-xs text-slate-600 uppercase tracking-wider">Лет на рынке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside className="w-64 flex-shrink-0">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Icon name="SlidersHorizontal" size={20} />
                    Фильтры
                  </h3>

                  {/* Categories */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm">Категория</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <Checkbox
                          checked={selectedCategory === null}
                          onCheckedChange={() => setSelectedCategory(null)}
                        />
                        <span className="text-sm">Все категории</span>
                      </label>
                      {categories.map((cat) => (
                        <label key={cat.name} className="flex items-center gap-2 cursor-pointer">
                          <Checkbox
                            checked={selectedCategory === cat.name}
                            onCheckedChange={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                          />
                          <span className="text-sm">{cat.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Brands */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm">Марка</h4>
                    <div className="space-y-2">
                      {brands.map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer">
                          <Checkbox
                            checked={selectedBrands.includes(brand)}
                            onCheckedChange={() => toggleBrand(brand)}
                          />
                          <span className="text-sm">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Power */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm">Мощность (Вт)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
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
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Delivery */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm">Срок доставки (до {deliveryDays} дней)</h4>
                    <div className="space-y-2">
                      <input
                        type="range"
                        min="3"
                        max="30"
                        step="1"
                        value={deliveryDays}
                        onChange={(e) => setDeliveryDays(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        style={{
                          accentColor: 'hsl(var(--primary))'
                        }}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>3 дня</span>
                        <span>30 дней</span>
                      </div>
                    </div>
                  </div>

                  {/* In Stock */}
                  <div className="mb-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        checked={onlyInStock}
                        onCheckedChange={(checked) => setOnlyInStock(checked === true)}
                      />
                      <span className="text-sm font-semibold">Есть в наличии</span>
                    </label>
                  </div>

                  {/* Reset Button */}
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedBrands([]);
                      setPowerRange([0, 3000]);
                      setDeliveryDays(30);
                      setOnlyInStock(false);
                    }}
                  >
                    <Icon name="RotateCcw" size={16} className="mr-2" />
                    Сбросить фильтры
                  </Button>
                </CardContent>
              </Card>
            </aside>

            {/* Products Section */}
            <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">Каталог</h2>
            {compareList.length > 0 && (
              <Button
                onClick={() => setShowCompare(!showCompare)}
                className="bg-primary hover:bg-primary/90 text-white rounded-full"
              >
                <Icon name="GitCompare" size={18} className="mr-2" />
                Сравнить ({compareList.length})
              </Button>
            )}
          </div>

          {showCompare && compareProducts.length > 0 && (
            <Card className="mb-8 shadow-lg animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Сравнение моделей</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setShowCompare(false);
                      setCompareList([]);
                    }}
                  >
                    <Icon name="X" size={18} />
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-semibold">Характеристика</th>
                        {compareProducts.map((product) => (
                          <th key={product.id} className="text-center p-4">
                            <div className="flex flex-col items-center gap-2">
                              <img src={product.image} alt={product.name} className="w-24 h-24 object-contain" />
                              <div className="font-semibold text-sm">{product.name}</div>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-slate-50">
                        <td className="p-4 font-medium">Цена</td>
                        {compareProducts.map((product) => (
                          <td key={product.id} className="text-center p-4 font-bold text-primary">
                            {product.price.toLocaleString('ru-RU')} ₽
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b hover:bg-slate-50">
                        <td className="p-4 font-medium">Макс. скорость</td>
                        {compareProducts.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            {product.maxSpeed} км/ч
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b hover:bg-slate-50">
                        <td className="p-4 font-medium">Запас хода</td>
                        {compareProducts.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            {product.range} км
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b hover:bg-slate-50">
                        <td className="p-4 font-medium">Вес</td>
                        {compareProducts.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            {product.weight} кг
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b hover:bg-slate-50">
                        <td className="p-4 font-medium">Мощность</td>
                        {compareProducts.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            {product.power} Вт
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden">
                <CardContent className="p-0">
                  <Link to={`/product/${product.id}`}>
                    <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 p-8 cursor-pointer">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 flex flex-col gap-2" onClick={(e) => e.preventDefault()}>
                        <div className="flex items-center gap-2">
                          <Checkbox
                            checked={compareList.includes(product.id)}
                            onCheckedChange={() => toggleCompare(product.id)}
                            className="bg-white"
                          />
                          <span className="text-xs bg-white px-2 py-1 rounded">Сравнить</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {product.category}
                    </Badge>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors cursor-pointer">{product.name}</h3>
                    </Link>
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Icon name="Gauge" size={14} />
                        <span>{product.maxSpeed} км/ч</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Battery" size={14} />
                        <span>{product.range} км</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Weight" size={14} />
                        <span>{product.weight} кг</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Zap" size={14} />
                        <span>{product.power} Вт</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          {product.price.toLocaleString('ru-RU')} ₽
                        </div>
                      </div>
                      <Link to={`/product/${product.id}`}>
                        <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white rounded-full">
                          Купить
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">ELECTRO MOTORS</span>
              </div>
              <p className="text-slate-400 text-sm">
                Эксклюзивный импорт электротранспорта нового поколения
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Категории</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <a href="#" className="hover:text-white transition-colors">{cat.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@electromotors.ru</p>
                <p>Москва, ул. Примерная, 1</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            © 2024 ELECTRO MOTORS. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;