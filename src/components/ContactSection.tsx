import { useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { toast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ nome: '', email: '', whatsapp: '' });
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
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto glass-card p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <label className="block text-foreground font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
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
                className="w-full btn-neon inline-flex items-center justify-center gap-2 text-lg group"
              >
                <Send className="w-5 h-5" />
                ENVIAR
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
