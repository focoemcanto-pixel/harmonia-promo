'use client'

import { useEffect, useRef, useState } from 'react'
import SmartSalesAssistant from './SmartSalesAssistant'

const CHECKOUT_DELAY_MS = 800
const checkoutHosts = ['pay.kiwify.com.br']
const WHATSAPP_URL = 'https://wa.me/5571993392294'

function isCheckoutHref(href: string | null) {
  if (!href) return false
  try {
    const url = new URL(href, window.location.origin)
    return checkoutHosts.some((host) => url.hostname.includes(host))
  } catch {
    return checkoutHosts.some((host) => href.includes(host))
  }
}

export default function CheckoutLoadingFallback() {
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    function updateWhatsappLinks() {
      document.querySelectorAll<HTMLAnchorElement>('a[href*="wa.me/"]').forEach((link) => {
        if (link.dataset.humanWhatsapp === 'true') return
        link.href = WHATSAPP_URL
      })
    }
    function clearPending() {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current)
        timerRef.current = null
      }
      setVisible(false)
    }
    function scheduleFallback() {
      if (timerRef.current) window.clearTimeout(timerRef.current)
      timerRef.current = window.setTimeout(() => setVisible(true), CHECKOUT_DELAY_MS)
    }
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null
      const link = target?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!link) return
      if (link.href.includes('wa.me/') && link.dataset.humanWhatsapp !== 'true') link.href = WHATSAPP_URL
      if (!isCheckoutHref(link.getAttribute('href'))) return
      scheduleFallback()
    }
    function handlePageHide() { clearPending() }

    updateWhatsappLinks()
    const observer = new MutationObserver(updateWhatsappLinks)
    observer.observe(document.body, { childList: true, subtree: true })
    document.addEventListener('click', handleClick, true)
    window.addEventListener('pagehide', handlePageHide)
    window.addEventListener('beforeunload', handlePageHide)
    return () => {
      observer.disconnect()
      document.removeEventListener('click', handleClick, true)
      window.removeEventListener('pagehide', handlePageHide)
      window.removeEventListener('beforeunload', handlePageHide)
      clearPending()
    }
  }, [])

  return (
    <>
      <SmartSalesAssistant />
      {visible && (
        <div role="status" aria-live="polite" style={{position:'fixed',inset:0,zIndex:9999,display:'grid',placeItems:'center',background:'rgba(0,0,0,.34)',backdropFilter:'blur(3px)',padding:24}}>
          <div style={{width:'min(360px, 92vw)',borderRadius:22,background:'linear-gradient(180deg, rgba(18,18,18,.98), rgba(7,7,7,.98))',border:'1px solid rgba(255,255,255,.14)',color:'#fff',textAlign:'center',padding:'28px 24px',boxShadow:'0 24px 70px rgba(0,0,0,.42)',fontFamily:'Roboto, Arial, sans-serif'}}>
            <div style={{width:44,height:44,borderRadius:'50%',border:'3px solid rgba(255,255,255,.18)',borderTopColor:'#23D9B5',margin:'0 auto 16px',animation:'checkoutSpin .8s linear infinite'}} />
            <style dangerouslySetInnerHTML={{ __html: '@keyframes checkoutSpin{to{transform:rotate(360deg)}}' }} />
            <strong style={{display:'block',fontSize:20,lineHeight:1.2,marginBottom:8}}>🔒 Abrindo checkout seguro...</strong>
            <p style={{margin:0,color:'rgba(255,255,255,.72)',fontSize:15,lineHeight:1.45}}>Você será redirecionado para o ambiente de pagamento.</p>
          </div>
        </div>
      )}
    </>
  )
}
