import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

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
    power: 750
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
    power: 500
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
    power: 3000
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
    power: 2000
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
    power: 1500
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
    power: 1000
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
    power: 350
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
    power: 500
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

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const toggleCompare = (id: number) => {
    setCompareList((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const compareProducts = products.filter((p) => compareList.includes(p.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">ELECTRO MOTORS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">О нас</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Доставка</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Гарантия</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Heart" size={20} />
            </Button>
            <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white h-[calc(100vh-72px)] relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-500/10 rounded-full blur-[180px]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
          <div className="absolute top-10 left-10 w-3 h-3 bg-primary/80 rounded-full animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.6)]"></div>
          <div className="absolute top-20 right-32 w-2 h-2 bg-secondary/80 rounded-full animate-pulse shadow-[0_0_15px_rgba(251,146,60,0.6)]" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-blue-400/80 rounded-full animate-pulse shadow-[0_0_18px_rgba(96,165,250,0.6)]" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-primary/60 rounded-full animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-green-400/70 rounded-full animate-pulse shadow-[0_0_12px_rgba(74,222,128,0.5)]" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400/70 rounded-full animate-pulse shadow-[0_0_15px_rgba(192,132,252,0.5)]" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="hidden md:flex items-end justify-center relative animate-scale-in h-[500px]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-3 bg-primary/40 rounded-full blur-lg"></div>
              <img 
                src="https://cdn.poehali.dev/files/070fcfaf-4ddd-4e8e-8dc2-94d7830a0d92.png" 
                alt="Electric Scooter"
                className="w-full max-w-lg h-auto object-contain object-bottom opacity-90 scale-110 relative z-10"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(239, 68, 68, 0.5)) drop-shadow(0 0 20px rgba(239, 68, 68, 0.3)) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))'
                }}
              />
            </div>
            
            <div className="space-y-6 animate-fade-in flex flex-col items-center text-center self-start pt-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight italic">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
                  НА ПОЛНОМ ЗАРЯДЕ
                </span>
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Современно. Экологично. Экономично. Комфортно.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm border border-primary/30 text-white hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/50 rounded-2xl px-8 py-5 text-base font-bold group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                  <span className="relative flex items-center gap-2">
                    Перейти в каталог
                    <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button
                  size="lg"
                  className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white hover:scale-105 transition-all duration-300 shadow-2xl rounded-2xl px-8 py-5 text-base font-bold flex items-center gap-2"
                >
                  <Icon name="MessageCircle" size={18} />
                  Консультация эксперта
                </Button>
              </div>
            </div>
            
            <div className="hidden md:flex items-end justify-center relative animate-scale-in h-[500px]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250px] h-3 bg-secondary/40 rounded-full blur-lg"></div>
              <img 
                src="https://cdn.poehali.dev/files/4a761b83-8f8b-4b15-b4c4-81f434d08483.png" 
                alt="Electric Scooter"
                className="w-full max-w-md h-auto object-contain object-bottom relative z-10"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(251, 146, 60, 0.5)) drop-shadow(0 0 20px rgba(251, 146, 60, 0.3)) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))'
                }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 p-8 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-primary/30 flex flex-col justify-center items-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-2 italic">30%</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider">Экономия</div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm border border-secondary/20 p-8 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-secondary/30 flex flex-col justify-center items-center">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-secondary mb-2 italic">30</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider">Дней доставка</div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/5 backdrop-blur-sm border border-green-500/20 p-8 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-green-500/30 flex flex-col justify-center items-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-green-400 mb-2 italic">24/7</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider">Поддержка</div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 backdrop-blur-sm border border-orange-500/20 p-8 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-orange-500/30 flex flex-col justify-center items-center">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-orange-400 mb-2 italic">14</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider">Лет на рынке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
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

          <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className={selectedCategory === null ? "bg-primary text-white rounded-full" : "rounded-full"}
            >
              <Icon name="Grid3x3" size={18} className="mr-2" />
              Все категории
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat.name}
                variant={selectedCategory === cat.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.name)}
                className={selectedCategory === cat.name ? "bg-primary text-white rounded-full whitespace-nowrap" : "rounded-full whitespace-nowrap"}
              >
                <Icon name={cat.icon as any} size={18} className="mr-2" />
                {cat.name}
              </Button>
            ))}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 p-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
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
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {product.category}
                    </Badge>
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
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
                      <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white rounded-full">
                        Купить
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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