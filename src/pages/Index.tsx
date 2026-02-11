import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { useEffect, useRef } from "react";

const Index = () => {
  const navigate = useNavigate();
  const hasNavigated = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const premiumTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let startY = 0;
    let scrollTimeout: NodeJS.Timeout;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (hasNavigated.current) return;
      
      const currentY = e.touches[0].clientY;
      const deltaY = startY - currentY;
      
      if (deltaY > 50) {
        triggerTransition();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (hasNavigated.current) return;
      
      clearTimeout(scrollTimeout);
      
      if (e.deltaY > 50) {
        scrollTimeout = setTimeout(() => {
          triggerTransition();
        }, 100);
      }
    };

    const triggerTransition = () => {
      if (hasNavigated.current) return;
      hasNavigated.current = true;
      
      // Скрываем главную страницу
      if (containerRef.current) {
        containerRef.current.style.transform = 'translateX(-100%)';
        containerRef.current.style.opacity = '0';
      }
      
      // Показываем надпись Premium Electric Mobility
      setTimeout(() => {
        if (premiumTextRef.current) {
          premiumTextRef.current.style.display = 'flex';
        }
      }, 600);
      
      // Скрываем надпись и показываем анимацию слов
      setTimeout(() => {
        if (premiumTextRef.current) {
          premiumTextRef.current.style.opacity = '0';
        }
        setTimeout(() => {
          if (premiumTextRef.current) {
            premiumTextRef.current.style.display = 'none';
          }
          if (wordsRef.current) {
            wordsRef.current.style.display = 'flex';
          }
        }, 500);
      }, 1800);
      
      // Скрываем слова и переход в каталог
      setTimeout(() => {
        if (wordsRef.current) {
          wordsRef.current.style.opacity = '0';
        }
      }, 5000);
      
      // Переход в каталог
      setTimeout(() => {
        navigate('/catalog');
      }, 5500);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      clearTimeout(scrollTimeout);
    };
  }, [navigate]);

  return (
    <div className="bg-[#0a0a0a] relative h-screen w-screen overflow-hidden fixed inset-0">
      {/* Анимация Premium Electric Mobility */}
      <div ref={premiumTextRef} className="fixed inset-0 z-50 bg-[#0a0a0a] hidden items-center justify-center transition-opacity duration-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <div className="text-[#a0a0a0] text-[clamp(1rem,5vw,2.5rem)] tracking-[0.3em] uppercase font-light opacity-0 animate-[premiumFade_1s_ease-out_0s_forwards]">
          Premium Electric Mobility
        </div>
      </div>
      
      {/* Анимация слов */}
      <div ref={wordsRef} className="fixed inset-0 z-50 bg-[#0a0a0a] hidden items-center justify-center transition-opacity duration-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        {/* Фоновое изображение велосипеда */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <img 
            src="https://cdn.poehali.dev/files/6281e1c0-9b0b-4b9f-a8d6-d59f6b8c765b.png"
            alt="Electric Bike"
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </div>
        
        {/* Слова поверх изображения */}
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 w-full px-4 relative z-10">
          <div className="text-[clamp(2rem,12vw,10rem)] font-light text-[#707070] uppercase opacity-0 animate-[wordFade_0.7s_ease-out_0s_forwards] leading-none" style={{ letterSpacing: '-0.05em' }}>
            СОВРЕМЕННО
          </div>
          <div className="text-[clamp(2rem,12vw,10rem)] font-light text-[#707070] uppercase opacity-0 animate-[wordFade_0.7s_ease-out_0.4s_forwards] leading-none" style={{ letterSpacing: '-0.05em' }}>
            ЭКОЛОГИЧНО
          </div>
          <div className="text-[clamp(2rem,12vw,10rem)] font-light text-[#707070] uppercase opacity-0 animate-[wordFade_0.7s_ease-out_0.8s_forwards] leading-none" style={{ letterSpacing: '-0.05em' }}>
            ЭКОНОМИЧНО
          </div>
          <div className="text-[clamp(2rem,12vw,10rem)] font-light text-[#707070] uppercase opacity-0 animate-[wordFade_0.7s_ease-out_1.2s_forwards] leading-none" style={{ letterSpacing: '-0.05em' }}>
            КОМФОРТНО
          </div>
        </div>
      </div>
      
      <div ref={containerRef} className="h-full flex flex-col transition-all duration-[600ms] ease-out" style={{ willChange: 'transform, opacity' }}>
      <Header />

      <section className="relative flex-1 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Desktop: полная молния со всеми ветками */}
          <svg className="hidden md:block absolute inset-0 w-full h-full lightning-strike pointer-events-none z-[3]" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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

          {/* Mobile: упрощенная молния без фильтров и круга свечения */}
          <svg className="md:hidden absolute inset-0 w-full h-full lightning-strike pointer-events-none z-[3]" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            <path d="M960,0 L980,120 L940,160 L970,280 L930,350 L965,480 L945,560 L975,680 L940,760 L970,880 L950,960 L975,1080" 
                  stroke="#60a5fa" strokeWidth="4" fill="none" opacity="0.8" className="bolt"/>
            <path d="M960,0 L980,120 L940,160 L970,280 L930,350 L965,480 L945,560 L975,680 L940,760 L970,880 L950,960 L975,1080" 
                  stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.95" className="bolt"/>
            
            <path d="M970,280 L1050,310 L1020,360 L1080,420" 
                  stroke="#60a5fa" strokeWidth="2.5" fill="none" opacity="0.75" className="bolt"/>
            <path d="M970,280 L1050,310 L1020,360 L1080,420" 
                  stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.9" className="bolt"/>
            
            <path d="M930,350 L850,390 L880,450 L820,510" 
                  stroke="#60a5fa" strokeWidth="2.5" fill="none" opacity="0.7" className="bolt"/>
            <path d="M930,350 L850,390 L880,450 L820,510" 
                  stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.85" className="bolt"/>

            <path d="M965,480 L1090,530 L1060,590" 
                  stroke="#60a5fa" strokeWidth="2.5" fill="none" opacity="0.75" className="bolt"/>
            <path d="M965,480 L1090,530 L1060,590" 
                  stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.9" className="bolt"/>

            <path d="M940,760 L860,810 L890,870" 
                  stroke="#60a5fa" strokeWidth="2.5" fill="none" opacity="0.7" className="bolt"/>
            <path d="M940,760 L860,810 L890,870" 
                  stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.85" className="bolt"/>

            <path d="M970,880 L1060,920 L1030,980" 
                  stroke="#60a5fa" strokeWidth="2.5" fill="none" opacity="0.7" className="bolt"/>
            <path d="M970,880 L1060,920 L1030,980" 
                  stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.85" className="bolt"/>
          </svg>
          
          <div className="hidden md:block absolute bottom-0 left-0 right-0 h-32 bottom-glow-effect pointer-events-none"></div>

        </div>

        <div className="absolute right-0 md:right-12 top-1/2 -translate-y-1/2 w-full md:w-[45%] h-full flex items-center justify-center z-[5] pointer-events-none opacity-50 md:opacity-100">
          
          <img 
            src="https://cdn.poehali.dev/files/6281e1c0-9b0b-4b9f-a8d6-d59f6b8c765b.png"
            alt="Premium Electric Bike"
            className="relative w-full h-auto max-h-[50vh] md:max-h-[85vh] object-contain bike-lightning-glow"
          />
        </div>

        <div className="w-full px-6 md:px-16 py-0 relative z-10 flex items-start h-full">
          <div className="max-w-screen-2xl mx-auto w-full">
            <div className="h-full pt-2 md:py-16 md:animate-fade-in">
              <div className="inline-block px-4 py-2 md:px-6 md:py-3 border border-[#3a3a3a] mb-3 md:mb-8">
                <span className="text-[#a0a0a0] text-[9px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase font-light">Premium Electric Mobility</span>
              </div>
              
              <h1 className="text-[clamp(3rem,14vw,10rem)] font-light leading-[0.8] tracking-tight mb-4 md:mb-6 title-charge-glow">
                <span className="block text-white">
                  НА ПОЛНОМ
                </span>
                <span className="block text-[#707070] italic">
                  ЗАРЯДЕ
                </span>
              </h1>
              
              <div className="flex items-start gap-6 md:gap-20 max-w-5xl mb-0 md:mb-8">
                <div className="hidden md:block w-[2px] h-24 bg-gradient-to-b from-white via-white/50 to-transparent"></div>
                <div className="flex-1">
                  <p className="text-[#a0a0a0] text-sm md:text-2xl font-light leading-relaxed mb-0 max-w-3xl">
                    Современно. Экологично. Экономично. Комфортно.
                  </p>
                </div>
              </div>

              {/* Кнопка и статистика на десктопе */}
              <div className="hidden md:block space-y-8">
                <div className="flex justify-start gap-4">
                  <Link to="/catalog">
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-[#e5e5e5] font-normal text-base px-16 py-7 rounded-none tracking-[0.2em] transition-all duration-300 button-charge-glow"
                    >
                      ПЕРЕЙТИ В КАТАЛОГ
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    className="bg-transparent text-white border border-white hover:bg-white hover:text-black font-normal text-base px-16 py-7 rounded-none tracking-[0.2em] transition-all duration-300"
                  >
                    КОНСУЛЬТАЦИЯ
                  </Button>
                </div>
                
                <div className="grid grid-cols-4 gap-12 max-w-4xl">
                  <div>
                    <div className="flex items-start gap-0.5 mb-2">
                      <div className="text-6xl font-light text-white tracking-tight">30</div>
                      <div className="text-3xl font-light text-[#707070] mt-1">%</div>
                    </div>
                    <div className="text-[#707070] text-sm tracking-[0.25em] uppercase font-light">Экономия</div>
                  </div>
                  
                  <div>
                    <div className="text-6xl font-light text-white tracking-tight mb-2">30</div>
                    <div className="text-[#707070] text-sm tracking-[0.25em] uppercase font-light">Дней доставка</div>
                  </div>
                  
                  <div>
                    <div className="text-6xl font-light text-white tracking-tight mb-2">24/7</div>
                    <div className="text-[#707070] text-sm tracking-[0.25em] uppercase font-light">Поддержка</div>
                  </div>
                  
                  <div>
                    <div className="flex items-start gap-0.5 mb-2">
                      <div className="text-6xl font-light text-white tracking-tight">100</div>
                      <div className="text-3xl font-light text-[#707070] mt-1">%</div>
                    </div>
                    <div className="text-[#707070] text-sm tracking-[0.25em] uppercase font-light">Гарантия</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Кнопка и статистика на мобильных */}
        <div className="md:hidden absolute bottom-20 left-0 right-0 px-6 z-20">
          <div className="max-w-screen-2xl mx-auto w-full space-y-4">
            <div className="flex justify-center mb-4">
              <Link to="/catalog" className="w-full">
                <Button
                  size="lg"
                  className="w-full bg-white text-black hover:bg-[#e5e5e5] font-normal text-sm px-10 py-4 rounded-none tracking-[0.15em] transition-all duration-300 button-charge-glow"
                >
                  ПЕРЕЙТИ В КАТАЛОГ
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              <div>
                <div className="flex items-start gap-0.5 mb-0.5">
                  <div className="text-2xl font-light text-white tracking-tight">30</div>
                  <div className="text-sm font-light text-[#707070] mt-0.5">%</div>
                </div>
                <div className="text-[#707070] text-[8px] tracking-[0.15em] uppercase font-light">Экономия</div>
              </div>
              
              <div>
                <div className="text-2xl font-light text-white tracking-tight mb-0.5">30</div>
                <div className="text-[#707070] text-[8px] tracking-[0.15em] uppercase font-light">Дней доставка</div>
              </div>
              
              <div>
                <div className="text-2xl font-light text-white tracking-tight mb-0.5">24/7</div>
                <div className="text-[#707070] text-[8px] tracking-[0.15em] uppercase font-light">Поддержка</div>
              </div>
              
              <div>
                <div className="flex items-start gap-0.5 mb-0.5">
                  <div className="text-2xl font-light text-white tracking-tight">100</div>
                  <div className="text-sm font-light text-[#707070] mt-0.5">%</div>
                </div>
                <div className="text-[#707070] text-[8px] tracking-[0.15em] uppercase font-light">Гарантия</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Index;