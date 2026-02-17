import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GlowCard, GlowCardContent } from "@/components/ui/glow-card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import { Product } from "@/data/products";
import ProductSpecs from "@/components/catalog/ProductSpecs";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: ""
  });

  useEffect(() => {
    fetch('https://functions.poehali.dev/1f044027-fd62-4bec-9641-d80cece6f0a7')
      .then(res => res.json())
      .then((data: Product[]) => {
        const found = data.find(p => p.id === Number(id));
        setProduct(found || null);
      });
  }, [id]);

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

        <div className="container mx-auto px-2 md:px-6 relative z-10 max-w-[1400px]">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] gap-3 md:gap-6">
            {/* Left Column - Images + Description */}
            <div className="space-y-3 md:space-y-6 w-full">
              {/* Images & Description/Specs in 2 columns */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-6">
                <GlowCard glowIntensity="none" className="overflow-hidden bg-gradient-to-br from-[#2c3038] to-[#1a1d23] border border-white/10 md:border-0 rounded-xl w-full">
                  <GlowCardContent className="p-2 md:p-6">
                    <div className="aspect-square w-full bg-[#1a1a1a] rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={product.images[selectedImage]}
                        alt={product.name}
                        className="w-full h-full object-contain p-2 md:p-4 rounded-lg"
                      />
                    </div>
                    <div className="grid grid-cols-6 gap-1 md:gap-2 mt-2 md:mt-4">
                      {product.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(idx)}
                          className={`border-2 rounded-lg overflow-hidden ${
                            selectedImage === idx ? "border-white" : "border-[#2a2a2a]"
                          }`}
                        >
                          <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-10 md:h-16 object-contain bg-[#1a1a1a] p-0.5 md:p-1 rounded-lg" />
                        </button>
                      ))}
                    </div>
                  </GlowCardContent>
                </GlowCard>

                {/* Description & Specs stacked */}
                <div className="flex flex-col space-y-3 md:space-y-4 w-full">
                  <GlowCard glowIntensity="none" hoverEffect={false} className="bg-gradient-to-br from-[#2c3038] to-[#1a1d23] border border-white/10 md:border-0 rounded-lg w-full">
                    <GlowCardContent className="p-3 md:p-6">
                      <h2 className="text-base md:text-xl font-normal mb-2 md:mb-4 text-white tracking-wide">Описание</h2>
                      <p className="text-xs md:text-base text-[#d0d0d0] leading-relaxed">{product.description}</p>
                    </GlowCardContent>
                  </GlowCard>

                  <GlowCard glowIntensity="none" hoverEffect={false} className="bg-gradient-to-br from-[#2c3038] to-[#1a1d23] border border-white/10 md:border-0 rounded-lg w-full">
                    <GlowCardContent className="p-3 md:p-6">
                      <h2 className="text-base md:text-xl font-normal mb-2 md:mb-4 text-white tracking-wide">Характеристики</h2>
                      <ProductSpecs specs={product.specs} initialVisible={6} />
                    </GlowCardContent>
                  </GlowCard>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Info & Order */}
            <div className="lg:sticky lg:top-24 space-y-3 md:space-y-4 h-fit w-full lg:w-auto">
              <GlowCard glowIntensity="none" hoverEffect={false} className="bg-gradient-to-br from-[#2c3038] to-[#1a1d23] border border-white/10 md:border-0 rounded-lg w-full">
                <GlowCardContent className="p-3 md:p-6">
                  <Badge className="mb-2 md:mb-3 text-xs md:text-sm bg-white/10 text-white border-none">{product.category}</Badge>
                  <h1 className="text-lg md:text-3xl font-normal mb-2 md:mb-4 text-white tracking-tight break-words">{product.name}</h1>
                  <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm mb-3 md:mb-4 text-[#c0c0c0]">
                    <span>Бренд: <strong className="text-white">{product.brand}</strong></span>
                    <span>•</span>
                    {product.inStock ? (
                      <span className="text-green-400 flex items-center gap-1">
                        <Icon name="Check" size={14} className="md:w-4 md:h-4" />
                        В наличии
                      </span>
                    ) : (
                      <span className="text-orange-400">Под заказ</span>
                    )}
                  </div>
                  
                  <div className="border-t border-[#3a3a3a] pt-3 md:pt-4 mb-3 md:mb-4">
                    <div className="text-xs md:text-sm text-[#a0a0a0] mb-1 md:mb-2 tracking-wide">Цена под ключ</div>
                    <div className="flex flex-wrap items-baseline gap-2 md:gap-3 mb-1 md:mb-2">
                      <span className="text-2xl md:text-4xl font-normal text-white">{product.price.toLocaleString('ru-RU')} ₽</span>
                      {product.oldPrice && (
                        <span className="text-base md:text-xl text-[#707070] line-through">{product.oldPrice.toLocaleString('ru-RU')} ₽</span>
                      )}
                    </div>
                    <div className="text-xs md:text-sm text-[#c0c0c0]">
                      В кредит от {Math.round(product.price / 60).toLocaleString('ru-RU')} ₽/мес
                    </div>
                  </div>

                  {/* Quick Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="bg-white/5 border border-[#3a3a3a] rounded-none p-2">
                      <div className="text-[9px] md:text-xs text-[#a0a0a0] tracking-wide mb-0.5">СКОРОСТЬ</div>
                      <div className="font-normal text-sm md:text-lg text-white">{product.maxSpeed} км/ч</div>
                    </div>
                    <div className="bg-white/5 border border-[#3a3a3a] rounded-none p-2">
                      <div className="text-[9px] md:text-xs text-[#a0a0a0] tracking-wide mb-0.5">ЗАПАС</div>
                      <div className="font-normal text-sm md:text-lg text-white">{product.range} км</div>
                    </div>
                    <div className="bg-white/5 border border-[#3a3a3a] rounded-none p-2">
                      <div className="text-[9px] md:text-xs text-[#a0a0a0] tracking-wide mb-0.5">МОЩНОСТЬ</div>
                      <div className="font-normal text-sm md:text-lg text-white">{product.power} Вт</div>
                    </div>
                    <div className="bg-white/5 border border-[#3a3a3a] rounded-none p-2">
                      <div className="text-[9px] md:text-xs text-[#a0a0a0] tracking-wide mb-0.5">ВЕС</div>
                      <div className="font-normal text-sm md:text-lg text-white">{product.weight} кг</div>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-none py-3 md:py-5 font-normal text-sm md:text-base tracking-wide mb-3 md:mb-4 md:transition-colors"
                  >
                    <Icon name="Send" size={14} className="mr-2 md:w-4 md:h-4" />
                    Написать в Telegram
                  </Button>

                  <div className="pt-3 md:pt-4 border-t border-[#3a3a3a] space-y-2 md:space-y-3">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-[#c0c0c0]">
                      <Icon name="Truck" size={16} className="text-blue-400 md:w-[18px] md:h-[18px]" />
                      <span>Доставка ~ {product.deliveryDays} дней</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-[#c0c0c0]">
                      <Icon name="Shield" size={14} className="text-green-400 md:w-4 md:h-4" />
                      <span>Гарантия сроков доставки</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-[#c0c0c0]">
                      <Icon name="CreditCard" size={14} className="text-yellow-400 md:w-4 md:h-4" />
                      <span>Оплата при получении</span>
                    </div>
                  </div>
                </GlowCardContent>
              </GlowCard>

              {/* Order Form */}
              <GlowCard id="order-form" glowIntensity="none" hoverEffect={false} className="bg-gradient-to-br from-[#3a3f47] to-[#2a2e35] rounded-lg border-2 border-blue-400/40 w-full">
                <GlowCardContent className="p-3 md:p-8">
                  <h3 className="text-base md:text-2xl font-semibold mb-3 md:mb-6 text-white tracking-wide">Заказать товар</h3>
                  <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                    <div>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        placeholder="Ваше имя"
                        className="bg-white/10 border-[#4a4a4a] text-white placeholder:text-[#a0a0a0] rounded-lg h-10 md:h-12 text-sm md:text-base focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-400"
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
                        className="bg-white/10 border-[#4a4a4a] text-white placeholder:text-[#a0a0a0] rounded-lg h-10 md:h-12 text-sm md:text-base focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-400"
                      />
                    </div>
                    <div>
                      <Textarea
                        id="comment"
                        value={formData.comment}
                        onChange={(e) => setFormData({...formData, comment: e.target.value})}
                        placeholder="Комментарий к заказу"
                        rows={3}
                        className="bg-white/10 border-[#4a4a4a] text-white placeholder:text-[#a0a0a0] rounded-lg text-sm md:text-base resize-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-400"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-white text-black hover:bg-[#e5e5e5] rounded-lg py-3 md:py-5 text-base md:text-lg font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all"
                    >
                      {product.inStock ? "Оформить заказ" : "Предзаказ"}
                    </Button>
                    <p className="text-[10px] md:text-xs text-[#a0a0a0] text-center leading-relaxed">
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
              <GlowCard glowIntensity="low" hoverEffect={false} className="bg-gradient-to-br from-[#2c3038] to-[#1a1d23] backdrop-blur-sm rounded-lg">
                <GlowCardContent className="p-4">
                  <h2 className="text-xl font-normal mb-4 text-white tracking-wide">Видео-обзор</h2>
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