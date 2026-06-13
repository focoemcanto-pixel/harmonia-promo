async function fetchAsset(context: any, request: Request, pathname: string) {
  const assetUrl = new URL(request.url)
  assetUrl.pathname = pathname
  assetUrl.search = ''

  return context.env.ASSETS.fetch(
    new Request(assetUrl.toString(), {
      method: request.method,
      headers: request.headers,
      redirect: 'manual',
    })
  )
}

async function serveBPage(context: any, request: Request) {
  const candidates = ['/b/', '/b/index.html', '/b.html', '/b']

  for (const pathname of candidates) {
    const response = await fetchAsset(context, request, pathname)

    if (response.status >= 200 && response.status < 300) {
      const headers = new Headers(response.headers)
      headers.set('cache-control', 'no-store')
      headers.delete('location')

      return new Response(response.body, {
        status: 200,
        headers,
      })
    }
  }

  return context.next()
}

export const onRequest = async (context: any) => {
  const request = context.request
  const url = new URL(request.url)
  const host = url.hostname.toLowerCase()

  const isOfertaDomain = host === 'oferta.focoemcanto.com'
  const isRootPath = url.pathname === '/' || url.pathname === ''
  const isVisibleBPath = url.pathname === '/b' || url.pathname === '/b/'

  if (isOfertaDomain && isRootPath) {
    return serveBPage(context, request)
  }

  if (isOfertaDomain && isVisibleBPath) {
    return Response.redirect(`${url.origin}/`, 302)
  }

  return context.next()
}
