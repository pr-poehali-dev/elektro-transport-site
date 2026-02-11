import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Product } from "./types";

interface ComparePanelProps {
  showCompare: boolean;
  setShowCompare: (show: boolean) => void;
  compareProducts: Product[];
  toggleCompare: (id: number) => void;
}

const ComparePanel = ({
  showCompare,
  setShowCompare,
  compareProducts,
  toggleCompare
}: ComparePanelProps) => {
  if (!showCompare) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" onClick={() => setShowCompare(false)}>
      <div className="absolute right-0 top-0 h-full w-full md:w-[600px] lg:w-[800px] bg-[#1a1d23] shadow-xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Сравнение товаров</h2>
            <Button variant="ghost" size="icon" onClick={() => setShowCompare(false)}>
              <Icon name="X" className="h-5 w-5 text-white" />
            </Button>
          </div>

          {compareProducts.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="ArrowLeftRight" className="h-16 w-16 text-[#b0b0b0] mx-auto mb-4" />
              <p className="text-[#b0b0b0]">Выберите товары для сравнения</p>
            </div>
          ) : (
            <div className="space-y-4">
              {compareProducts.map((product) => (
                <Card key={product.id} className="bg-gradient-to-br from-[#2c3038] to-[#1a1d23] border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
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
                        <div className="flex items-center justify-between">
                          <p className="text-xl font-bold text-white">{product.price.toLocaleString()} ₽</p>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => toggleCompare(product.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                          >
                            <Icon name="X" className="h-4 w-4 mr-1" />
                            Удалить
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparePanel;
