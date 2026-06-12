import TestimonialCarousel from '../components/TestimonialCarousel'
import VideoFacade from '../components/VideoFacade'
import CountdownTimer from '../components/CountdownTimer'

const checkoutUrl = 'https://pay.kiwify.com.br/pYAkfFI'
const giftUrl = 'https://drive.google.com/uc?export=download&id=1v-ziyCR_5JlpElLyntNX0rKL3hMRlR0s'

const idealFor = [
  '<b>Ministros de louvor:</b> É ideal para você que faz parte do louvor da sua igreja e precisa dar um suporte adequado dividindo voz, ou mantendo a melodia sem se atrapalhar.',
  '<b>Com pouco tempo de estudo:</b> Se você possui uma agenda ocupada e procura um método eficaz para aprender dentro do seu horário e disponibilidade.',
  '<b>Buscam praticidade:</b> Para quem procura uma abordagem prática e descomplicada para aprender a dividir voz, o curso concentra-se em aulas super práticas focadas no desenvolvimento da sua percepção e fortalecimento da sua afinação.',
  '<b>Valorizam cursos objetivos:</b> Para quem está ansioso para começar a dividir voz em um curto período de tempo, o Foco em Harmonia oferece um método que permite que você aprenda de forma eficiente, dependendo do seu comprometimento em seguir as etapas do curso.',
]

const steps = [
  {
    label: 'PASSO 01',
    title: 'Firmar a afinação',
    image: '/images/passos/passo-1-afinacao.webp',
    text: 'O primeiro passo é desenvolver a habilidade de manter a voz principal, mesmo ao ouvir uma segunda voz ou qualquer interferência externa. Este é um dos desafios mais comuns ao cantar em harmonia, e a prática de firmar a afinação ajuda a garantir que você consiga manter sua melodia de forma estável, sem se desviar ou desafinar.',
  },
  {
    label: 'PASSO 02',
    title: 'Aprender a segunda voz',
    image: '/images/passos/passo-2-segunda-voz.webp',
    text: 'Depois de dominar a afinação da voz principal, o próximo passo é firmar a segunda voz. Aqui, você vai aprender a manter essa voz adicional de forma precisa, sem se desviar da melodia que está cantando. Esse é o segredo para criar harmonias coesas e encantadoras, onde cada voz tem seu papel claro e definido.',
  },
  {
    label: 'PASSO 03',
    title: 'Desenvolver a intuição',
    image: '/images/passos/passo-3-intuicao.webp',
    text: 'O passo final é o desenvolvimento da intuição vocal, ou seja, a habilidade de dividir vozes sem precisar ouvir um kit vocal ou alguma referência. Com a prática, você será capaz de criar harmonias naturalmente, usando sua intuição para encontrar e manter a harmonia correta em qualquer situação.',
  },
]

const learnItems = [
  '7 módulos de aulas completas',
  'Comunidade exclusiva para alunos',
  'Módulo bônus: como achar seu tom',
  'Teste de extensão e classificação vocal',
  'Atividades práticas para treinar divisão vocal',
  'Acesso vitalício — pague uma vez, use para sempre',
]

const faqs = [
  ['Esse curso é para aprender a cantar do zero?', 'Não. O foco principal do Foco em Harmonia é divisão vocal: segunda voz, percepção, encaixe harmônico e prática para louvor. Ele pode ajudar sua musicalidade, mas não substitui um curso completo de técnica vocal.'],
  ['Serve para quem ainda trava na segunda voz?', 'Sim. O treinamento foi pensado justamente para quem canta no louvor, mas ainda depende de alguém mostrando a voz ou cantando junto para conseguir dividir.'],
  ['Preciso saber teoria musical?', 'Não. As aulas são práticas e diretas, com explicações simples para você entender os caminhos da divisão vocal sem precisar dominar teoria pesada.'],
  ['Quanto tempo tenho para completar o curso?', 'O acesso é vitalício. Você pode estudar no seu ritmo, repetir as aulas e revisar os exercícios sempre que precisar.'],
  ['Posso parcelar o valor do treinamento?', 'Sim. O checkout mostra as opções de parcelamento disponíveis no momento da compra.'],
  ['Como funciona a garantia?', 'Você tem 7 dias de garantia incondicional. Se entender que o treinamento não é para você, pode solicitar o reembolso dentro desse prazo — sem perguntas.'],
]

export const metadata = {
  title: 'Foco em Harmonia — Oferta Especial',
  description: 'Aprenda a dividir voz no louvor com segurança e naturalidade, mesmo sem saber teoria musical.',
}

