const vipCheckoutUrl = 'https://focoemcanto.com/focoemharmonia/checkout/'
const nextUpsellUrl = '/mentoria-especial'

const benefits = [
  'Suporte contínuo para tirar dúvidas enquanto você estuda o Foco em Harmonia.',
  'Feedbacks e correções para suas atividades, áudios e vídeos enviados no grupo.',
  'Direcionamento prático para saber exatamente o que ajustar na sua divisão vocal.',
  'Acesso à pasta exclusiva no Google Drive com materiais extras de treino.',
  'Atividades em áudio e vídeo para reforçar sua percepção, afinação e segunda voz.',
  'Ambiente de acompanhamento para você não estudar sozinho depois da compra.',
]

const steps = [
  ['1', 'Entre no grupo VIP', 'Você garante seu acesso com a condição especial desta página.'],
  ['2', 'Envie suas dúvidas e atividades', 'Compartilhe áudios, vídeos e exercícios do curso para receber orientação.'],
  ['3', 'Receba correções e novos treinos', 'Use os materiais extras para acelerar sua evolução na divisão vocal.'],
]

export const metadata = {
  title: 'Obrigado — Membros VIP Foco em Harmonia',
  description: 'Oferta exclusiva para entrar no grupo Membros VIP do Foco em Harmonia com suporte contínuo e materiais extras.',
}

