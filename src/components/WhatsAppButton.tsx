import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      'https://wa.me/5521968197138?text=Acabei%20de%20ver%20a%20landing%20page%20da%20WM%20STAR%20e%20quero%20avaliar%20meu%20caso.',
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" fill="currentColor" />
    </button>
  );
};
