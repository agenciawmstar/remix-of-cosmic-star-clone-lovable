import { Star, Sparkles, Rocket } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

const storySteps = [
  {
    icon: Star,
    text: 'Em um universo repleto de possibilidades, sua marca pode brilhar como a primeira estrela que o cliente encontra.',
  },
  {
    icon: Sparkles,
    text: 'Quando sua presença é estratégica, você não espera ser descoberto – você conquista a atenção.',
  },
  {
    icon: Rocket,
    text: 'Você não depende da sorte: conquista visibilidade constante e transforma cliques em clientes reais.',
  },
];

export const StorySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Star Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-foreground/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {storySteps.map((step, index) => (
            <AnimateOnScroll key={index} delay={index * 200}>
              <div className="relative">
                {/* Connection Line */}
                {index < storySteps.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent h-16" />
                )}
                
                <div className="flex gap-6 mb-12">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0 pulse-glow">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed pt-2">
                    {step.text.split(' ').map((word, i) => {
                      const highlightWords = ['primeira estrela', 'estratégica', 'visibilidade constante', 'clientes reais'];
                      const isHighlight = highlightWords.some(hw => 
                        step.text.toLowerCase().includes(hw) && 
                        hw.toLowerCase().includes(word.toLowerCase())
                      );
                      return (
                        <span
                          key={i}
                          className={isHighlight ? 'text-primary font-semibold' : ''}
                        >
                          {word}{' '}
                        </span>
                      );
                    })}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
