import { useState, useEffect } from "react";
import Header from "@/components/Header";
import CatalogFilters from "@/components/catalog/CatalogFilters";
import CatalogHeader from "@/components/catalog/CatalogHeader";
import ProductGrid from "@/components/catalog/ProductGrid";
import ComparePanel from "@/components/catalog/ComparePanel";
import { Product } from "@/components/catalog/types";

const products: Product[] = [
  {
    id: 1,
    name: "E-Bike Pro 3000",
    category: "Электровелосипеды",
    price: 89900,
    image: "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/468bb9c8-33c9-4cac-b03e-f99275a9ba64.jpg",
    maxSpeed: 45,
    range: 80,
    weight: 22,
    power: 750,
    brand: "Xiaomi",
    deliveryDays: 7,
    inStock: true
  },
  {
    id: 2,
    name: "Urban Cruiser X",
    category: "Электровелосипеды",
    price: 65900,
    image: "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/468bb9c8-33c9-4cac-b03e-f99275a9ba64.jpg",
    maxSpeed: 35,
    range: 60,
    weight: 19,
    power: 500,
    brand: "Ninebot",
    deliveryDays: 14,
    inStock: true
  },
  {
    id: 3,
    name: "Smart Scooter Z1",
    category: "Электроскутеры",
    price: 149900,
    image: "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/726f93d2-7124-40c0-a336-d7135051fdf2.jpg",
    maxSpeed: 60,
    range: 100,
    weight: 85,
    power: 3000,
    brand: "Yadea",
    deliveryDays: 30,
    inStock: false
  },
  {
    id: 4,
    name: "City Scooter Pro",
    category: "Электроскутеры",
    price: 119900,
    image: "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/726f93d2-7124-40c0-a336-d7135051fdf2.jpg",
    maxSpeed: 50,
    range: 80,
    weight: 72,
    power: 2000,
    brand: "Sunra",
    deliveryDays: 21,
    inStock: true
  },
  {
    id: 5,
    name: "Cargo Trike Max",
    category: "Электротрициклы",
    price: 179900,
    image: "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/8928e07e-6b0a-4bdc-a4af-dcf6583abb8b.jpg",
    maxSpeed: 40,
    range: 90,
    weight: 95,
    power: 1500,
    brand: "Eltreco",
    deliveryDays: 14,
    inStock: true
  },
  {
    id: 6,
    name: "Family Trike Comfort",
    category: "Электротрициклы",
    price: 139900,
    image: "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/8928e07e-6b0a-4bdc-a4af-dcf6583abb8b.jpg",
    maxSpeed: 30,
    range: 70,
    weight: 88,
    power: 1000,
    brand: "Xiaomi",
    deliveryDays: 7,
    inStock: true
  },
  {
    id: 7,
    name: "Urban Kick S",
    category: "Электросамокаты",
    price: 45900,
    image: "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/726f93d2-7124-40c0-a336-d7135051fdf2.jpg",
    maxSpeed: 30,
    range: 40,
    weight: 14,
    power: 350,
    brand: "Ninebot",
    deliveryDays: 3,
    inStock: true
  },
  {
    id: 8,
    name: "Pro Kick Max",
    category: "Электросамокаты",
    price: 69900,
    image: "https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/726f93d2-7124-40c0-a336-d7135051fdf2.jpg",
    maxSpeed: 40,
    range: 60,
    weight: 18,
    power: 500,
    brand: "Yadea",
    deliveryDays: 7,
    inStock: false
  }
];

const categories = [
  { name: "Электровелосипеды", icon: "Bike" },
  { name: "Электроскутеры", icon: "Bike" },
  { name: "Электротрициклы", icon: "Bike" },
  { name: "Электросамокаты", icon: "Bike" }
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [compareList, setCompareList] = useState<number[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [powerRange, setPowerRange] = useState<[number, number]>([0, 3000]);
  const [deliveryDays, setDeliveryDays] = useState(30);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const handleOpenFilters = () => setShowFilters(true);
    window.addEventListener('openFilters', handleOpenFilters);
    return () => window.removeEventListener('openFilters', handleOpenFilters);
  }, []);

  const brands = ["Xiaomi", "Ninebot", "Yadea", "Sunra", "Eltreco"];

  const filteredProducts = products.filter((p) => {
    if (selectedCategory && p.category !== selectedCategory) return false;
    if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
    if (p.power < powerRange[0] || p.power > powerRange[1]) return false;
    if (p.deliveryDays > deliveryDays) return false;
    if (onlyInStock && !p.inStock) return false;
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !p.category.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !p.brand.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
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
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <section className="relative py-12 md:py-24 mb-16 md:mb-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="hidden md:block absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            <path d="M960,0 L980,120 L940,160 L970,280 L930,350 L965,480 L945,560 L975,680 L940,760 L970,880 L950,960 L975,1080" 
                  stroke="#60a5fa" strokeWidth="3" fill="none" opacity="0.6"/>
            <path d="M960,0 L980,120 L940,160 L970,280 L930,350 L965,480 L945,560 L975,680 L940,760 L970,880 L950,960 L975,1080" 
                  stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.8"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-[280px_1fr] gap-6">
            <CatalogFilters
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              brands={brands}
              selectedBrands={selectedBrands}
              toggleBrand={toggleBrand}
              powerRange={powerRange}
              setPowerRange={setPowerRange}
              deliveryDays={deliveryDays}
              setDeliveryDays={setDeliveryDays}
              onlyInStock={onlyInStock}
              setOnlyInStock={setOnlyInStock}
              resetFilters={resetFilters}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
            />

            <div>
              <CatalogHeader
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setShowCompare={setShowCompare}
                compareListLength={compareList.length}
                setShowFilters={setShowFilters}
              />

              <ProductGrid
                products={filteredProducts}
                compareList={compareList}
                toggleCompare={toggleCompare}
              />
            </div>
          </div>
        </div>
      </section>

      <ComparePanel
        showCompare={showCompare}
        setShowCompare={setShowCompare}
        compareProducts={compareProducts}
        toggleCompare={toggleCompare}
      />
    </div>
  );
};

export default Catalog;
