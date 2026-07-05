export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <style dangerouslySetInnerHTML={{ __html: `
        .v1-page .v1-benefit i{display:none !important;}
        .v1-page .v1-benefit{justify-content:center !important;min-height:116px !important;padding:22px 14px !important;}
        @media(max-width:920px){
          .v1-page .v1-media{top:86px !important;right:-7px !important;width:47% !important;height:335px !important;opacity:1 !important;z-index:2 !important;overflow:visible !important;background:transparent !important;}
          .v1-page .v1-media::before,.v1-page .v1-media::after{display:none !important;content:none !important;background:none !important;opacity:0 !important;}
          .v1-page .v1-hero-img{right:-47% !important;top:-10% !important;width:245% !important;height:128% !important;object-fit:cover !important;object-position:center top !important;mix-blend-mode:lighten !important;opacity:1 !important;filter:saturate(1.12) contrast(1.12) brightness(1.08) drop-shadow(0 18px 28px rgba(0,0,0,.46)) !important;mask-image:linear-gradient(180deg,#000 0%,#000 84%,transparent 100%) !important;-webkit-mask-image:linear-gradient(180deg,#000 0%,#000 84%,transparent 100%) !important;background:transparent !important;}
          .v1-page .v1-benefit{min-height:104px !important;padding:18px 12px !important;}
        }
      ` }} />
    </>
  )
}
