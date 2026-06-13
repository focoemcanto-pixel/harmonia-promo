'use client'

import { useEffect } from 'react'

const checkoutPrefixes = ['https://pay.kiwify.com.br']
const trackingStorageKey = 'harmonia_tracking_params'
const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
const trackingKeys = [...utmKeys, 'fbclid', 'gclid', 'ttclid', 'msclkid', 'sck']

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

function cleanVisibleUrl() {
  const url = new URL(window.location.href)
  const hadTracking = trackingKeys.some((key) => url.searchParams.has(key))

  if (!hadTracking) return

  trackingKeys.forEach((key) => url.searchParams.delete(key))

  const cleanPath = `${url.pathname}${url.search}${url.hash}`
  window.history.replaceState({}, document.title, cleanPath)
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
  if (!urlString || !params.toString()) return urlString

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

export default function KiwifyUtmPropagation() {
  useEffect(() => {
    let scheduled = false

    function updateTrackingTargets() {
      scheduled = false

      const params = getTrackingParams()
      if (!params.toString()) return

      document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => {
        const includeSck = isCheckoutUrl(link.href)
        const shouldUpdate = includeSck || link.href.includes('/obrigado-vip') || link.href.includes('/mentoria-especial')

        if (!shouldUpdate) return

        const nextHref = appendTracking(link.href, params, includeSck)
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
    }

    function scheduleUpdate() {
      if (scheduled) return
      scheduled = true
      window.requestAnimationFrame(updateTrackingTargets)
    }

    updateTrackingTargets()
    cleanVisibleUrl()

    const observer = new MutationObserver(scheduleUpdate)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return null
}
