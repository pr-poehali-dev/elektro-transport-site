import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Product } from "./types";

interface ProductGridProps {
  products: Product[];
  compareList: number[];
  toggleCompare: (id: number) => void;
}

const ProductGrid = ({ products, compareList, toggleCompare }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="bg-gradient-to-br from-[#2c3038] to-[#1a1d23] border-white/10 overflow-hidden group hover:border-white/30 transition-all">
          <CardContent className="p-0">
            <div className="relative overflow-hidden h-48">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {!product.inStock && (
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-red-500/90 text-white">
                    Под заказ
                  </Badge>
                </div>
              )}
              <div className="absolute top-3 right-3">
                <Button
                  size="icon"
                  variant="ghost"
                  className={`rounded-full backdrop-blur-sm ${
                    compareList.includes(product.id)
                      ? 'bg-white/90 text-black hover:bg-white'
                      : 'bg-black/50 text-white hover:bg-black/70'
                  }`}
                  onClick={() => toggleCompare(product.id)}
                >
                  <Icon name="ArrowLeftRight" className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs text-[#b0b0b0] mb-1">{product.category}</p>
              <h3 className="text-lg font-semibold text-white mb-3">{product.name}</h3>
              
              <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                <div className="flex items-center text-[#b0b0b0]">
                  <Icon name="Zap" className="h-3 w-3 mr-1" />
                  <span>{product.power} Вт</span>
                </div>
                <div className="flex items-center text-[#b0b0b0]">
                  <Icon name="Gauge" className="h-3 w-3 mr-1" />
                  <span>{product.maxSpeed} км/ч</span>
                </div>
                <div className="flex items-center text-[#b0b0b0]">
                  <Icon name="Battery" className="h-3 w-3 mr-1" />
                  <span>{product.range} км</span>
                </div>
                <div className="flex items-center text-[#b0b0b0]">
                  <Icon name="Weight" className="h-3 w-3 mr-1" />
                  <span>{product.weight} кг</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-2xl font-bold text-white">{product.price.toLocaleString()} ₽</p>
                  <p className="text-xs text-[#b0b0b0]">Доставка {product.deliveryDays} дней</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Link to={`/product/${product.id}`} className="flex-1">
                  <Button className="w-full bg-white text-black hover:bg-white/90">
                    Подробнее
                  </Button>
                </Link>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Icon name="ShoppingCart" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;
