import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sections = [
  {
    title: "1. Quais dados coletamos",
    content: (
      <>
        <p>
          Coletamos apenas os dados estritamente necessários para prestar nossos serviços e entrar em contato com você:
        </p>
        <ul>
          <li><strong>Nome completo</strong></li>
          <li><strong>Número de telefone / WhatsApp</strong></li>
          <li><strong>Endereço de e-mail</strong></li>
        </ul>
        <p>
          Esses dados são fornecidos voluntariamente por você ao preencher nosso formulário de contato ou ao nos chamar diretamente pelo WhatsApp.
        </p>
      </>
    ),
  },
  {
    title: "2. Como usamos seus dados",
    content: (
      <>
        <p>Utilizamos suas informações exclusivamente para:</p>
        <ul>
          <li>Entrar em contato para apresentar nossos serviços e propostas comerciais;</li>
          <li>Responder dúvidas e solicitações enviadas por você;</li>
          <li>Enviar conteúdos relevantes sobre marketing digital, quando autorizado.</li>
        </ul>
        <p>
          <strong>Não vendemos, alugamos nem compartilhamos seus dados com terceiros</strong> para fins
          comerciais. Seus dados nunca serão repassados a outras empresas sem o seu consentimento explícito.
        </p>
      </>
    ),
  },
  {
    title: "3. Cookies e ferramentas de análise",
    content: (
      <>
        <p>
          Nosso site pode utilizar cookies e tecnologias de rastreamento para melhorar a sua experiência e
          mensurar o desempenho das nossas campanhas:
        </p>
        <ul>
          <li>
            <strong>Meta Pixel (Facebook/Instagram):</strong> rastreia visitas e conversões para otimização de
            anúncios na plataforma Meta.
          </li>
          <li>
            <strong>Google Analytics:</strong> coleta dados anônimos de navegação (páginas visitadas, tempo de
            sessão, origem do tráfego) para análise de desempenho do site.
          </li>
        </ul>
        <p>
          Essas ferramentas podem coletar seu endereço IP e dados de navegação de forma anonimizada. Você pode
          desativar cookies nas configurações do seu navegador a qualquer momento.
        </p>
      </>
    ),
  },
  {
    title: "4. Base legal e conformidade com a LGPD",
    content: (
      <>
        <p>
          Estamos em conformidade com a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD)</strong>.
          O tratamento dos seus dados é realizado com base nas seguintes hipóteses legais:
        </p>
        <ul>
          <li>
            <strong>Consentimento</strong> — ao preencher nosso formulário você consente com o tratamento dos
            seus dados para as finalidades descritas nesta política.
          </li>
          <li>
            <strong>Legítimo interesse</strong> — para fins de contato comercial relacionado aos serviços que
            você demonstrou interesse.
          </li>
        </ul>
        <p>
          Como titular dos dados, você tem direito a: acessar, corrigir, portar, revogar o consentimento e
          solicitar a exclusão dos seus dados a qualquer momento.
        </p>
      </>
    ),
  },
  {
    title: "5. Como solicitar a exclusão dos seus dados",
    content: (
      <>
        <p>
          Para solicitar a exclusão, atualização ou qualquer outra ação relacionada aos seus dados pessoais,
          entre em contato conosco pelo e-mail:
        </p>
        <p className="my-4">
          <a
            href="mailto:contato@agenciawmstar.com"
            className="neon-text font-semibold hover:underline"
          >
            contato@agenciawmstar.com
          </a>
        </p>
        <p>
          Atenderemos sua solicitação no prazo de até <strong>15 dias úteis</strong>, conforme previsto pela
          LGPD.
        </p>
      </>
    ),
  },
  {
    title: "6. Armazenamento e segurança",
    content: (
      <p>
        Seus dados são armazenados em ambientes seguros e acessados apenas por pessoas autorizadas da Agência
        WM STAR. Adotamos medidas técnicas e administrativas para proteger suas informações contra acessos não
        autorizados, perda ou divulgação indevida.
      </p>
    ),
  },
  {
    title: "7. Alterações nesta política",
    content: (
      <p>
        Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre
        disponível nesta página. Recomendamos que você a consulte regularmente. Em caso de alterações
        relevantes, comunicaremos por e-mail quando possível.
      </p>
    ),
  },
];

const Privacidade = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="container mx-auto px-4 pt-48 pb-24 max-w-3xl">
        {/* Page heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold neon-text mb-4">
            Política de Privacidade
          </h1>
          <p className="text-muted-foreground text-sm">
            Última atualização: maio de 2026
          </p>
          <div className="mt-6 p-4 glass-card rounded-xl text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Agência WM STAR</strong>
            &nbsp;·&nbsp;CNPJ: 62.741.551/0001-63
            &nbsp;·&nbsp;
            <a href="mailto:contato@agenciawmstar.com" className="hover:text-primary transition-colors">
              contato@agenciawmstar.com
            </a>
            &nbsp;·&nbsp;
            <a href="https://agenciawmstar.com" className="hover:text-primary transition-colors">
              agenciawmstar.com
            </a>
          </div>
        </div>

        {/* Intro */}
        <p className="text-muted-foreground leading-relaxed mb-12">
          A sua privacidade é importante para nós. Esta política descreve como a{" "}
          <strong className="text-foreground">Agência WM STAR</strong> coleta, usa e protege as informações
          pessoais que você nos fornece ao utilizar nosso site ou entrar em contato conosco.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4 neon-text">
                {section.title}
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_strong]:text-foreground">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-16 text-center">
          <a
            href="/"
            className="btn-neon inline-block px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            ← Voltar ao site
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacidade;
