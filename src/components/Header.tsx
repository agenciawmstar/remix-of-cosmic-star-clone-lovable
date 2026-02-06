import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import wmStarLogo from '@/assets/wm-star-logo.png';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-card py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between">
          {/* Mobile: hambúrguer (somente no mobile) */}
          <button
            className="md:hidden text-foreground p-2 hover:text-primary transition-colors duration-300 z-10"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Desktop: espaço à esquerda para balancear */}
          <div className="hidden md:block w-14" />

          {/* Logo central (bem maior) */}
          <a href="#" className="absolute left-1/2 -translate-x-1/2">
            <img
              src={wmStarLogo}
              alt="WM STAR - Agência Digital"
              className={`w-auto transition-all duration-500 ${
                isScrolled
                  ? 'h-[6.75rem] md:h-[7rem] lg:h-[8.25rem]'
                  : 'h-[9.5rem] md:h-[10.5rem] lg:h-[13rem]'
              }`}
            />
          </a>

          {/* Desktop: abas visíveis e interativas */}
          <nav className="hidden md:flex items-center gap-2">
            <a
              href="#servicos"
              className="px-4 py-2 rounded-full text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300 hover:bg-glass-white/5"
            >
              Serviços
            </a>
            <a
              href="#resultados"
              className="px-4 py-2 rounded-full text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300 hover:bg-glass-white/5"
            >
              Resultados
            </a>
            <a
              href="#contato"
              className="px-4 py-2 rounded-full text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300 hover:bg-glass-white/5"
            >
              Contato
            </a>
          </nav>

          {/* Mobile: espaçador à direita para manter centralização */}
          <div className="md:hidden w-10" />
        </div>

        {/* Mobile dropdown */}
        <nav
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="glass-card p-5 flex flex-col gap-3">
            <a
              href="#servicos"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg font-semibold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#resultados"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg font-semibold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resultados
            </a>
            <a
              href="#contato"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg font-semibold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
