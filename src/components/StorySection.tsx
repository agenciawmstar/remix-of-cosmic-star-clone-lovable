import { useMemo } from 'react';
import { Star, Sparkles, Rocket } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

const storySteps = [
  {
    icon: Star,
    text: 'Hoje, quem precisa de um serviço não pergunta, pesquisa.',
  },
  {
    icon: Sparkles,
    text: 'Quem aparece primeiro entra na decisão. Quem não aparece, nem é considerado.',
  },
  {
    icon: Rocket,
    text: 'Por isso empresas crescem sem aumentar esforço: elas só passam a ser encontradas todos os dias.',
  },
];

export const StorySection = () => {
  const stars = useMemo(
    () => Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 2}s`,
      delay: `${Math.random() * 2}s`,
    })),
    []
  );

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Star Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-0.5 h-0.5 bg-foreground/30 rounded-full"
            style={{
              left: star.left,
              top: star.top,
              animation: `twinkle ${star.duration} ease-in-out infinite`,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {storySteps.map((step, index) => (
            <AnimateOnScroll key={step.text} delay={index * 200}>
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
                    {(() => {
                      const highlights = [
                        'pesquisam no Google antes de comprar',
                        'posicionamento estratégico',
                        'todos os dias'
                      ];
                      
                      let result: React.ReactNode[] = [];
                      let text = step.text;
                      let lastIndex = 0;
                      
                      // Find all highlights and their positions
                      const matches: { start: number; end: number; phrase: string }[] = [];
                      highlights.forEach(phrase => {
                        const idx = text.indexOf(phrase);
                        if (idx !== -1) {
                          matches.push({ start: idx, end: idx + phrase.length, phrase });
                        }
                      });
                      
                      // Sort by position
                      matches.sort((a, b) => a.start - b.start);
                      
                      matches.forEach((match, idx) => {
                        // Add text before this match
                        if (match.start > lastIndex) {
                          result.push(<span key={`text-${idx}`}>{text.slice(lastIndex, match.start)}</span>);
                        }
                        // Add highlighted phrase
                        result.push(
                          <span key={`highlight-${idx}`} className="text-primary font-semibold">
                            {match.phrase}
                          </span>
                        );
                        lastIndex = match.end;
                      });
                      
                      // Add remaining text
                      if (lastIndex < text.length) {
                        result.push(<span key="text-end">{text.slice(lastIndex)}</span>);
                      }
                      
                      return result;
                    })()}
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
