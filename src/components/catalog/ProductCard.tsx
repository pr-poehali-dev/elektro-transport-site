import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlowCard, GlowCardContent } from "@/components/ui/glow-card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  isCompared: boolean;
  onToggleCompare: (id: number) => void;
}

const ProductCard = ({ product, isCompared, onToggleCompare }: ProductCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setFormData({ name: "", phone: "", comment: "" });
    setShowModal(false);
    alert("Спасибо за заказ! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <>
      <GlowCard glowIntensity="none" className="group overflow-hidden bg-gradient-to-br from-[#2c3038] to-[#1a1d23] rounded-lg border border-white/10 md:border-0">
        <GlowCardContent className="p-0">
          <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-[#1a1a1a] rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover md:group-hover:scale-105 md:transition-transform md:duration-500 rounded-lg"
            />
            <div className="absolute top-2 left-2 md:top-3 md:left-3 flex flex-col gap-1 md:gap-2">
              {product.inStock ? (
                <Badge className="bg-green-500/90 text-white border-0 font-semibold px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs">
                  В наличии
                </Badge>
              ) : (
                <Badge className="bg-orange-500/90 text-white border-0 font-semibold px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs">
                  Под заказ
                </Badge>
              )}
              {product.deliveryDays <= 7 && (
                <Badge className="bg-blue-500/90 text-white border-0 font-semibold px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs">
                  Быстрая доставка
                </Badge>
              )}
            </div>
          </Link>

          {/* Compare button under photo */}
          <button
            onClick={() => onToggleCompare(product.id)}
            className={`w-full flex items-center justify-center gap-1.5 py-1.5 text-[10px] tracking-wider uppercase transition-all duration-300 border-b border-white/10 ${
              isCompared
                ? "bg-white/10 text-white"
                : "bg-transparent text-[#707070] hover:text-white hover:bg-white/5"
            }`}
          >
            <Icon name="GitCompare" size={12} />
            {isCompared ? "В сравнении" : "Сравнить"}
          </button>

          <div className="p-3 md:p-6">
            <div className="flex items-start justify-between mb-3 md:mb-4">
              <div className="min-w-0 flex-1">
                <Link to={`/product/${product.id}`} className="hover:text-[#c0c0c0] transition-colors">
                  <h3 className="font-light text-white text-base md:text-xl mb-1 md:mb-2 tracking-tight line-clamp-2">{product.name}</h3>
                </Link>
                <p className="text-xs md:text-sm text-[#a0a0a0] tracking-wider uppercase">{product.brand}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="bg-[#1f2229] md:bg-gradient-to-br md:from-[#2a2e35] md:to-[#1f2229] border border-white/10 p-2 md:p-3 rounded-none md:shadow-[0_0_10px_rgba(96,165,250,0.1)]">
                <div className="text-[9px] md:text-xs text-[#a0a0a0] tracking-[0.1em] md:tracking-[0.2em] uppercase mb-0.5 md:mb-1">СКОРОСТЬ</div>
                <div className="text-xs md:text-lg font-normal text-white tracking-tight">{product.maxSpeed} км/ч</div>
              </div>
              <div className="bg-[#1f2229] md:bg-gradient-to-br md:from-[#2a2e35] md:to-[#1f2229] border border-white/10 p-2 md:p-3 rounded-none md:shadow-[0_0_10px_rgba(96,165,250,0.1)]">
                <div className="text-[9px] md:text-xs text-[#a0a0a0] tracking-[0.1em] md:tracking-[0.2em] uppercase mb-0.5 md:mb-1">ЗАПАС ХОДА</div>
                <div className="text-xs md:text-lg font-normal text-white tracking-tight">{product.range} км</div>
              </div>
              <div className="bg-[#1f2229] md:bg-gradient-to-br md:from-[#2a2e35] md:to-[#1f2229] border border-white/10 p-2 md:p-3 rounded-none md:shadow-[0_0_10px_rgba(96,165,250,0.1)]">
                <div className="text-[9px] md:text-xs text-[#a0a0a0] tracking-[0.1em] md:tracking-[0.2em] uppercase mb-0.5 md:mb-1">МОЩНОСТЬ</div>
                <div className="text-xs md:text-lg font-normal text-white tracking-tight">{product.power} Вт</div>
              </div>
              <div className="bg-[#1f2229] md:bg-gradient-to-br md:from-[#2a2e35] md:to-[#1f2229] border border-white/10 p-2 md:p-3 rounded-none md:shadow-[0_0_10px_rgba(96,165,250,0.1)]">
                <div className="text-[9px] md:text-xs text-[#a0a0a0] tracking-[0.1em] md:tracking-[0.2em] uppercase mb-0.5 md:mb-1">ВЕС</div>
                <div className="text-xs md:text-lg font-normal text-white tracking-tight">{product.weight} кг</div>
              </div>
            </div>

            <div className="mt-3 md:mt-5 rounded-lg bg-[#1a1d23] border border-white/8 overflow-hidden">
              <div className="flex items-center justify-between px-3 md:px-4 pt-3 md:pt-4 pb-2 md:pb-3">
                <div>
                  <span className="text-xl md:text-2xl font-light text-white tracking-tight">{product.price.toLocaleString()} р.</span>
                  {product.oldPrice && (
                    <span className="text-xs md:text-sm text-[#505050] line-through ml-2">{product.oldPrice.toLocaleString()} р.</span>
                  )}
                </div>
                {product.oldPrice && (
                  <span className="text-[10px] text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded tracking-wide">
                    -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 border-t border-white/8">
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center justify-center gap-1.5 py-2.5 md:py-3 text-[11px] md:text-xs tracking-[0.12em] uppercase font-normal text-blue-400 hover:bg-blue-400/10 transition-colors border-r border-white/8"
                >
                  Купить
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 md:py-3 text-[11px] md:text-xs tracking-[0.12em] uppercase font-normal text-[#a0a0a0] hover:text-white hover:bg-white/5 transition-colors"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </GlowCardContent>
      </GlowCard>

      {/* Quick order modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-gradient-to-br from-[#3a3f47] to-[#2a2e35] border-2 border-blue-400/40 w-full max-w-md p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-[#707070] hover:text-white transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
            <h3 className="text-lg md:text-2xl font-semibold mb-1 text-white tracking-wide">Купить в 1 клик</h3>
            <p className="text-sm text-[#a0a0a0] mb-5">{product.name}</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Ваше имя"
                className="bg-white/10 border-[#4a4a4a] text-white placeholder:text-[#a0a0a0] rounded-lg h-11 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-400"
              />
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                placeholder="+7 (___) ___-__-__"
                className="bg-white/10 border-[#4a4a4a] text-white placeholder:text-[#a0a0a0] rounded-lg h-11 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-400"
              />
              <Textarea
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                placeholder="Комментарий к заказу"
                rows={3}
                className="bg-white/10 border-[#4a4a4a] text-white placeholder:text-[#a0a0a0] rounded-lg resize-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-400"
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black hover:bg-[#e5e5e5] rounded-lg py-5 text-base font-semibold tracking-wide transition-all"
              >
                {loading ? "Отправляем..." : "Оформить заказ"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;