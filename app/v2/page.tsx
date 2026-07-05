import CountdownTimer from '../components/CountdownTimer'
import TestimonialCarousel from '../components/TestimonialCarousel'
import VideoFacade from '../components/VideoFacade'

const checkoutUrl = 'https://pay.kiwify.com.br/7FrQZOt'
const whatsappUrl = 'https://wa.me/5571997178807'

// Troque esta URL pela URL pública exata do R2 se o bucket usar domínio customizado ou r2.dev.
const heroVideoUrl = 'https://pub-REPLACE_WITH_R2_PUBLIC_URL.r2.dev/hero-marcos-v2.mov'

const quickBenefits = [
  'Encontre qualquer segunda voz com facilidade',
  'Harmonize com segurança em qualquer ministério',
  'Crie kits vocais e adapte vozes com inteligência',
  'Mais liberdade, confiança e reconhecimento'
]

const painPoints = [
  'Você depende de alguém cantar sua voz para conseguir dividir.',
  'Quando outra pessoa canta do lado, você se perde e volta para a melodia principal.',
  'Você até tenta acompanhar kits vocais, mas trava quando precisa adaptar para o seu tom.',
  'Na hora do louvor, bate medo de errar, desafinar ou atrapalhar o grupo.'
]

const transformations = [
  'Ouvir uma música e perceber caminhos de segunda voz com mais naturalidade.',
  'Entender onde sua voz deve entrar sem depender de teoria pesada.',
  'Treinar afinação, percepção e independência vocal com exercícios práticos.',
  'Contribuir melhor no ministério, sustentando sua parte com firmeza.'
]

const offerItems = [
  '7 módulos de aulas práticas e diretas',
  'Exercícios progressivos para divisão vocal',
  'Comunidade exclusiva para alunos',
  'Bônus: como achar seu tom',
  'Teste de extensão e classificação vocal',
  'Acesso vitalício: pague uma vez e estude sempre'
]

