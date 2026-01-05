import { Star, Quote } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

const testimonials = [
  {
    name: 'Ricardo Oliveira',
    role: 'CEO, AutoPeças Express',
    content: 'Depois de apenas 2 meses com a WM Star, nossa loja aparece no topo do Google. As vendas aumentaram 40% e recebemos ligações todos os dias de novos clientes!',
    rating: 5,
    avatar: 'RO',
  },
  {
    name: 'Fernanda Santos',
    role: 'Proprietária, Clínica Estética Bella',
    content: 'Eu não acreditava muito em marketing digital, mas a equipe me convenceu. Hoje tenho agenda lotada e uma lista de espera. Valeu cada centavo investido!',
    rating: 5,
    avatar: 'FS',
  },
  {
    name: 'Carlos Mendes',
    role: 'Dono, Restaurante Sabor & Arte',
    content: 'O tráfego pago mudou nosso negócio. Antes dependíamos só de boca a boca, agora temos reservas online todo dia. Recomendo demais!',
    rating: 5,
    avatar: 'CM',
  },
  {
    name: 'Ana Paula Lima',
    role: 'Diretora, Escritório de Advocacia Lima',
    content: 'Profissionalismo e resultados reais. Nossa presença no Google Meu Negócio disparou e recebemos consultas de clientes que nunca chegariam até nós.',
    rating: 5,
    avatar: 'AL',
  },
  {
    name: 'Marcos Ferreira',
    role: 'Fundador, Tech Solutions',
    content: 'A estratégia de landing page + tráfego pago foi um divisor de águas. Captamos mais leads em um mês do que em todo o ano anterior.',
    rating: 5,
    avatar: 'MF',
  },
  {
    name: 'Juliana Costa',
    role: 'Gerente, Imobiliária Costa',
    content: 'Fantástico! As campanhas são muito bem segmentadas. Conseguimos vender 3 imóveis só com os leads que vieram do Instagram no primeiro mês.',
    rating: 5,
    avatar: 'JC',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O que nossos <span className="neon-text">clientes dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empresas reais, resultados reais. Veja como transformamos negócios através do marketing digital.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={testimonial.name} delay={index * 100}>
              <div className="glass-card p-6 h-full group hover:border-primary/30 transition-all duration-500 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
