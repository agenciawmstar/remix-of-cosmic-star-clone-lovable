import { useState } from 'react';
import { ArrowRight, Send, Loader2, CheckCircle, MessageCircle } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { toast } from '@/hooks/use-toast';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz0X0q7J3VfsGCkCxDqUCLG-6yAGfz5AsaHiP0lGYszyg48rP_T8Tdoimg-5DsVDzFG4w/exec';

const WHATSAPP_SUCCESS_MESSAGE = encodeURIComponent(
  'Acabei de enviar meus dados pelo formulário da landing page da WM STAR e gostaria de agilizar o atendimento.'
);

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.nome,
          email: formData.email,
          phone: formData.whatsapp,
        }),
      });

      setFormData({ nome: '', email: '', whatsapp: '' });
      setIsSuccess(true);
      window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'form_submit_success'
});
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewSubmission = () => {
    setIsSuccess(false);
  };

  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute inset-0 gradient-nebula" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Vamos <span className="neon-text">conversar?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Dê o primeiro passo para transformar sua presença digital
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          {isSuccess ? (
            <div className="max-w-xl mx-auto glass-card p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Recebemos seus dados com sucesso!
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nossa equipe entrará em contato com você em breve para avaliar o seu cenário.
                <br /><br />
                Se preferir agilizar o atendimento, você pode falar conosco agora mesmo pelo WhatsApp.
              </p>
              
              <a
                href={`https://wa.me/5521968197138?text=${WHATSAPP_SUCCESS_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon inline-flex items-center justify-center gap-2 text-lg group w-full mb-4"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com a WM STAR no WhatsApp
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              
              <button
                onClick={handleNewSubmission}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm underline"
              >
                Enviar outro formulário
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto glass-card p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Celular (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-neon inline-flex items-center justify-center gap-2 text-lg group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      ENVIANDO...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      ENVIAR
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
};
