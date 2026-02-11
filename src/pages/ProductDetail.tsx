import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GlowCard, GlowCardContent } from "@/components/ui/glow-card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";

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
  const product = products.find(p => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: ""
  });

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0a0a]">
        <Header />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <h1 className="text-4xl font-light text-white mb-4">Товар не найден</h1>
            <Link to="/">
              <Button className="bg-white text-black hover:bg-[#e5e5e5] rounded-none px-8 py-4 font-light tracking-wide">Вернуться на главную</Button>
            </Link>
          </div>
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



  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Header />

      {/* Product Content */}
      <div className="relative py-8 md:py-16 mb-16 md:mb-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <svg className="hidden md:block absolute inset-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            <path d="M960,0 L980,120 L940,160 L970,280 L930,350 L965,480 L945,560 L975,680 L940,760 L970,880 L950,960 L975,1080" 
                  stroke="#60a5fa" strokeWidth="3" fill="none" opacity="0.6"/>
            <path d="M960,0 L980,120 L940,160 L970,280 L930,350 L965,480 L945,560 L975,680 L940,760 L970,880 L950,960 L975,1080" 
                  stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.8"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-[1fr_400px] gap-6 md:gap-8">
            {/* Left Column - Images + Description */}
            <div className="space-y-6">
              {/* Images & Description/Specs in 2 columns */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <GlowCard glowIntensity="high" className="overflow-hidden bg-gradient-to-br from-[#2c3038] to-[#1a1d23] backdrop-blur-sm rounded-xl">
                  <GlowCardContent className="p-4 md:p-6">
                    <div className="aspect-square w-full bg-[#1a1a1a] rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={product.images[selectedImage]}
                        alt={product.name}
                        className="w-full h-full object-contain p-4 rounded-lg"
                      />
                    </div>
                    <div className="grid grid-cols-6 gap-2 mt-4">
                      {product.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(idx)}
                          className={`border-2 rounded-lg overflow-hidden transition-all ${
                            selectedImage === idx ? "border-white" : "border-[#2a2a2a]"
                          }`}
                        >
                          <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-16 object-contain bg-[#1a1a1a] p-1 rounded-lg" />
                        </button>
                      ))}
                    </div>
                  </GlowCardContent>
                </GlowCard>

                {/* Description & Specs stacked */}
                <div className="flex flex-col space-y-4">
                  <GlowCard glowIntensity="low" hoverEffect={false} className="bg-gradient-to-br from-[#2c3038] to-[#1a1d23] backdrop-blur-sm rounded-lg">
                    <GlowCardContent className="p-4 md:p-6">
                      <h2 className="text-lg font-light mb-4 text-white tracking-wide">Описание</h2>
                      <p className="text-sm text-[#b0b0b0] leading-relaxed">{product.description}</p>
                    </GlowCardContent>
                  </GlowCard>

                  <GlowCard glowIntensity="low" hoverEffect={false} className="bg-gradient-to-br from-[#2c3038] to-[#1a1d23] backdrop-blur-sm rounded-lg">
                    <GlowCardContent className="p-4 md:p-6">
                      <h2 className="text-lg font-light mb-4 text-white tracking-wide">Характеристики</h2>
                      <div className="space-y-3">
                        {product.specs.map((spec, idx) => (
                          <div key={idx} className="flex justify-between py-2 border-b border-[#2a2a2a] last:border-0 text-sm">
                            <span className="text-[#707070]">{spec.label}</span>
                            <span className="font-light text-white">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </GlowCardContent>
                  </GlowCard>

                  {/* Video Review - Desktop only (below specs) */}
                  {product.youtubeUrl && (
                    <GlowCard glowIntensity="low" hoverEffect={false} className="hidden md:block bg-gradient-to-br from-[#2c3038] to-[#1a1d23] backdrop-blur-sm rounded-lg">
                      <GlowCardContent className="p-4 md:p-6">
                        <h2 className="text-lg font-light mb-4 text-white tracking-wide">Видео-обзор</h2>
                        <div className="aspect-video bg-[#1a1a1a] rounded-lg overflow-hidden">
                          <iframe
                            width="100%"
                            height="100%"
                            src={product.youtubeUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </GlowCardContent>
                    </GlowCard>
                  )}
                </div>
              </div>
            </div>

            {/* Right Sidebar - Info & Order */}
            <div className="lg:sticky lg:top-24 space-y-4 h-fit">
              <GlowCard glowIntensity="high" hoverEffect={false} className="bg-gradient-to-br from-[#2c3038] to-[#1a1d23] backdrop-blur-sm rounded-lg">
                <GlowCardContent className="p-4 md:p-6">
                  <Badge className="mb-2 text-xs bg-white/10 text-white border-none">{product.category}</Badge>
                  <h1 className="text-2xl font-light mb-3 text-white tracking-tight">{product.name}</h1>
                  <div className="flex items-center gap-2 text-xs mb-4 text-[#b0b0b0]">
                    <span>Бренд: <strong className="text-white">{product.brand}</strong></span>
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
                  
                  <div className="border-t border-[#2a2a2a] pt-4 mb-4">
                    <div className="text-xs text-[#707070] mb-1 tracking-wide">Цена под ключ</div>
                    <div className="text-3xl font-light mb-1 text-white">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="text-xs text-[#b0b0b0]">
                      В кредит от {Math.round(product.price / 60).toLocaleString('ru-RU')} ₽/мес
                    </div>
                  </div>

                  {/* Quick Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white/5 border border-[#2a2a2a] rounded-none p-3">
                      <div className="text-[10px] text-[#707070] tracking-wide">СКОРОСТЬ</div>
                      <div className="font-light text-lg text-white">{product.maxSpeed} км/ч</div>
                    </div>
                    <div className="bg-white/5 border border-[#2a2a2a] rounded-none p-3">
                      <div className="text-[10px] text-[#707070] tracking-wide">ЗАПАС ХОДА</div>
                      <div className="font-light text-lg text-white">{product.range} км</div>
                    </div>
                    <div className="bg-white/5 border border-[#2a2a2a] rounded-none p-3">
                      <div className="text-[10px] text-[#707070] tracking-wide">МОЩНОСТЬ</div>
                      <div className="font-light text-lg text-white">{product.power} Вт</div>
                    </div>
                    <div className="bg-white/5 border border-[#2a2a2a] rounded-none p-3">
                      <div className="text-[10px] text-[#707070] tracking-wide">ВЕС</div>
                      <div className="font-light text-lg text-white">{product.weight} кг</div>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-none py-4 font-light tracking-wide mb-4"
                  >
                    <Icon name="Send" size={16} className="mr-2" />
                    Написать в Telegram
                  </Button>

                  <div className="pt-4 border-t border-[#2a2a2a] space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#b0b0b0]">
                      <Icon name="Truck" size={16} className="text-blue-400" />
                      <span>Доставка ~ {product.deliveryDays} дней</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#b0b0b0]">
                      <Icon name="Shield" size={14} className="text-green-400" />
                      <span>Гарантия сроков доставки</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#b0b0b0]">
                      <Icon name="CreditCard" size={14} className="text-yellow-400" />
                      <span>Оплата при получении</span>
                    </div>
                  </div>
                </GlowCardContent>
              </GlowCard>

              {/* Order Form */}
              <GlowCard id="order-form" glowIntensity="high" hoverEffect={false} className="bg-gradient-to-br from-[#2c3038] to-[#1a1d23] backdrop-blur-sm rounded-lg">
                <GlowCardContent className="p-4 md:p-6">
                  <h3 className="text-lg font-light mb-4 text-white tracking-wide">Заказать товар</h3>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        placeholder="Ваше имя"
                        className="bg-white/5 border-[#2a2a2a] text-white placeholder:text-[#707070] rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-white"
                      />
                    </div>
                    <div>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        placeholder="+7 (___) ___-__-__"
                        className="bg-white/5 border-[#2a2a2a] text-white placeholder:text-[#707070] rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-white"
                      />
                    </div>
                    <div>
                      <Textarea
                        id="comment"
                        value={formData.comment}
                        onChange={(e) => setFormData({...formData, comment: e.target.value})}
                        placeholder="Комментарий к заказу"
                        rows={3}
                        className="bg-white/5 border-[#2a2a2a] text-white placeholder:text-[#707070] rounded-none resize-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-white"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-white text-black hover:bg-[#e5e5e5] rounded-none py-4 font-light tracking-wide"
                    >
                      {product.inStock ? "Оформить заказ" : "Предзаказ"}
                    </Button>
                    <p className="text-[10px] text-[#707070] text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </GlowCardContent>
              </GlowCard>
            </div>
          </div>

          {/* Video Review - Mobile only (at bottom) */}
          {product.youtubeUrl && (
            <div className="md:hidden container mx-auto px-4 mt-6">
              <GlowCard glowIntensity="low" hoverEffect={false} className="bg-black/40 backdrop-blur-sm">
                <GlowCardContent className="p-4">
                  <h2 className="text-lg font-light mb-4 text-white tracking-wide">Видео-обзор</h2>
                  <div className="aspect-video bg-[#1a1a1a] rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={product.youtubeUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </GlowCardContent>
              </GlowCard>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-black/40 border-t border-[#2a2a2a] text-white py-6 md:py-8 mt-16 mb-16 md:mb-0">
          <div className="container mx-auto px-4">
            <div className="text-center text-xs text-[#707070] tracking-wide">
              © 2024 ELECTRO MOTORS. Все права защищены.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProductDetail;