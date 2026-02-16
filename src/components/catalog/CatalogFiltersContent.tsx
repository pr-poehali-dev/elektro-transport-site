import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface CatalogFiltersContentProps {
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
  sortBy: "default" | "price-asc" | "price-desc";
  setSortBy: (value: "default" | "price-asc" | "price-desc") => void;
  resetFilters: () => void;
  idPrefix?: string;
}

const CatalogFiltersContent = ({
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
  sortBy,
  setSortBy,
  resetFilters,
  idPrefix = "",
}: CatalogFiltersContentProps) => {
  const prefix = idPrefix ? `${idPrefix}-` : "";

  return (
    <>
      <h3 className="text-xl font-semibold mb-5 text-white tracking-wide">Категории</h3>
      <div className="space-y-1 mb-8">
        <Button
          variant="ghost"
          className={`w-full justify-start rounded-none border-l-2 ${
            selectedCategory === null
              ? "border-white bg-white/10 text-white"
              : "border-transparent text-[#b0b0b0] hover:text-white hover:bg-white/5"
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
                ? "border-white bg-white/10 text-white"
                : "border-transparent text-[#b0b0b0] hover:text-white hover:bg-white/5"
            }`}
            onClick={() => setSelectedCategory(cat.name)}
          >
            <Icon name="Bike" className="mr-2 h-4 w-4" />
            {cat.name}
          </Button>
        ))}
      </div>

      <div className="mb-6 pb-6 border-b border-[#2a2a2a]">
        <h4 className="text-base font-semibold mb-4 text-white tracking-wide">Бренд</h4>
        <div className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-3">
              <Checkbox
                id={`${prefix}${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
                className="border-[#4a4a4a] data-[state=checked]:bg-white data-[state=checked]:text-black w-5 h-5"
              />
              <label
                htmlFor={`${prefix}${brand}`}
                className="text-base cursor-pointer text-white hover:text-blue-400 transition-colors"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6 pb-6 border-b border-[#2a2a2a]">
        <h4 className="text-base font-semibold mb-4 text-white tracking-wide">Мощность (Вт)</h4>
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-white font-medium">
            <span>{powerRange[0]}</span>
            <span>{powerRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="3000"
            step="100"
            value={powerRange[1]}
            onChange={(e) => setPowerRange([0, parseInt(e.target.value)])}
            className="w-full h-1 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer accent-white"
          />
        </div>
      </div>

      <div className="mb-6 pb-6 border-b border-[#2a2a2a]">
        <h4 className="text-base font-semibold mb-4 text-white tracking-wide">
          Доставка (до {deliveryDays} дней)
        </h4>
        <div className="space-y-3">
          <input
            type="range"
            min="3"
            max="30"
            step="1"
            value={deliveryDays}
            onChange={(e) => setDeliveryDays(parseInt(e.target.value))}
            className="w-full h-1 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer accent-white"
          />
          <div className="flex justify-between text-sm text-white font-medium">
            <span>3 дня</span>
            <span>30 дней</span>
          </div>
        </div>
      </div>

      <div className="mb-6 pb-6 border-b border-[#2a2a2a]">
        <div className="flex items-center space-x-3">
          <Checkbox
            id={`${prefix}inStock`}
            checked={onlyInStock}
            onCheckedChange={(checked) => setOnlyInStock(checked as boolean)}
            className="border-[#4a4a4a] data-[state=checked]:bg-white data-[state=checked]:text-black w-5 h-5"
          />
          <label
            htmlFor={`${prefix}inStock`}
            className="text-base cursor-pointer text-white hover:text-blue-400 transition-colors"
          >
            Только в наличии
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-base font-semibold mb-4 text-white tracking-wide">Сортировка по цене</h4>
        <RadioGroup
          value={sortBy}
          onValueChange={(value) => setSortBy(value as "default" | "price-asc" | "price-desc")}
        >
          <div className="flex items-center space-x-3 mb-3">
            <RadioGroupItem value="default" id={`${prefix}sort-default`} className="border-[#4a4a4a] text-white" />
            <Label htmlFor={`${prefix}sort-default`} className="text-base cursor-pointer text-white hover:text-blue-400 transition-colors">
              По умолчанию
            </Label>
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <RadioGroupItem value="price-asc" id={`${prefix}sort-asc`} className="border-[#4a4a4a] text-white" />
            <Label htmlFor={`${prefix}sort-asc`} className="text-base cursor-pointer text-white hover:text-blue-400 transition-colors">
              От дешёвых к дорогим
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="price-desc" id={`${prefix}sort-desc`} className="border-[#4a4a4a] text-white" />
            <Label htmlFor={`${prefix}sort-desc`} className="text-base cursor-pointer text-white hover:text-blue-400 transition-colors">
              От дорогих к дешёвым
            </Label>
          </div>
        </RadioGroup>
      </div>

      <Button
        className="w-full bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-none tracking-wide font-light transition-all duration-300"
        onClick={resetFilters}
      >
        Сбросить фильтры
      </Button>
    </>
  );
};

export default CatalogFiltersContent;
