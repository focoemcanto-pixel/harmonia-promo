const essentialCheckoutUrl = 'https://pay.kiwify.com.br/v6K4oD5'
const premiumCheckoutUrl = 'https://pay.kiwify.com.br/VIGVnxC'
const officialAssetBase = 'https://focoemcanto.com'

const phases = [
  { img: `${officialAssetBase}/images/metodo/fase-01.webp`, tag: 'FASE 01', title: 'Diagnóstico vocal', text: 'Entenda sua voz, seus bloqueios e o caminho certo para evoluir com segurança.' },
  { img: `${officialAssetBase}/images/metodo/fase-02.webp`, tag: 'FASE 02', title: 'Mentalidade e fisiologia', text: 'Prepare sua mente e compreenda como a voz funciona para cantar com mais controle.' },
  { img: `${officialAssetBase}/images/metodo/fase-03.webp`, tag: 'FASE 03', title: 'Respiração e afinação', text: 'Desenvolva estabilidade, potência e emissão vocal sem forçar.' },
  { img: `${officialAssetBase}/images/metodo/fase-04.webp`, tag: 'FASE 04', title: 'Prática aplicada', text: 'Aplique a técnica em músicas, apresentações e rotina real.' },
]

const benefits = [
  'Afinação precisa e controle vocal.',
  'Respiração para emissão estável e segura.',
  'Projeção e potência vocal sem forçar.',
  'Confiança para cantar em público e no louvor.',
  'Saúde vocal para prevenir fadiga e lesões.',
  'Interpretação emocional para se conectar melhor cantando.',
]

function Check({ children }: { children: React.ReactNode }) {
  return <li><span>✓</span>{children}</li>
}

export const metadata = {
  title: 'Oferta Especial — Mentoria Foco em Canto',
  description: 'Oferta especial para entrar na Mentoria Foco em Canto depois da compra do Foco em Harmonia.',
}

