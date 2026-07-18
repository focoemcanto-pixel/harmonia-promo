'use client'

import { useEffect } from 'react'

const checkoutPrefixes = ['https://pay.kiwify.com.br']
const currentCheckoutUrl = 'https://pay.kiwify.com.br/yIy3Xdl'
const trackingStorageKey = 'harmonia_tracking_params'
const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

const priceReplacements: Array<[string, string]> = [
  ['R$ 5,99', 'R$ 7,02'],
  ['R$\u00a05,99', 'R$\u00a07,02'],
  ['R$57,90', 'R$67,90'],
  ['R$ 57,90', 'R$ 67,90'],
  ['57,90', '67,90'],
  ['5,99', '7,02'],
]

function getCurrentParams() {
  return new URLSearchParams(window.location.search)
}

function getStoredParams() {
  try {
    return new URLSearchParams(sessionStorage.getItem(trackingStorageKey) || '')
  } catch {
    return new URLSearchParams()
  }
}

function persistParams(params: URLSearchParams) {
  if (!params.toString()) return

  try {
    sessionStorage.setItem(trackingStorageKey, params.toString())
  } catch {
    // Ignore storage errors in private browsers.
  }
}

function getTrackingParams() {
  const currentParams = getCurrentParams()

  if (currentParams.toString()) {
    persistParams(currentParams)
    return currentParams
  }

  return getStoredParams()
}

function buildSckParam(params: URLSearchParams) {
  const hasUtm = utmKeys.some((key) => params.has(key))
  if (!hasUtm) return ''

  return utmKeys.map((key) => params.get(key) || '').join('|')
}

function isCheckoutUrl(url: string) {
  return checkoutPrefixes.some((prefix) => url.includes(prefix))
}

function appendTracking(urlString: string, params: URLSearchParams, includeSck: boolean) {
  if (!urlString) return urlString

  try {
    const url = new URL(urlString, window.location.origin)

    params.forEach((value, key) => {
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, value)
      }
    })

    if (includeSck && !url.searchParams.has('sck')) {
      const sck = buildSckParam(params)
      if (sck) url.searchParams.set('sck', sck)
    }

    return url.toString()
  } catch {
    return urlString
  }
}

function setIfChanged(element: Element, attribute: string, value: string) {
  if (element.getAttribute(attribute) !== value) {
    element.setAttribute(attribute, value)
  }
}

function isHarmoniaOfferPage() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  return path === '/' || path === '/b' || path === '/v1' || path === '/v2' || path.startsWith('/v2/')
}

function buildCurrentCheckoutUrl() {
  return appendTracking(currentCheckoutUrl, getTrackingParams(), true)
}

function updateStructuredOfferPrices() {
  document.querySelectorAll<HTMLElement>('.v1-big-price').forEach((element) => {
    if (element.textContent?.replace(/\s/g, '') !== 'R$67,90') {
      element.innerHTML = 'R$67<span>,90</span>'
    }
  })

  document.querySelectorAll<HTMLElement>('.v2-big').forEach((element) => {
    if (element.textContent?.replace(/\s/g, '') !== 'R$67,90') {
      element.innerHTML = 'R$67<span>,90</span>'
    }
  })

  document.querySelectorAll<HTMLElement>('.v1-price-panel p strong, .v2-panel p strong').forEach((element) => {
    if (element.textContent !== 'R$7,02') {
      element.textContent = 'R$7,02'
    }
  })
}

function updateOfferPrices() {
  if (!isHarmoniaOfferPage()) return

  updateStructuredOfferPrices()

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  let node = walker.nextNode()

  while (node) {
    const originalValue = node.nodeValue || ''
    let nextValue = originalValue

    priceReplacements.forEach(([oldValue, newValue]) => {
      nextValue = nextValue.split(oldValue).join(newValue)
    })

    if (nextValue !== originalValue) {
      node.nodeValue = nextValue
    }

    node = walker.nextNode()
  }
}

export default function KiwifyUtmPropagation() {
  useEffect(() => {
    let scheduled = false

    function updateTrackingTargets() {
      scheduled = false

      const params = getTrackingParams()

      document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => {
        const includeSck = isCheckoutUrl(link.href)
        const shouldUpdate = includeSck || link.href.includes('/obrigado-vip') || link.href.includes('/mentoria-especial')

        if (!shouldUpdate) return

        const baseUrl = includeSck && isHarmoniaOfferPage() ? currentCheckoutUrl : link.href
        const nextHref = appendTracking(baseUrl, params, includeSck)

        if (link.href !== nextHref) {
          link.href = nextHref
        }
      })

      document.querySelectorAll<HTMLElement>('[data-upsell-url]').forEach((element) => {
        const url = element.getAttribute('data-upsell-url')
        if (!url) return

        setIfChanged(element, 'data-upsell-url', appendTracking(url, params, false))
      })

      document.querySelectorAll<HTMLElement>('[data-downsell-url]').forEach((element) => {
        const url = element.getAttribute('data-downsell-url')
        if (!url) return

        setIfChanged(element, 'data-downsell-url', appendTracking(url, params, false))
      })

      updateOfferPrices()
    }

    function scheduleUpdate() {
      if (scheduled) return
      scheduled = true
      window.requestAnimationFrame(updateTrackingTargets)
    }

    function forceCurrentCheckoutOnClick(event: MouseEvent) {
      if (!isHarmoniaOfferPage()) return

      const target = event.target
      if (!(target instanceof Element)) return

      const link = target.closest<HTMLAnchorElement>('a[href*="pay.kiwify.com.br"]')
      if (!link) return

      link.href = buildCurrentCheckoutUrl()
    }

    updateTrackingTargets()

    const observer = new MutationObserver(scheduleUpdate)
    observer.observe(document.body, { childList: true, subtree: true, characterData: true })
    document.addEventListener('click', forceCurrentCheckoutOnClick, true)

    return () => {
      observer.disconnect()
      document.removeEventListener('click', forceCurrentCheckoutOnClick, true)
    }
  }, [])

  return null
}
