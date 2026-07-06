const nextUpsellUrl = '/mentoria-especial'

const unlocks = [
  'Central de exercícios diários',
  'Treinos personalizados por objetivo',
  'Exercícios guiados com referência visual',
  'Análise de extensão e tessitura vocal',
  'Gravação de duetos para avaliação',
  'Feed da Comunidade VIP',
  'Biblioteca premium organizada na plataforma',
  'Atualizações e novos recursos premium',
]

const features = [
  {
    eyebrow: 'Dashboard VIP',
    title: 'Sua escola vocal em um só lugar.',
    text: 'Acesse seus cursos, biblioteca, central de treino, comunidade e progresso real dentro da Escola Foco em Canto.',
    image: '/images/escola/hero-dashboard.webp',
    alt: 'Dashboard da Escola Foco em Canto',
  },
  {
    eyebrow: 'Comunidade VIP',
    title: 'Compartilhe sua evolução.',
    text: 'Publique práticas, acompanhe outros alunos e transforme seu estudo em uma experiência mais viva, constante e motivadora.',
    image: '/images/escola/feature-community.webp',
    alt: 'Feed da Comunidade VIP',
  },
  {
    eyebrow: 'Central de Treinamento',
    title: 'Treine sua voz todos os dias.',
    text: 'Desafios diários e treinos por objetivo para criar rotina, consistência e evolução contínua.',
    image: '/images/escola/feature-training-center.webp',
    alt: 'Central de Treinamento da Escola Foco em Canto',
  },
  {
    eyebrow: 'Exercícios guiados',
    title: 'Pratique com direção visual.',
    text: 'Acompanhe notas, referências e exercícios de forma interativa para treinar com mais clareza e precisão.',
    image: '/images/escola/feature-guided-exercises.webp',
    alt: 'Exercício guiado de canto',
  },
  {
    eyebrow: 'Análise vocal',
    title: 'Mapeie extensão e tessitura.',
    text: 'Use recursos visuais para entender melhor sua voz, reconhecer regiões vocais e acompanhar sua evolução técnica.',
    image: '/images/escola/feature-vocal-analysis.webp',
    alt: 'Análise de extensão e tessitura vocal',
  },
  {
    eyebrow: 'Dueto Premium',
    title: 'Grave, envie e receba avaliação.',
    text: 'Treine duetos de divisão vocal, grave sua prática e envie para avaliação do professor dentro da experiência VIP.',
    image: '/images/escola/feature-duets.webp',
    alt: 'Gravação de duetos premium',
  },
]

const comparisons = [
  ['Curso isolado', 'Ambiente VIP com rotina e acompanhamento'],
  ['Materiais espalhados', 'Biblioteca premium organizada na escola'],
  ['Estudo sem direção diária', 'Central de treino com desafios e objetivos'],
  ['Sem feedback claro', 'Duetos e práticas enviados para avaliação'],
]

