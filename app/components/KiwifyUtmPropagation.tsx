'use client'

import { useEffect } from 'react'

const checkoutPrefixes = ['https://pay.kiwify.com.br']

function buildSckParam() {
  const currentUrl = window.top?.location?.href ?? window.location.href
  const url = new URL(currentUrl)

  if (!currentUrl.includes('?')) return ''

  const utmSource = url.searchParams.get('utm_source')
  const utmMedium = url.searchParams.get('utm_medium')
  const utmCampaign = url.searchParams.get('utm_campaign')
  const utmTerm = url.searchParams.get('utm_term')
  const utmContent = url.searchParams.get('utm_content')

  return `&sck=${utmSource}|${utmMedium}|${utmCampaign}|${utmTerm}|${utmContent}`
}

export default function KiwifyUtmPropagation() {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const params = searchParams.toString()

    if (!params) return

    document.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
      const isCheckoutLink = checkoutPrefixes.some((prefix) => link.href.includes(prefix))

      if (!isCheckoutLink) return

      link.href += link.href.includes('?')
        ? `&${params}${buildSckParam()}`
        : `?${params}${buildSckParam()}`
    })
  }, [])

  return null
}
