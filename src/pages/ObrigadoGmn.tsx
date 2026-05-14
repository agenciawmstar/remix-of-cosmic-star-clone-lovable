import { useEffect } from "react";
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import { trackCompleteRegistration } from "@/lib/pixel";

const WA_LINK =
  "https://wa.me/5521968197138?text=Ol%C3%A1%2C%20vim%20pelo%20formul%C3%A1rio%20e%20quero%20melhorar%20a%20visibilidade%20do%20meu%20neg%C3%B3cio%20no%20Google.";

export default function ObrigadoGmn() {
  useEffect(() => {
    trackCompleteRegistration();

    const timer = setTimeout(() => {
      window.location.href = WA_LINK;
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-nebula" />

      <div className="relative z-10 w-full max-w-xl mx-auto px-4">
        <div className="glass-card p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-foreground mb-4">
            Recebemos seus dados com sucesso!
          </h1>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Nossa equipe entrará em contato com você em breve para avaliar o seu
            cenário.
            <br />
            <br />
            Você será redirecionado para o WhatsApp em instantes. Se preferir,
            clique no botão abaixo agora mesmo.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center justify-center gap-2 text-lg group w-full"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com a WM STAR no WhatsApp
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </main>
  );
}
