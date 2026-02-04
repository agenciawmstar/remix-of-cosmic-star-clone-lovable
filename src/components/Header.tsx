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
        isScrolled ? 'glass-card py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Layout com logo centralizada */}
        <div className="flex items-center justify-between">
          {/* Menu hambúrguer à esquerda */}
          <button
            className="text-foreground p-2 hover:text-primary transition-colors duration-300 z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo centralizada */}
          <a href="#" className="absolute left-1/2 transform -translate-x-1/2">
            <img 
              src={wmStarLogo} 
              alt="WM STAR - Agência Digital" 
              className={`w-auto transition-all duration-500 ${
                isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-28 lg:h-32'
              }`}
            />
          </a>

          {/* Espaçador para manter o layout balanceado */}
          <div className="w-10"></div>
        </div>

        {/* Menu dropdown interativo */}
        <nav 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-64 opacity-100 mt-6' 
              : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="glass-card p-6 flex flex-col md:flex-row md:justify-center gap-4 md:gap-12">
            <a
              href="#servicos"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg font-medium text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#resultados"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg font-medium text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resultados
            </a>
            <a
              href="#contato"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg font-medium text-center"
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
