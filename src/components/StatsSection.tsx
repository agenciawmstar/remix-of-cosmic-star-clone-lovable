import { TrendingUp, Users, Target, BadgeCheck, LucideIcon } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { useCountUp } from '@/hooks/useCountUp';

interface StatItemProps {
  icon: LucideIcon;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon: Icon, value, prefix = '', suffix = '', label, delay }: StatItemProps) => {
  const { ref, displayValue } = useCountUp({ 
    end: value, 
    duration: 2000, 
    prefix, 
    suffix 
  });

  return (
    <AnimateOnScroll delay={delay}>
      <div 
        ref={ref}
        className="glass-card p-6 md:p-8 text-center group hover:border-primary/30 transition-all duration-500"
      >
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:shadow-neon-subtle transition-all duration-500">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 neon-text">
          {displayValue}
        </div>
        <div className="text-sm md:text-base text-muted-foreground">
          {label}
        </div>
      </div>
    </AnimateOnScroll>
  );
};

const stats = [
  {
    icon: TrendingUp,
    value: 480,
    prefix: '+',
    suffix: '%',
    label: 'de aumento de visibilidade em alguns projetos',
  },
  {
    icon: Users,
    value: 130,
    prefix: '+',
    suffix: '',
    label: 'leads gerados em menos de 30 dias em campanhas ativas',
  },
  {
    icon: Target,
    value: 55,
    prefix: '+',
    suffix: '%',
    label: 'de aumento médio de performance em campanhas',
  },
  {
    icon: BadgeCheck,
    value: 82,
    prefix: '+',
    suffix: '',
    label: 'clientes atendidos e satisfeitos',
  },
];

export const StatsSection = () => {
  return (
    <section id="resultados" className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Resultados focados em{' '}
            <span className="neon-text">crescimento real</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground/70 mt-12">
          *Os resultados podem variar de acordo com o projeto, investimento e contexto de cada negócio.
        </p>
      </div>
    </section>
  );
};
