import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <header className="bg-black/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-[100]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-white tracking-tighter">ELECTRO MOTORS</span>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/catalog" className="text-white/70 hover:text-white transition-colors font-medium">Каталог</Link>
              <a href="#" className="text-white/70 hover:text-white transition-colors font-medium">О нас</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors font-medium">Доставка</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors font-medium">Гарантия</a>
            </nav>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hidden md:flex text-white hover:bg-white/10">
                <Icon name="Heart" size={20} />
              </Button>
              <Button size="icon" className="md:w-auto bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-full md:px-6 font-bold">
                <Icon name="Phone" size={18} />
                <span className="hidden md:inline md:ml-2">+7 (495) 123-45-67</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-red-600/30 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[180px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-[200px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-[clamp(3rem,12vw,8rem)] font-black leading-[0.9] tracking-tighter mb-4">
                <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  НА ПОЛНОМ
                </span>
                <span className="block text-white">
                  ЗАРЯДЕ
                </span>
              </h1>
              <p className="text-white/60 text-xl md:text-2xl font-medium max-w-2xl mx-auto">
                Современно. Экологично. Экономично. Комфортно.
              </p>
            </div>

            <div className="relative mb-16">
              <div className="flex items-center justify-center gap-8 md:gap-16">
                <div className="hidden md:block w-[300px] animate-slide-in-left">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-red-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                    <img 
                      src="https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/fbcb6ff5-8ef0-4a55-8902-b9b23e252fe7.jpg"
                      alt="Electric Bike"
                      className="relative z-10 w-full h-auto transform hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="w-[400px] md:w-[500px] animate-scale-in">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 to-orange-600/40 rounded-3xl blur-3xl group-hover:blur-[80px] transition-all duration-500"></div>
                    <img 
                      src="https://cdn.poehali.dev/projects/795ac98f-803c-4050-937a-9e9c042d136c/files/b4ca4b7b-317c-47fa-acfa-1fcdb7aa2811.jpg"
                      alt="Electric Scooter"
                      className="relative z-10 w-full h-auto transform hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="hidden md:block w-[300px] animate-slide-in-right">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-orange-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                    <img 
                      src="https://cdn.poehali.dev/files/26aabfed-1ab2-4231-965b-7ab4d5c7bdef.png"
                      alt="Electric Tricycle"
                      className="relative z-10 w-full h-auto transform hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link to="/catalog" className="w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-black text-lg px-12 py-7 rounded-2xl shadow-2xl shadow-red-600/50 hover:shadow-red-600/70 hover:scale-105 transition-all duration-300 group"
                >
                  <span className="flex items-center gap-3">
                    Перейти в каталог
                    <Icon name="ArrowRight" size={24} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Button
                size="lg"
                className="w-full md:w-auto bg-white text-black hover:bg-white/90 font-black text-lg px-12 py-7 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <Icon name="MessageCircle" size={24} />
                  Консультация
                </span>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2">30%</div>
                  <div className="text-white/60 text-sm font-bold uppercase tracking-wider">Экономия</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-yellow-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl font-black bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">30</div>
                  <div className="text-white/60 text-sm font-bold uppercase tracking-wider">Дней доставка</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-white/60 text-sm font-bold uppercase tracking-wider">Поддержка</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl font-black bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-white/60 text-sm font-bold uppercase tracking-wider">Гарантия</div>
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
