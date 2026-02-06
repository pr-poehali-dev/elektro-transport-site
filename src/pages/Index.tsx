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
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="text-white" size={24} />
            </div>
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

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium tracking-wide">ЭКСКЛЮЗИВНЫЙ ИМПОРТ</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="block">ЭЛЕКТРО</span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
                  ТРАНСПОРТ
                </span>
                <span className="block text-5xl md:text-6xl mt-2">НОВОГО ПОКОЛЕНИЯ</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                  Подбор, проверка и доставка электротранспорта под Ваши критерии и бюджет
                </p>
                <div className="flex items-center gap-3 text-slate-400">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Без скрытых платежей</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Фиксированная цена по договору</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-full px-10 shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 group"
                >
                  <span>Перейти в каталог</span>
                  <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-slate-900 rounded-full px-10 transition-all hover:scale-105"
                >
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Консультация
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-slate-400">Довольных клиентов</div>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div>
                  <div className="text-3xl font-bold text-white">14</div>
                  <div className="text-sm text-slate-400">Лет на рынке</div>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div>
                  <div className="text-3xl font-bold text-white">30%</div>
                  <div className="text-sm text-slate-400">Экономия</div>
                </div>
              </div>
            </div>
            
            <div className="relative hidden md:block animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl scale-75"></div>
              <div className="absolute top-10 right-10 w-32 h-32 border-4 border-primary/30 rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-secondary/30 rounded-full"></div>
              <img
                src="https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/8f436506-c352-469c-881d-5967653cc341.jpg"
                alt="Electric Scooter"
                className="relative w-full max-w-2xl ml-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Zap" size={18} className="text-primary" />
                    <span className="text-sm font-medium">60 км/ч</span>
                  </div>
                  <div className="w-px h-6 bg-white/20"></div>
                  <div className="flex items-center gap-2">
                    <Icon name="Battery" size={18} className="text-secondary" />
                    <span className="text-sm font-medium">100 км</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">30%</div>
              <div className="text-sm text-muted-foreground">Экономия</div>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="text-4xl font-bold text-secondary mb-2">30</div>
              <div className="text-sm text-muted-foreground">Дней доставка</div>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Поддержка</div>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="text-4xl font-bold text-orange-500 mb-2">14</div>
              <div className="text-sm text-muted-foreground">Лет на рынке</div>
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