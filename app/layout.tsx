import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import KiwifyUtmPropagation from './components/KiwifyUtmPropagation'
import CheckoutLoadingFallback from './components/CheckoutLoadingFallback'

export const metadata: Metadata = {
  title: 'Foco em Harmonia — Oferta Especial',
  description: 'Curso de divisão vocal para ministério de louvor — Oferta promocional por tempo limitado'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pay.kiwify.com.br" />
        <link rel="preconnect" href="https://pay.kiwify.com.br" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://kiwify.com.br" />
        <link rel="preconnect" href="https://kiwify.com.br" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&family=Roboto:wght@400;500;600;700;800;900&family=Roboto+Slab:wght@400&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          .hero-original{
            background:radial-gradient(circle at 50% 30%,rgba(168,85,247,.10) 0%,rgba(126,34,206,.06) 13%,transparent 26%),linear-gradient(180deg,#101124 0%,#090914 45%,#050505 100%)!important;
          }
          .hero-original::before{
            background:radial-gradient(circle at 50% 24%,rgba(168,85,247,.10),transparent 20%)!important;
            opacity:.42!important;
          }
          .hero-authority{
            min-height:330px!important;
            margin:.15rem auto -1.35rem!important;
          }
          .hero-photo-wrap{
            width:min(520px,92vw)!important;
            max-width:520px!important;
            margin-left:auto!important;
            margin-right:auto!important;
          }
          .hero-photo-wrap::before{
            left:50%!important;
            top:48%!important;
            width:42%!important;
            height:42%!important;
            background:radial-gradient(circle,rgba(168,85,247,.34) 0%,rgba(126,34,206,.16) 44%,transparent 74%)!important;
            filter:blur(14px)!important;
          }
          .hero-marcos{
            width:min(430px,82vw)!important;
            margin-left:auto!important;
            margin-right:auto!important;
            transform:translateX(5%)!important;
          }
          .hero-authority + h1{
            margin-top:-.55rem!important;
          }
          .hero-price-card{
            max-width:400px!important;
          }

          /* Elementor global fonts — Página B */
          .lp-b{
            font-family:'Roboto', Arial, sans-serif!important;
            font-weight:400!important;
          }
          .lp-b p,
          .lp-b li,
          .lp-b details,
          .lp-b summary,
          .lp-b .b-lead,
          .lp-b .b-copy,
          .lp-b .b-card p,
          .lp-b .b-guarantee p,
          .lp-b .b-mentor p,
          .lp-b .b-mega-cash,
          .lp-b .b-gift-note{
            font-family:'Roboto', Arial, sans-serif!important;
            font-weight:400!important;
          }
          .lp-b h1,
          .lp-b h2,
          .lp-b h3,
          .lp-b .b-title,
          .lp-b .b-btn,
          .lp-b .b-indicator,
          .lp-b .b-step-label,
          .lp-b .b-card h3,
          .lp-b .b-mega-price,
          .lp-b .b-mega-list li,
          .lp-b .b-old-price,
          .lp-b .b-mega-sub{
            font-family:'Roboto', Arial, sans-serif!important;
            font-weight:600!important;
          }
          .lp-b strong,
          .lp-b .green{
            font-family:'Roboto', Arial, sans-serif!important;
            font-weight:500!important;
          }
          .lp-b .count-box span{
            font-family:'Roboto Slab', Georgia, serif!important;
            font-weight:400!important;
          }
          .lp-b .count-box strong{
            font-family:'Roboto', Arial, sans-serif!important;
            font-weight:400!important;
          }
          .lp-b .b-gift{
            animation-delay:300s!important;
          }
          .lp-b .video-facade:fullscreen,
          .lp-b .video-facade:-webkit-full-screen{
            width:100vw!important;
            height:100vh!important;
            max-width:none!important;
            background:#000!important;
          }
          .lp-b .video-facade:fullscreen iframe,
          .lp-b .video-facade:-webkit-full-screen iframe{
            width:100%!important;
            height:100%!important;
          }

          @media (max-width:768px){
            .hero-original{
              background:radial-gradient(circle at 50% 29%,rgba(168,85,247,.12) 0%,rgba(126,34,206,.07) 18%,transparent 36%),linear-gradient(180deg,#101124 0%,#090914 46%,#050505 100%)!important;
            }
            .hero-original::before{
              background:radial-gradient(circle at 50% 26%,rgba(168,85,247,.12),transparent 27%)!important;
              opacity:.38!important;
            }
            .hero-authority{
              min-height:315px!important;
              margin:.15rem auto -1.45rem!important;
            }
            .hero-photo-wrap{
              width:100%!important;
              max-width:390px!important;
            }
            .hero-photo-wrap::before{
              width:48%!important;
              height:44%!important;
              filter:blur(12px)!important;
            }
            .hero-marcos{
              width:min(340px,84vw)!important;
              transform:translateX(5%)!important;
            }
            .hero-authority + h1{
              margin-top:-.45rem!important;
            }
          }
        ` }} />
      </head>
      <body>
        {children}

        <Script id="force-current-checkout-link" strategy="afterInteractive">
          {`
            (function(){
              var path = window.location.pathname;
              var shouldForceHarmoniaCheckout = path === '/' || path === '/b' || path === '/b/' || path === '/v1' || path === '/v1/';
              if (!shouldForceHarmoniaCheckout) return;

              var checkout = 'https://pay.kiwify.com.br/7FrQZOt';
              var utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

              function getTrackingParams(){
                var params = new URLSearchParams(window.location.search);

                if (params.toString()) {
                  try { sessionStorage.setItem('harmonia_tracking_params', params.toString()); } catch(e) {}
                  return params;
                }

                try { return new URLSearchParams(sessionStorage.getItem('harmonia_tracking_params') || ''); } catch(e) {}
                return new URLSearchParams();
              }

              function buildCheckoutUrl(){
                var params = getTrackingParams();
                var url = new URL(checkout);

                params.forEach(function(value, key){
                  if (!url.searchParams.has(key)) url.searchParams.set(key, value);
                });

                var hasUtm = utmKeys.some(function(key){ return params.has(key); });
                if (hasUtm && !url.searchParams.has('sck')) {
                  url.searchParams.set('sck', utmKeys.map(function(key){ return params.get(key) || ''; }).join('|'));
                }

                return url.toString();
              }

              function warmupCheckout(){
                ['https://pay.kiwify.com.br','https://kiwify.com.br'].forEach(function(href){
                  if (document.querySelector('link[data-checkout-warmup="' + href + '"]')) return;
                  var link = document.createElement('link');
                  link.rel = 'preconnect';
                  link.href = href;
                  link.crossOrigin = 'anonymous';
                  link.setAttribute('data-checkout-warmup', href);
                  document.head.appendChild(link);
                });
              }

              function updateCheckoutLinks(){
                var finalCheckoutUrl = buildCheckoutUrl();
                document.querySelectorAll('a[href*="pay.kiwify.com.br"]').forEach(function(link){
                  link.setAttribute('href', finalCheckoutUrl);
                  link.addEventListener('pointerenter', warmupCheckout, { passive: true });
                  link.addEventListener('touchstart', warmupCheckout, { passive: true });
                  link.addEventListener('mousedown', warmupCheckout, { passive: true });
                  link.addEventListener('focus', warmupCheckout, { passive: true });
                });
              }
              warmupCheckout();
              updateCheckoutLinks();
              new MutationObserver(updateCheckoutLinks).observe(document.body, { childList: true, subtree: true });
            })();
          `}
        </Script>

        <KiwifyUtmPropagation />
        <CheckoutLoadingFallback />

        {/* Meta Pixel — Foco em Harmonia (392375800147182) */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '392375800147182');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=392375800147182&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
