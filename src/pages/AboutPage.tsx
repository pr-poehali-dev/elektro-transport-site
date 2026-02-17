import Header from "@/components/Header";
import SEO, { PHONE, PHONE_DISPLAY } from "@/components/SEO";
import Icon from "@/components/ui/icon";

const stats = [
  { icon: "Users", value: "500+", label: "Довольных клиентов" },
  { icon: "Award", value: "4 года", label: "На рынке Беларуси" },
  { icon: "Package", value: "200+", label: "Моделей в каталоге" },
  { icon: "Shield", value: "1 год", label: "Гарантия на технику" },
];

const advantages = [
  { icon: "CheckCircle", title: "Официальная гарантия", text: "Все товары имеют гарантию производителя 1 год. Сервисное обслуживание в Беларуси." },
  { icon: "Truck", title: "Быстрая доставка", text: "Доставка по Минску от 1 дня. По всей Беларуси — 2–5 рабочих дней через надёжных перевозчиков." },
  { icon: "Headphones", title: "Поддержка 7 дней", text: "Консультируем по выбору техники, помогаем с настройкой и обслуживанием после покупки." },
];

const AboutPage = () => {
  return (
    <>
      <SEO
        title="О компании Electro Motors — Электротранспорт в Беларуси"
        description="Electro Motors — ведущий интернет-магазин электровелосипедов и электросамокатов в Беларуси. Работаем с 2020 года. Более 500 довольных клиентов по всей РБ."
        keywords="о компании Electro Motors, электровелосипеды Беларусь, интернет-магазин электротранспорт"
        canonical="/about"
        breadcrumbs={[{ name: "О компании", url: "/about" }]}
      />
      <div className="min-h-screen bg-black text-white">
        <Header />

        <main className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <nav className="text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-white transition-colors">Главная</a>
            <span className="mx-2">/</span>
            <span className="text-gray-300">О компании</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-light tracking-widest mb-6 text-white">
            О КОМПАНИИ
          </h1>
          <div className="w-16 h-px bg-blue-400 mb-12" />

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                <strong className="text-white">Electro Motors</strong> — белорусский интернет-магазин электровелосипедов, электросамокатов и электрического транспорта. Мы работаем с 2020 года и за это время помогли сотням белорусов перейти на экологичный транспорт.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Мы тщательно отбираем каждую модель — проверяем качество сборки, ресурс аккумулятора и безопасность. В нашем каталоге только проверенные бренды с официальной гарантией.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Доставляем по всей Республике Беларусь: Минск, Гомель, Витебск, Брест, Гродно, Могилёв и другие города. Работаем как с физическими лицами, так и с организациями.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "Users", value: "500+", label: "Довольных клиентов" },
                { icon: "Award", value: "4 года", label: "На рынке Беларуси" },
                { icon: "Package", value: "200+", label: "Моделей в каталоге" },
                { icon: "Shield", value: "1 год", label: "Гарантия на технику" },
              ].map((item) => (
                <div key={item.label} className="border border-white/10 p-6 flex flex-col items-center text-center">
                  <Icon name={item.icon} size={32} className="text-blue-400 mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white/10 p-8 mb-12">
            <h2 className="text-xl font-light tracking-widest mb-6 text-white">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "CheckCircle", title: "Официальная гарантия", text: "Все товары имеют гарантию производителя 1 год. Сервисное обслуживание в Беларуси." },
                { icon: "Truck", title: "Быстрая доставка", text: "Доставка по Минску от 1 дня. По всей Беларуси — 2–5 рабочих дней через надёжных перевозчиков." },
                { icon: "Headphones", title: "Поддержка 7 дней", text: "Консультируем по выбору техники, помогаем с настройкой и обслуживанием после покупки." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <Icon name={item.icon} size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">Есть вопросы? Позвоните нам!</p>
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

export default AboutPage;