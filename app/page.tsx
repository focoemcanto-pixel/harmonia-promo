import TestimonialCarousel from './components/TestimonialCarousel'
import VideoFacade from './components/VideoFacade'
import CountdownTimer from './components/CountdownTimer'

const checkoutUrl = 'https://pay.kiwify.com.br/7FrQZOt'
const whatsappUrl = 'https://wa.me/5571997178807'

const painPoints = [
  'Você até sabe cantar a melodia, mas se perde quando tenta abrir outra voz.',
  'Quando alguém começa a dividir do seu lado, você volta automaticamente para a voz principal.',
  'Você depende de alguém gravar sua parte para conseguir estudar em casa.',
  'Na hora do louvor, bate insegurança de errar e atrapalhar o grupo.',
]

const benefits = [
  'Afinação firme para sustentar sua linha vocal mesmo ouvindo outra voz.',
  'Percepção auditiva para reconhecer caminhos de segunda voz com mais clareza.',
  'Segurança para encaixar harmonias em músicas do louvor sem depender de alguém cantando no ouvido.',
  'Prática real para trabalhar kits vocais, adaptar vozes ao seu tom e estudar com autonomia.',
  'Consciência para saber quando manter a melodia e quando abrir a divisão vocal.',
  'Independência para achar sua voz sozinho e contribuir melhor no ministério.',
]

const faqs = [
  ['Esse curso é para aprender a cantar do zero?', 'Não. O foco principal do Foco em Harmonia é divisão vocal: segunda voz, percepção, encaixe harmônico e prática para louvor. Ele pode ajudar sua musicalidade, mas não substitui um curso completo de técnica vocal.'],
  ['Serve para quem ainda trava na segunda voz?', 'Sim. O treinamento foi pensado justamente para quem canta no louvor, mas ainda depende de alguém mostrando a voz ou cantando junto para conseguir dividir.'],
  ['Preciso saber teoria musical?', 'Não. As aulas são práticas e diretas, com explicações simples para você entender os caminhos da divisão vocal sem precisar dominar teoria pesada.'],
  ['Quanto tempo tenho para completar o curso?', 'O acesso é vitalício. Você pode estudar no seu ritmo, repetir as aulas e revisar os exercícios sempre que precisar.'],
  ['Posso parcelar o valor do treinamento?', 'Sim. O checkout mostra as opções de parcelamento disponíveis no momento da compra.'],
  ['Como funciona a garantia?', 'Você tem 7 dias de garantia incondicional. Se entender que o treinamento não é para você, pode solicitar o reembolso dentro desse prazo — sem perguntas.'],
]

