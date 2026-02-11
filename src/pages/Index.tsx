import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="bg-black/95 backdrop-blur-sm border-b border-[#2a2a2a] sticky top-0 z-[100]">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#c4c4c4] to-[#8a8a8a] rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">EM</span>
              </div>
              <span className="text-base font-normal tracking-[0.2em] text-[#e5e5e5]">ELECTRO MOTORS</span>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/catalog" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">Каталог</Link>
              <a href="#" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">О нас</a>
              <a href="#" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">Доставка</a>
              <a href="#" className="text-[#b0b0b0] hover:text-white transition-colors text-sm font-light">Гарантия</a>
            </nav>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="hidden md:flex text-[#b0b0b0] hover:text-white hover:bg-white/5">
                <Icon name="Heart" size={18} />
              </Button>
              <Button size="sm" className="bg-white text-black hover:bg-[#e5e5e5] rounded-none px-6 text-xs tracking-wider font-medium">
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative min-h-[calc(100vh-73px)] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#1a1a1a] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#1a1a1a] to-transparent"></div>
          
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
                <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            
            <line x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '3s' }} />
            <line x1="0" y1="40%" x2="100%" y2="40%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
            <line x1="0" y1="60%" x2="100%" y2="60%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
            <line x1="0" y1="80%" x2="100%" y2="80%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />
            
            <line x1="20%" y1="0" x2="20%" y2="100%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.3s' }} />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1.2s' }} />
            <line x1="80%" y1="0" x2="80%" y2="100%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '0.8s' }} />
          </svg>
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-32 animate-fade-in">
              <div className="mb-6">
                <div className="inline-block px-4 py-2 border border-[#3a3a3a] mb-8">
                  <span className="text-[#a0a0a0] text-xs tracking-[0.25em] uppercase font-light">Premium Electric Mobility</span>
                </div>
              </div>
              
              <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-light leading-[0.95] tracking-tight mb-8">
                <span className="block text-white">
                  НА ПОЛНОМ
                </span>
                <span className="block text-[#707070] italic">
                  ЗАРЯДЕ
                </span>
              </h1>
              
              <div className="flex items-start gap-16 max-w-4xl">
                <div className="w-[2px] h-24 bg-gradient-to-b from-white to-transparent"></div>
                <div>
                  <p className="text-[#a0a0a0] text-xl font-light leading-relaxed mb-12 max-w-2xl">
                    Современно. Экологично. Экономично. Комфортно.
                  </p>
                  
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <Link to="/catalog" className="w-full md:w-auto">
                      <Button
                        size="lg"
                        className="w-full md:w-auto bg-white text-black hover:bg-[#e5e5e5] font-normal text-sm px-10 py-6 rounded-none tracking-[0.15em] transition-all duration-300"
                      >
                        ПЕРЕЙТИ В КАТАЛОГ
                      </Button>
                    </Link>
                    <Button
                      size="lg"
                      className="w-full md:w-auto bg-transparent border border-white text-white hover:bg-white hover:text-black font-normal text-sm px-10 py-6 rounded-none tracking-[0.15em] transition-all duration-300"
                    >
                      КОНСУЛЬТАЦИЯ
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#2a2a2a] border border-[#2a2a2a] animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-[#0a0a0a] p-10 group cursor-default hover:bg-[#121212] transition-colors duration-300">
                <div className="mb-4">
                  <div className="text-5xl font-light text-white tracking-tight">30</div>
                  <div className="text-xl font-light text-[#707070]">%</div>
                </div>
                <div className="text-[#707070] text-xs tracking-[0.2em] uppercase font-light">Экономия</div>
              </div>

              <div className="bg-[#0a0a0a] p-10 group cursor-default hover:bg-[#121212] transition-colors duration-300">
                <div className="mb-4">
                  <div className="text-5xl font-light text-white tracking-tight">30</div>
                </div>
                <div className="text-[#707070] text-xs tracking-[0.2em] uppercase font-light">Дней доставка</div>
              </div>

              <div className="bg-[#0a0a0a] p-10 group cursor-default hover:bg-[#121212] transition-colors duration-300">
                <div className="mb-4">
                  <div className="text-5xl font-light text-white tracking-tight">24/7</div>
                </div>
                <div className="text-[#707070] text-xs tracking-[0.2em] uppercase font-light">Поддержка</div>
              </div>

              <div className="bg-[#0a0a0a] p-10 group cursor-default hover:bg-[#121212] transition-colors duration-300">
                <div className="mb-4">
                  <div className="text-5xl font-light text-white tracking-tight">100</div>
                  <div className="text-xl font-light text-[#707070]">%</div>
                </div>
                <div className="text-[#707070] text-xs tracking-[0.2em] uppercase font-light">Гарантия</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col items-center gap-2 text-[#505050]">
            <Icon name="ChevronDown" size={20} className="animate-bounce" />
            <span className="text-xs tracking-[0.2em] uppercase font-light">Scroll</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;