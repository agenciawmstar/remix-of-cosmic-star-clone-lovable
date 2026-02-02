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
        isScrolled ? 'glass-card py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src={wmStarLogo} 
            alt="WM STAR - Agência Digital" 
            className="h-48 md:h-36 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            Serviços
          </a>
          <a href="#resultados" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            Resultados
          </a>
          <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden glass-card mt-2 mx-4 p-6 flex flex-col gap-4">
          <a
            href="#servicos"
            className="text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Serviços
          </a>
          <a
            href="#resultados"
            className="text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Resultados
          </a>
          <a
            href="#contato"
            className="text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contato
          </a>
        </nav>
      )}
    </header>
  );
};
