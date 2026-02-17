import Header from "@/components/Header";
import SEO, { PHONE, PHONE_DISPLAY } from "@/components/SEO";
import Icon from "@/components/ui/icon";

const warrantyItems = [
  { icon: "Shield", title: "Гарантия 1 год", text: "На все электровелосипеды и самокаты в нашем каталоге действует гарантия производителя сроком 1 год." },
  { icon: "Wrench", title: "Сервисный центр", text: "Ремонт и обслуживание в авторизованных сервисных центрах Беларуси. Не отправляем за границу." },
  { icon: "RotateCcw", title: "Возврат 14 дней", text: "Если техника не подошла, примем обратно в течение 14 дней при сохранении товарного вида." },
  { icon: "Zap", title: "Аккумулятор", text: "На аккумулятор действует отдельная гарантия 6 месяцев. Ёмкость при нормальной эксплуатации сохраняется 2–3 года." },
];

const notCovered = [
  "Механические повреждения в результате падения или удара",
  "Повреждения от воды при использовании в дождь (если модель не водозащищённая)",
  "Самостоятельный ремонт или модификации",
  "Естественный износ тормозных колодок, покрышек, цепи",
  "Повреждения при нарушении правил эксплуатации",
];

const WarrantyPage = () => {
  return (
    <>
      <SEO
        title="Гарантия на электровелосипеды — Electro Motors Беларусь"
        description="Гарантия 1 год на все электровелосипеды и электросамокаты. Сервисное обслуживание в Беларуси. Возврат в течение 14 дней. Electro Motors — надёжный магазин электротранспорта."
        keywords="гарантия электровелосипед Беларусь, сервис электросамокат, гарантийный ремонт электровелосипед"
        canonical="/warranty"
        breadcrumbs={[{ name: "Гарантия", url: "/warranty" }]}
      />
      <div className="min-h-screen bg-black text-white">
        <Header />

        <main className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <nav className="text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-white transition-colors">Главная</a>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Гарантия</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-light tracking-widest mb-6 text-white">
            ГАРАНТИЯ
          </h1>
          <div className="w-16 h-px bg-blue-400 mb-12" />

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {warrantyItems.map((item) => (
              <div key={item.title} className="border border-white/10 p-6 flex gap-4">
                <Icon name={item.icon} size={28} className="text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-white font-medium mb-2">{item.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="border border-white/10 p-8">
              <h2 className="text-xl font-light tracking-widest mb-6 text-white">КАК ОБРАТИТЬСЯ ПО ГАРАНТИИ</h2>
              <ol className="space-y-4">
                {[
                  "Позвоните нам или напишите — опишите проблему",
                  "Наш специалист проконсультирует и назначит диагностику",
                  "Привезите технику в сервисный центр или мы организуем забор",
                  "Диагностика в течение 3 рабочих дней",
                  "Ремонт или замена в течение 14 рабочих дней",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <span className="text-blue-400 font-bold w-5 flex-shrink-0">{i + 1}.</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border border-white/10 p-8">
              <h2 className="text-xl font-light tracking-widest mb-6 text-white">НЕ ВХОДИТ В ГАРАНТИЮ</h2>
              <ul className="space-y-3">
                {notCovered.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-400">
                    <Icon name="X" size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border border-blue-400/20 bg-blue-400/5 p-8 mb-12">
            <div className="flex gap-4 items-start">
              <Icon name="Info" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-medium mb-2">Важно сохранять документы</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Для обращения по гарантии необходимо предоставить кассовый или товарный чек, гарантийный талон и документ, удостоверяющий личность. Не выбрасывайте эти документы в течение гарантийного срока.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">Гарантийный случай или вопросы по обслуживанию:</p>
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

export default WarrantyPage;
