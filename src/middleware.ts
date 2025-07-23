// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const { pathname } = req.nextUrl

  // Skip asset requests (SVG, PNG, JS, CSS, etc)
  if (pathname.match(/\.(svg|png|jpg|jpeg|css|js|json|ico)$/)) {
    return NextResponse.next()
  }

  // Always allow docs subpaths
  if (pathname.startsWith('/docs')) {
    if (pathname === '/docs' || pathname === '/docs/') {
      url.pathname = '/docs/integration'
      return NextResponse.redirect(url)
    }
    return NextResponse.next()
  }

  // Redirect everything else into docs
  url.pathname = '/docs/integration'
  return NextResponse.redirect(url)
}

export const config = {
  // run middleware on all routes except Next.js internals & favicon
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}