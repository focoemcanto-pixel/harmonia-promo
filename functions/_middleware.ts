export const onRequest = async (context: any) => {
  const request = context.request
  const url = new URL(request.url)
  const host = url.hostname.toLowerCase()

  const isOfertaDomain = host === 'oferta.focoemcanto.com'
  const isRootPath = url.pathname === '/' || url.pathname === ''
  const isVisibleBPath = url.pathname === '/b' || url.pathname === '/b/'

  if (isOfertaDomain && isVisibleBPath) {
    return Response.redirect(`${url.origin}/`, 302)
  }

  if (isOfertaDomain && isRootPath) {
    const exportedPageUrl = new URL(request.url)
    exportedPageUrl.pathname = '/b.html'

    const firstAttempt = await context.env.ASSETS.fetch(
      new Request(exportedPageUrl.toString(), request)
    )

    if (firstAttempt.status !== 404) {
      return firstAttempt
    }

    const fallbackUrl = new URL(request.url)
    fallbackUrl.pathname = '/b/index.html'

    return context.env.ASSETS.fetch(
      new Request(fallbackUrl.toString(), request)
    )
  }

  return context.next()
}
