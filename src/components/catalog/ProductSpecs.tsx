import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ProductSpecsProps {
  specs: { label: string; value: string }[];
  initialVisible?: number;
}

const ProductSpecs = ({ specs, initialVisible = 6 }: ProductSpecsProps) => {
  const [showAll, setShowAll] = useState(false);
  const visibleSpecs = showAll ? specs : specs.slice(0, initialVisible);
  const hasMore = specs.length > initialVisible;

  return (
    <div>
      <div className="space-y-0">
        {visibleSpecs.map((spec, idx) => (
          <div key={idx} className="flex justify-between gap-2 py-2 md:py-3 border-b border-[#3a3a3a] last:border-0 text-xs md:text-base">
            <span className="text-[#a0a0a0] flex-shrink min-w-0">{spec.label}</span>
            <span className="font-normal text-white text-right flex-shrink-0 max-w-[60%] break-words">{spec.value}</span>
          </div>
        ))}
      </div>
      {hasMore && (
        <Button
          variant="ghost"
          onClick={() => setShowAll(!showAll)}
          className="w-full mt-3 md:mt-4 text-xs md:text-sm text-blue-400 hover:text-blue-300 hover:bg-white/5 rounded-none font-light tracking-wide"
        >
          <Icon name={showAll ? "ChevronUp" : "ChevronDown"} size={16} className="mr-1 md:mr-2 md:w-[18px] md:h-[18px]" />
          {showAll ? "Скрыть" : `Все характеристики (${specs.length})`}
        </Button>
      )}
    </div>
  );
};

export default ProductSpecs;