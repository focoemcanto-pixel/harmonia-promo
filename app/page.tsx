import TestimonialCarousel from './components/TestimonialCarousel'
import VideoFacade from './components/VideoFacade'
import CountdownTimer from './components/CountdownTimer'

const checkoutUrl = 'https://pay.kiwify.com.br/7FrQZOt'
const whatsappUrl = 'https://wa.me/5571997178807'

const benefits = [
  'Afinação firme e precisa — sem travar na hora H.',
  'Percepção auditiva afiada para identificar qualquer harmonia.',
  'Consciência total na hora de harmonizar ao vivo.',
  'Confiança para abrir segunda voz sem medo de errar.',
  'Segurança para trabalhar kits vocais e adaptar ao seu tom.',
  'Intuição vocal desenvolvida — você vai achar as vozes sozinho.',
]

const faqs = [
  ['Esse curso serve para quem está começando do zero?', 'Sim. As aulas foram organizadas para quem quer aprender divisão vocal de forma prática, mesmo sem domínio de teoria musical.'],
  ['Quanto tempo tenho para completar o curso?', 'O acesso é vitalício. Você pode estudar no seu ritmo, repetir as aulas e revisar os exercícios sempre que precisar.'],
  ['Em quanto tempo verei resultados?', 'Isso depende da sua prática, mas muitos alunos percebem evolução nas primeiras semanas ao seguir o passo a passo.'],
  ['Preciso de algum equipamento específico?', 'Não. Você só precisa de internet, celular ou computador e constância para praticar os exercícios.'],
  ['Posso parcelar o valor do treinamento?', 'Sim. O checkout mostra as opções de parcelamento disponíveis no momento da compra.'],
  ['Como funciona a garantia?', 'Você tem 7 dias de garantia incondicional. Se entender que o treinamento não é para você, pode solicitar o reembolso dentro desse prazo — sem perguntas.'],
]

