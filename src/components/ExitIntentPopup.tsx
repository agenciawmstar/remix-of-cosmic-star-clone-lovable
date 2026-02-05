import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Don't show on mobile
    if (isMobile) return;

    // Check if already shown this session
    const hasShown = sessionStorage.getItem('exitIntentShown');
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when cursor moves to top of page (exit intent)
      if (e.clientY <= 0) {
        setIsVisible(true);
        sessionStorage.setItem('exitIntentShown', 'true');
        // Remove listener after showing
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    // Small delay before activating to avoid false triggers on page load
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/5521968197138?text=Acabei%20de%20ver%20a%20landing%20page%20da%20WM%20STAR%20e%20quero%20avaliar%20meu%20caso.',
      '_blank'
    );
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={handleClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Popup */}
      <div 
        className="relative glass-card p-8 md:p-10 max-w-md w-full text-center animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Espera um segundo 👀
        </h3>
        
        <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
          Talvez você só queira entender se isso realmente funciona pro seu negócio.
          <br /><br />
          Em 10 minutos analisamos seu caso e te falamos com sinceridade se vale a pena ou não. Topa?
        </p>

        {/* CTA Button */}
        <button
          onClick={handleWhatsApp}
          className="btn-neon w-full text-base md:text-lg"
        >
          Avaliação rápida
        </button>
      </div>
    </div>
  );
};
