import Header from "@/components/Header";
import SEO, { PHONE, PHONE_DISPLAY, CITIES } from "@/components/SEO";
import Icon from "@/components/ui/icon";

const ContactsPage = () => {
  return (
    <>
      <SEO
        title="Контакты Electro Motors — Электровелосипеды Беларусь"
        description="Контакты интернет-магазина Electro Motors. Телефон: +375 (29) 129-92-45. Работаем по всей Беларуси. Доставка электровелосипедов в Минск, Гомель, Витебск, Брест, Гродно, Могилёв."
        keywords="контакты Electro Motors, телефон магазин электровелосипед Минск, адрес магазин электросамокат Беларусь"
        canonical="/contacts"
        breadcrumbs={[{ name: "Контакты", url: "/contacts" }]}
      />
      <div className="min-h-screen bg-black text-white">
        <Header />

        <main className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <nav className="text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-white transition-colors">Главная</a>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Контакты</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-light tracking-widest mb-6 text-white">
            КОНТАКТЫ
          </h1>
          <div className="w-16 h-px bg-blue-400 mb-12" />

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Phone" size={24} className="text-blue-400" />
                  <h2 className="text-white font-medium text-lg">Телефон</h2>
                </div>
                <a
                  href={`tel:${PHONE}`}
                  className="text-2xl font-light text-white hover:text-blue-400 transition-colors block mb-2"
                >
                  {PHONE_DISPLAY}
                </a>
                <p className="text-gray-400 text-sm">Звонки принимаем пн–пт 9:00–20:00, сб–вс 10:00–18:00</p>
              </div>

              <div className="border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Clock" size={24} className="text-blue-400" />
                  <h2 className="text-white font-medium text-lg">Режим работы</h2>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Понедельник — Пятница</span>
                    <span className="text-white">9:00 — 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Суббота — Воскресенье</span>
                    <span className="text-white">10:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Праздничные дни</span>
                    <span className="text-white">10:00 — 16:00</span>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Globe" size={24} className="text-blue-400" />
                  <h2 className="text-white font-medium text-lg">Интернет-магазин</h2>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Мы работаем онлайн по всей Беларуси. Оформите заказ на сайте или по телефону — доставим в любой город РБ.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-white/10 p-6">
                <h2 className="text-white font-medium text-lg mb-4">Задать вопрос</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">Ваше имя</label>
                    <input
                      type="text"
                      placeholder="Иван Иванов"
                      className="w-full bg-white/5 border border-white/20 text-white placeholder:text-gray-600 px-3 py-2 text-sm focus:border-white/40 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">Телефон или email</label>
                    <input
                      type="text"
                      placeholder="+375 __ ___ __ __"
                      className="w-full bg-white/5 border border-white/20 text-white placeholder:text-gray-600 px-3 py-2 text-sm focus:border-white/40 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">Ваш город</label>
                    <select className="w-full bg-black border border-white/20 text-white px-3 py-2 text-sm focus:border-white/40 outline-none transition-colors">
                      <option value="">Выберите город...</option>
                      {CITIES.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">Вопрос</label>
                    <textarea
                      rows={4}
                      placeholder="Напишите ваш вопрос..."
                      className="w-full bg-white/5 border border-white/20 text-white placeholder:text-gray-600 px-3 py-2 text-sm focus:border-white/40 outline-none transition-colors resize-none"
                    />
                  </div>
                  <a
                    href={`tel:${PHONE}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 transition-colors py-2.5 text-sm font-medium tracking-wider"
                  >
                    <Icon name="Phone" size={16} />
                    Позвонить сейчас
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-white/10 p-8">
            <h2 className="text-xl font-light tracking-widest mb-6 text-white">РАБОТАЕМ ПО ВСЕЙ БЕЛАРУСИ</h2>
            <p className="text-gray-400 text-sm mb-4">Доставляем электровелосипеды и электросамокаты во все города и районы Республики Беларусь:</p>
            <div className="flex flex-wrap gap-3">
              {CITIES.map((city) => (
                <a
                  key={city}
                  href={`/catalog?city=${encodeURIComponent(city)}`}
                  className="border border-white/20 text-gray-300 hover:text-white hover:border-white/40 text-sm px-3 py-1 transition-colors"
                >
                  {city}
                </a>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ContactsPage;
