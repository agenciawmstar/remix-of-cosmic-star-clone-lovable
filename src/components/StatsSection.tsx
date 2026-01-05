import { TrendingUp, Users, Target, BadgeCheck } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

const stats = [
  {
    icon: TrendingUp,
    value: '+300%',
    label: 'Aumento de visibilidade',
  },
  {
    icon: Users,
    value: '+120',
    label: 'Leads em 30 dias',
  },
  {
    icon: Target,
    value: '94%',
    label: 'Taxa de conversão',
  },
  {
    icon: BadgeCheck,
    value: '100+',
    label: 'Empresas atendidas',
  },
];

export const StatsSection = () => {
  return (
    <section id="resultados" className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Resultados que{' '}
            <span className="neon-text">falam por si só</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={index * 100}>
              <div className="glass-card p-6 md:p-8 text-center group hover:border-primary/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:shadow-neon-subtle transition-all duration-500">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 neon-text">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
