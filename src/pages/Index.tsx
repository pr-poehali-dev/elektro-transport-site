import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-[100]">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-light tracking-[0.3em] text-slate-900">ELECTRO MOTORS</span>
            </div>

            <nav className="hidden lg:flex items-center gap-10">
              <Link to="/catalog" className="text-slate-600 hover:text-slate-900 transition-colors text-sm tracking-wider">Каталог</Link>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm tracking-wider">О нас</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm tracking-wider">Доставка</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm tracking-wider">Гарантия</a>
            </nav>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="hidden md:flex text-slate-600 hover:text-slate-900 hover:bg-slate-100/50">
                <Icon name="Heart" size={20} />
              </Button>
              <Button size="icon" className="md:w-auto bg-slate-900 hover:bg-slate-800 text-white rounded-none md:px-8 text-sm tracking-wider font-light">
                <Icon name="Phone" size={18} />
                <span className="hidden md:inline md:ml-2">+7 (495) 123-45-67</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative min-h-[calc(100vh-88px)] flex items-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in">
              <p className="text-slate-500 text-sm tracking-[0.3em] uppercase mb-6 font-light">Premium Electric Vehicles</p>
              <h1 className="text-[clamp(3rem,8vw,7rem)] font-extralight leading-[1.1] tracking-tight mb-6">
                <span className="block text-slate-900">
                  НА ПОЛНОМ
                </span>
                <span className="block text-slate-900 font-light italic">
                  ЗАРЯДЕ
                </span>
              </h1>
              <p className="text-slate-600 text-lg font-light max-w-xl mx-auto leading-relaxed">
                Современно. Экологично. Экономично. Комфортно.
              </p>
            </div>

            <div className="relative mb-20">
              <div className="flex items-center justify-center gap-12">
                <div className="hidden lg:block w-[280px] animate-slide-in-left opacity-0">
                  <div className="relative group">
                    <img 
                      src="https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/e25773ab-a522-45b7-a156-17496c63e452.jpg"
                      alt="Electric Bike"
                      className="relative z-10 w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="w-[450px] md:w-[550px] animate-scale-in opacity-0">
                  <div className="relative group">
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[60%] h-[20px] bg-slate-900/10 rounded-full blur-xl"></div>
                    <img 
                      src="https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/b66a30bf-2421-4969-8e60-c83db26aac26.jpg"
                      alt="Electric Scooter"
                      className="relative z-10 w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="hidden lg:block w-[280px] animate-slide-in-right opacity-0">
                  <div className="relative group">
                    <img 
                      src="https://cdn.poehali.dev/files/26aabfed-1ab2-4231-965b-7ab4d5c7bdef.png"
                      alt="Electric Tricycle"
                      className="relative z-10 w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-24 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
              <Link to="/catalog" className="w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white font-light text-base px-12 py-6 rounded-none tracking-wider hover:tracking-[0.2em] transition-all duration-300"
                >
                  <span className="flex items-center gap-4">
                    Перейти в каталог
                    <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Button
                size="lg"
                className="w-full md:w-auto bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-light text-base px-12 py-6 rounded-none tracking-wider transition-all duration-300"
              >
                <span className="flex items-center gap-4">
                  <Icon name="MessageCircle" size={20} />
                  Консультация
                </span>
              </Button>
            </div>

            <div className="border-t border-slate-200 pt-16 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
                <div className="text-center group cursor-default">
                  <div className="text-5xl font-extralight text-slate-900 mb-3 tracking-tight group-hover:scale-110 transition-transform duration-300">30<span className="text-2xl">%</span></div>
                  <div className="text-slate-500 text-xs tracking-[0.2em] uppercase font-light">Экономия</div>
                </div>

                <div className="text-center group cursor-default">
                  <div className="text-5xl font-extralight text-slate-900 mb-3 tracking-tight group-hover:scale-110 transition-transform duration-300">30</div>
                  <div className="text-slate-500 text-xs tracking-[0.2em] uppercase font-light">Дней доставка</div>
                </div>

                <div className="text-center group cursor-default">
                  <div className="text-5xl font-extralight text-slate-900 mb-3 tracking-tight group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-slate-500 text-xs tracking-[0.2em] uppercase font-light">Поддержка</div>
                </div>

                <div className="text-center group cursor-default">
                  <div className="text-5xl font-extralight text-slate-900 mb-3 tracking-tight group-hover:scale-110 transition-transform duration-300">100<span className="text-2xl">%</span></div>
                  <div className="text-slate-500 text-xs tracking-[0.2em] uppercase font-light">Гарантия</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
