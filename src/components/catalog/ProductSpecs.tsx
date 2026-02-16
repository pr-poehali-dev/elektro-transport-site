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
          <div key={idx} className="flex justify-between py-3 border-b border-[#3a3a3a] last:border-0 text-base">
            <span className="text-[#a0a0a0]">{spec.label}</span>
            <span className="font-normal text-white text-right">{spec.value}</span>
          </div>
        ))}
      </div>
      {hasMore && (
        <Button
          variant="ghost"
          onClick={() => setShowAll(!showAll)}
          className="w-full mt-4 text-blue-400 hover:text-blue-300 hover:bg-white/5 rounded-none font-light tracking-wide"
        >
          <Icon name={showAll ? "ChevronUp" : "ChevronDown"} size={18} className="mr-2" />
          {showAll ? "Скрыть" : `Все характеристики (${specs.length})`}
        </Button>
      )}
    </div>
  );
};

export default ProductSpecs;
