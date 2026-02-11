import { Button } from "@/components/ui/button";
import { GlowCard, GlowCardContent } from "@/components/ui/glow-card";
import Icon from "@/components/ui/icon";
import { Checkbox } from "@/components/ui/checkbox";

interface CatalogFiltersProps {
  categories: { name: string; icon: string }[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  brands: string[];
  selectedBrands: string[];
  toggleBrand: (brand: string) => void;
  powerRange: [number, number];
  setPowerRange: (range: [number, number]) => void;
  deliveryDays: number;
  setDeliveryDays: (days: number) => void;
  onlyInStock: boolean;
  setOnlyInStock: (value: boolean) => void;
  resetFilters: () => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

const CatalogFilters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  brands,
  selectedBrands,
  toggleBrand,
  powerRange,
  setPowerRange,
  deliveryDays,
  setDeliveryDays,
  onlyInStock,
  setOnlyInStock,
  resetFilters,
  showFilters,
  setShowFilters
}: CatalogFiltersProps) => {
  return (
    <>
      <aside className="hidden lg:block">
        <GlowCard glowIntensity="low" hoverEffect={false} className="bg-gradient-to-br from-[#2c3038] to-[#1a1d23] backdrop-blur-sm rounded-lg">
          <GlowCardContent className="p-6">
            <h3 className="text-xl font-semibold mb-5 text-white tracking-wide">Категории</h3>
            <div className="space-y-1 mb-8">
              <Button
                variant="ghost"
                className={`w-full justify-start rounded-none border-l-2 ${
                  selectedCategory === null 
                    ? 'border-white bg-white/10 text-white' 
                    : 'border-transparent text-[#b0b0b0] hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                <Icon name="LayoutGrid" className="mr-2 h-4 w-4" />
                Все категории
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.name}
                  variant="ghost"
                  className={`w-full justify-start rounded-none border-l-2 ${
                    selectedCategory === cat.name 
                      ? 'border-white bg-white/10 text-white' 
                      : 'border-transparent text-[#b0b0b0] hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  <Icon name="Bike" className="mr-2 h-4 w-4" />
                  {cat.name}
                </Button>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6 mb-6">
              <h4 className="text-sm font-semibold mb-3 text-white">Бренд</h4>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={brand}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={() => toggleBrand(brand)}
                    />
                    <label htmlFor={brand} className="text-sm text-[#b0b0b0] cursor-pointer">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 mb-6">
              <h4 className="text-sm font-semibold mb-3 text-white">Мощность (Вт)</h4>
              <div className="flex items-center gap-3 mb-2">
                <input
                  type="number"
                  value={powerRange[0]}
                  onChange={(e) => setPowerRange([Number(e.target.value), powerRange[1]])}
                  className="w-20 bg-white/5 border border-white/10 rounded px-2 py-1 text-sm text-white"
                  min="0"
                  max="3000"
                />
                <span className="text-[#b0b0b0]">—</span>
                <input
                  type="number"
                  value={powerRange[1]}
                  onChange={(e) => setPowerRange([powerRange[0], Number(e.target.value)])}
                  className="w-20 bg-white/5 border border-white/10 rounded px-2 py-1 text-sm text-white"
                  min="0"
                  max="3000"
                />
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 mb-6">
              <h4 className="text-sm font-semibold mb-3 text-white">Срок доставки</h4>
              <input
                type="range"
                min="1"
                max="30"
                value={deliveryDays}
                onChange={(e) => setDeliveryDays(Number(e.target.value))}
                className="w-full accent-white"
              />
              <p className="text-sm text-[#b0b0b0] mt-2">До {deliveryDays} дней</p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="inStock"
                  checked={onlyInStock}
                  onCheckedChange={(checked) => setOnlyInStock(checked as boolean)}
                />
                <label htmlFor="inStock" className="text-sm text-[#b0b0b0] cursor-pointer">
                  Только в наличии
                </label>
              </div>
            </div>

            <Button
              onClick={resetFilters}
              variant="outline"
              className="w-full mt-6 border-white/20 text-white hover:bg-white/10"
            >
              Сбросить фильтры
            </Button>
          </GlowCardContent>
        </GlowCard>
      </aside>

      {showFilters && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" onClick={() => setShowFilters(false)}>
          <div className="absolute right-0 top-0 h-full w-80 bg-[#1a1d23] shadow-xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Фильтры</h3>
                <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                  <Icon name="X" className="h-5 w-5 text-white" />
                </Button>
              </div>

              <h4 className="text-sm font-semibold mb-3 text-white">Категории</h4>
              <div className="space-y-1 mb-6">
                <Button
                  variant="ghost"
                  className={`w-full justify-start rounded-none border-l-2 ${
                    selectedCategory === null 
                      ? 'border-white bg-white/10 text-white' 
                      : 'border-transparent text-[#b0b0b0] hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setSelectedCategory(null)}
                >
                  <Icon name="LayoutGrid" className="mr-2 h-4 w-4" />
                  Все категории
                </Button>
                {categories.map((cat) => (
                  <Button
                    key={cat.name}
                    variant="ghost"
                    className={`w-full justify-start rounded-none border-l-2 ${
                      selectedCategory === cat.name 
                        ? 'border-white bg-white/10 text-white' 
                        : 'border-transparent text-[#b0b0b0] hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setSelectedCategory(cat.name)}
                  >
                    <Icon name="Bike" className="mr-2 h-4 w-4" />
                    {cat.name}
                  </Button>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6 mb-6">
                <h4 className="text-sm font-semibold mb-3 text-white">Бренд</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={`mobile-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => toggleBrand(brand)}
                      />
                      <label htmlFor={`mobile-${brand}`} className="text-sm text-[#b0b0b0] cursor-pointer">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 mb-6">
                <h4 className="text-sm font-semibold mb-3 text-white">Мощность (Вт)</h4>
                <div className="flex items-center gap-3 mb-2">
                  <input
                    type="number"
                    value={powerRange[0]}
                    onChange={(e) => setPowerRange([Number(e.target.value), powerRange[1]])}
                    className="w-20 bg-white/5 border border-white/10 rounded px-2 py-1 text-sm text-white"
                    min="0"
                    max="3000"
                  />
                  <span className="text-[#b0b0b0]">—</span>
                  <input
                    type="number"
                    value={powerRange[1]}
                    onChange={(e) => setPowerRange([powerRange[0], Number(e.target.value)])}
                    className="w-20 bg-white/5 border border-white/10 rounded px-2 py-1 text-sm text-white"
                    min="0"
                    max="3000"
                  />
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 mb-6">
                <h4 className="text-sm font-semibold mb-3 text-white">Срок доставки</h4>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={deliveryDays}
                  onChange={(e) => setDeliveryDays(Number(e.target.value))}
                  className="w-full accent-white"
                />
                <p className="text-sm text-[#b0b0b0] mt-2">До {deliveryDays} дней</p>
              </div>

              <div className="border-t border-white/10 pt-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="mobile-inStock"
                    checked={onlyInStock}
                    onCheckedChange={(checked) => setOnlyInStock(checked as boolean)}
                  />
                  <label htmlFor="mobile-inStock" className="text-sm text-[#b0b0b0] cursor-pointer">
                    Только в наличии
                  </label>
                </div>
              </div>

              <Button
                onClick={resetFilters}
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10"
              >
                Сбросить фильтры
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogFilters;