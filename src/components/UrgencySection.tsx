import { MapPin, TrendingUp, Check, ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

const plans = [
  {
    icon: MapPin,
    title: 'Plano GMN',
    subtitle: 'Google Meu Negócio',
    features: [
      'Criação e otimização do perfil',
      'Gestão de avaliações',
      'Fotos profissionais do negócio',
      'Posts semanais no Google',
      'Relatórios mensais de desempenho',
      'Suporte dedicado',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Plano Tráfego Pago',
    subtitle: 'Gestão de Anúncios',
    features: [
      'Campanhas no Google Ads',
      'Anúncios no Facebook e Instagram',
      'Criação de Landing Pages',
      'Copywriting persuasivo',
      'Testes A/B contínuos',
      'Otimização de conversões',
    ],
  },
];

export const UrgencySection = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="absolute inset-0 gradient-nebula opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll className="text-center mb-8">
          <p className="text-primary font-semibold text-lg mb-4">Quebrar esse ciclo é urgente</p>
          <button className="btn-neon-outline mb-12">
            Vamos mudar isso agora
          </button>
        </AnimateOnScroll>

        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Cada dia parado é um cliente a mais para{' '}
            <span className="neon-text">os concorrentes</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <AnimateOnScroll key={plan.title} delay={index * 150}>
              <div className="glass-card p-8 h-full neon-border group hover:shadow-neon-subtle transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <plan.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{plan.title}</h3>
                    <p className="text-muted-foreground">{plan.subtitle}</p>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full btn-neon inline-flex items-center justify-center gap-2 group/btn">
                  Escolher plano
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
