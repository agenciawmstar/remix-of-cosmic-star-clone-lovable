import { Search, EyeOff, UserMinus } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

const problemCards = [
  {
    icon: Search,
    title: 'Ele pesquisa no Google',
    description: 'O cliente não entra no Google para conhecer empresas. Ele entra para resolver algo agora. E escolhe entre quem aparece primeiro.',
  },
  {
    icon: EyeOff,
    title: 'Decisão rápida',
    description: 'Ele não analisa 10 opções. Ele olha 1 ou 2 resultados, abre um deles e chama.',
  },
  {
    icon: UserMinus,
    title: 'Venda Perdida',
    description: 'Ele precisava do que você vende. Mas falou com quem apareceu primeiro.',
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O que acontece antes de um cliente <span className="neon-text">comprar de você</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Isso já está acontecendo hoje, com ou sem a sua empresa
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {problemCards.map((card, index) => (
            <AnimateOnScroll key={card.title} delay={index * 150}>
              <div className="glass-card-hover p-8 h-full group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <card.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
