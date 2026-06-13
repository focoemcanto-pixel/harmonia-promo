export const onRequest = async (context: any) => {
  const request = context.request
  const url = new URL(request.url)
  const host = url.hostname.toLowerCase()

  const isOfertaDomain = host === 'oferta.focoemcanto.com'
  const isRootPath = url.pathname === '/' || url.pathname === ''
  const isVisibleBPath = url.pathname === '/b' || url.pathname === '/b/'

  if (isOfertaDomain && isVisibleBPath) {
    return Response.redirect(`${url.origin}/`, 301)
  }

  if (isOfertaDomain && isRootPath) {
    const rewriteUrl = new URL(request.url)
    rewriteUrl.pathname = '/b/index.html'

    const rewrittenRequest = new Request(rewriteUrl.toString(), request)
    return context.env.ASSETS.fetch(rewrittenRequest)
  }

  return context.next()
}
