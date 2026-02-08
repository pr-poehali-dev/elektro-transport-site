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

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
          <Icon name="ChevronRight" size={16} />
          <Link to="/" className="hover:text-foreground transition-colors">{product.category}</Link>
          <Icon name="ChevronRight" size={16} />
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Product Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Images */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-[500px] object-contain bg-gradient-to-br from-slate-100 to-slate-200"
                />
              </CardContent>
            </Card>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`border-2 rounded-lg overflow-hidden transition-all ${
                    selectedImage === idx ? "border-primary" : "border-slate-200"
                  }`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-20 object-contain bg-slate-100" />
                </button>
              ))}
            </div>
          </div>

          {/* Info & Order Form */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">{product.category}</Badge>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Бренд: <strong>{product.brand}</strong></span>
                <span>•</span>
                {product.inStock ? (
                  <span className="text-green-600 flex items-center gap-1">
                    <Icon name="Check" size={16} />
                    В наличии
                  </span>
                ) : (
                  <span className="text-orange-600">Под заказ</span>
                )}
              </div>
              <div className="text-4xl font-bold text-primary mb-4">
                {product.price.toLocaleString('ru-RU')} ₽
              </div>
            </div>

            {/* Quick Specs */}
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Gauge" size={20} className="text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">Скорость</div>
                      <div className="font-semibold">{product.maxSpeed} км/ч</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Battery" size={20} className="text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">Запас хода</div>
                      <div className="font-semibold">{product.range} км</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Zap" size={20} className="text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">Мощность</div>
                      <div className="font-semibold">{product.power} Вт</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Truck" size={20} className="text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">Доставка</div>
                      <div className="font-semibold">{product.deliveryDays} дней</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Form */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Заказать товар</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea
                      id="comment"
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      placeholder="Дополнительная информация"
                      rows={3}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 text-lg font-bold"
                  >
                    {product.inStock ? "Оформить заказ" : "Предзаказ"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Description */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Описание</h2>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Характеристики</h2>
                <div className="space-y-3">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b last:border-0">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Video Review */}
            {product.youtubeUrl && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Видео-обзор</h2>
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

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Icon name="Truck" size={20} />
                  Доставка
                </h3>
                <p className="text-sm text-muted-foreground">
                  Бесплатная доставка по Москве в течение {product.deliveryDays} дней
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Icon name="Shield" size={20} />
                  Гарантия
                </h3>
                <p className="text-sm text-muted-foreground">
                  Официальная гарантия производителя 12 месяцев
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Icon name="CreditCard" size={20} />
                  Оплата
                </h3>
                <p className="text-sm text-muted-foreground">
                  Наличными курьеру, картой онлайн или в рассрочку
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-slate-400">
            © 2024 ELECTRO MOTORS. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;