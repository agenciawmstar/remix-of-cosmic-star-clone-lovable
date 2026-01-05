export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">W</span>
            </div>
            <span className="text-muted-foreground text-sm">
              WM Star Agência Digital © Todos os direitos reservados.
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
