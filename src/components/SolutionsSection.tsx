import { Map, Target, BarChart3, Globe, Users, Zap } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

const solutions = [
  {
    icon: Map,
    title: 'Perfil da Empresa no Google',
    subtitle: 'Domine as buscas locais',
    features: [
      { icon: Globe, text: 'Apareça no topo do Google Maps' },
      { icon: Users, text: 'Atraia clientes próximos' },
      { icon: Zap, text: 'Resultados em semanas' },
    ],
  },
  {
    icon: BarChart3,
    title: 'Gestão de Tráfego Pago',
    subtitle: 'Anúncios que convertem',
    features: [
      { icon: Target, text: 'Segmentação precisa' },
      { icon: Users, text: 'Alcance qualificado' },
      { icon: Zap, text: 'ROI mensurável' },
    ],
  },
];

export const SolutionsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 gradient-nebula" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            A solução para{' '}
            <span className="neon-text">dominar o digital</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <AnimateOnScroll key={solution.title} delay={index * 150}>
              <div className="glass-card p-8 group hover:border-primary/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:shadow-neon-subtle transition-all duration-500">
                    <solution.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.subtitle}</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {solution.features.map((feature) => (
                    <div
                      key={feature.text}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <feature.icon className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
