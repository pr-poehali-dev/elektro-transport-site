import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import GlowDivider from "@/components/GlowDivider";

const BY_PHONE_MASK = "+375 (__) ___-__-__";

const formatByPhone = (value: string): string => {
  const digits = value.replace(/\D/g, "");
  let d = digits;
  if (d.startsWith("375")) d = d.slice(3);
  else if (d.startsWith("80")) d = d.slice(2);
  else if (d.startsWith("8")) d = d.slice(1);
  let result = "+375 ";
  if (d.length === 0) return result;
  result += `(${d.slice(0, 2)}`;
  if (d.length < 2) return result;
  result += ") " + d.slice(2, 5);
  if (d.length < 5) return result;
  result += "-" + d.slice(5, 7);
  if (d.length < 7) return result;
  result += "-" + d.slice(7, 9);
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

const Footer = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !isByPhoneValid(phone)) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setName("");
    setPhone("");
    toast({ title: "Заявка отправлена", description: "Мы свяжемся с вами в ближайшее время." });
  };

  return (
    <footer className="bg-[#0a0a0a] pb-20 md:pb-0">
      <GlowDivider />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          {/* Колонка 1 — Контакты */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#505050] mb-5">Контакты</h4>
            <div className="space-y-4">
              <a
                href="tel:+375445000234"
                className="flex items-center gap-3 text-white hover:text-[#c0c0c0] transition-colors group"
              >
                <Icon name="Phone" size={16} className="text-[#505050] group-hover:text-white transition-colors" />
                <span className="text-sm font-light tracking-wide">+375 44 500-02-34</span>
              </a>
              <a
                href="mailto:ecofarinfo@gmail.com"
                className="flex items-center gap-3 text-white hover:text-[#c0c0c0] transition-colors group"
              >
                <Icon name="Mail" size={16} className="text-[#505050] group-hover:text-white transition-colors" />
                <span className="text-sm font-light tracking-wide">ecofarinfo@gmail.com</span>
              </a>
              <div className="flex items-start gap-3">
                <Icon name="MapPin" size={16} className="text-[#505050] mt-0.5 shrink-0" />
                <span className="text-sm font-light text-[#a0a0a0] leading-relaxed">г. Гомель, ул. Могилевская, 1а</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a href="#" className="w-8 h-8 border border-[#2a2a2a] flex items-center justify-center text-[#707070] hover:border-white hover:text-white transition-colors">
                <Icon name="Send" size={14} />
              </a>
              <a href="#" className="w-8 h-8 border border-[#2a2a2a] flex items-center justify-center text-[#707070] hover:border-white hover:text-white transition-colors">
                <Icon name="MessageCircle" size={14} />
              </a>
            </div>
          </div>

          {/* Колонка 2 — Навигация */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#505050] mb-5">Навигация</h4>
            <nav className="space-y-3">
              {[
                { to: "/", label: "Главная" },
                { to: "/catalog", label: "Каталог" },
                { to: "/about", label: "О нас" },
                { to: "/delivery", label: "Доставка" },
                { to: "/warranty", label: "Гарантия" },
                { to: "/contacts", label: "Контакты" },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="block text-sm font-light text-[#707070] hover:text-white transition-colors tracking-wide"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Колонка 3 — Оставить заявку */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#505050] mb-5">Оставить заявку</h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent border-[#2a2a2a] text-white placeholder:text-[#505050] rounded-none focus-visible:ring-0 focus-visible:border-white text-sm font-light"
              />
              <div>
                <Input
                  placeholder={BY_PHONE_MASK}
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(formatByPhone(e.target.value))}
                  className="bg-transparent border-[#2a2a2a] text-white placeholder:text-[#505050] rounded-none focus-visible:ring-0 focus-visible:border-white text-sm font-light"
                />
                {phone.length > 5 && !isByPhoneValid(phone) && (
                  <p className="text-[10px] text-red-400 mt-1">Введите корректный номер (+375 XX XXX-XX-XX)</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={loading || !name.trim() || !isByPhoneValid(phone)}
                className="w-full rounded-none bg-white text-black hover:bg-[#e0e0e0] text-xs tracking-[0.15em] uppercase font-normal h-10"
              >
                {loading ? "Отправляем..." : "Отправить"}
              </Button>
            </form>
            <p className="text-[10px] text-[#404040] mt-3 leading-relaxed">
              Нажимая «Отправить», вы соглашаетесь с{" "}
              <Link to="/privacy" className="text-[#606060] hover:text-[#a0a0a0] underline underline-offset-2 transition-colors">
                политикой конфиденциальности
              </Link>
            </p>
          </div>
        </div>

        {/* Реквизиты */}
        <div className="mt-12 pt-8 border-t border-[#1e1e1e]">
          <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#505050] mb-4">Реквизиты</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-[11px] text-[#505050] font-light leading-relaxed">
            <span>ООО «Экофар» &nbsp;·&nbsp; УНП: 491378254 от 14.06.2022</span>
            <span>Юр. адрес: г. Гомель, ул. Могилевская, 1а</span>
            <span>Директор: Болдовский В. А., действует на основании устава</span>
            <span>Р/С BYN: BY 73 PJCB 3012 4078121000000 933 &nbsp;·&nbsp; BIC PJCBBY2X</span>
            <span>Банк: «Приорбанк» ОАО, ЦБУ 400, г. Гомель, ул. Красноармейская, 3А</span>
            <span>Спец. счёт RUB: BY 46 PJCB 3012 4078121000000 643</span>
            <span>
              <a href="tel:+375445000234" className="hover:text-[#a0a0a0] transition-colors">+375 44 500-02-34</a>
              &nbsp;·&nbsp;
              <a href="mailto:ecofarinfo@gmail.com" className="hover:text-[#a0a0a0] transition-colors">ecofarinfo@gmail.com</a>
            </span>
            <span>
              Документы для договоров:{" "}
              <a href="https://goo.su/QtV5Cv" target="_blank" rel="noopener noreferrer" className="hover:text-[#a0a0a0] transition-colors underline underline-offset-2">
                goo.su/QtV5Cv
              </a>
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[#1e1e1e] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <span className="text-[10px] text-[#404040] tracking-wide">
              © {new Date().getFullYear()} Все права защищены
            </span>
            <Link to="/privacy" className="text-[10px] text-[#404040] hover:text-[#707070] transition-colors tracking-wide">
              Политика конфиденциальности
            </Link>
          </div>

          {/* Разработано в Albe */}
          <a
            href="https://albe.su"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group"
          >
            <span className="text-[10px] text-[#404040] group-hover:text-[#606060] transition-colors tracking-[0.1em] uppercase">
              Разработано в
            </span>
            <img
              src="https://cdn.poehali.dev/files/ac78a282-0d5a-4959-8939-f93cbd32fc9f.png"
              alt="Albe"
              className="h-5 w-auto opacity-60 group-hover:opacity-90 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;