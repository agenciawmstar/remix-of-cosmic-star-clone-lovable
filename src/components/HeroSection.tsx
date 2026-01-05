import { ArrowRight } from 'lucide-react';
import astronautHero from '@/assets/astronaut-hero.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-nebula" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Enquanto seus clientes procuram no Google ou rolam o feed, eles estão encontrando{' '}
              <span className="neon-text">seus concorrentes</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Estar no Google e no Instagram não é mais uma opção. É o mínimo para quem quer crescer.
            </p>

            <button className="btn-neon inline-flex items-center gap-2 text-lg group">
              Quero ser encontrado agora
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Content - Astronaut */}
          <div className="relative flex justify-center animate-fade-in-up animation-delay-200">
            <div className="floating-animation">
              <img
                src={astronautHero}
                alt="Astronauta trabalhando no espaço digital"
                className="w-full max-w-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
