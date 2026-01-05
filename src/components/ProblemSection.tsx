import { Search, EyeOff, UserMinus } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

const problemCards = [
  {
    icon: Search,
    title: 'Pesquisa Online',
    description: 'Mais de 80% das pessoas pesquisam na internet antes de comprar. Se você não está lá, está perdendo vendas.',
  },
  {
    icon: EyeOff,
    title: 'Invisibilidade Digital',
    description: 'Se sua empresa não aparece nos resultados de busca, para o cliente, ela simplesmente não existe.',
  },
  {
    icon: UserMinus,
    title: 'Perda de Clientes',
    description: 'Cada cliente que não encontra você está encontrando e escolhendo o seu concorrente.',
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            A jornada do <span className="neon-text">cliente moderno</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entenda como a invisibilidade digital está custando clientes para você
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
