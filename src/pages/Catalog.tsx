import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlowCard, GlowCardContent } from "@/components/ui/glow-card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import { products } from "@/data/products";
import CatalogFiltersContent from "@/components/catalog/CatalogFiltersContent";
import ProductCard from "@/components/catalog/ProductCard";

const categories = [
  { name: "Электровелосипеды", icon: "Bike" },
  { name: "Электроскутеры", icon: "Bike" },
  { name: "Электротрициклы", icon: "Bike" },
  { name: "Электросамокаты", icon: "Bike" },
];

const brands = ["AVM", "BNP", "SmartBalance", "MyWay"];

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [compareList, setCompareList] = useState<number[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [powerRange, setPowerRange] = useState<[number, number]>([0, 3000]);
  const [deliveryDays, setDeliveryDays] = useState(30);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");

  useEffect(() => {
    const searchFromUrl = searchParams.get("search");
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    const handleOpenFilters = () => setShowFilters(true);
    const handleSearchUpdate = (e: CustomEvent) => {
      setSearchQuery(e.detail);
    };

    window.addEventListener("openFilters", handleOpenFilters);
    window.addEventListener("searchUpdate", handleSearchUpdate as EventListener);

    return () => {
      window.removeEventListener("openFilters", handleOpenFilters);
      window.removeEventListener("searchUpdate", handleSearchUpdate as EventListener);
    };
  }, []);

  const filteredProducts = products
    .filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
      if (p.power < powerRange[0] || p.power > powerRange[1]) return false;
      if (p.deliveryDays > deliveryDays) return false;
      if (onlyInStock && !p.inStock) return false;
      if (
        searchQuery &&
        !p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !p.category.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0;
    });

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleCompare = (id: number) => {
    setCompareList((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const compareProducts = products.filter((p) => compareList.includes(p.id));

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedBrands([]);
    setPowerRange([0, 3000]);
    setDeliveryDays(30);
    setOnlyInStock(false);
    setSortBy("default");
  };

  const filterProps = {
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
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <section className="relative py-12 md:py-24 mb-16 md:mb-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            className="hidden md:block absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M960,0 L980,120 L940,160 L970,280 L930,350 L965,480 L945,560 L975,680 L940,760 L970,880 L950,960 L975,1080"
              stroke="#60a5fa"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M960,0 L980,120 L940,160 L970,280 L930,350 L965,480 L945,560 L975,680 L940,760 L970,880 L950,960 L975,1080"
              stroke="#ffffff"
              strokeWidth="1.5"
              fill="none"
              opacity="0.8"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-[280px_1fr] gap-6">
            <aside className="hidden lg:block">
              <GlowCard
                glowIntensity="low"
                hoverEffect={false}
                className="bg-gradient-to-br from-[#2c3038] to-[#1a1d23] backdrop-blur-sm rounded-lg"
              >
                <GlowCardContent className="p-6">
                  <CatalogFiltersContent {...filterProps} />
                </GlowCardContent>
              </GlowCard>
            </aside>

            <div className="w-full">
              <div className="flex items-center justify-between mb-6 md:mb-10">
                <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">Каталог</h2>
                {compareList.length > 0 && (
                  <Button
                    onClick={() => setShowCompare(!showCompare)}
                    className="bg-white text-black hover:bg-[#e5e5e5] rounded-none px-6 py-2 font-light tracking-wide"
                  >
                    <Icon name="GitCompare" size={18} className="mr-2" />
                    Сравнить ({compareList.length})
                  </Button>
                )}
              </div>

              {showCompare && compareProducts.length > 0 && (
                <GlowCard
                  glowIntensity="medium"
                  hoverEffect={false}
                  className="mb-8 bg-gradient-to-br from-[#2c3038] to-[#1a1d23] backdrop-blur-sm rounded-lg"
                >
                  <GlowCardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-light text-white">Сравнение моделей</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setShowCompare(false);
                          setCompareList([]);
                        }}
                        className="text-[#b0b0b0] hover:text-white hover:bg-white/5"
                      >
                        <Icon name="X" size={18} />
                      </Button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-[#3a3a3a]">
                            <th className="text-left py-3 px-2 text-[#707070] font-normal">Параметр</th>
                            {compareProducts.map((p) => (
                              <th key={p.id} className="text-left py-3 px-2 font-normal text-white">
                                {p.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="text-white">
                          <tr className="border-b border-[#2a2a2a]">
                            <td className="py-3 px-2 text-[#707070]">Скорость</td>
                            {compareProducts.map((p) => (
                              <td key={p.id} className="py-3 px-2">{p.maxSpeed} км/ч</td>
                            ))}
                          </tr>
                          <tr className="border-b border-[#2a2a2a]">
                            <td className="py-3 px-2 text-[#707070]">Запас хода</td>
                            {compareProducts.map((p) => (
                              <td key={p.id} className="py-3 px-2">{p.range} км</td>
                            ))}
                          </tr>
                          <tr className="border-b border-[#2a2a2a]">
                            <td className="py-3 px-2 text-[#707070]">Мощность</td>
                            {compareProducts.map((p) => (
                              <td key={p.id} className="py-3 px-2">{p.power} Вт</td>
                            ))}
                          </tr>
                          <tr>
                            <td className="py-3 px-2 text-[#707070]">Доставка</td>
                            {compareProducts.map((p) => (
                              <td key={p.id} className="py-3 px-2">{p.deliveryDays} дней</td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </GlowCardContent>
                </GlowCard>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isCompared={compareList.includes(product.id)}
                    onToggleCompare={toggleCompare}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <Icon name="SearchX" size={64} className="mx-auto mb-4 text-[#707070]" />
                  <h3 className="text-xl font-light text-white mb-2">Товары не найдены</h3>
                  <p className="text-[#b0b0b0] mb-6">Попробуйте изменить параметры фильтра</p>
                  <Button
                    onClick={resetFilters}
                    className="bg-white text-black hover:bg-[#e5e5e5] rounded-none px-8 font-light tracking-wide"
                  >
                    Сбросить фильтры
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {showFilters && (
        <div
          className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-[110]"
          onClick={() => setShowFilters(false)}
        >
          <GlowCard
            glowIntensity="medium"
            hoverEffect={false}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-br from-[#2c3038] to-[#1a1d23] border-t border-[#2a2a2a] max-h-[85vh] overflow-y-auto rounded-t-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-br from-[#2c3038] to-[#1a1d23] border-b border-[#2a2a2a] p-4 flex items-center justify-between z-10">
              <h3 className="text-lg font-light text-white tracking-wide">Фильтры</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(false)}
                className="text-[#b0b0b0] hover:text-white hover:bg-white/5"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>

            <div className="p-4 space-y-6">
              <div>
                <h4 className="text-sm font-light mb-3 text-white tracking-wide">Поиск</h4>
                <Input
                  type="text"
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 text-white placeholder:text-[#a0a0a0] rounded-none h-9 text-sm focus:border-white/40 transition-colors mb-4"
                />
              </div>

              <CatalogFiltersContent {...filterProps} idPrefix="mobile" />

              <div className="pt-4 border-t border-[#2a2a2a] flex gap-3">
                <Button
                  className="flex-1 bg-white text-black hover:bg-[#e5e5e5] rounded-none font-light"
                  onClick={() => setShowFilters(false)}
                >
                  Применить
                </Button>
              </div>
            </div>
          </GlowCard>
        </div>
      )}
    </div>
  );
};

export default Catalog;