import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface CatalogHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setShowCompare: (show: boolean) => void;
  compareListLength: number;
  setShowFilters: (show: boolean) => void;
}

const CatalogHeader = ({
  searchQuery,
  setSearchQuery,
  setShowCompare,
  compareListLength,
  setShowFilters
}: CatalogHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">Каталог товаров</h1>
        <p className="text-[#b0b0b0] text-sm md:text-base">Выберите идеальный электротранспорт</p>
      </div>
      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="relative flex-1 md:flex-initial">
          <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#b0b0b0]" />
          <Input
            type="text"
            placeholder="Поиск товаров..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-[#b0b0b0] w-full md:w-64"
          />
        </div>
        <Button
          onClick={() => setShowCompare(true)}
          variant="outline"
          className="border-white/20 text-white hover:bg-white/10 relative"
        >
          <Icon name="ArrowLeftRight" className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">Сравнить</span>
          {compareListLength > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {compareListLength}
            </span>
          )}
        </Button>
        <Button
          onClick={() => setShowFilters(true)}
          variant="outline"
          className="lg:hidden border-white/20 text-white hover:bg-white/10"
        >
          <Icon name="SlidersHorizontal" className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CatalogHeader;
