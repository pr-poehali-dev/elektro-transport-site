import Header from "@/components/Header";
import SEO, { PHONE, PHONE_DISPLAY, CITIES } from "@/components/SEO";
import Icon from "@/components/ui/icon";

const deliveryOptions = [
  {
    icon: "MapPin",
    title: "Минск",
    time: "1–2 рабочих дня",
    price: "от 10 BYN",
    desc: "Доставка курьером по городу или самовывоз",
  },
  {
    icon: "Truck",
    title: "Области и крупные города",
    time: "2–4 рабочих дня",
    price: "от 15 BYN",
    desc: "Гомель, Витебск, Брест, Гродно, Могилёв и другие города",
  },
  {
    icon: "Package",
    title: "Районные центры и сёла",
    time: "3–7 рабочих дней",
    price: "от 20 BYN",
    desc: "Доставка по всей территории Республики Беларусь",
  },
];

const DeliveryPage = () => {
  return (
    <>
      <SEO
        title="Доставка электровелосипедов по Беларуси — Electro Motors"
        description="Доставка электровелосипедов и электросамокатов по всей Беларуси. Минск — от 1 дня. Гомель, Витебск, Брест, Гродно, Могилёв — 2-4 дня. Доставка во все города РБ."
        keywords="доставка электровелосипед Беларусь, доставка электросамокат Минск, доставка электротранспорт РБ"
        canonical="/delivery"
        breadcrumbs={[{ name: "Доставка", url: "/delivery" }]}
      />
      <div className="min-h-screen bg-black text-white">
        <Header />

        <main className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <nav className="text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-white transition-colors">Главная</a>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Доставка</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-light tracking-widest mb-6 text-white">
            ДОСТАВКА
          </h1>
          <div className="w-16 h-px bg-blue-400 mb-12" />

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {deliveryOptions.map((option) => (
              <div key={option.title} className="border border-white/10 p-6">
                <Icon name={option.icon} size={32} className="text-blue-400 mb-4" />
                <h2 className="text-white font-medium text-lg mb-2">{option.title}</h2>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                  <Icon name="Clock" size={14} />
                  <span>{option.time}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400 font-medium mb-3">
                  <Icon name="CreditCard" size={14} />
                  <span>{option.price}</span>
                </div>
                <p className="text-gray-500 text-sm">{option.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="border border-white/10 p-8">
              <h2 className="text-xl font-light tracking-widest mb-6 text-white">КАК МЫ ДОСТАВЛЯЕМ</h2>
              <ul className="space-y-4">
                {[
                  "Упаковываем технику в защитную упаковку — велосипед доедет в целости",
                  "Отправляем с надёжными партнёрами: СДЭК, Белпочта, Европочта",
                  "Уведомляем об отправке и даём трек-номер для отслеживания",
                  "Доставляем до двери или пункта выдачи — на ваш выбор",
                  "Проверяем товар вместе с вами при получении",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <Icon name="CheckCircle" size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/10 p-8">
              <h2 className="text-xl font-light tracking-widest mb-6 text-white">ОПЛАТА</h2>
              <ul className="space-y-4">
                {[
                  "Наличными при получении (по всей РБ)",
                  "Картой Visa/MasterCard онлайн при заказе",
                  "Рассрочка 0% на срок до 12 месяцев",
                  "Безналичный расчёт для юридических лиц",
                  "Предоплата 100% для нестандартных заказов",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <Icon name="CheckCircle" size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border border-white/10 p-8 mb-12">
            <h2 className="text-xl font-light tracking-widest mb-6 text-white">ДОСТАВЛЯЕМ ВО ВСЕ ГОРОДА БЕЛАРУСИ</h2>
            <div className="flex flex-wrap gap-3">
              {CITIES.map((city) => (
                <span key={city} className="border border-white/20 text-gray-300 text-sm px-3 py-1">
                  {city}
                </span>
              ))}
              <span className="border border-blue-400/40 text-blue-400 text-sm px-3 py-1">
                и другие города РБ
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">Уточнить стоимость и сроки доставки в ваш город:</p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 text-2xl font-light text-white hover:text-blue-400 transition-colors"
            >
              <Icon name="Phone" size={24} />
              {PHONE_DISPLAY}
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default DeliveryPage;
