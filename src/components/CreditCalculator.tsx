import { useState } from "react";
import { GlowCard, GlowCardContent } from "@/components/ui/glow-card";
import Icon from "@/components/ui/icon";

const ANNUAL_RATE = 0.1892;

const calcPayment = (price: number, months: number): number => {
  const r = ANNUAL_RATE / 12;
  return Math.round(price * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1));
};

const TERM_OPTIONS = [12, 24, 36, 48, 60];

interface CreditCalculatorProps {
  price: number;
}

const CreditCalculator = ({ price }: CreditCalculatorProps) => {
  const [months, setMonths] = useState(60);
  const [open, setOpen] = useState(false);

  const monthly = calcPayment(price, months);
  const total = monthly * months;
  const overpay = total - price;

  return (
    <GlowCard glowIntensity="none" hoverEffect={false} className="bg-gradient-to-br from-[#2c3038] to-[#1a1d23] border border-white/10 md:border-0 rounded-lg w-full">
      <GlowCardContent className="p-3 md:p-6">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-2">
            <Icon name="Calculator" size={16} className="text-blue-400" />
            <span className="text-sm md:text-base font-normal text-white tracking-wide">Кредитный калькулятор</span>
          </div>
          <Icon name={open ? "ChevronUp" : "ChevronDown"} size={16} className="text-[#707070]" />
        </button>

        {!open && (
          <div className="mt-2 text-xs md:text-sm text-[#707070]">
            от <span className="text-white font-normal">{calcPayment(price, 60).toLocaleString('ru-RU')} р./мес</span> × 60 мес · 18,92% годовых
          </div>
        )}

        {open && (
          <div className="mt-4 space-y-4">
            {/* Срок */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[#a0a0a0] tracking-wide uppercase">Срок</span>
                <span className="text-sm text-white font-normal">{months} мес</span>
              </div>
              <div className="flex gap-2">
                {TERM_OPTIONS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setMonths(t)}
                    className={`flex-1 py-1.5 text-[11px] tracking-wide border transition-colors ${
                      months === t
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-[#a0a0a0] border-[#3a3a3a] hover:border-white hover:text-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Слайдер */}
            <div>
              <input
                type="range"
                min={6}
                max={60}
                step={6}
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full accent-white h-0.5 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#505050] mt-1">
                <span>6 мес</span>
                <span>60 мес</span>
              </div>
            </div>

            {/* Результат */}
            <div className="bg-[#0f1117] border border-white/10 p-3 md:p-4 space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-[#707070]">Ежемесячный платёж</span>
                <span className="text-xl md:text-2xl font-light text-white">{monthly.toLocaleString('ru-RU')} р.</span>
              </div>
              <div className="border-t border-white/10 pt-2 space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-[#707070]">Сумма товара</span>
                  <span className="text-[#a0a0a0]">{price.toLocaleString('ru-RU')} р.</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#707070]">Переплата</span>
                  <span className="text-orange-400">+{overpay.toLocaleString('ru-RU')} р.</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#707070]">Итого за {months} мес</span>
                  <span className="text-white">{total.toLocaleString('ru-RU')} р.</span>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-[#404040] leading-relaxed">
              Ставка 18,92% годовых. Расчёт носит информационный характер. Точные условия уточняйте у менеджера.
            </p>
          </div>
        )}
      </GlowCardContent>
    </GlowCard>
  );
};

export default CreditCalculator;