export default function PageB() {
  return (
    <main className="lp-b">
      <style dangerouslySetInnerHTML={{ __html: `
        .lp-b{background:#0D0C0F;color:#EDEDED;font-family:Arial,sans-serif;overflow-x:hidden}.lp-b *{box-sizing:border-box}.lp-b strong{color:#23D9B5}.b-container{width:min(1100px,100%);margin:0 auto;padding:0 24px}.b-narrow{width:min(760px,100%);margin:0 auto;padding:0 24px}.b-center{text-align:center}.b-section{padding:64px 0}.b-dark{background:#0D0C0F}.b-gray{background:#D9D9D9;color:#0D0C0F}.b-white{background:#FFFAFA;color:#0D0C0F}.b-mid{background:#636363}.b-title{font-family:Sora,Arial,sans-serif;font-weight:600;line-height:1.35;letter-spacing:.3px;margin:0 0 24px}.b-title.hero{font-size:29px;color:#EDEDED}.b-title.section{font-size:24px;color:inherit}.b-lead{font-family:Montserrat,Arial,sans-serif;font-size:16px;line-height:22px;color:#A0A0A0;margin:0 auto 26px;max-width:720px}.b-logo{width:min(47%,420px);margin:0 auto 18px}.b-logo img{width:100%;height:auto}.b-hero{padding:65px 0 52px;background:#0D0C0F}.b-video{width:min(82%,900px);margin:28px auto 22px}.b-video .video-facade{margin:0 auto;border-radius:0;box-shadow:none}.b-btn{display:inline-flex;align-items:center;justify-content:center;border-radius:6px;background:linear-gradient(232deg,#46B581,#21724C);color:#fff;font-family:Manrope,Arial,sans-serif;font-weight:800;font-size:16px;text-align:center;min-height:70px;padding:25px 130px;max-width:100%;transition:transform .18s ease,filter .18s ease;text-transform:uppercase}.b-btn:hover{transform:scale(1.04);filter:brightness(1.05)}.b-gift-note{font-family:Sora,Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:.3px;line-height:37px;margin:12px auto 0;color:#EDEDED;max-width:760px}.b-gift{animation:bFadeGift .7s ease both;animation-delay:540s}.b-indicators{padding:0 0 80px;background:#0D0C0F}.b-indicator-box{width:min(80%,880px);min-height:100px;margin:0 auto;border:1px solid #fff;border-radius:6px;display:flex;align-items:center;justify-content:space-between;padding:20px}.b-indicator{flex:1;display:flex;align-items:center;justify-content:center;gap:10px;font-family:Montserrat,Arial,sans-serif;font-size:14px;font-weight:700;color:#EDEDED}.b-indicator+.b-indicator{border-left:1px solid #EDEDED}.b-icon{color:#23D9B5;font-size:20px}.b-split{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:center}.b-list{display:flex;flex-direction:column;gap:28px;margin:0;padding:0;list-style:none}.b-list li{border-bottom:1px solid #4A4A4A;padding-bottom:24px;font-family:Montserrat,Arial,sans-serif;font-size:14px;line-height:1.7;color:#fff}.b-list li:before{content:'✓';color:#46B581;font-weight:700;margin-right:10px}.b-img{display:block;max-width:76%;margin:0 auto}.b-copy{font-family:Montserrat,Arial,sans-serif;font-size:14px;line-height:1.75;color:#B9B9B9}.b-callout{border:1px solid #23D9B5;border-radius:6px;padding:15px 20px;color:#fff;font-weight:700;margin:22px 0}.b-learn-header{border-bottom:1px solid #A0A0A0;padding-bottom:32px;margin-bottom:32px}.b-cards{display:flex;gap:18px;justify-content:space-around;flex-wrap:wrap}.b-card{width:300px;background:#161616;border-radius:12px;overflow:hidden;color:#fff}.b-card-img{height:248px;background-size:cover;background-position:top center;position:relative}.b-card-img:after{content:'';position:absolute;inset:45% 0 0;background:linear-gradient(180deg,transparent,#161616 70%)}.b-card-body{position:relative;margin-top:-60px;padding:20px}.b-step-label{display:inline-flex;background:#23D9B5;color:#070707;border-radius:6px;padding:9px 20px;font-family:Manrope,Arial,sans-serif;font-size:14px;font-weight:800;margin-bottom:18px}.b-card h3{font-family:Sora,Arial,sans-serif;font-size:16px;font-weight:800;margin:0 0 12px}.b-divider{height:1px;background:#6D6D6D;margin:10px 0 16px}.b-card p{font-family:Manrope,Arial,sans-serif;font-size:14px;line-height:1.7;color:#A0A0A0;margin:0}.b-test-head{display:flex;align-items:center;justify-content:space-between;border-top:1px solid #A0A0A0;padding-top:32px;margin-bottom:32px}.b-test-head .b-title{width:min(560px,100%)}.b-comment{width:44px;height:44px;border-radius:4px;background:#23D9B5;color:#fff;display:grid;place-items:center;font-size:24px}.lp-b .carousel-wrapper{max-width:1180px}.lp-b .carousel-slide{flex:0 0 31%;max-width:340px}.b-recap{color:#fff}.b-recap .b-title{color:#fff}.b-recap-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.b-recap-item{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:18px;font-family:Montserrat,Arial,sans-serif;line-height:1.6}.b-offer{background:#0D0C0F}.b-offer-card{max-width:520px;margin:0 auto;text-align:center;border:1px solid rgba(35,217,181,.55);border-radius:18px;padding:30px;background:#111}.b-price{font-family:Sora,Arial,sans-serif;color:#23D9B5;font-weight:800;margin:14px 0}.b-price .small{font-size:34px}.b-price .big{font-size:66px;letter-spacing:-2px}.b-cash{color:#EDEDED;font-size:18px}.b-offer-list{text-align:left;list-style:none;margin:24px auto 0;padding:0;max-width:480px}.b-offer-list li{margin:10px 0;color:#EDEDED}.b-faq details{border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:18px 20px;margin:12px 0;background:rgba(255,255,255,.04)}.b-faq summary{cursor:pointer;font-weight:800}.b-faq p{color:#A0A0A0;margin:12px 0 0;line-height:1.7}.b-final{padding:70px 0;background:#0D0C0F;text-align:center}.countdown{background:#EE7070!important;border-bottom:none!important}.count-box strong,.count-separator{color:#fff!important}.countdown-label strong{color:#fff!important}@keyframes bFadeGift{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@media(max-width:768px){.b-container,.b-narrow{padding:0 24px}.b-hero{padding-top:53px}.b-logo{width:281px}.b-title.hero{font-size:20px;line-height:1.2}.b-title.section{font-size:22px;line-height:1.2;text-align:center}.b-lead{font-size:14px;line-height:19px;max-width:290px}.b-video{width:100%;margin-top:22px}.b-btn{font-size:12px;min-height:60px;padding:20px 25px}.b-gift-note{font-size:12px;line-height:1.2;max-width:317px}.b-indicators{padding-bottom:32px}.b-indicator-box{width:100%;min-height:80px;padding:10px}.b-indicator{font-size:10px;flex-direction:column;gap:5px;text-align:center}.b-indicator+.b-indicator{border-left:none}.b-split{grid-template-columns:1fr;gap:30px}.b-benefits .b-split{display:flex;flex-direction:column-reverse}.b-img{max-width:90%}.b-list li{font-size:13px}.b-gray,.b-white,.b-mid,.b-dark{padding-left:0;padding-right:0}.b-test-head{display:block;text-align:center}.b-comment{margin:0 auto}.lp-b .carousel-slide{flex:0 0 82%;max-width:340px}.b-recap-grid{grid-template-columns:1fr}.b-card{width:100%}.b-price .small{font-size:26px}.b-price .big{font-size:48px}}
      ` }} />

      <CountdownTimer />

      <section className="b-hero b-center">
        <div className="b-narrow">
          <div className="b-logo"><img src="/images/oferta/logo-foco-em-harmonia.webp" alt="Foco em Harmonia" /></div>
          <h1 className="b-title hero">Aprenda a Dividir Voz no Louvor com Segurança e Naturalidade, mesmo sem saber teoria musical</h1>
          <p className="b-lead">Método testado e comprovado por centenas de alunos, mesmo que você nunca tenha aprendido teoria musical, o Foco em Harmonia te ensina a dominar a arte de cantar em segunda voz com um passo a passo simples e direto.</p>
        </div>
        <div className="b-video">
          <VideoFacade videoId="F1pYjGMCqAM" title="Como dividir voz" startSeconds={7} thumbnailSrc="/images/videos/thumb-como-dividir-voz.webp" />
        </div>
        <a className="b-btn" href={checkoutUrl}>EU QUERO AGORA</a>
        <p className="b-gift-note">UM BOTÃO PARA RETIRAR SEU SEGUNDO PRESENTE APARECERÁ NO FINAL DO VÍDEO</p>
        <p><a className="b-btn b-gift" href={giftUrl}>RECEBER PRESENTE 2</a></p>
      </section>

      <section className="b-indicators">
        <div className="b-indicator-box">
          <div className="b-indicator"><span className="b-icon">▣</span>Acesso Imediato</div>
          <div className="b-indicator"><span className="b-icon">☆</span>7 Dias de Garantia</div>
          <div className="b-indicator"><span className="b-icon">◈</span>Pagamento Seguro</div>
        </div>
      </section>

      <section className="b-section b-benefits b-dark">
        <div className="b-container b-split">
          <div>
            <h2 className="b-title section">O Foco em Harmonia é o <strong>treinamento ideal</strong> para:</h2>
            <ul className="b-list">{idealFor.map((item) => <li key={item} dangerouslySetInnerHTML={{ __html: item }} />)}</ul>
          </div>
          <img className="b-img" src="/images/produto/notebook-curso.webp" alt="Curso Foco em Harmonia" />
        </div>
      </section>

      <section className="b-section b-dark">
        <div className="b-container b-split">
          <img className="b-img" src="/images/produto/%20cantor-transformacao.webp" alt="Cantor em transformação vocal" />
          <div>
            <h2 className="b-title section">Sua voz pode ser a chave para <strong>transformar sua vida!</strong></h2>
            <div className="b-copy">
              <p>O curso Foco em Harmonia foi projetado para desbloquear a habilidade de dividir vozes em apenas três passos simples, mesmo que você não tenha conhecimento teórico sobre o campo harmônico. Vamos explorar cada um desses passos:</p>
              <p><strong>Passo 1</strong>: Firmar a Afinação</p>
              <p><strong>Passo 2</strong>: Aprender a Segunda</p>
              <p><strong>Passo 3</strong>: Desenvolver a Intuição</p>
              <p>Com esses três passos, você estará pronto para desbloquear a habilidade de dividir vozes, adicionando uma nova dimensão ao seu canto, sem precisar mergulhar em teorias complexas. O curso Foco em Harmonia é a chave para você alcançar esse novo patamar musical!</p>
            </div>
            <div className="b-callout">Os exercícios são desenhados para serem altamente práticos, permitindo que os alunos experimentem e apliquem os conceitos aprendidos em situações reais de canto.</div>
            <a className="b-btn" href={checkoutUrl}>QUERO APRENDER A DIVIDIR</a>
          </div>
        </div>
      </section>

      <section className="b-section b-gray">
        <div className="b-container">
          <div className="b-learn-header"><h2 className="b-title section">No curso Foco e Harmonia, você vai dividir voz e desenvolver a sua percepção</h2></div>
          <div className="b-cards">{steps.map((step) => <article className="b-card" key={step.label}><div className="b-card-img" style={{ backgroundImage: `url(${step.image})` }} /><div className="b-card-body"><span className="b-step-label">{step.label}</span><h3>{step.title}</h3><div className="b-divider" /><p>{step.text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="b-section b-white">
        <div className="b-container">
          <div className="b-test-head"><h2 className="b-title section">Veja os <strong>Resultados que alguns dos nossos alunos</strong> já alcançaram</h2><div className="b-comment">▢</div></div>
          <TestimonialCarousel />
        </div>
      </section>

      <section className="b-section b-mid b-recap">
        <div className="b-container">
          <h2 className="b-title section">Recapitulando, ao entrar no Foco em Harmonia você recebe:</h2>
          <div className="b-recap-grid">{learnItems.map((item) => <div className="b-recap-item" key={item}>✅ {item}</div>)}</div>
        </div>
      </section>

      <section className="b-section b-offer b-center">
        <div className="b-container">
          <div className="b-offer-card">
            <div className="b-logo"><img src="/images/oferta/logo-foco-em-harmonia.webp" alt="Foco em Harmonia" /></div>
            <h2 className="b-title section">Entre hoje no Foco em Harmonia e comece a destravar sua divisão vocal.</h2>
            <p style={{ color: '#23D9B5', fontWeight: 800 }}>OFERTA ESPECIAL — ACESSO VITALÍCIO</p>
            <div className="b-price"><span className="small">12x</span> <span className="big">R$ 5,99</span></div>
            <p className="b-cash">ou <strong>R$ 57,90</strong> à vista</p>
            <ul className="b-offer-list">{learnItems.map((item) => <li key={item}>✓ {item}</li>)}</ul>
            <a className="b-btn" href={checkoutUrl}>QUERO ENTRAR AGORA</a>
          </div>
        </div>
      </section>

      <section className="b-section b-dark b-faq">
        <div className="b-narrow">
          <h2 className="b-title section b-center">Perguntas Frequentes</h2>
          {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </section>

      <section className="b-final">
        <div className="b-narrow">
          <h2 className="b-title section">Chega de ficar perdido quando chega a hora da divisão vocal.</h2>
          <p className="b-lead">Entre no Foco em Harmonia hoje por 12x de R$ 5,99 e comece a treinar com acesso vitalício.</p>
          <a className="b-btn" href={checkoutUrl}>EU QUERO AGORA</a>
        </div>
      </section>
    </main>
  )
}