export default function ObrigadoVipPage() {
  return (
    <main className="vip-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .vip-page{min-height:100vh;background:#070707;color:#fff;font-family:Roboto,Arial,sans-serif;overflow-x:hidden}.vip-page *{box-sizing:border-box}.vip-container{width:min(1120px,100%);margin:0 auto;padding:0 24px}.vip-narrow{width:min(820px,100%);margin:0 auto;padding:0 24px}.vip-center{text-align:center}.vip-hero{position:relative;padding:54px 0 72px;background:radial-gradient(circle at 50% 0%,rgba(35,217,181,.18),transparent 34%),linear-gradient(180deg,#101010 0%,#070707 100%)}.vip-badge{display:inline-flex;align-items:center;justify-content:center;border:1px solid rgba(35,217,181,.5);background:rgba(35,217,181,.1);color:#23D9B5;border-radius:999px;padding:10px 18px;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;margin-bottom:22px}.vip-title{font-size:clamp(32px,6vw,64px);line-height:1.02;font-weight:900;letter-spacing:-.04em;margin:0 auto 18px;max-width:980px}.vip-title span{color:#23D9B5}.vip-lead{font-size:clamp(17px,2.3vw,22px);line-height:1.45;color:rgba(255,255,255,.82);max-width:820px;margin:0 auto 28px}.vip-alert{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:#ee6f70;color:#fff;border-radius:10px;padding:14px 18px;font-weight:800;margin:4px auto 26px;box-shadow:0 12px 30px rgba(238,111,112,.25)}.vip-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:34px;align-items:center;margin-top:26px}.vip-card{background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.14);border-radius:24px;padding:30px;box-shadow:0 24px 70px rgba(0,0,0,.35)}.vip-price-card{position:relative;text-align:center;border-color:rgba(35,217,181,.45);box-shadow:0 0 0 1px rgba(35,217,181,.08),0 28px 80px rgba(35,217,181,.14)}.vip-price-label{color:rgba(255,255,255,.72);font-size:18px;font-weight:700;margin-bottom:6px}.vip-price{display:flex;align-items:flex-end;justify-content:center;gap:8px;color:#23D9B5;margin:8px 0}.vip-price small{font-size:24px;font-weight:800;margin-bottom:9px}.vip-price strong{font-size:72px;line-height:.9;font-weight:900;letter-spacing:-.05em}.vip-price-note{color:#fff;font-size:18px;font-weight:800;margin:8px 0 16px}.vip-recurring{color:rgba(255,255,255,.68);font-size:14px;line-height:1.5;margin-bottom:22px}.vip-cta{display:inline-flex;align-items:center;justify-content:center;min-height:66px;width:100%;border-radius:9px;background:linear-gradient(232deg,#46B581,#21724C);color:#fff;font-size:16px;font-weight:900;text-transform:uppercase;padding:20px 28px;box-shadow:0 16px 42px rgba(35,217,181,.25);transition:transform .18s ease,filter .18s ease;text-decoration:none}.vip-cta:hover{transform:scale(1.025);filter:brightness(1.05)}.vip-small{font-size:12px;color:rgba(255,255,255,.55);line-height:1.5;margin-top:14px}.vip-list{display:grid;gap:14px;margin:0;padding:0;list-style:none}.vip-list li{display:flex;gap:12px;align-items:flex-start;color:rgba(255,255,255,.86);font-size:16px;line-height:1.55}.vip-check{flex:0 0 24px;width:24px;height:24px;border-radius:999px;background:#23D9B5;color:#06100d;display:grid;place-items:center;font-weight:900;margin-top:1px}.vip-section{padding:72px 0}.vip-section.gray{background:#101010}.vip-section-title{font-size:clamp(28px,4vw,44px);line-height:1.1;font-weight:900;letter-spacing:-.03em;margin:0 auto 18px;text-align:center;max-width:900px}.vip-section-title span{color:#23D9B5}.vip-section-sub{font-size:18px;line-height:1.55;color:rgba(255,255,255,.72);text-align:center;max-width:760px;margin:0 auto 42px}.vip-features{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.vip-feature{background:#171717;border:1px solid rgba(255,255,255,.1);border-radius:18px;padding:24px;min-height:180px}.vip-feature-icon{font-size:28px;margin-bottom:14px}.vip-feature h3{font-size:18px;margin:0 0 10px;color:#fff}.vip-feature p{font-size:15px;line-height:1.55;color:rgba(255,255,255,.68);margin:0}.vip-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.vip-step{position:relative;background:#fff;color:#111;border-radius:18px;padding:26px;min-height:190px}.vip-step-num{width:42px;height:42px;border-radius:999px;background:#23D9B5;color:#05100d;display:grid;place-items:center;font-weight:900;margin-bottom:18px}.vip-step h3{margin:0 0 10px;font-size:20px}.vip-step p{margin:0;color:#4b4b4b;line-height:1.55}.vip-offer{background:radial-gradient(circle at 50% 0%,rgba(35,217,181,.16),transparent 35%),#050505;padding:80px 0}.vip-offer-box{width:min(820px,100%);margin:0 auto;background:linear-gradient(180deg,rgba(255,255,255,.09),rgba(255,255,255,.04));border:1px solid rgba(35,217,181,.45);border-radius:26px;padding:34px;text-align:center;box-shadow:0 30px 90px rgba(0,0,0,.4)}.vip-offer-box h2{font-size:clamp(30px,5vw,54px);line-height:1.05;margin:0 0 18px}.vip-offer-box h2 span{color:#23D9B5}.vip-offer-box p{color:rgba(255,255,255,.75);font-size:18px;line-height:1.55;margin:0 auto 22px;max-width:650px}.vip-price-mini{display:inline-flex;align-items:center;gap:10px;background:rgba(35,217,181,.1);border:1px solid rgba(35,217,181,.35);border-radius:999px;padding:11px 16px;color:#23D9B5;font-weight:900;margin-bottom:22px}.vip-faq details{background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:18px 20px;margin:12px 0}.vip-faq summary{cursor:pointer;font-weight:800}.vip-faq p{margin:12px 0 0;color:rgba(255,255,255,.68);line-height:1.6}.vip-no{display:inline-block;margin-top:18px;color:rgba(255,255,255,.5);font-size:14px;text-decoration:underline}.vip-floating{position:sticky;bottom:0;z-index:40;background:rgba(7,7,7,.86);backdrop-filter:blur(10px);border-top:1px solid rgba(255,255,255,.1);padding:12px 18px}.vip-floating-inner{width:min(920px,100%);margin:0 auto;display:flex;gap:14px;align-items:center;justify-content:space-between}.vip-floating strong{color:#23D9B5}.vip-floating a{max-width:340px}.vip-muted{color:rgba(255,255,255,.62)}@media(max-width:820px){.vip-hero{padding:38px 0 54px}.vip-hero-grid,.vip-features,.vip-steps{grid-template-columns:1fr}.vip-card{padding:22px}.vip-price strong{font-size:58px}.vip-floating-inner{display:block;text-align:center}.vip-floating a{margin-top:10px;min-height:54px}.vip-section{padding:54px 0}.vip-alert{font-size:13px;line-height:1.25}.vip-list li{font-size:15px}}
      ` }} />

      <section className="vip-hero vip-center">
        <div className="vip-container">
          <span className="vip-badge">Compra confirmada • oferta única</span>
          <h1 className="vip-title">Pare de estudar sozinho. Entre no <span>Grupo VIP</span> do Foco em Harmonia.</h1>
          <p className="vip-lead">Você já garantiu o curso. Agora você tem uma única chance de receber suporte contínuo, correções e materiais extras para acelerar seus treinos de divisão vocal.</p>
          <div className="vip-alert">⚠️ Primeiro mês por R$ 15,90 somente nesta página</div>

          <div className="vip-hero-grid">
            <div className="vip-card">
              <ul className="vip-list">
                {benefits.map((item) => (
                  <li key={item}><span className="vip-check">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>

            <div className="vip-card vip-price-card">
              <div className="vip-price-label">Primeiro mês por apenas</div>
              <div className="vip-price"><small>R$</small><strong>15,90</strong></div>
              <div className="vip-price-note">depois R$ 19,90/mês</div>
              <p className="vip-recurring">Entre hoje, aproveite o primeiro mês com desconto e continue recebendo suporte, feedbacks e materiais exclusivos todos os meses.</p>
              <a className="vip-cta" href={vipCheckoutUrl}>Sim, quero entrar no grupo VIP</a>
              <p className="vip-small">Ao sair desta página, você perde esta condição especial.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="vip-section gray">
        <div className="vip-container">
          <h2 className="vip-section-title">O curso te mostra o caminho. O VIP te ajuda a <span>permanecer evoluindo.</span></h2>
          <p className="vip-section-sub">A maior dificuldade de quem estuda divisão vocal é saber se está fazendo certo. No grupo VIP, você pode enviar suas práticas, tirar dúvidas e receber orientação para corrigir o que trava sua evolução.</p>
          <div className="vip-features">
            <div className="vip-feature"><div className="vip-feature-icon">🎧</div><h3>Correções e feedbacks</h3><p>Envie seus áudios, vídeos e atividades do curso para receber direcionamento prático.</p></div>
            <div className="vip-feature"><div className="vip-feature-icon">📁</div><h3>Pasta exclusiva no Drive</h3><p>Acesse materiais extras, exercícios de áudio e vídeos de treino para reforçar seus estudos.</p></div>
            <div className="vip-feature"><div className="vip-feature-icon">💬</div><h3>Suporte contínuo</h3><p>Tire dúvidas no grupo e tenha acompanhamento para aplicar o conteúdo com mais segurança.</p></div>
          </div>
        </div>
      </section>

      <section className="vip-section">
        <div className="vip-container">
          <h2 className="vip-section-title">Como funciona o acesso</h2>
          <p className="vip-section-sub">Você entra agora, recebe as orientações de acesso e já começa a usar o grupo como apoio para o curso.</p>
          <div className="vip-steps">
            {steps.map(([number, title, text]) => (
              <div className="vip-step" key={number}>
                <div className="vip-step-num">{number}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vip-offer">
        <div className="vip-container">
          <div className="vip-offer-box">
            <div className="vip-price-mini">Oferta única: R$ 15,90 no primeiro mês</div>
            <h2>Não deixe sua evolução depender só da sua força de vontade.</h2>
            <p>Entre no Membros VIP e tenha um espaço para praticar, enviar atividades, receber correções e acessar materiais de treino que reforçam tudo o que você vai aprender no Foco em Harmonia.</p>
            <a className="vip-cta" href={vipCheckoutUrl}>Quero aproveitar o mês VIP por R$ 15,90</a>
            <br />
            <a className="vip-no" href={nextUpsellUrl}>Não quero suporte VIP agora</a>
          </div>
        </div>
      </section>

      <section className="vip-section vip-faq">
        <div className="vip-narrow">
          <h2 className="vip-section-title">Perguntas rápidas</h2>
          <details><summary>Esse grupo substitui o curso?</summary><p>Não. O grupo VIP complementa o curso com suporte, feedbacks, correções e materiais extras para você aplicar melhor o conteúdo.</p></details>
          <details><summary>O valor é mensal?</summary><p>Sim. Nesta página, você garante o primeiro mês por R$ 15,90. Depois, a assinatura segue por R$ 19,90/mês.</p></details>
          <details><summary>Posso enviar minhas atividades?</summary><p>Sim. A proposta do grupo é justamente permitir que você envie conteúdos, atividades, áudios e vídeos para receber orientação.</p></details>
          <details><summary>Vou receber materiais extras?</summary><p>Sim. Você recebe acesso a uma pasta no Google Drive com materiais exclusivos de treino, incluindo atividades em áudio e vídeo.</p></details>
        </div>
      </section>

      <div className="vip-floating">
        <div className="vip-floating-inner">
          <div><strong>Oferta única:</strong> <span className="vip-muted">primeiro mês VIP por R$ 15,90</span></div>
          <a className="vip-cta" href={vipCheckoutUrl}>Entrar no VIP agora</a>
        </div>
      </div>
    </main>
  )
}
