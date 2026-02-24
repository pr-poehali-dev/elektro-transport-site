import { useState } from "react";
import { Link } from "react-router-dom";
import { GlowCard, GlowCardContent } from "@/components/ui/glow-card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import ConsultModal from "@/components/ConsultModal";
import { calcMonthlyPayment } from "@/utils/credit";

interface ProductCardProps {
  product: Product;
  isCompared: boolean;
  onToggleCompare: (id: number) => void;
}

const ProductCard = ({ product, isCompared, onToggleCompare }: ProductCardProps) => {
  const [showModal, setShowModal] = useState(false);

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
              <div className="px-3 md:px-4 pt-3 md:pt-4 pb-2 md:pb-3">
                <div className="flex items-center justify-between">
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
                <div className="text-[10px] md:text-xs text-[#606060] mt-1">
                  В кредит от <span className="text-[#a0a0a0]">{calcMonthlyPayment(product.price).toLocaleString()} р./мес</span> × 60 мес
                </div>
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

      <ConsultModal
        open={showModal}
        onClose={() => setShowModal(false)}
        title="Оформить заказ"
        subtitle="Оставьте контакты — мы свяжемся в течение 15 минут"
        productName={product.name}
      />
    </>
  );
};

export default ProductCard;