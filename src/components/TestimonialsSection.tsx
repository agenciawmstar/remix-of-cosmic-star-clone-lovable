import { Star, Quote } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

const testimonials = [
  {
    name: 'Mauricio',
    role: 'Proprietário, Pindokos Pet',
    content: 'Depois da otimização da WM STAR, nosso PET aparece no topo do Google. As vendas aumentaram uns 40% e recebemos pedidos todos os dias de clientes vindo do Google. Show!',
    rating: 5,
    avatar: 'M',
  },
  {
    name: 'Alex Araújo',
    role: 'Proprietário, Churrascaria AlexGrill',
    content: 'Eu não conhecia muito sobre o que se podia fazer na internet, mas hoje a churrascaria tá bombando!! Gratidão aos garotos, vocês são 10!!',
    rating: 5,
    avatar: 'AA',
  },
  {
    name: 'Luiz',
    role: 'Dono das lojas Bicão Rações & PetShop e Rações do Piau',
    content: 'O trabalho de otimização na loja foi muito eficiente! Estamos no topo da Vila da Penha em rações!!! Recomendo! Abs',
    rating: 5,
    avatar: 'L',
  },
  {
    name: 'João Victor',
    role: 'Propietário, JM CELL',
    content: 'Rapaziada tirou onda, melhorou bastante o fluxo da loja. Os serviços e vendas aumentam com toda certeza, tmj',
    rating: 5,
    avatar: 'JV',
  },
  {
    name: 'Luciana R.',
    role: 'Propietária, Instituto de Beleza Crisálida',
    content: 'Fiquei muito feliz com o trabalho no Google aqui do salão, e mais encantada ainda com meu site... Ameiiiiii, vocês são 10!!',
    rating: 5,
    avatar: 'LR',
  },
  {
    name: 'Wagner',
    role: 'Propietário, Cavaleiro Tattoo',
    content: 'Tiraram onda no site para os 2 estúdios, serviço do Google e Gestão de Tráfego. A visibilidade dobrou praticamente, vamos pra cima!',
    rating: 5,
    avatar: 'W',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Negócios locais <span className="neon-text">parecidos com o seu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empresas reais, resultados reais. Veja como transformamos negócios através da internet e um trabalho bem feito.
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
