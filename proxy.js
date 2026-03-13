/**
 * Proxy runs before each request. Used to set strict Content-Security-Policy
 * with a per-request nonce. Production: no 'unsafe-eval' or 'unsafe-inline'.
 * Development: 'unsafe-eval' only for React dev tools (per Next.js docs).
 */

import { NextResponse } from 'next/server'

function generateNonce() {
  const bytes = new Uint8Array(16)
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(bytes)
  }
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(bytes).toString('base64')
  }
  const b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  let out = ''
  for (let i = 0; i < bytes.length; i += 3) {
    out += b64[bytes[i] >> 2]
    out += b64[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)]
    out += b64[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)]
    out += b64[bytes[i + 2] & 63]
  }
  return out.replace(/=+$/, '')
}

export function proxy(request) {
  const nonce = generateNonce()
  const isDev = process.env.NODE_ENV === 'development'

  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    "'strict-dynamic'",
    ...(isDev ? ["'unsafe-eval'"] : []),
  ].join(' ')

  // In dev, omit nonce from style-src so 'unsafe-inline' can take effect for Next.js dev overlay/devtools.
  // Production keeps nonce-only for strict CSP.
  const styleSrc = isDev
    ? "'self' 'unsafe-inline'"
    : ["'self'", `'nonce-${nonce}'`].join(' ')

  const cspHeader = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    `style-src ${styleSrc}`,
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    "connect-src 'self' https:" + (isDev ? ' ws: http://localhost:* http://127.0.0.1:*' : ''),
    "frame-src 'self' https://www.google.com https://www.google.co.uk",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
  ]
    .join('; ')
    .replace(/\s{2,}/g, ' ')
    .trim()

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('Content-Security-Policy', cspHeader)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  response.headers.set('Content-Security-Policy', cspHeader)

  return response
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
