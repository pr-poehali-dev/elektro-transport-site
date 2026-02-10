import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white shadow-sm sticky top-0 z-[100]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">ELECTRO MOTORS</span>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/catalog" className="text-muted-foreground hover:text-foreground transition-colors">Каталог</Link>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">О нас</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Доставка</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Гарантия</a>
            </nav>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Icon name="Heart" size={20} />
              </Button>
              <Button size="icon" className="md:w-auto bg-secondary hover:bg-secondary/90 text-white rounded-full md:px-6">
                <Icon name="Phone" size={18} />
                <span className="hidden md:inline md:ml-2">+7 (495) 123-45-67</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50 min-h-[calc(100vh-72px)] md:h-[calc(100vh-72px)] relative flex items-center overflow-hidden py-8 md:py-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-500/5 rounded-full blur-[180px]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
        </div>
        
        <div className="absolute top-4 left-0 right-0 z-[60] pointer-events-none px-4">
          <h1 className="text-[clamp(2rem,8vw,10rem)] font-bold leading-[1.1] tracking-tight text-center animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              НА ПОЛНОМ ЗАРЯДЕ
            </span>
          </h1>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          
          <div className="flex flex-col items-center gap-4 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end w-full min-h-[50vh] md:h-[60vh] px-2 md:px-4 max-w-7xl mx-auto">
              <div className="hidden md:flex items-end justify-center relative animate-scale-in group">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-2 bg-purple-500/30 rounded-full blur-lg group-hover:w-[250px] transition-all duration-500"></div>
                <img 
                  src="https://cdn.poehali.dev/files/b8881807-d273-44af-b7e1-6b32377493e2.png" 
                  alt="Electric Tricycle"
                  className="w-full h-full object-contain relative z-10 hover:scale-110 transition-transform duration-500"
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(168, 85, 247, 0.3)) drop-shadow(0 0 20px rgba(168, 85, 247, 0.15))'
                  }}
                />
              </div>
              
              <div className="flex flex-col items-center justify-center gap-3 md:gap-4 animate-fade-in h-full pb-4 md:pb-8">
                <p className="text-sm md:text-xl text-slate-700 leading-relaxed text-center px-4">
                  Современно. Экологично. Экономично. Комфортно.
                </p>
                
                <div className="flex flex-col gap-2 md:gap-3 w-full px-4">
                  <Link to="/catalog">
                    <Button
                      size="lg"
                      className="w-full relative overflow-hidden bg-primary hover:bg-primary/90 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl px-6 py-4 text-sm font-bold group"
                    >
                      <span className="relative flex items-center justify-center gap-3">
                        Перейти в каталог
                        <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-white hover:scale-105 transition-all duration-300 shadow-lg rounded-2xl px-6 py-4 text-sm font-bold flex items-center justify-center gap-3"
                  >
                    <Icon name="MessageCircle" size={20} />
                    Консультация эксперта
                  </Button>
                </div>
              </div>
              
              <div className="flex items-end justify-center relative animate-scale-in group" style={{ animationDelay: '0.2s' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-2 bg-primary/30 rounded-full blur-lg group-hover:w-[250px] transition-all duration-500"></div>
                <img 
                  src="https://cdn.poehali.dev/files/26aabfed-1ab2-4231-965b-7ab4d5c7bdef.png" 
                  alt="Electric Scooter"
                  className="w-full h-full object-contain relative z-10 hover:scale-110 transition-transform duration-500"
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(239, 68, 68, 0.3)) drop-shadow(0 0 20px rgba(239, 68, 68, 0.15))'
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-8 md:mt-12 mb-8 md:mb-12 px-2 md:px-0">
            <div className="relative group overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col justify-center items-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-2 italic">30%</div>
                <div className="text-xs text-slate-600 uppercase tracking-wider">Экономия</div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col justify-center items-center">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-secondary mb-2 italic">30</div>
                <div className="text-xs text-slate-600 uppercase tracking-wider">Дней доставка</div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col justify-center items-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-green-500 mb-2 italic">24/7</div>
                <div className="text-xs text-slate-600 uppercase tracking-wider">Поддержка</div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col justify-center items-center">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-orange-500 mb-2 italic">14</div>
                <div className="text-xs text-slate-600 uppercase tracking-wider">Лет на рынке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 mt-20 mb-16 md:mb-0">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">ELECTRO MOTORS</span>
              </div>
              <p className="text-slate-400 text-sm">
                Эксклюзивный импорт электротранспорта нового поколения
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Категории</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Электровелосипеды</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Электроскутеры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Электротрициклы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Электросамокаты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@electromotors.ru</p>
                <p>Москва, ул. Примерная, 1</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            © 2024 ELECTRO MOTORS. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
