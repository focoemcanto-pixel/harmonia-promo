import CountdownTimer from '../components/CountdownTimer'
import TestimonialCarousel from '../components/TestimonialCarousel'
import VideoFacade from '../components/VideoFacade'

const checkoutUrl = 'https://pay.kiwify.com.br/7FrQZOt'
const whatsappUrl = 'https://wa.me/5571997178807'
const heroVideoMovUrl = 'https://pub-fc66e9e933424d3492375431357d3967.r2.dev/hero-v3-cta-loop.mov?v=hevc-alpha-capcut-20260706'
const heroVideoUrl = 'https://pub-fc66e9e933424d3492375431357d3967.r2.dev/hero-v3-cta-loop.webm?v=20260706'

const methodSteps = [
  ['01', 'Ouça a melodia', 'Você aprende a perceber o caminho principal sem se perder no conjunto.'],
  ['02', 'Ache sua linha', 'Exercícios simples mostram para onde sua voz deve ir na harmonia.'],
  ['03', 'Sustente com segurança', 'Você treina independência vocal para não voltar para a voz principal.']
]

const promises = [
  'Segunda voz sem depender de alguém cantando junto',
  'Ouvido harmônico treinado com exercícios práticos',
  'Aplicação direta para louvor, backs e ministério',
  'Acesso imediato, vitalício e garantia de 7 dias'
]

