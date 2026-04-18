import { useState } from 'react';
import { ArrowRight, Send, Loader2, CheckCircle, MessageCircle } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { toast } from '@/hooks/use-toast';
import { z } from 'zod';
import { whatsappLink } from '@/config/constants';

const CONTACT_API_URL = '/api/contact';

const WHATSAPP_SUCCESS_MESSAGE = 'Acabei de enviar meus dados pelo formulário da landing page da WM STAR e gostaria de agilizar o atendimento.';

const RATE_LIMIT_MS = 60000; // 1 minute between submissions

const contactSchema = z.object({
  nome: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100, 'Nome muito longo'),
  email: z.string().trim().email('Email inválido').max(255, 'Email muito longo'),
  whatsapp: z.string().trim().min(8, 'Telefone inválido').max(20, 'Telefone inválido')
    .regex(/^[\d\s()+-]+$/, 'Telefone contém caracteres inválidos'),
});

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  // Honeypot field - bots will fill this, real users won't see it
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});

    // Honeypot check - silently reject bot submissions
    if (honeypot) {
      setIsSuccess(true);
      return;
    }

    // Rate limiting
    const lastSubmit = sessionStorage.getItem('lastFormSubmit');
    if (lastSubmit && Date.now() - parseInt(lastSubmit) < RATE_LIMIT_MS) {
      toast({
        title: "Aguarde",
        description: "Por favor, aguarde um momento antes de enviar novamente.",
        variant: "destructive",
      });
      return;
    }

    // Zod validation
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0] as string] = err.message;
        }
      });
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const validated = result.data;

      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: validated.nome,
          email: validated.email,
          phone: validated.whatsapp,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      sessionStorage.setItem('lastFormSubmit', Date.now().toString());
      setFormData({ nome: '', email: '', whatsapp: '' });
      setIsSuccess(true);
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'form_submit_success'
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Não foi possível enviar seus dados. Tente novamente em alguns instantes.",
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
            Veja onde você está <span className="neon-text">perdendo clientes hoje</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Saiba agora se o problema é falta de procura ou falta de visibilidade
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
                href={whatsappLink(WHATSAPP_SUCCESS_MESSAGE)}
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
              {/* Honeypot field - hidden from real users */}
              <div className="absolute opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

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
                    maxLength={100}
                    className={`w-full bg-muted/50 border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${fieldErrors.nome ? 'border-destructive' : 'border-border'}`}
                    placeholder="Seu nome"
                    required
                  />
                  {fieldErrors.nome && <p className="text-sm text-destructive mt-1">{fieldErrors.nome}</p>}
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    maxLength={255}
                    className={`w-full bg-muted/50 border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${fieldErrors.email ? 'border-destructive' : 'border-border'}`}
                    placeholder="seu@email.com"
                    required
                  />
                  {fieldErrors.email && <p className="text-sm text-destructive mt-1">{fieldErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Celular (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    maxLength={20}
                    className={`w-full bg-muted/50 border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${fieldErrors.whatsapp ? 'border-destructive' : 'border-border'}`}
                    placeholder="(00) 00000-0000"
                    required
                  />
                  {fieldErrors.whatsapp && <p className="text-sm text-destructive mt-1">{fieldErrors.whatsapp}</p>}
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
