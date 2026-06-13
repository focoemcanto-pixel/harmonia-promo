import Script from 'next/script'

export default function ObrigadoVipLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Script src="https://snippets.kiwify.com/upsell/upsell.min.js" strategy="afterInteractive" />
    </>
  )
}
