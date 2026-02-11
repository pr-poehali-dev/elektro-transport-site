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
              <Button size="sm" className="bg-white text-black hover:bg-[#e5e5e5] rounded-full px-6 text-xs tracking-wider font-medium">
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative min-h-[calc(100vh-73px)] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#1a1a1a] to-transparent animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#1a1a1a] to-transparent animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
          
          <div className="absolute inset-0 grid-lines-animation"></div>
          
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-white/10 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)] animate-pulse" style={{ animationDuration: '10s' }}></div>
          
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
          
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          
          <svg className="absolute inset-0 w-full h-full lightning-strike pointer-events-none z-20" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <radialGradient id="radial-glow">
                <stop offset="0%" stopColor="rgba(96, 165, 250, 0.4)" />
                <stop offset="50%" stopColor="rgba(96, 165, 250, 0.15)" />
                <stop offset="100%" stopColor="rgba(96, 165, 250, 0)" />
              </radialGradient>
            </defs>
            
            <circle cx="960" cy="540" r="500" fill="url(#radial-glow)" className="lightning-glow-circle"/>
            
            <g filter="url(#glow)">
              <path d="M960,0 L980,120 L940,160 L970,280 L930,350 L965,480 L945,560 L975,680 L940,760 L970,880 L950,960 L975,1080" 
                    stroke="#60a5fa" strokeWidth="5" fill="none" opacity="0.9" className="bolt bolt-main"/>
              <path d="M960,0 L980,120 L940,160 L970,280 L930,350 L965,480 L945,560 L975,680 L940,760 L970,880 L950,960 L975,1080" 
                    stroke="#ffffff" strokeWidth="2.5" fill="none" className="bolt bolt-core"/>
              
              <path d="M970,280 L1050,310 L1020,360 L1080,420 L1050,480" 
                    stroke="#60a5fa" strokeWidth="3" fill="none" opacity="0.8" className="bolt bolt-branch"/>
              <path d="M970,280 L1050,310 L1020,360 L1080,420 L1050,480" 
                    stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.95" className="bolt bolt-branch"/>
              
              <path d="M930,350 L850,390 L880,450 L820,510 L850,570" 
                    stroke="#60a5fa" strokeWidth="3" fill="none" opacity="0.75" className="bolt bolt-branch"/>
              <path d="M930,350 L850,390 L880,450 L820,510 L850,570" 
                    stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.9" className="bolt bolt-branch"/>
              
              <path d="M1080,420 L1180,460 L1150,520 L1220,590" 
                    stroke="#60a5fa" strokeWidth="2.5" fill="none" opacity="0.7" className="bolt bolt-branch"/>
              <path d="M1080,420 L1180,460 L1150,520 L1220,590" 
                    stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.85" className="bolt bolt-branch"/>
              
              <path d="M820,510 L720,560 L750,620 L680,690" 
                    stroke="#60a5fa" strokeWidth="2.5" fill="none" opacity="0.7" className="bolt bolt-branch"/>
              <path d="M820,510 L720,560 L750,620 L680,690" 
                    stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.85" className="bolt bolt-branch"/>
              
              <path d="M965,480 L1090,530 L1060,590 L1120,660 L1090,720" 
                    stroke="#60a5fa" strokeWidth="3" fill="none" opacity="0.8" className="bolt bolt-branch"/>
              <path d="M965,480 L1090,530 L1060,590 L1120,660 L1090,720" 
                    stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.95" className="bolt bolt-branch"/>
              
              <path d="M940,760 L860,810 L890,870 L830,930 L860,990" 
                    stroke="#60a5fa" strokeWidth="3" fill="none" opacity="0.75" className="bolt bolt-branch"/>
              <path d="M940,760 L860,810 L890,870 L830,930 L860,990" 
                    stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.9" className="bolt bolt-branch"/>
              
              <path d="M970,880 L1060,920 L1030,980 L1090,1040" 
                    stroke="#60a5fa" strokeWidth="3" fill="none" opacity="0.7" className="bolt bolt-branch"/>
              <path d="M970,880 L1060,920 L1030,980 L1090,1040" 
                    stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.85" className="bolt bolt-branch"/>
            </g>
          </svg>
          

        </div>

        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[45%] h-full flex items-center justify-center z-[5] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent blur-3xl"></div>
          
          <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-white/5 rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border border-white/5 rounded-full"></div>
          
          <img 
            src="https://cdn.poehali.dev/files/6281e1c0-9b0b-4b9f-a8d6-d59f6b8c765b.png"
            alt="Premium Electric Bike"
            className="relative w-full h-auto max-h-[80vh] object-contain bike-lightning-glow"
          />
          
          <div className="absolute top-1/2 left-0 w-20 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-16 h-px bg-gradient-to-l from-white/15 to-transparent"></div>
        </div>

        <div className="w-full px-10 py-24 relative z-10">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-32 animate-fade-in">
              <div className="mb-6">
                <div className="inline-block px-4 py-2 border border-[#3a3a3a] mb-8">
                  <span className="text-[#a0a0a0] text-xs tracking-[0.25em] uppercase font-light">Premium Electric Mobility</span>
                </div>
              </div>
              
              <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-light leading-[0.95] tracking-tight mb-8 title-charge-glow">
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
                <div className="mb-4 flex items-start gap-1">
                  <div className="text-5xl font-light text-white tracking-tight">30</div>
                  <div className="text-2xl font-light text-[#707070] mt-1">%</div>
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
                <div className="mb-4 flex items-start gap-1">
                  <div className="text-5xl font-light text-white tracking-tight">100</div>
                  <div className="text-2xl font-light text-[#707070] mt-1">%</div>
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