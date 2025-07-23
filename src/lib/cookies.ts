import Cookies from 'js-cookie'

const sandboxUrl = typeof window !== 'undefined' && window.location.href.includes('sandbox')
const isProduction = process.env.NODE_ENV === 'production' || sandboxUrl ? true : false

/**
 * Sets a cookie safely based on environment
 */
export function setCookie(key: string, value: string, options?: Cookies.CookieAttributes) {
  Cookies.set(key, value, {
    path: '/',
    secure: isProduction,
    sameSite: isProduction ? 'None' : 'Lax',
    ...options,
  })
}

/**
 * Gets a cookie value
 */
export function getCookie(key: string): string | undefined {
  return Cookies.get(key)
}

/**
 * Removes a cookie
 */
export function clearCookie(key: string) {
  Cookies.remove(key, { path: '/' })
}