const faqs = [
  ['Esse curso é para aprender a cantar do zero?', 'Não. O foco do Foco em Harmonia é divisão vocal, segunda voz, percepção e aplicação no louvor. Ele pode melhorar sua musicalidade, mas não substitui uma formação completa de técnica vocal.'],
  ['Preciso saber teoria musical?', 'Não. O treinamento foi criado para ser prático, simples e aplicável, sem depender de teoria pesada.'],
  ['Serve para quem trava na segunda voz?', 'Sim. Essa é exatamente a proposta: ajudar quem depende de alguém cantando junto a desenvolver mais autonomia para encontrar e sustentar sua voz.'],
  ['O acesso é por quanto tempo?', 'O acesso é vitalício. Você pode rever as aulas e repetir os exercícios sempre que quiser.'],
  ['Como funciona a garantia?', 'Você tem 7 dias de garantia incondicional. Se não gostar, pode pedir reembolso dentro do prazo.']
]

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function HarmoniaPromoV2() {
  return (
    <main className="v2-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .v2-page{--gold:#f6b535;--gold2:#ffd66b;--dark:#050505;--line:rgba(246,181,53,.24);background:#050505;color:#fff;overflow:hidden;font-family:Arial,sans-serif;}
        .v2-page *{box-sizing:border-box;}
        .v2-whatsapp{position:fixed;right:18px;bottom:18px;z-index:40;width:56px;height:56px;border-radius:999px;background:#25d366;color:#fff;display:grid;place-items:center;box-shadow:0 16px 34px rgba(0,0,0,.35);}
        .v2-container{width:min(1120px,100%);margin:0 auto;padding:0 22px;}
        .v2-section{padding:72px 0;position:relative;}
        .v2-hero{min-height:100svh;padding:16px 0 54px;background:radial-gradient(circle at 82% 6%,rgba(246,181,53,.34),transparent 31%),radial-gradient(circle at 18% 80%,rgba(246,181,53,.12),transparent 28%),linear-gradient(180deg,#0b0502,#050505 76%);position:relative;isolation:isolate;}
        .v2-hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,rgba(255,214,107,.28) 0 1px,transparent 1.4px);background-size:34px 34px;opacity:.08;animation:v2-dust 14s linear infinite;pointer-events:none;}
        .v2-hero-shell{min-height:calc(100svh - 32px);border:1px solid rgba(246,181,53,.22);border-radius:34px;padding:26px;position:relative;overflow:hidden;background:radial-gradient(circle at 82% 14%,rgba(246,181,53,.18),transparent 28%),linear-gradient(135deg,rgba(255,255,255,.055),rgba(255,255,255,.014));box-shadow:0 30px 100px rgba(0,0,0,.46);}
        .v2-hero-shell::before{content:'';position:absolute;inset:auto -15% -22% -15%;height:40%;background:radial-gradient(ellipse at center,rgba(246,181,53,.2),transparent 62%);filter:blur(18px);opacity:.86;}
        .v2-brand{display:flex;align-items:center;justify-content:flex-start;margin-bottom:20px;position:relative;z-index:7;font-weight:1000;text-transform:uppercase;letter-spacing:.09em;font-size:1.05rem;text-align:left;}
        .v2-brand small{display:block;color:rgba(255,255,255,.66);font-size:.64rem;letter-spacing:.32em;margin-top:2px;text-align:left;}
        .v2-grid{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(360px,.98fr);gap:28px;align-items:center;min-height:calc(100svh - 120px);position:relative;z-index:3;}
        .v2-copy{position:relative;z-index:6;}
        .v2-kicker{display:inline-flex;align-items:center;gap:10px;border:1px solid rgba(246,181,53,.36);border-radius:999px;padding:10px 15px;background:rgba(246,181,53,.09);color:#fff;font-weight:900;font-size:.78rem;letter-spacing:.12em;text-transform:uppercase;box-shadow:0 16px 44px rgba(246,181,53,.08);}
        .v2-h1{font-size:clamp(3.25rem,7.2vw,7rem);line-height:.88;letter-spacing:-.065em;margin:24px 0 20px;font-weight:1000;text-transform:uppercase;text-wrap:balance;}
        .v2-h1 span{display:block;color:var(--gold);text-shadow:0 0 34px rgba(246,181,53,.28);}
        .v2-lead{max-width:720px;font-size:clamp(1.08rem,2.2vw,1.45rem);line-height:1.45;color:rgba(255,255,255,.86);margin:0 0 22px;}
        .v2-lead strong{color:var(--gold2);}
        .v2-proof-row{display:flex;align-items:center;gap:18px;flex-wrap:wrap;margin:20px 0 26px;}
        .v2-avatars{display:flex;align-items:center;}
        .v2-avatar{width:46px;height:46px;border-radius:999px;border:2px solid rgba(246,181,53,.86);margin-right:-10px;background:linear-gradient(135deg,#2a2a2a,#111);display:grid;place-items:center;font-size:.8rem;font-weight:1000;color:#fff;box-shadow:0 8px 18px rgba(0,0,0,.35);}
        .v2-proof-text{font-weight:900;color:#fff;line-height:1.25;}
        .v2-proof-text span{color:var(--gold);}
        .v2-cta-zone{position:relative;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:18px;align-items:center;max-width:760px;margin-top:26px;z-index:9;}
        .v2-button{position:relative;display:flex;align-items:center;justify-content:center;text-align:center;border:0;border-radius:20px;padding:21px 24px;background:linear-gradient(135deg,#ffe17a,#f2a61d);color:#111;font-weight:1000;letter-spacing:.02em;text-transform:uppercase;box-shadow:0 26px 48px rgba(246,181,53,.22),inset 0 1px 0 rgba(255,255,255,.55);text-decoration:none;overflow:hidden;animation:v2-button-grab 7.23s cubic-bezier(.22,1,.36,1) infinite;transform-origin:center;}
        .v2-button::before{content:'';position:absolute;inset:-40% auto -40% -30%;width:38%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent);transform:skewX(-18deg);animation:v2-shine 7.23s ease-in-out infinite;}
        .v2-button::after{content:'';position:absolute;inset:-18px;border-radius:28px;background:radial-gradient(circle,rgba(255,214,107,.45),transparent 62%);opacity:0;animation:v2-pulse 7.23s ease-in-out infinite;z-index:-1;}
        .v2-price{min-width:198px;color:#fff;line-height:1;}
        .v2-price small{display:block;color:var(--gold);text-transform:uppercase;letter-spacing:.12em;font-weight:900;margin-bottom:7px;font-size:.72rem;}
        .v2-price strong{display:block;font-size:3.15rem;letter-spacing:-.08em;}
        .v2-price span{color:rgba(255,255,255,.78);font-weight:800;}
        .v2-stage{position:absolute;right:-1%;bottom:0;width:min(46%,520px);height:86%;z-index:5;pointer-events:none;}
        .v2-stage::before{content:'';position:absolute;left:4%;right:4%;bottom:5%;height:22%;background:radial-gradient(ellipse at center,rgba(0,0,0,.6),transparent 66%);filter:blur(10px);opacity:.78;}
        .v2-person-video{position:absolute;right:-5%;bottom:-2%;width:118%;height:100%;object-fit:contain;object-position:bottom right;filter:drop-shadow(0 34px 44px rgba(0,0,0,.48)) saturate(1.08) contrast(1.03);}
        .v2-benefit-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border:1px solid var(--line);border-radius:22px;background:rgba(0,0,0,.42);overflow:hidden;margin-top:26px;}
        .v2-benefit{padding:18px 14px;text-align:center;border-right:1px solid var(--line);font-weight:800;color:rgba(255,255,255,.84);line-height:1.28;font-size:.95rem;}
        .v2-benefit:last-child{border-right:0;}
        .v2-trust{margin-top:18px;display:flex;gap:12px;align-items:center;color:rgba(255,255,255,.78);font-weight:800;font-size:.95rem;}
        .v2-trust b{color:#fff;}
        .v2-video-section{padding-top:38px;background:linear-gradient(180deg,#050505,#0b0b0b);}
        .v2-video-card{border:1px solid var(--line);border-radius:30px;padding:clamp(18px,4vw,34px);background:radial-gradient(circle at top right,rgba(246,181,53,.14),transparent 28%),rgba(255,255,255,.035);display:grid;grid-template-columns:.78fr 1.22fr;gap:28px;align-items:center;}
        .v2-section h2{font-size:clamp(2rem,4.5vw,4.2rem);line-height:.98;letter-spacing:-.045em;margin:0 0 20px;font-weight:1000;text-transform:uppercase;}
        .v2-section h2 span{color:var(--gold);}
        .v2-section p{color:rgba(255,255,255,.76);line-height:1.65;font-size:1.05rem;}
        .v2-pain-grid,.v2-transform-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:28px;}
        .v2-card{border:1px solid rgba(255,255,255,.1);border-radius:22px;padding:22px;background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018));min-height:178px;}
        .v2-card strong{display:block;color:var(--gold);font-size:1.5rem;margin-bottom:12px;}
        .v2-offer{background:radial-gradient(circle at 50% 0,rgba(246,181,53,.16),transparent 34%),#050505;}
        .v2-offer-box{border:1px solid rgba(246,181,53,.3);border-radius:34px;padding:clamp(24px,5vw,48px);background:linear-gradient(135deg,rgba(246,181,53,.1),rgba(255,255,255,.025));display:grid;grid-template-columns:1fr .9fr;gap:34px;align-items:center;}
        .v2-offer-list{list-style:none;padding:0;margin:26px 0 0;display:grid;gap:12px;}
        .v2-offer-list li{font-weight:800;color:rgba(255,255,255,.86);}
        .v2-offer-list li::before{content:'✓';color:var(--gold);margin-right:10px;font-weight:1000;}
        .v2-price-panel{border:1px solid rgba(246,181,53,.24);border-radius:28px;padding:30px;background:#070707;text-align:center;box-shadow:0 30px 70px rgba(0,0,0,.28);}
        .v2-badge{display:inline-flex;padding:9px 15px;border-radius:999px;background:rgba(246,181,53,.16);color:var(--gold);font-weight:1000;text-transform:uppercase;letter-spacing:.08em;font-size:.76rem;margin-bottom:16px;}
        .v2-big-price{font-size:5rem;font-weight:1000;letter-spacing:-.09em;line-height:.9;}
        .v2-big-price span{color:var(--gold);}
        .v2-guarantee{margin-top:18px;border-radius:18px;padding:18px;background:rgba(255,255,255,.05);color:rgba(255,255,255,.8);font-weight:800;}
        .v2-faq .faq-list details{border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:18px 20px;background:rgba(255,255,255,.035);margin-bottom:12px;}
        .v2-faq .faq-list summary{cursor:pointer;font-weight:900;color:#fff;}
        .v2-faq .faq-list p{margin:12px 0 0;}
        @keyframes v2-dust{from{background-position:0 0;}to{background-position:68px 68px;}}
        @keyframes v2-button-grab{0%,34%,78%,100%{transform:translateY(0) scale(1);}40%{transform:translateY(-7px) scale(1.018);}47%{transform:translateY(-30px) scale(1.045);}55%{transform:translateY(-24px) scale(1.025);}65%{transform:translateY(-10px) scale(1.01);}}
        @keyframes v2-shine{0%,32%{left:-38%;opacity:0;}43%{opacity:1;}58%{left:110%;opacity:0;}100%{left:110%;opacity:0;}}
        @keyframes v2-pulse{0%,35%,80%,100%{opacity:0;transform:scale(.96);}45%,58%{opacity:1;transform:scale(1.05);}}
        @media(max-width:920px){
          .v2-hero{padding:8px 0 28px;min-height:auto;}
          .v2-container{padding:0 12px;}
          .v2-hero-shell{border-radius:26px;padding:18px 16px 24px;min-height:auto;background:radial-gradient(circle at 88% 14%,rgba(246,181,53,.18),transparent 24%),linear-gradient(135deg,rgba(255,255,255,.045),rgba(255,255,255,.015));}
          .v2-brand{font-size:.92rem;margin-bottom:10px;}
          .v2-brand small{font-size:.56rem;}
          .v2-grid{display:block;min-height:auto;position:relative;}
          .v2-copy{margin-top:-12px;}
          .v2-stage{right:-17%;top:62px;bottom:auto;width:68%;height:450px;z-index:4;}
          .v2-person-video{right:-2%;bottom:auto;top:0;width:100%;height:100%;object-position:top right;}
          .v2-kicker{font-size:.62rem;padding:8px 11px;margin-top:128px;max-width:calc(100% - 24px);letter-spacing:.08em;}
          .v2-h1{font-size:clamp(2.72rem,13.1vw,3.72rem);line-height:.9;letter-spacing:-.055em;margin:18px 0 14px;max-width:88%;}
          .v2-lead{font-size:1.03rem;line-height:1.46;margin-bottom:16px;max-width:96%;}
          .v2-proof-row{margin:18px 0 20px;gap:12px;align-items:center;}
          .v2-avatar{width:42px;height:42px;font-size:.72rem;}
          .v2-proof-text{font-size:1.02rem;}
          .v2-benefit-strip{grid-template-columns:1fr 1fr;margin-top:18px;border-radius:20px;}
          .v2-benefit{border-bottom:1px solid var(--line);font-size:.86rem;padding:18px 12px;min-height:104px;display:flex;align-items:center;justify-content:center;}
          .v2-benefit:nth-child(2){border-right:0;}
          .v2-benefit:nth-child(3),.v2-benefit:nth-child(4){border-bottom:0;}
          .v2-cta-zone{grid-template-columns:1fr;gap:14px;margin-top:20px;max-width:100%;}
          .v2-button{padding:18px 16px;border-radius:18px;font-size:.93rem;line-height:1.2;}
          .v2-price{display:block;min-width:0;margin-top:4px;}
          .v2-price strong{font-size:3.35rem;}
          .v2-trust{font-size:.91rem;align-items:flex-start;line-height:1.4;}
          .v2-video-card,.v2-offer-box{grid-template-columns:1fr;}
          .v2-pain-grid,.v2-transform-grid{grid-template-columns:1fr;}
          .v2-section{padding:50px 0;}
          .v2-section h2{font-size:clamp(2.25rem,11vw,3.6rem);}
          .v2-big-price{font-size:4.25rem;}
        }
      ` }} />

      <a className="v2-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
      <CountdownTimer />

      <section className="v2-hero">
        <div className="v2-container">
          <div className="v2-hero-shell">
            <div className="v2-brand"><div>Foco em Harmonia<small>Treinamento completo</small></div></div>
            <div className="v2-grid">
              <div className="v2-copy">
                <div className="v2-kicker"><span>🔥</span> Oferta especial</div>
                <h1 className="v2-h1">Pare de travar quando chega a hora da <span>segunda voz</span> no louvor.</h1>
                <p className="v2-lead">Descubra um método prático para <strong>encontrar sua voz</strong>, sustentar sua linha e <strong>harmonizar com segurança</strong> — mesmo que hoje você dependa de alguém cantando junto.</p>

                <div className="v2-proof-row">
                  <div className="v2-avatars" aria-hidden="true"><span className="v2-avatar">MC</span><span className="v2-avatar">A+</span><span className="v2-avatar">J</span><span className="v2-avatar">L</span><span className="v2-avatar">+</span></div>
                  <div className="v2-proof-text"><span>+ de 1.200 cantores</span><br />já transformaram sua forma de cantar no louvor</div>
                </div>

                <div className="v2-benefit-strip">
                  {quickBenefits.map((item) => <div className="v2-benefit" key={item}>{item}</div>)}
                </div>

                <div className="v2-cta-zone">
                  <a className="v2-button" href={checkoutUrl} target="_blank" rel="noreferrer">Quero desenvolver meu ouvido harmônico →</a>
                  <div className="v2-price"><div><small>por apenas</small><strong>R$57,90</strong><span>ou 12x de R$5,99</span></div></div>
                </div>

                <div className="v2-trust"><b>✓ 7 dias de garantia</b> • acesso imediato e vitalício</div>
              </div>

              <div className="v2-stage" aria-hidden="true">
                <video className="v2-person-video" src={heroVideoUrl} autoPlay muted loop playsInline preload="metadata" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-video-section">
        <div className="v2-container">
          <div className="v2-video-card">
            <div>
              <h2>Entenda o <span>método.</span></h2>
              <p>Assista ao vídeo e veja como o Foco em Harmonia te guia para sair da dependência e desenvolver ouvido harmônico com exercícios simples, progressivos e aplicáveis ao louvor.</p>
            </div>
            <VideoFacade videoId="F1pYjGMCqAM" title="Como dividir voz" startSeconds={7} thumbnailSrc="/images/videos/thumb-como-dividir-voz.webp" priority />
          </div>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container">
          <h2>Isso acontece <span>com você?</span></h2>
          <div className="v2-pain-grid">
            {painPoints.map((item) => <div className="v2-card" key={item}><strong>×</strong><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="v2-section" style={{ background: '#0b0b0b' }}>
        <div className="v2-container">
          <h2>A solução é o <span>ouvido harmônico.</span></h2>
          <p style={{ maxWidth: 760 }}>Você não precisa decorar vozes para sempre. Precisa desenvolver a percepção que te ajuda a entender para onde sua voz deve ir.</p>
          <div className="v2-transform-grid">
            {transformations.map((item) => <div className="v2-card" key={item}><strong>✓</strong><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="v2-section testimonials">
        <div className="v2-container">
          <h2>Alunos que já <span>destravaram</span></h2>
          <TestimonialCarousel />
        </div>
      </section>

      <section className="v2-section v2-offer">
        <div className="v2-container">
          <div className="v2-offer-box">
            <div>
              <h2>Entre hoje no <span>Foco em Harmonia</span></h2>
              <p>Um treinamento direto ao ponto para cantores, ministros de louvor e backings que querem desenvolver autonomia para dividir vozes.</p>
              <ul className="v2-offer-list">
                {offerItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="v2-price-panel">
              <span className="v2-badge">Oferta especial</span>
              <div className="v2-big-price">R$57<span>,90</span></div>
              <p>ou 12x de <strong style={{ color: 'var(--gold)' }}>R$5,99</strong></p>
              <a className="v2-button" href={checkoutUrl} target="_blank" rel="noreferrer">Garantir meu acesso agora</a>
              <div className="v2-guarantee">Compra segura • acesso imediato • 7 dias de garantia incondicional</div>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-faq">
        <div className="v2-container">
          <h2>Perguntas <span>frequentes</span></h2>
          <div className="faq-list">
            {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
        </div>
      </section>
    </main>
  )
}
