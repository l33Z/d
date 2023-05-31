import { NextResponse } from 'next/server'
import Cookies from 'universal-cookie'

export function middleware(req) {
  const isLoggedIn = req.cookies.get('is_logged_in')?.value || false
  // console.log('isLoggedIn', isLoggedIn)
  // console.log('req', req.url)
  if (isLoggedIn === false) {
    return NextResponse.redirect(new URL('/login', req.url))
  } else {
    if (req.nextUrl.pathname === '/') {
      return NextResponse.redirect(new URL('/home', req.url))
    }
    // else if (req.nextUrl.pathname === '/logout') {
    //   // console.log('before', req.cookies)
    //   // const cookies = new Cookies(req.cookies)
    //   // console.log('cookies', cookies)
    //   // cookies.remove('is_logged_in', { path: '/' })
    //   // cookies.set('is_logged_in', 'false', { path: '/' })
    //   // req.cookies.delete('is_logged_in')
    //   // console.log('after', cookies.cookies.delete('is_logged_in'))
    //   // console.log("req.cookies.get('is_logged_in')?.value", req.cookies.get('is_logged_in')?.value || false)

    //   // const response = NextResponse.next()
    //   // response.cookies.set('is_logged_in', 'false')
    //   // response.redirect(new URL('/login', req.url))
    //   // response.redirect = new URL('/login', req.url)
    //   return NextResponse.redirect(new URL('/login', req.url))
    //   // return response
    // }
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/', '/home', '/bids', '/bids/:path*', '/reports', '/logout'],
}