export default function MentoriaEspecialPage() {
  return (
    <main className="mentor-upsell">
      <style dangerouslySetInnerHTML={{ __html: `
        .mentor-upsell{background:#050505;color:#fff;min-height:100vh;font-family:Roboto,Arial,sans-serif;overflow-x:hidden}.mentor-upsell *{box-sizing:border-box}.mu-container{width:min(1120px,100%);margin:0 auto;padding:0 24px}.mu-narrow{width:min(820px,100%);margin:0 auto;padding:0 24px}.mu-center{text-align:center}.mu-hero{padding:46px 0 70px;background:radial-gradient(circle at 50% 5%,rgba(245,200,66,.2),transparent 30%),linear-gradient(180deg,#121015,#050505)}.mu-logo{display:block;width:min(620px,92vw);margin:0 auto 14px}.mu-badge{display:inline-flex;align-items:center;justify-content:center;background:rgba(245,200,66,.12);border:1px solid rgba(245,200,66,.48);color:#f5c842;border-radius:999px;padding:10px 18px;font-size:13px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;margin-bottom:20px}.mu-title{font-size:clamp(34px,6vw,68px);line-height:1.02;letter-spacing:-.05em;font-weight:950;max-width:1000px;margin:0 auto 18px}.mu-title span{color:#f5c842}.mu-lead{font-size:clamp(17px,2.3vw,22px);line-height:1.5;color:rgba(255,255,255,.82);max-width:850px;margin:0 auto 26px}.mu-alert{display:inline-flex;background:#e94848;color:#fff;border-radius:12px;padding:14px 18px;font-weight:900;box-shadow:0 16px 36px rgba(233,72,72,.24);margin-bottom:26px}.mu-btn{display:inline-flex;align-items:center;justify-content:center;border-radius:12px;background:linear-gradient(135deg,#f5c842,#d49419);color:#111;min-height:64px;padding:20px 30px;font-weight:950;text-transform:uppercase;text-decoration:none;box-shadow:0 16px 42px rgba(245,200,66,.24);transition:.18s ease}.mu-btn:hover{transform:scale(1.025);filter:brightness(1.04)}.mu-video-card{background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.12);border-radius:24px;padding:18px;box-shadow:0 22px 65px rgba(0,0,0,.45);max-width:820px;margin:26px auto 0}.mu-video-card img{width:100%;border-radius:18px;display:block}.mu-section{padding:72px 0}.mu-dark{background:#0d0d0d}.mu-light{background:#fff;color:#111}.mu-section h2{font-size:clamp(30px,4.6vw,52px);line-height:1.08;letter-spacing:-.04em;text-align:center;margin:0 auto 18px;max-width:900px}.mu-section h2 span{color:#f5c842}.mu-light h2 span{color:#0f9f7e}.mu-sub{font-size:18px;line-height:1.55;color:rgba(255,255,255,.7);text-align:center;max-width:780px;margin:0 auto 42px}.mu-light .mu-sub{color:#4b4b4b}.mu-grid{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center}.mu-img{display:block;width:100%;border-radius:24px;box-shadow:0 18px 55px rgba(0,0,0,.35)}.mu-copy p{color:rgba(255,255,255,.76);font-size:17px;line-height:1.65}.mu-copy strong{color:#f5c842}.mu-benefits{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px}.mu-benefit{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:18px;font-weight:800;color:rgba(255,255,255,.88)}.mu-phase-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.mu-phase{background:#151515;color:#fff;border-radius:18px;overflow:hidden}.mu-phase img{width:100%;height:210px;object-fit:cover;object-position:top center}.mu-phase-body{padding:18px}.mu-phase-body span{display:inline-flex;background:#f5c842;color:#111;border-radius:999px;padding:7px 10px;font-size:11px;font-weight:900;margin-bottom:12px}.mu-phase-body h3{font-size:18px;margin:0 0 8px}.mu-phase-body p{color:rgba(255,255,255,.68);font-size:14px;line-height:1.55;margin:0}.mu-offer{padding:80px 0;background:radial-gradient(circle at 50% 0%,rgba(245,200,66,.18),transparent 32%),#050505}.mu-offer-head{text-align:center;margin-bottom:30px}.mu-offer-head h2{font-size:clamp(32px,5vw,58px);line-height:1.05;margin:0 auto 16px;max-width:940px}.mu-offer-head h2 span{color:#f5c842}.mu-offer-head p{color:rgba(255,255,255,.72);font-size:18px;line-height:1.55;max-width:780px;margin:0 auto}.mu-plans{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px;align-items:stretch}.mu-plan{background:linear-gradient(145deg,#18181b,#0b0b0c);border:1px solid rgba(255,255,255,.14);border-radius:28px;padding:clamp(24px,4vw,34px);box-shadow:0 18px 60px rgba(0,0,0,.32);display:flex;flex-direction:column}.mu-plan.premium{position:relative;background:radial-gradient(circle at top right,rgba(40,215,191,.22),transparent 34%),linear-gradient(145deg,#1d1d20,#090909);border:1.5px solid #28d7bf;box-shadow:0 18px 70px rgba(40,215,191,.14)}.mu-plan-badge{display:inline-flex;width:fit-content;margin-bottom:18px;background:linear-gradient(135deg,#28d7bf,#2c8e5a);color:#fff;padding:11px 18px;border-radius:999px;font-weight:900;font-size:13px}.mu-plan-kicker{color:#f5c842;font-weight:900;font-size:12px;letter-spacing:.12em;margin-bottom:10px}.mu-plan.premium .mu-plan-kicker{color:#28d7bf}.mu-plan h3{font-size:clamp(26px,3vw,34px);margin:0 0 10px}.mu-plan p{color:rgba(255,255,255,.68);line-height:1.55}.mu-plan ul{list-style:none;display:grid;gap:12px;margin:18px 0 28px;padding:0}.mu-plan li{display:flex;gap:10px;color:rgba(255,255,255,.86);font-weight:700;line-height:1.45}.mu-plan li span{color:#f5c842;font-weight:900}.mu-plan.premium li span{color:#28d7bf}.mu-price{margin-top:auto;padding-top:24px;border-top:1px solid rgba(255,255,255,.12)}.mu-price small{display:block;color:rgba(255,255,255,.55);font-weight:700}.mu-price strong{display:block;font-size:clamp(36px,5vw,52px);line-height:1;margin:8px 0;letter-spacing:-.05em}.mu-plan.premium .mu-price strong{color:#28d7bf}.mu-price em{display:block;color:rgba(255,255,255,.58);font-style:normal;font-weight:700}.mu-price-tag{display:inline-flex;width:fit-content;margin-top:12px;padding:7px 12px;border-radius:999px;background:rgba(245,200,66,.14);color:#f5c842;font-weight:900;font-size:12px}.mu-plan.premium .mu-price-tag{background:rgba(40,215,191,.14);color:#28d7bf}.mu-plan .mu-btn{width:100%;margin-top:24px}.mu-guarantee{background:#111;padding:60px 0}.mu-guarantee-box{display:grid;grid-template-columns:220px 1fr;gap:28px;align-items:center;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:26px}.mu-guarantee-box img{width:100%;max-width:220px}.mu-guarantee-box h2{text-align:left;margin:0 0 12px}.mu-guarantee-box p{color:rgba(255,255,255,.7);font-size:17px;line-height:1.6}.mu-final{padding:72px 0;text-align:center;background:#050505}.mu-final h2{font-size:clamp(32px,5vw,56px);max-width:840px;margin:0 auto 18px}.mu-final p{color:rgba(255,255,255,.72);font-size:18px;line-height:1.55;max-width:680px;margin:0 auto 26px}.mu-floating{position:sticky;bottom:0;z-index:50;background:rgba(5,5,5,.86);backdrop-filter:blur(10px);border-top:1px solid rgba(255,255,255,.1);padding:12px 18px}.mu-floating-inner{width:min(980px,100%);margin:0 auto;display:flex;gap:14px;align-items:center;justify-content:space-between}.mu-floating strong{color:#f5c842}.mu-floating a{min-height:52px;padding:16px 22px}@media(max-width:900px){.mu-grid,.mu-plans,.mu-guarantee-box{grid-template-columns:1fr}.mu-benefits,.mu-phase-grid{grid-template-columns:1fr}.mu-floating-inner{display:block;text-align:center}.mu-floating a{margin-top:10px;width:100%}.mu-logo{width:min(430px,94vw)}.mu-section{padding:54px 0}.mu-phase img{height:250px}.mu-guarantee-box h2{text-align:center}.mu-guarantee-box img{margin:0 auto}.mu-alert{font-size:13px;line-height:1.3}}
      ` }} />

      <section className="mu-hero mu-center">
        <div className="mu-container">
          <img className="mu-logo" src={`${officialAssetBase}/images/hero/hero-foco-em-canto.webp`} alt="Foco em Canto" />
          <div className="mu-badge">Oferta pós-compra • condição especial</div>
          <h1 className="mu-title">Entre na Mentoria Foco em Canto por uma condição que <span>não aparece nem nos lançamentos.</span></h1>
          <p className="mu-lead">Você acabou de investir na sua harmonia. Agora tem uma oportunidade única de desenvolver a sua voz completa: técnica, afinação, potência, controle, saúde vocal e confiança para cantar melhor.</p>
          <div className="mu-alert">⚠️ Esta oferta especial só está disponível agora, nesta etapa do funil.</div>
          <a className="mu-btn" href="#planos">Ver planos especiais da mentoria</a>
          <div className="mu-video-card">
            <img src={`${officialAssetBase}/images/vsl/thumb-vsl-raul.webp`} alt="Mentoria Foco em Canto" />
          </div>
        </div>
      </section>

      <section className="mu-section mu-dark">
        <div className="mu-container mu-grid">
          <img className="mu-img" src={`${officialAssetBase}/images/ideal-para/ideal-para.webp`} alt="Mentoria ideal para" />
          <div className="mu-copy">
            <h2 style={{ textAlign: 'left' }}>Agora o próximo passo é destravar <span>sua voz principal.</span></h2>
            <p>O Foco em Harmonia te ajuda na divisão vocal. Mas se a sua base vocal ainda trava, sua harmonia também fica limitada.</p>
            <p>Na Mentoria Foco em Canto, você desenvolve a estrutura completa da sua voz: <strong>afinação, respiração, potência, projeção, saúde vocal e interpretação.</strong></p>
            <a className="mu-btn" href="#planos">Escolher meu plano</a>
          </div>
        </div>
      </section>

      <section className="mu-section mu-light">
        <div className="mu-container">
          <h2>Você sai da mentoria sabendo exatamente como evoluir sua voz</h2>
          <p className="mu-sub">O método foi organizado para você parar de cantar no improviso e passar a treinar com direção.</p>
          <div className="mu-phase-grid">
            {phases.map((phase) => (
              <article className="mu-phase" key={phase.tag}>
                <img src={phase.img} alt={phase.title} />
                <div className="mu-phase-body"><span>{phase.tag}</span><h3>{phase.title}</h3><p>{phase.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mu-section mu-dark">
        <div className="mu-container">
          <h2>Recapitulando: você desenvolve a sua voz em áreas que mudam tudo</h2>
          <div className="mu-benefits">
            {benefits.map((benefit) => <div className="mu-benefit" key={benefit}>✅ {benefit}</div>)}
          </div>
        </div>
      </section>

      <section className="mu-offer" id="planos">
        <div className="mu-container">
          <div className="mu-offer-head">
            <h2>Escolha sua experiência na Mentoria Foco em Canto</h2>
            <p>Essa condição foi liberada como uma oportunidade especial de pós-compra. Ao sair desta página, você volta para as condições normais da mentoria.</p>
          </div>

          <div className="mu-plans">
            <article className="mu-plan">
              <div className="mu-plan-kicker">ESSENTIAL</div>
              <h3>Foco em Canto Essential</h3>
              <p>Ideal para quem quer começar a evolução vocal com acesso ao método completo e aulas ao vivo.</p>
              <ul>
                <Check>Curso completo na plataforma</Check>
                <Check>Aulas ao vivo semanais</Check>
                <Check>Exercícios práticos</Check>
                <Check>Acesso imediato</Check>
                <Check>15 dias de garantia</Check>
              </ul>
              <div className="mu-price"><small>comece por</small><strong>12x R$30,72</strong><em>ou R$297 à vista</em><span className="mu-price-tag">condição especial pós-compra</span></div>
              <a href={essentialCheckoutUrl} className="mu-btn">Começar pelo Essential</a>
            </article>

            <article className="mu-plan premium">
              <div className="mu-plan-badge">⭐ EXPERIÊNCIA COMPLETA</div>
              <div className="mu-plan-kicker">PREMIUM</div>
              <h3>Foco em Canto Premium</h3>
              <p>Ideal para quem quer acompanhamento mais próximo, ambiente exclusivo e jornada direcionada.</p>
              <ul>
                <Check>Tudo do Essential</Check>
                <Check>Grupo exclusivo de alunos</Check>
                <Check>Sala virtual da mentoria</Check>
                <Check>Prioridade nas dúvidas</Check>
                <Check>Acompanhamento premium</Check>
                <Check>15 dias de garantia</Check>
              </ul>
              <div className="mu-price"><small>experiência completa por</small><strong>12x R$72,09</strong><em>ou R$697 à vista</em><span className="mu-price-tag">melhor escolha para evoluir com direção</span></div>
              <a href={premiumCheckoutUrl} className="mu-btn">Quero a experiência completa</a>
            </article>
          </div>
        </div>
      </section>

      <section className="mu-guarantee">
        <div className="mu-container">
          <div className="mu-guarantee-box">
            <img src={`${officialAssetBase}/images/garantia/garantia-15-dias.webp`} alt="Garantia de 15 dias" />
            <div><h2>Você entra sem medo</h2><p>15 dias de garantia incondicional. Se não fizer sentido para você, pode solicitar reembolso dentro do prazo.</p></div>
          </div>
        </div>
      </section>

      <section className="mu-section mu-dark">
        <div className="mu-container mu-grid">
          <div className="mu-copy">
            <h2 style={{ textAlign: 'left' }}>Seu mentor vocal será Marcos Perrella Cruz</h2>
            <p>Marcos Cruz é músico profissional e professor de canto, técnica vocal e piano com mais de 15 anos de experiência. Já ajudou centenas de alunos a destravarem suas vozes.</p>
            <p>Com os horários de aulas individuais lotados, desenvolveu a mentoria Foco em Canto para atender mais alunos com uma abordagem prática e direcionada.</p>
            <a className="mu-btn" href="#planos">Ver planos especiais</a>
          </div>
          <img className="mu-img" src={`${officialAssetBase}/images/mentor/mentor-marcos.webp`} alt="Marcos Perrella Cruz" />
        </div>
      </section>

      <section className="mu-final">
        <div className="mu-narrow">
          <h2>Essa é a ponte entre cantar melhor e finalmente entender sua própria voz.</h2>
          <p>Você já deu o primeiro passo com o Foco em Harmonia. Agora aproveite a condição especial para entrar na mentoria completa.</p>
          <a className="mu-btn" href="#planos">Escolher meu plano agora</a>
        </div>
      </section>

      <div className="mu-floating"><div className="mu-floating-inner"><div><strong>Oferta especial liberada:</strong> planos da Mentoria Foco em Canto</div><a className="mu-btn" href="#planos">Ver planos</a></div></div>
    </main>
  )
}