export default function Home() {
  return (
    <main>
      <a className="whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      <CountdownTimer />

      {/* HERO */}
      <section className="hero-original">
        <div className="container narrow center">
          <img className="offer-banner" src="/images/hero/mega-oferta.webp" alt="Mega semana de ofertas" />
          <p className="hero-kicker">Treinamento prático de divisão vocal para louvor</p>
          <h1>Você trava quando tenta fazer segunda voz no louvor?</h1>
          <p className="lead">
            Aprenda um método simples para encontrar harmonias, desenvolver percepção auditiva e dividir com segurança — sem depender de alguém cantando no seu ouvido.
          </p>

          <div className="hero-price-card" aria-label="Oferta especial do Foco em Harmonia">
            <span className="hero-price-label">Oferta especial por tempo limitado</span>
            <div className="hero-price-row">
              <span className="hero-price-times">12x</span>
              <strong>R$&nbsp;5,99</strong>
            </div>
            <p>ou R$ 57,90 à vista • acesso vitalício</p>
          </div>

          <VideoFacade
            videoId="F1pYjGMCqAM"
            title="Como dividir voz"
            startSeconds={7}
            thumbnailSrc="/images/videos/thumb-como-dividir-voz.webp"
          />

          <a className="button primary wide" href={checkoutUrl} target="_blank" rel="noreferrer">
            ⚡ QUERO APRENDER SEGUNDA VOZ
          </a>

          <div className="trust-badges">
            <div className="trust-badge"><span>Acesso Imediato</span></div>
            <div className="trust-divider" />
            <div className="trust-badge"><span>7 Dias de Garantia</span></div>
            <div className="trust-divider" />
            <div className="trust-badge"><span>Pagamento Seguro</span></div>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="section pain-section dark">
        <div className="container narrow center">
          <h2>Se você canta no ministério, talvez isso já tenha acontecido com você:</h2>
          <div className="pain-grid">
            {painPoints.map((item) => (
              <div className="pain-card" key={item}>⚠️ <p>{item}</p></div>
            ))}
          </div>
          <p className="pain-close">
            O problema não é falta de dom. Na maioria das vezes, falta um caminho prático para treinar o ouvido e entender onde sua voz deve entrar.
          </p>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section testimonials early-testimonials">
        <div className="container">
          <h2>Veja os <span>resultados reais de quem já destravou</span> a divisão vocal com o Marcos Cruz</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="section dark split-section">
        <div className="container split">
          <div>
            <h2>O Foco em Harmonia é para quem quer <span>dividir vozes com segurança</span> no louvor.</h2>
            <ul className="check-list">
              <li><strong>Ministros de louvor:</strong> que querem parar de depender de alguém ensinando cada voz.</li>
              <li><strong>Backings e coralistas:</strong> que precisam sustentar sua linha vocal sem se perder na melodia principal.</li>
              <li><strong>Quem usa kits vocais:</strong> e quer entender melhor como adaptar a voz ao seu tom.</li>
              <li><strong>Quem trava na hora H:</strong> e quer cantar a divisão com mais firmeza, ouvido e confiança.</li>
            </ul>
          </div>
          <img className="product-img" src="/images/produto/notebook-curso.webp" alt="Plataforma do curso" />
        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section className="section transform-section">
        <div className="container split reverse-mobile">
          <img className="feature-img" src="/images/produto/%20cantor-transformacao.webp" alt="Cantor em transformação vocal" />
          <div>
            <h2>Você não precisa mais ficar perdido quando alguém diz: <span>“faz a segunda voz”.</span></h2>
            <p>O Foco em Harmonia foi criado para a realidade de quem canta no louvor e precisa entender, praticar e aplicar divisão vocal em músicas reais.</p>
            <p><strong>Passo 1:</strong> firmar sua afinação enquanto ouve outra linha vocal.</p>
            <p><strong>Passo 2:</strong> entender caminhos simples para construir segunda voz.</p>
            <p><strong>Passo 3:</strong> praticar até conseguir achar sua voz com mais autonomia.</p>
            <div className="outline-card">
              O foco aqui não é formar um cantor técnico do zero. É te ajudar a desenvolver percepção, encaixe e segurança para dividir vozes no louvor com mais consciência.
            </div>
            <a className="button primary wide" href={checkoutUrl} target="_blank" rel="noreferrer">
              🔥 QUERO PARAR DE TRAVAR NO LOUVOR
            </a>
          </div>
        </div>
      </section>

      {/* PASSOS */}
      <section className="section steps-section light">
        <div className="container">
          <h2 className="black-title">3 passos para destravar sua divisão vocal no louvor</h2>
          <div className="steps-grid">
            <article className="step-card">
              <img src="/images/passos/passo-1-afinacao.webp" alt="Passo 1" />
              <span>PASSO 01</span>
              <h3>Firmar a afinação</h3>
              <p>Treine estabilidade para manter sua voz firme mesmo ouvindo a melodia principal ou outra linha vocal ao mesmo tempo.</p>
            </article>
            <article className="step-card">
              <img src="/images/passos/passo-2-segunda-voz.webp" alt="Passo 2" />
              <span>PASSO 02</span>
              <h3>Encontrar a segunda voz</h3>
              <p>Aprenda caminhos práticos para sair da melodia principal e encaixar uma voz complementar com mais segurança.</p>
            </article>
            <article className="step-card">
              <img src="/images/passos/passo-3-intuicao.webp" alt="Passo 3" />
              <span>PASSO 03</span>
              <h3>Aplicar no louvor</h3>
              <p>Com prática guiada, você começa a reconhecer possibilidades de harmonia e aplicar a divisão em situações reais.</p>
            </article>
          </div>
        </div>
      </section>

      {/* RECAP */}
      <section className="section recap">
        <div className="container">
          <h2><span>Ao entrar no treinamento,</span> você vai desenvolver:</h2>
          <div className="benefit-grid">
            {benefits.map((item) => (
              <div className="benefit" key={item}>✅ <p>{item}</p></div>
            ))}
          </div>
          <a className="button primary centered" href={checkoutUrl} target="_blank" rel="noreferrer">
            🎯 QUERO TER ESSE RESULTADO TAMBÉM
          </a>
        </div>
      </section>

      {/* ACESSO VITALÍCIO */}
      <section className="section dark center access-section">
        <div className="container narrow">
          <VideoFacade
            videoId="yb-6zZv763k"
            title="Viagem pelo curso"
            thumbnailSrc="/images/videos/%20thumb-viagem-pelo-curso.webp"
          />
          <h2>Estude quando quiser, onde quiser — <span>acesso vitalício incluído!</span></h2>
          <h3>ACESSO VITALÍCIO</h3>
          <div className="trust-row compact">
            <div>✅ 7 Módulos Gravados</div>
            <div>✅ Treinamento 100% online</div>
            <div>✅ Aulas direto ao ponto</div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="section offer-section">
        <div className="container narrow center">
          <div className="logo-offer">
            <img src="/images/oferta/logo-foco-em-harmonia.webp" alt="Foco em Harmonia" />
          </div>
          <h2>Entre hoje no Foco em Harmonia e comece a destravar sua divisão vocal.</h2>
          <div className="offer-price-block">
            <p className="offer-discount-badge">🔥 OFERTA ESPECIAL — ACESSO VITALÍCIO</p>
            <p className="old-price"><s>R$ 397,00</s></p>
            <p className="price-drop-arrow" aria-hidden="true">▼</p>
            <div className="price-installment">
              <span className="price-times">12x</span>
              <span className="price-value">R$&nbsp;5,99</span>
            </div>
            <p className="cash-price">ou <strong>R$ 57,90</strong> à vista</p>
            <p className="offer-savings">Acesso imediato, garantia de 7 dias e pagamento seguro.</p>
          </div>
          <ul className="offer-list">
            <li>✓ 7 módulos de aulas completas</li>
            <li>✓ Comunidade exclusiva para alunos</li>
            <li>✓ Módulo bônus: como achar seu tom</li>
            <li>✓ Teste de extensão e classificação vocal</li>
            <li>✓ Atividades práticas para treinar divisão vocal</li>
            <li>✓ Acesso vitalício — pague uma vez, use para sempre</li>
          </ul>
          <a className="button primary wide" href={checkoutUrl} target="_blank" rel="noreferrer">
            🚀 QUERO ENTRAR AGORA
          </a>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="section guarantee dark">
        <div className="container split">
          <img className="guarantee-img" src="/images/oferta/%20garantia-7-dias.webp" alt="Garantia de 7 dias" />
          <div>
            <h2>Risco zero para você — <span>7 dias de garantia incondicional!</span></h2>
            <p>Acesse o treinamento, veja as aulas e pratique os exercícios. Se entender que o Foco em Harmonia não é para você, basta pedir o reembolso dentro do prazo.</p>
            <p><strong>Você não tem nada a perder. Só a segunda voz a destravar.</strong></p>
            <a className="button primary wide" href={checkoutUrl} target="_blank" rel="noreferrer">
              ✅ GARANTIR MINHA VAGA SEM RISCO
            </a>
          </div>
        </div>
      </section>

      {/* MENTOR */}
      <section className="section mentor-section">
        <div className="container split">
          <div>
            <h2>Quem vai te guiar nessa transformação: <span>Marcos Cruz</span></h2>
            <p>Marcos Cruz é músico profissional e professor de canto, técnica vocal e piano com mais de 15 anos de experiência. Já ajudou centenas de alunos a desenvolver percepção, afinação e mais segurança para cantar no louvor.</p>
            <p>Seu método é prático, direto e desenvolvido para a realidade de quem canta em ministério — com foco em divisão vocal, segunda voz e aplicação real no louvor.</p>
          </div>
          <img className="mentor-img" src="/images/mentor/%20marcos-cruz.webp" alt="Marcos Cruz" />
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq dark">
        <div className="container">
          <h2>Perguntas Frequentes</h2>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section dark center">
        <div className="container narrow">
          <h2>Chega de ficar perdido quando chega a hora da divisão vocal.</h2>
          <p>Entre no Foco em Harmonia hoje por 12x de R$ 5,99 e comece a treinar com acesso vitalício.</p>
          <a className="button primary wide" href={checkoutUrl} target="_blank" rel="noreferrer">
            🔥 QUERO MINHA VAGA AGORA
          </a>
        </div>
      </section>
    </main>
  )
}