const offerItems = [
  'Treinamento completo Foco em Harmonia',
  'Aulas práticas de divisão vocal',
  'Exercícios progressivos para ouvido harmônico',
  'Bônus: teste de extensão e classificação vocal',
  'Comunidade exclusiva de alunos',
  'Acesso vitalício'
]

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.940 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.570-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function HarmoniaPromoV2() {
  return (
    <main className="v2x">
      <style dangerouslySetInnerHTML={{ __html: `
        .v2x{--gold:#f5b73d;--gold2:#ffe18a;--line:rgba(245,183,61,.22);font-family:Arial,sans-serif;background:#030303;color:#fff;overflow:hidden}.v2x *{box-sizing:border-box}.v2-wa{position:fixed;right:18px;bottom:18px;z-index:80;width:56px;height:56px;border-radius:999px;background:#25d366;color:#fff;display:grid;place-items:center;box-shadow:0 16px 34px rgba(0,0,0,.4)}.v2-wrap{width:min(1180px,100%);margin:0 auto;padding:0 22px}.v2-hero{min-height:100svh;padding:22px 0 52px;position:relative;isolation:isolate;background:radial-gradient(circle at 50% 26%,rgba(245,183,61,.20),transparent 28%),radial-gradient(circle at 50% 78%,rgba(112,240,255,.08),transparent 24%),linear-gradient(180deg,#120603 0%,#050505 70%,#020202 100%)}.v2-hero:before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(245,183,61,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(245,183,61,.035) 1px,transparent 1px);background-size:38px 38px;opacity:.46;mask-image:linear-gradient(180deg,#000,transparent 86%)}.v2-shell{position:relative;min-height:calc(100svh - 44px);border:1px solid rgba(245,183,61,.25);border-radius:34px;overflow:hidden;padding:30px;background:linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.015));box-shadow:0 32px 110px rgba(0,0,0,.55)}.v2-shell:before{content:'';position:absolute;left:50%;top:12%;transform:translateX(-50%);width:78%;height:48%;background:radial-gradient(circle,rgba(245,183,61,.18),transparent 64%);filter:blur(18px)}.v2-shell:after{content:'';position:absolute;inset:auto -10% -24% -10%;height:44%;background:radial-gradient(ellipse at center,rgba(245,183,61,.18),transparent 66%);filter:blur(20px);opacity:.9}.v2-brand{position:relative;z-index:8;text-align:center;text-transform:uppercase;font-weight:1000;letter-spacing:.13em;margin-bottom:16px}.v2-brand small{display:block;font-size:.63rem;color:rgba(255,255,255,.62);letter-spacing:.34em;margin-top:3px}.v2-hero-content{position:relative;z-index:12;display:flex;flex-direction:column;align-items:center;text-align:center}.v2-chip{display:inline-flex;gap:10px;align-items:center;border:1px solid rgba(245,183,61,.34);border-radius:999px;background:rgba(245,183,61,.09);padding:10px 15px;font-size:.75rem;font-weight:900;letter-spacing:.13em;text-transform:uppercase}.v2-title{max-width:920px;font-size:clamp(3.1rem,8.1vw,7.6rem);line-height:.84;letter-spacing:-.075em;margin:19px auto 15px;font-weight:1000;text-transform:uppercase}.v2-title span{display:block;color:var(--gold);text-shadow:0 0 36px rgba(245,183,61,.35)}.v2-sub{max-width:720px;font-size:clamp(1.05rem,2vw,1.28rem);line-height:1.5;color:rgba(255,255,255,.84);margin:0 auto 16px}.v2-sub strong{color:var(--gold2)}.v2-proof{display:flex;align-items:center;justify-content:center;gap:14px;margin:0 0 12px;font-weight:900}.v2-bubbles{display:flex}.v2-bubble{width:43px;height:43px;border-radius:999px;border:2px solid rgba(245,183,61,.85);margin-right:-10px;background:#111;display:grid;place-items:center;font-size:.75rem}.v2-proof span{color:var(--gold)}.v2-stage{position:relative;z-index:18;width:min(430px,86vw);aspect-ratio:9/16;margin:-18px auto -70px;pointer-events:none;filter:drop-shadow(0 34px 58px rgba(0,0,0,.6));background:transparent;overflow:visible}.v2-stage:before{content:'';position:absolute;inset:5% -7% -2%;border-radius:34px;background:radial-gradient(circle at 50% 72%,rgba(245,183,61,.20),transparent 44%);filter:blur(14px);z-index:-1}.v2-video{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:center bottom;background-color:transparent!important;mix-blend-mode:normal;transform:translateY(-20px)}.v2-hotspot{position:absolute;left:0;right:0;bottom:0;height:58%;z-index:40;display:block;opacity:0;cursor:pointer;pointer-events:auto}.v2-scroll{position:absolute;left:50%;transform:translateX(-50%);bottom:24px;z-index:20;color:rgba(255,255,255,.58);font-size:.78rem;text-transform:uppercase;letter-spacing:.18em}.v2-section{position:relative;padding:76px 0;background:#050505}.v2-section.alt{background:#0a0a0a}.v2-section h2{font-size:clamp(2.2rem,5vw,4.8rem);line-height:.92;letter-spacing:-.055em;text-transform:uppercase;margin:0 0 20px;font-weight:1000}.v2-section h2 span{color:var(--gold)}.v2-section p{font-size:1.05rem;line-height:1.65;color:rgba(255,255,255,.74)}.v2-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:30px}.v2-card{border:1px solid rgba(255,255,255,.1);background:linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,.018));border-radius:24px;padding:24px;min-height:210px}.v2-card b{display:block;color:var(--gold);font-size:1.7rem;margin-bottom:14px}.v2-method{border:1px solid var(--line);border-radius:30px;padding:clamp(20px,4vw,36px);display:grid;grid-template-columns:.82fr 1.18fr;gap:30px;align-items:center;background:radial-gradient(circle at 90% 0,rgba(245,183,61,.15),transparent 30%),rgba(255,255,255,.035)}.v2-video-box{border-radius:24px;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,.35)}.v2-offer{background:radial-gradient(circle at 50% 0,rgba(245,183,61,.18),transparent 35%),#050505}.v2-offer-box{border:1px solid rgba(245,183,61,.3);border-radius:34px;padding:clamp(24px,5vw,48px);background:linear-gradient(135deg,rgba(245,183,61,.12),rgba(255,255,255,.025));display:grid;grid-template-columns:1fr .9fr;gap:34px;align-items:center}.v2-offer-list{list-style:none;padding:0;margin:26px 0 0;display:grid;gap:12px}.v2-offer-list li{font-weight:800;color:rgba(255,255,255,.86)}.v2-offer-list li:before{content:'✓';color:var(--gold);margin-right:10px}.v2-panel{border:1px solid rgba(245,183,61,.24);border-radius:28px;padding:30px;background:#070707;text-align:center}.v2-big{font-size:5rem;font-weight:1000;letter-spacing:-.09em;line-height:.9}.v2-big span{color:var(--gold)}.v2-btn{display:flex;justify-content:center;align-items:center;text-align:center;text-decoration:none;color:#111;background:linear-gradient(135deg,#ffe27d,#f2a51d);border-radius:22px;padding:22px 24px;font-weight:1000;text-transform:uppercase;letter-spacing:.015em;box-shadow:0 26px 55px rgba(245,183,61,.35),inset 0 1px 0 rgba(255,255,255,.68)}@media(max-width:920px){.v2-wrap{padding:0 12px}.v2-hero{padding:8px 0 28px}.v2-shell{border-radius:26px;padding:18px 16px 18px;min-height:auto}.v2-brand{text-align:center;font-size:.92rem;margin-bottom:12px}.v2-brand small{font-size:.56rem}.v2-chip{font-size:.61rem;padding:8px 11px}.v2-title{font-size:clamp(2.5rem,12.6vw,3.55rem);line-height:.87;margin:15px auto 12px;max-width:98%}.v2-sub{font-size:1rem;line-height:1.45;max-width:95%;margin:0 auto 13px}.v2-proof{justify-content:center;font-size:.95rem;gap:12px;margin:0 0 0}.v2-bubble{width:38px;height:38px;font-size:.68rem}.v2-stage{width:min(390px,94vw);aspect-ratio:9/15.6;margin-top:-132px;margin-bottom:-92px}.v2-video{transform:translateY(-28px)}.v2-hotspot{height:60%}.v2-scroll{display:none}.v2-section{padding:54px 0}.v2-cards{grid-template-columns:1fr}.v2-method,.v2-offer-box{grid-template-columns:1fr}.v2-card{min-height:auto}.v2-big{font-size:4.2rem}}@media(max-width:420px){.v2-stage{width:100vw;margin-left:-6vw;margin-right:-6vw;aspect-ratio:9/15.55;margin-top:-140px;margin-bottom:-96px}.v2-video{transform:translateY(-26px)}.v2-title{font-size:clamp(2.42rem,12.4vw,3.35rem)}}
      ` }} />

      <a className="v2-wa" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
      <CountdownTimer />

      <section className="v2-hero">
        <div className="v2-wrap">
          <div className="v2-shell">
            <div className="v2-brand">Foco em Harmonia</div>
            <div className="v2-hero-content">
              <div className="v2-chip">🔥 método para destravar</div>
              <h1 className="v2-title">Sua segunda voz não precisa ser um <span>chute.</span></h1>
              <p className="v2-sub">Treine seu ouvido para <strong>encontrar a segunda voz</strong>, sustentar a harmonia e cantar no louvor com segurança.</p>
              <div className="v2-proof"><div className="v2-bubbles"><span className="v2-bubble">MC</span><span className="v2-bubble">A+</span><span className="v2-bubble">J</span><span className="v2-bubble">L</span></div><div><span>+ de 1.200 cantores</span><br/>já treinaram com o método</div></div>

              <div className="v2-stage" aria-hidden="false">
                <video className="v2-video" autoPlay muted loop playsInline preload="auto">
                  <source src={heroVideoMovUrl} type='video/mp4; codecs="hvc1"' />
                  <source src={heroVideoMovUrl} type="video/quicktime" />
                  <source src={heroVideoUrl} type="video/webm" />
                </video>
                <a className="v2-hotspot" href={checkoutUrl} target="_blank" rel="noreferrer" aria-label="Quero destravar minha segunda voz" />
              </div>
            </div>
            <div className="v2-scroll">toque no botão do vídeo</div>
          </div>
        </div>
      </section>

      <section className="v2-section alt">
        <div className="v2-wrap v2-method">
          <div>
            <h2>Entenda o <span>método.</span></h2>
            <p>Antes de decorar vozes, você precisa treinar percepção. O Foco em Harmonia transforma divisão vocal em um processo simples, guiado e aplicável no louvor.</p>
          </div>
          <div className="v2-video-box"><VideoFacade videoId="F1pYjGMCqAM" title="Como dividir voz" startSeconds={7} thumbnailSrc="/images/videos/thumb-como-dividir-voz.webp" priority /></div>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-wrap">
          <h2>O caminho para parar de <span>voltar para a melodia.</span></h2>
          <div className="v2-cards">
            {methodSteps.map(([n, title, text]) => <div className="v2-card" key={n}><b>{n}</b><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="v2-section alt">
        <div className="v2-wrap">
          <h2>O que você leva para o <span>ministério.</span></h2>
          <div className="v2-cards">
            {promises.map((item) => <div className="v2-card" key={item}><b>✓</b><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="v2-section"><div className="v2-wrap"><h2>Alunos que já <span>destravaram</span></h2><TestimonialCarousel /></div></section>

      <section className="v2-section v2-offer">
        <div className="v2-wrap v2-offer-box">
          <div><h2>Entre hoje no <span>Foco em Harmonia</span></h2><p>Um treinamento direto ao ponto para cantores, ministros de louvor e backings que querem autonomia para dividir vozes.</p><ul className="v2-offer-list">{offerItems.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="v2-panel"><div className="v2-big">R$57<span>,90</span></div><p>ou 12x de <strong style={{ color: 'var(--gold)' }}>R$5,99</strong></p><a className="v2-btn" href={checkoutUrl} target="_blank" rel="noreferrer">Garantir meu acesso agora</a></div>
        </div>
      </section>
    </main>
  )
}
