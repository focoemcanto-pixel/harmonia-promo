export const onRequest = async (context: any) => {
  const request = context.request
  const url = new URL(request.url)
  const host = url.hostname.toLowerCase()

  const isOfertaDomain = host === 'oferta.focoemcanto.com'
  const isRootPath = url.pathname === '/' || url.pathname === ''

  if (isOfertaDomain && isRootPath) {
    const rewriteUrl = new URL(request.url)
    rewriteUrl.pathname = '/b/'

    return context.env.ASSETS.fetch(new Request(rewriteUrl.toString(), request))
  }

  return context.next()
}