export default function Home() {
  return (
    <main>
      <a className="whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <CountdownTimer />

      {/* HERO */}
      <section className="hero-original">
        <div className="container narrow center">
          <img className="offer-banner" src="/images/hero/mega-oferta.webp" alt="Mega semana de ofertas" />
          <h1>Pare de Travar na Segunda Voz — Aprenda a Dividir no Louvor com 75% OFF, Hoje!</h1>
          <p className="lead">
            Essa é a chance que você estava esperando. O treinamento Foco em Harmonia está com o maior desconto já oferecido.
            Método prático, resultado real — acesso vitalício por menos de R$&nbsp;10 por mês.
          </p>

          <VideoFacade
            videoId="F1pYjGMCqAM"
            title="Como dividir voz"
            startSeconds={7}
            thumbnailSrc="/images/videos/thumb-como-dividir-voz.webp"
          />

          <a className="button primary wide" href={checkoutUrl} target="_blank" rel="noreferrer">
            ⚡ QUERO GARANTIR COM 75% OFF AGORA
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

      {/* PARA QUEM É */}
      <section className="section dark split-section">
        <div className="container split">
          <div>
            <h2>Você ainda está <span>travando na segunda voz?</span> Isso vai mudar.</h2>
            <ul className="check-list">
              <li><strong>Ministros de louvor:</strong> que querem dividir com firmeza e parar de depender de quem canta no ouvido.</li>
              <li><strong>Quem tem pouco tempo:</strong> aulas diretas e objetivas — sem enrolação, sem teoria pesada.</li>
              <li><strong>Quem quer resultado rápido:</strong> o método é progressivo, você sente a evolução semana a semana.</li>
              <li><strong>Quem quer independência vocal:</strong> sair do coro para se tornar referência no ministério.</li>
            </ul>
          </div>
          <img className="product-img" src="/images/produto/notebook-curso.webp" alt="Plataforma do curso" />
        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section className="section transform-section">
        <div className="container split reverse-mobile">
          <img className="feature-img" src="/images/produto/cantor-transformacao.webp" alt="Cantor em transformação vocal" />
          <div>
            <h2>Seu lugar no ministério está <span>esperando por você.</span></h2>
            <p>O Foco em Harmonia foi criado para quem quer parar de errar e começar a contribuir de verdade com o louvor — com confiança, afinação e musicalidade.</p>
            <p><strong>Passo 1:</strong> firmar sua afinação de vez.</p>
            <p><strong>Passo 2:</strong> construir a segunda voz com precisão.</p>
            <p><strong>Passo 3:</strong> desenvolver intuição vocal — e nunca mais depender de ninguém.</p>
            <div className="outline-card">
              Exercícios pensados para situações reais do louvor. Você vai reconhecer caminhos harmônicos e aplicar as vozes com segurança — mesmo sob pressão.
            </div>
            <a className="button primary wide" href={checkoutUrl} target="_blank" rel="noreferrer">
              🔥 QUERO TUDO ISSO COM 75% OFF
            </a>
          </div>
        </div>
      </section>

      {/* PASSOS */}
      <section className="section steps-section light">
        <div className="container">
          <h2 className="black-title">3 passos que vão transformar sua voz no louvor — de uma vez por todas</h2>
          <div className="steps-grid">
            <article className="step-card">
              <img src="/images/passos/passo-1-afinacao.webp" alt="Passo 1" />
              <span>PASSO 01</span>
              <h3>Firmar a afinação</h3>
              <p>Desenvolva estabilidade vocal para manter sua voz firme mesmo ouvindo outra linha melódica ao mesmo tempo.</p>
            </article>
            <article className="step-card">
              <img src="/images/passos/passo-2-segunda-voz.webp" alt="Passo 2" />
              <span>PASSO 02</span>
              <h3>Aprender a segunda voz</h3>
              <p>Construa a voz complementar com precisão e encaixe musical — sem depender de ouvir de outra pessoa.</p>
            </article>
            <article className="step-card">
              <img src="/images/passos/passo-3-intuicao.webp" alt="Passo 3" />
              <span>PASSO 03</span>
              <h3>Desenvolver a intuição</h3>
              <p>Com prática guiada, você percebe caminhos naturais para harmonizar e se torna referência no ministério.</p>
            </article>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section testimonials">
        <div className="container">
          <h2>Veja os <span>resultados reais de quem já estudou</span> com o Marcos Cruz</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* RECAP */}
      <section className="section recap">
        <div className="container">
          <h2><span>Recapitulando...</span> ao sair desse treinamento você vai:</h2>
          <div className="benefit-grid">
            {benefits.map((item) => (
              <div className="benefit" key={item}>✅ <p>{item}</p></div>
            ))}
          </div>
          <a className="button primary centered" href={checkoutUrl} target="_blank" rel="noreferrer">
            🎯 QUERO GARANTIR COM 75% OFF
          </a>
        </div>
      </section>

      {/* ACESSO VITALÍCIO */}
      <section className="section dark center access-section">
        <div className="container narrow">
          <VideoFacade
            videoId="yb-6zZv763k"
            title="Viagem pelo curso"
            thumbnailSrc="/images/videos/thumb-viagem-pelo-curso.webp"
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
          <div className="offer-price-block">
            <p className="offer-discount-badge">🔥 75% OFF — OFERTA LIMITADA</p>
            <p className="old-price"><s>R$ 397,00</s></p>
            <p className="price-drop-arrow" aria-hidden="true">▼</p>
            <div className="price-installment">
              <span className="price-times">12x</span>
              <span className="price-value">R$&nbsp;10,13</span>
            </div>
            <p className="cash-price">ou <strong>R$ 97,00</strong> à vista</p>
            <p className="offer-savings">🤑 Você economiza R$ 300,00 agora!</p>
          </div>
          <ul className="offer-list">
            <li>✓ 7 módulos de aulas completas</li>
            <li>✓ Comunidade exclusiva para alunos</li>
            <li>✓ Módulo bônus: como achar seu tom</li>
            <li>✓ Teste de extensão e classificação vocal</li>
            <li>✓ Atividades práticas para o dia a dia</li>
            <li>✓ Acesso vitalício — pague uma vez, use para sempre</li>
          </ul>
          <a className="button primary wide" href={checkoutUrl} target="_blank" rel="noreferrer">
            🚀 QUERO GARANTIR MINHA VAGA AGORA
          </a>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="section guarantee dark">
        <div className="container split">
          <img className="guarantee-img" src="/images/oferta/garantia-7-dias.webp" alt="Garantia de 7 dias" />
          <div>
            <h2>Risco zero para você — <span>7 dias de garantia incondicional!</span></h2>
            <p>Acesse o treinamento, aplique os exercícios e sinta a diferença. Se em 7 dias você não ver valor, basta pedir o reembolso — sem perguntas, sem burocracia, 100% do seu dinheiro de volta.</p>
            <p><strong>Você não tem nada a perder. Só a segunda voz a ganhar.</strong></p>
            <a className="button primary wide" href={checkoutUrl} target="_blank" rel="noreferrer">
              ✅ GARANTIR COM 75% OFF — SEM RISCO
            </a>
          </div>
        </div>
      </section>

      {/* MENTOR */}
      <section className="section mentor-section">
        <div className="container split">
          <div>
            <h2>Quem vai te guiar nessa transformação: <span>Marcos Cruz</span></h2>
            <p>Marcos Cruz é músico profissional e professor de canto, técnica vocal e piano com mais de 15 anos de experiência. Já ajudou centenas de alunos a desenvolver sua voz e cantar com confiança no ministério.</p>
            <p>Seu método é prático, direto e desenvolvido para a realidade de quem canta no louvor — sem rodeios, sem teoria desnecessária.</p>
          </div>
          <img className="mentor-img" src="/images/mentor/marcos-cruz.webp" alt="Marcos Cruz" />
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
          <h2>Não deixe essa oportunidade passar. <span>75% OFF por tempo limitado.</span></h2>
          <p>Quando o timer zerar, o preço volta ao normal. Garanta agora com risco zero.</p>
          <a className="button primary wide" href={checkoutUrl} target="_blank" rel="noreferrer">
            🔥 QUERO MINHA VAGA COM 75% OFF AGORA
          </a>
        </div>
      </section>
    </main>
  )
}
