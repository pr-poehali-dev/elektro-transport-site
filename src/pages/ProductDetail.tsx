import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  images: string[];
  maxSpeed: number;
  range: number;
  weight: number;
  power: number;
  brand: string;
  deliveryDays: number;
  inStock: boolean;
  description: string;
  specs: { label: string; value: string }[];
  youtubeUrl?: string;
}

// Временные данные - позже будут загружаться динамически
const products: Product[] = [
  {
    id: 1,
    name: "E-Bike Pro 3000",
    category: "Электровелосипеды",
    price: 89900,
    images: [
      "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/468bb9c8-33c9-4cac-b03e-f99275a9ba64.jpg",
      "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/468bb9c8-33c9-4cac-b03e-f99275a9ba64.jpg",
    ],
    maxSpeed: 45,
    range: 80,
    weight: 22,
    power: 750,
    brand: "Xiaomi",
    deliveryDays: 7,
    inStock: true,
    description: "Профессиональный электровелосипед E-Bike Pro 3000 — идеальное решение для городских поездок и загородных прогулок. Мощный двигатель 750 Вт обеспечивает отличную динамику и возможность преодоления крутых подъемов. Запас хода до 80 км позволяет совершать длительные поездки без подзарядки.",
    specs: [
      { label: "Тип двигателя", value: "Бесколлекторный" },
      { label: "Ёмкость батареи", value: "48V 15Ah" },
      { label: "Время зарядки", value: "4-6 часов" },
      { label: "Максимальная нагрузка", value: "120 кг" },
      { label: "Размер колёс", value: "26 дюймов" },
      { label: "Тормозная система", value: "Дисковые тормоза" },
    ],
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: ""
  });

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Товар не найден</h1>
          <Link to="/">
            <Button>Вернуться на главную</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order form submitted:", formData);
    alert("Спасибо за заказ! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", comment: "" });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">ELECTRO MOTORS</span>
            </Link>
            
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8">
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
            </form>

            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Главная</Link>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">О нас</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Доставка</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Гарантия</a>
            </nav>
            
            <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-4 md:px-6">
              <Icon name="Phone" size={18} className="md:mr-2" />
              <span className="hidden md:inline">+7 (495) 123-45-67</span>
            </Button>
          </div>
          
          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="md:hidden mt-3">
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
          </form>
        </div>
      </header>

      {/* Product Content */}
      <div className="container mx-auto px-4 py-2">
        <div className="grid lg:grid-cols-[1fr_400px] gap-6">
          {/* Left Column - Images + Description */}
          <div className="space-y-6">
            {/* Images & Description/Specs in 2 columns */}
            <div className="grid md:grid-cols-2 gap-3">
              <Card className="overflow-hidden h-full flex flex-col">
                <CardContent className="p-3 flex-1 flex flex-col">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full flex-1 object-contain bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg"
                  />
                  <div className="grid grid-cols-6 gap-2 mt-3">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`border-2 rounded-lg overflow-hidden transition-all ${
                          selectedImage === idx ? "border-primary" : "border-slate-200"
                        }`}
                      >
                        <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-12 object-contain bg-slate-100" />
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Description & Specs stacked */}
              <div className="space-y-3">
                <Card>
                  <CardContent className="p-3">
                    <h2 className="text-lg font-bold mb-3">Описание</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-3">
                    <h2 className="text-lg font-bold mb-3">Характеристики</h2>
                    <div className="space-y-2">
                      {product.specs.slice(0, 5).map((spec, idx) => (
                        <div key={idx} className="flex justify-between py-2 border-b last:border-0 text-sm">
                          <span className="text-muted-foreground">{spec.label}</span>
                          <span className="font-semibold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Video Review - Desktop only (below) */}
            {product.youtubeUrl && (
              <Card className="hidden md:block">
                <CardContent className="p-3">
                  <h2 className="text-base font-bold mb-2">Видео-обзор</h2>
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={product.youtubeUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            )}

          </div>

          {/* Right Sidebar - Info & Order */}
          <div className="lg:sticky lg:top-20 space-y-3 h-fit">
            <Card className="bg-slate-900 text-white">
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-1 text-xs">{product.category}</Badge>
                <h1 className="text-xl font-bold mb-1">{product.name}</h1>
                <div className="flex items-center gap-2 text-xs mb-3">
                  <span>Бренд: <strong>{product.brand}</strong></span>
                  <span>•</span>
                  {product.inStock ? (
                    <span className="text-green-400 flex items-center gap-1">
                      <Icon name="Check" size={16} />
                      В наличии
                    </span>
                  ) : (
                    <span className="text-orange-400">Под заказ</span>
                  )}
                </div>
                
                <div className="border-t border-slate-700 pt-3 mb-3">
                  <div className="text-xs text-slate-400 mb-1">Цена под ключ</div>
                  <div className="text-2xl font-bold mb-1">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </div>
                  <div className="text-xs text-secondary">
                    В кредит от {Math.round(product.price / 60).toLocaleString('ru-RU')} ₽/мес
                  </div>
                </div>

                {/* Quick Specs Grid */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-slate-800 rounded-lg p-2">
                    <div className="text-[10px] text-slate-400">Скорость</div>
                    <div className="font-semibold text-sm">{product.maxSpeed} км/ч</div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-2">
                    <div className="text-[10px] text-slate-400">Запас хода</div>
                    <div className="font-semibold text-sm">{product.range} км</div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-2">
                    <div className="text-[10px] text-slate-400">Мощность</div>
                    <div className="font-semibold text-sm">{product.power} Вт</div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-2">
                    <div className="text-[10px] text-slate-400">Вес</div>
                    <div className="font-semibold text-sm">{product.weight} кг</div>
                  </div>
                </div>

                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3 font-semibold mb-3"
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  Telegram
                </Button>

                <div className="pt-3 border-t border-slate-700 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs">
                    <Icon name="Truck" size={16} className="text-blue-400" />
                    <span>Доставка ~ {product.deliveryDays} дней</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Icon name="Shield" size={14} className="text-green-400" />
                    <span>Гарантия сроков доставки</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Icon name="CreditCard" size={14} className="text-yellow-400" />
                    <span>Оплата при получении</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Form */}
            <Card id="order-form">
              <CardContent className="p-3">
                <h3 className="text-base font-bold mb-2">Заказать товар</h3>
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      placeholder="Ваше имя"
                      className="h-9 text-sm"
                    />
                  </div>
                  <div>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      placeholder="+375 (__) ___-__-__"
                      className="h-9 text-sm"
                    />
                  </div>
                  <div>
                    <Textarea
                      id="comment"
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      placeholder="Комментарий к заказу"
                      rows={2}
                      className="text-sm resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3 text-sm font-semibold"
                  >
                    {product.inStock ? "Оформить заказ" : "Предзаказ"}
                  </Button>
                  <p className="text-[10px] text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Video Review - Mobile only (at bottom) */}
        {product.youtubeUrl && (
          <div className="md:hidden mt-6">
            <Card>
              <CardContent className="p-3">
                <h2 className="text-base font-bold mb-2">Видео-обзор</h2>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={product.youtubeUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="text-center text-xs text-slate-400">
            © 2024 ELECTRO MOTORS. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;