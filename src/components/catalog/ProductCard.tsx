import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
  return (
    <GlowCard glowIntensity="medium" disableGlow="md" className="group overflow-hidden bg-gradient-to-br from-[#2c3038] to-[#1a1d23] backdrop-blur-sm rounded-lg">
      <GlowCardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-[#1a1a1a] rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.inStock ? (
              <Badge className="bg-green-500/90 text-white border-0 font-semibold px-3 py-1">
                В наличии
              </Badge>
            ) : (
              <Badge className="bg-orange-500/90 text-white border-0 font-semibold px-3 py-1">
                Под заказ
              </Badge>
            )}
            {product.deliveryDays <= 7 && (
              <Badge className="bg-blue-500/90 text-white border-0 font-semibold px-3 py-1">
                Быстрая доставка
              </Badge>
            )}
          </div>
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onToggleCompare(product.id)}
              className={`h-9 w-9 rounded-none backdrop-blur-sm transition-all duration-300 ${
                isCompared
                  ? "bg-white text-black hover:bg-white/90 border border-white"
                  : "bg-black/40 text-white hover:bg-white hover:text-black border border-white/20"
              }`}
            >
              <Icon name="GitCompare" size={16} />
            </Button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-light text-white text-xl mb-2 tracking-tight">{product.name}</h3>
              <p className="text-sm text-[#a0a0a0] tracking-wider uppercase">{product.brand}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-3 mb-6">
            <div className="bg-gradient-to-br from-[#2a2e35] to-[#1f2229] border border-white/10 p-2 md:p-3 rounded-none shadow-[0_0_10px_rgba(96,165,250,0.1)]">
              <div className="text-[10px] md:text-xs text-[#a0a0a0] tracking-[0.15em] md:tracking-[0.2em] uppercase mb-1">СКОРОСТЬ</div>
              <div className="text-sm md:text-lg font-normal text-white tracking-tight">{product.maxSpeed} км/ч</div>
            </div>
            <div className="bg-gradient-to-br from-[#2a2e35] to-[#1f2229] border border-white/10 p-2 md:p-3 rounded-none shadow-[0_0_10px_rgba(96,165,250,0.1)]">
              <div className="text-[10px] md:text-xs text-[#a0a0a0] tracking-[0.15em] md:tracking-[0.2em] uppercase mb-1">ЗАПАС ХОДА</div>
              <div className="text-sm md:text-lg font-normal text-white tracking-tight">{product.range} км</div>
            </div>
            <div className="bg-gradient-to-br from-[#2a2e35] to-[#1f2229] border border-white/10 p-2 md:p-3 rounded-none shadow-[0_0_10px_rgba(96,165,250,0.1)]">
              <div className="text-[10px] md:text-xs text-[#a0a0a0] tracking-[0.15em] md:tracking-[0.2em] uppercase mb-1">МОЩНОСТЬ</div>
              <div className="text-sm md:text-lg font-normal text-white tracking-tight">{product.power} Вт</div>
            </div>
            <div className="bg-gradient-to-br from-[#2a2e35] to-[#1f2229] border border-white/10 p-2 md:p-3 rounded-none shadow-[0_0_10px_rgba(96,165,250,0.1)]">
              <div className="text-[10px] md:text-xs text-[#a0a0a0] tracking-[0.15em] md:tracking-[0.2em] uppercase mb-1">ДОСТАВКА</div>
              <div className="text-sm md:text-lg font-normal text-white tracking-tight">{product.deliveryDays} дн</div>
            </div>
          </div>

          <div className="pt-5 border-t border-[#4a4a4a]">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-3xl font-light text-white tracking-tight">{product.price.toLocaleString()} ₽</span>
              {product.oldPrice && (
                <span className="text-lg text-[#707070] line-through">{product.oldPrice.toLocaleString()} ₽</span>
              )}
            </div>
            <div className="flex justify-end">
              <Link to={`/product/${product.id}`}>
                <Button size="sm" className="bg-white text-black hover:bg-[#e5e5e5] rounded-none px-6 py-3 font-light tracking-wider uppercase text-sm transition-all duration-300">
                  Подробнее
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </GlowCardContent>
    </GlowCard>
  );
};

export default ProductCard;