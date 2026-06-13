import Script from 'next/script'

export default function PageBLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Script id="page-b-current-checkout" strategy="afterInteractive">
        {`
          (function(){
            var checkout = 'https://pay.kiwify.com.br/7FrQZOt';
            function apply(){
              document.querySelectorAll('a[href*="pay.kiwify.com.br"]').forEach(function(link){
                if (link.href.indexOf(checkout) === -1) link.href = checkout;
              });
            }
            apply();
            new MutationObserver(apply).observe(document.body, { childList: true, subtree: true });
          })();
        `}
      </Script>
    </>
  )
}
