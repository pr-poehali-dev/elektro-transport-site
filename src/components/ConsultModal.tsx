import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface ConsultModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  productName?: string;
}

const BY_PHONE_MASK = "+375 (__) ___-__-__";

const formatByPhone = (value: string): string => {
  const digits = value.replace(/\D/g, "");
  let d = digits;
  if (d.startsWith("375")) d = d.slice(3);
  else if (d.startsWith("80")) d = d.slice(2);
  else if (d.startsWith("8")) d = d.slice(1);

  let result = "+375 ";
  if (d.length === 0) return result;
  const code = d.slice(0, 2);
  result += `(${code}`;
  if (d.length < 2) return result;
  result += ") ";
  const p1 = d.slice(2, 5);
  result += p1;
  if (d.length < 5) return result;
  result += "-";
  const p2 = d.slice(5, 7);
  result += p2;
  if (d.length < 7) return result;
  result += "-";
  const p3 = d.slice(7, 9);
  result += p3;
  return result;
};

const isByPhoneValid = (value: string): boolean => {
  const digits = value.replace(/\D/g, "");
  let d = digits;
  if (d.startsWith("375")) d = d.slice(3);
  else if (d.startsWith("80")) d = d.slice(2);
  else if (d.startsWith("8")) d = d.slice(1);
  return d.length === 9;
};

const ConsultModal = ({
  open,
  onClose,
  title = "Получить консультацию",
  subtitle = "Оставьте контакты — мы ответим в течение 15 минут",
  productName,
}: ConsultModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatByPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !isByPhoneValid(phone)) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setName("");
    setPhone("");
    onClose();
    toast({ title: "Заявка отправлена", description: "Мы свяжемся с вами в ближайшее время." });
  };

  const handleBackdrop = () => onClose();

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
      onClick={handleBackdrop}
    >
      <div
        className="bg-[#0f0f0f] border border-[#2a2a2a] w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#707070] hover:text-white transition-colors"
        >
          <Icon name="X" size={20} />
        </button>
        <h2 className="text-xl font-light text-white tracking-[0.1em] mb-2">{title}</h2>
        {productName && (
          <p className="text-sm text-blue-400 mb-1 font-light">{productName}</p>
        )}
        <p className="text-sm text-[#707070] mb-6 font-light">{subtitle}</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-transparent border-[#2a2a2a] text-white placeholder:text-[#505050] rounded-none focus-visible:ring-0 focus-visible:border-white font-light"
          />
          <div>
            <Input
              placeholder={BY_PHONE_MASK}
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              required
              className="bg-transparent border-[#2a2a2a] text-white placeholder:text-[#505050] rounded-none focus-visible:ring-0 focus-visible:border-white font-light"
            />
            {phone.length > 5 && !isByPhoneValid(phone) && (
              <p className="text-[10px] text-red-400 mt-1">Введите корректный номер (+375 XX XXX-XX-XX)</p>
            )}
          </div>
          <Button
            type="submit"
            disabled={loading || !name.trim() || !isByPhoneValid(phone)}
            className="w-full rounded-none bg-white text-black hover:bg-[#e0e0e0] text-xs tracking-[0.2em] uppercase font-normal h-11 mt-2"
          >
            {loading ? "Отправляем..." : "ОТПРАВИТЬ ЗАЯВКУ"}
          </Button>
        </form>
        <p className="text-[10px] text-[#404040] mt-3">
          Нажимая «Отправить заявку», вы соглашаетесь с{" "}
          <Link to="/privacy" className="text-[#606060] hover:text-[#a0a0a0] underline underline-offset-2 transition-colors">
            политикой конфиденциальности
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ConsultModal;