function VipUpsellTrigger({ compact = false }: { compact?: boolean }) {
  return (
    <div
      id="kiwify-upsell-HHr4eyM"
      data-upsell-url="https://promo.focoemcanto.com/mentoria-especial"
      data-downsell-url=""
      className={compact ? 'kiwify-wrap compact' : 'kiwify-wrap'}
    >
      <button id="kiwify-upsell-trigger-HHr4eyM" className="vip-primary-button">
        Desbloquear meu Acesso VIP
      </button>
      <div id="kiwify-upsell-cancel-trigger-HHr4eyM" className="vip-decline">
        Não quero liberar os recursos VIP agora
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Desbloqueie o Acesso VIP — Escola Foco em Canto',
  description: 'Oferta exclusiva para liberar recursos premium da Escola Foco em Canto: exercícios diários, duetos, avaliação, comunidade, biblioteca e análise vocal.',
}

export default function ObrigadoVipPage() {
  return (
    <main className="vip-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .vip-page{min-height:100vh;background:#050505;color:#fff;font-family:Inter,Roboto,Arial,sans-serif;overflow-x:hidden}.vip-page *{box-sizing:border-box}.vip-shell{width:min(1180px,100%);margin:0 auto;padding:0 22px}.vip-gold{color:#f5c85f}.vip-muted{color:rgba(255,255,255,.66)}.vip-hero{position:relative;padding:50px 0 70px;background:radial-gradient(circle at 18% 8%,rgba(245,200,95,.18),transparent 30%),radial-gradient(circle at 80% 0%,rgba(46,204,112,.12),transparent 28%),linear-gradient(180deg,#11100d 0%,#050505 72%)}.vip-hero:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(180deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:84px 84px;mask-image:linear-gradient(180deg,#000,transparent 70%);pointer-events:none}.vip-hero-grid{position:relative;display:grid;grid-template-columns:1fr .86fr;gap:38px;align-items:center}.vip-badge{display:inline-flex;align-items:center;gap:9px;border:1px solid rgba(245,200,95,.35);background:rgba(245,200,95,.08);color:#f5d47b;border-radius:999px;padding:10px 15px;font-size:12px;font-weight:900;letter-spacing:.11em;text-transform:uppercase;margin-bottom:22px}.vip-kicker{font-size:13px;letter-spacing:.22em;text-transform:uppercase;color:#f5c85f;font-weight:900;margin:0 0 16px}.vip-title{font-size:clamp(42px,7vw,82px);line-height:.94;font-weight:950;letter-spacing:-.065em;margin:0 0 20px;max-width:760px}.vip-title span{background:linear-gradient(180deg,#ffe596,#d8a83b);-webkit-background-clip:text;color:transparent}.vip-lead{font-size:clamp(18px,2.4vw,24px);line-height:1.45;color:rgba(255,255,255,.78);max-width:720px;margin:0 0 26px}.vip-alert{display:inline-flex;align-items:center;gap:10px;background:rgba(238,111,112,.13);border:1px solid rgba(238,111,112,.35);color:#ffd7d7;border-radius:14px;padding:13px 15px;font-weight:850;margin:0 0 26px}.vip-hero-actions{display:grid;grid-template-columns:minmax(260px,390px);gap:12px}.kiwify-wrap{text-align:center}.kiwify-wrap.compact{width:min(380px,100%);margin:0 auto}.vip-primary-button{width:100%;min-height:68px;border:0;border-radius:17px;background:linear-gradient(135deg,#ffe28a 0%,#f2bd4a 45%,#c58a24 100%);color:#0b0905;font-size:15px;font-weight:950;text-transform:uppercase;letter-spacing:.02em;cursor:pointer;box-shadow:0 18px 55px rgba(245,200,95,.24),inset 0 1px 0 rgba(255,255,255,.55);transition:transform .18s ease,filter .18s ease}.vip-primary-button:hover{transform:translateY(-2px);filter:brightness(1.05)}.vip-decline{display:inline-block;margin-top:14px;color:rgba(255,255,255,.48);font-size:13px;text-decoration:underline;cursor:pointer}.vip-device-stage{position:relative;min-height:660px;display:grid;place-items:center}.vip-device-glow{position:absolute;width:72%;height:58%;border-radius:999px;background:radial-gradient(circle,rgba(245,200,95,.2),transparent 68%);filter:blur(12px)}.vip-phone{position:relative;width:min(390px,86vw);height:650px;border:1px solid rgba(255,255,255,.17);border-radius:42px;background:#0b0b0c;padding:10px;box-shadow:0 32px 110px rgba(0,0,0,.7),0 0 0 8px rgba(255,255,255,.025);overflow:hidden;transform:rotate(2deg)}.vip-phone img{width:100%;height:100%;object-fit:cover;object-position:top center;border-radius:32px;display:block}.vip-floating-card{position:absolute;left:0;bottom:34px;width:min(290px,48vw);background:rgba(16,16,16,.78);border:1px solid rgba(245,200,95,.28);backdrop-filter:blur(18px);border-radius:22px;padding:18px;box-shadow:0 20px 70px rgba(0,0,0,.45)}.vip-floating-card strong{display:block;font-size:28px;line-height:1;color:#f5c85f;margin-bottom:6px}.vip-floating-card span{color:rgba(255,255,255,.7);font-size:14px;line-height:1.35}.vip-strip{border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08);background:#0a0a0a;padding:18px 0}.vip-strip-inner{display:flex;gap:12px;align-items:center;justify-content:center;flex-wrap:wrap}.vip-pill{border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.045);color:rgba(255,255,255,.72);border-radius:999px;padding:10px 14px;font-size:13px;font-weight:800}.vip-section{padding:84px 0}.vip-section.gray{background:#0d0d0d}.vip-center{text-align:center}.vip-section-title{font-size:clamp(34px,5vw,64px);line-height:1;letter-spacing:-.055em;font-weight:950;margin:0 auto 18px;max-width:900px}.vip-section-sub{font-size:clamp(17px,2vw,21px);line-height:1.55;color:rgba(255,255,255,.68);max-width:790px;margin:0 auto 44px}.vip-unlocks{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.vip-unlock{position:relative;min-height:138px;border:1px solid rgba(255,255,255,.1);background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.025));border-radius:22px;padding:20px;overflow:hidden}.vip-unlock:after{content:"";position:absolute;right:-30px;top:-30px;width:90px;height:90px;border-radius:999px;background:rgba(245,200,95,.11);filter:blur(3px)}.vip-lock{width:38px;height:38px;border-radius:13px;background:rgba(245,200,95,.13);border:1px solid rgba(245,200,95,.28);display:grid;place-items:center;margin-bottom:18px}.vip-unlock h3{font-size:16px;line-height:1.25;margin:0;font-weight:900}.vip-showcase{display:grid;gap:28px}.vip-feature{display:grid;grid-template-columns:.86fr 1.14fr;gap:34px;align-items:center;border:1px solid rgba(255,255,255,.1);background:linear-gradient(180deg,rgba(255,255,255,.065),rgba(255,255,255,.025));border-radius:34px;padding:30px;overflow:hidden}.vip-feature:nth-child(even){grid-template-columns:1.14fr .86fr}.vip-feature:nth-child(even) .vip-copy{order:2}.vip-feature:nth-child(even) .vip-shot{order:1}.vip-copy{padding:18px}.vip-eyebrow{font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:#f5c85f;font-weight:950;margin-bottom:14px}.vip-feature h3{font-size:clamp(31px,4.6vw,58px);line-height:.98;letter-spacing:-.055em;margin:0 0 16px}.vip-feature p{font-size:18px;line-height:1.55;color:rgba(255,255,255,.68);margin:0;max-width:520px}.vip-shot{position:relative;min-height:620px;display:grid;place-items:center;background:radial-gradient(circle at 50% 20%,rgba(245,200,95,.14),transparent 48%),#050505;border:1px solid rgba(255,255,255,.08);border-radius:28px;overflow:hidden}.vip-shot img{width:min(390px,84%);height:560px;object-fit:cover;object-position:top center;border-radius:32px;box-shadow:0 25px 80px rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.12)}.vip-compare-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:stretch}.vip-compare-card{border:1px solid rgba(255,255,255,.1);border-radius:30px;padding:30px;background:rgba(255,255,255,.04)}.vip-compare-card.highlight{border-color:rgba(245,200,95,.35);background:linear-gradient(180deg,rgba(245,200,95,.1),rgba(255,255,255,.035))}.vip-compare-card h3{font-size:30px;margin:0 0 22px}.vip-compare-list{display:grid;gap:14px}.vip-compare-item{display:flex;gap:12px;align-items:flex-start;color:rgba(255,255,255,.76);font-size:16px;line-height:1.4}.vip-symbol{flex:0 0 26px;width:26px;height:26px;border-radius:999px;display:grid;place-items:center;font-weight:950}.vip-symbol.no{background:rgba(238,111,112,.14);color:#ff8b8b}.vip-symbol.yes{background:rgba(245,200,95,.15);color:#f5c85f}.vip-offer{position:relative;padding:90px 0 110px;background:radial-gradient(circle at 50% 0%,rgba(245,200,95,.18),transparent 35%),#050505}.vip-offer-box{width:min(920px,100%);margin:0 auto;text-align:center;border:1px solid rgba(245,200,95,.35);background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.032));border-radius:36px;padding:42px 28px;box-shadow:0 30px 110px rgba(0,0,0,.55)}.vip-offer-box h2{font-size:clamp(38px,6vw,72px);line-height:.96;letter-spacing:-.06em;margin:0 0 18px}.vip-offer-box p{font-size:19px;line-height:1.55;color:rgba(255,255,255,.7);max-width:720px;margin:0 auto 22px}.vip-price{display:flex;align-items:flex-end;justify-content:center;gap:9px;color:#f5c85f;margin:16px 0 8px}.vip-price small{font-size:26px;font-weight:950;margin-bottom:9px}.vip-price strong{font-size:78px;line-height:.9;font-weight:950;letter-spacing:-.065em}.vip-price-note{font-size:17px;color:rgba(255,255,255,.72);margin-bottom:28px}.vip-footer-sticky{position:sticky;bottom:0;z-index:50;background:rgba(5,5,5,.86);backdrop-filter:blur(16px);border-top:1px solid rgba(255,255,255,.1);padding:12px 18px}.vip-footer-inner{width:min(980px,100%);margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:18px}.vip-footer-inner strong{color:#f5c85f}.vip-footer-inner .vip-primary-button{max-width:340px;min-height:56px;font-size:13px}.vip-footer-inner .vip-decline{display:none}@media(max-width:930px){.vip-hero{padding:38px 0 50px}.vip-hero-grid{grid-template-columns:1fr}.vip-device-stage{min-height:auto;margin-top:18px}.vip-phone{height:590px;transform:none}.vip-floating-card{left:14px;bottom:24px}.vip-unlocks{grid-template-columns:1fr 1fr}.vip-feature,.vip-feature:nth-child(even){grid-template-columns:1fr;padding:18px}.vip-feature:nth-child(even) .vip-copy,.vip-feature:nth-child(even) .vip-shot{order:unset}.vip-shot{min-height:560px}.vip-compare-grid{grid-template-columns:1fr}.vip-footer-inner{display:block;text-align:center}.vip-footer-inner .vip-primary-button{max-width:none;margin-top:10px}.vip-section{padding:62px 0}}@media(max-width:560px){.vip-shell{padding:0 18px}.vip-title{font-size:45px}.vip-lead{font-size:18px}.vip-alert{font-size:13px;line-height:1.3}.vip-phone{width:100%;height:560px;border-radius:34px}.vip-phone img{border-radius:25px}.vip-floating-card{width:230px;padding:14px}.vip-floating-card strong{font-size:24px}.vip-unlocks{grid-template-columns:1fr}.vip-section-title{font-size:38px}.vip-feature h3{font-size:36px}.vip-feature p{font-size:16px}.vip-shot{min-height:520px}.vip-shot img{height:495px;width:min(320px,90%)}.vip-price strong{font-size:64px}}
      ` }} />

      <section className="vip-hero">
        <div className="vip-shell vip-hero-grid">
          <div>
            <div className="vip-badge">🎉 compra confirmada • oferta única</div>
            <p className="vip-kicker">Acesso VIP da Escola Foco em Canto</p>
            <h1 className="vip-title">Seu curso é o começo. <span>O VIP desbloqueia a escola completa.</span></h1>
            <p className="vip-lead">Você já garantiu o Foco em Harmonia. Agora libere os recursos premium da Escola Foco em Canto para treinar todos os dias, gravar duetos, publicar sua evolução e receber avaliação.</p>
            <div className="vip-alert">⚠️ Primeiro mês por R$ 15,90 somente nesta página</div>
            <div className="vip-hero-actions"><VipUpsellTrigger /></div>
          </div>

          <div className="vip-device-stage" aria-hidden="true">
            <div className="vip-device-glow" />
            <div className="vip-phone"><img src="/images/escola/hero-dashboard.webp" alt="" /></div>
            <div className="vip-floating-card"><strong>VIP</strong><span>Libera central, comunidade, duetos, análise vocal e muito mais.</span></div>
          </div>
        </div>
      </section>

      <section className="vip-strip">
        <div className="vip-shell vip-strip-inner">
          <span className="vip-pill">Não é só um grupo</span>
          <span className="vip-pill">É um nível premium da escola</span>
          <span className="vip-pill">Recursos liberados por assinatura</span>
        </div>
      </section>

      <section className="vip-section gray">
        <div className="vip-shell vip-center">
          <h2 className="vip-section-title">O que você desbloqueia com o <span className="vip-gold">Acesso VIP?</span></h2>
          <p className="vip-section-sub">O curso ensina. O Acesso VIP transforma a Escola Foco em Canto em seu ambiente diário de evolução vocal.</p>
          <div className="vip-unlocks">
            {unlocks.map((item) => (
              <div className="vip-unlock" key={item}>
                <div className="vip-lock">🔓</div>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vip-section">
        <div className="vip-shell">
          <div className="vip-center">
            <h2 className="vip-section-title">Veja a experiência que fica liberada.</h2>
            <p className="vip-section-sub">A assinatura VIP não vende apenas suporte. Ela libera ferramentas reais para estudo, prática, comunidade e acompanhamento.</p>
          </div>
          <div className="vip-showcase">
            {features.map((feature) => (
              <article className="vip-feature" key={feature.title}>
                <div className="vip-copy">
                  <div className="vip-eyebrow">{feature.eyebrow}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
                <div className="vip-shot"><img src={feature.image} alt={feature.alt} /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vip-section gray">
        <div className="vip-shell">
          <div className="vip-center">
            <h2 className="vip-section-title">Antes era só assistir. Agora é <span className="vip-gold">evoluir com rotina.</span></h2>
            <p className="vip-section-sub">O VIP muda a percepção do aluno: de um curso isolado para uma escola viva, com prática, recursos e acompanhamento.</p>
          </div>
          <div className="vip-compare-grid">
            <div className="vip-compare-card">
              <h3>Sem o VIP</h3>
              <div className="vip-compare-list">
                {comparisons.map(([before]) => <div className="vip-compare-item" key={before}><span className="vip-symbol no">×</span><span>{before}</span></div>)}
              </div>
            </div>
            <div className="vip-compare-card highlight">
              <h3>Com o Acesso VIP</h3>
              <div className="vip-compare-list">
                {comparisons.map(([, after]) => <div className="vip-compare-item" key={after}><span className="vip-symbol yes">✓</span><span>{after}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vip-offer">
        <div className="vip-shell">
          <div className="vip-offer-box">
            <div className="vip-badge">condição exclusiva desta página</div>
            <h2>Desbloqueie hoje o nível VIP da Escola.</h2>
            <p>Libere a central de exercícios, comunidade, biblioteca premium, exercícios guiados, análise vocal, duetos para avaliação e todos os novos recursos premium que entrarem na escola.</p>
            <div className="vip-price"><small>R$</small><strong>15,90</strong></div>
            <div className="vip-price-note">primeiro mês • depois R$ 19,90/mês</div>
            <VipUpsellTrigger compact />
          </div>
        </div>
      </section>

      <div className="vip-footer-sticky">
        <div className="vip-footer-inner">
          <div><strong>Primeiro mês por R$ 15,90</strong><br /><span className="vip-muted">Oferta única para compradores do Foco em Harmonia.</span></div>
          <VipUpsellTrigger compact />
        </div>
      </div>
    </main>
  )
}
