/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['react-icons/hi2', 'react-icons/fa'],
  },
  async headers() {
    // CSP that allows Next.js hydration, HMR, and inline scripts. Avoids DevTools CSP issues.
    // For stricter production CSP, consider nonce-based CSP via middleware (see Next.js docs).
    const isDev = process.env.NODE_ENV === 'development'
    const scriptSrc = [
      "'self'",
      "'unsafe-inline'", // Next.js RSC payload and hydration
      "'unsafe-eval'",   // Next.js and tooling use eval in dev and prod
    ].join(' ')
    const csp = [
      "default-src 'self'",
      `script-src ${scriptSrc}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "connect-src 'self' https: wss: " + (isDev ? "ws: http://localhost:* http://127.0.0.1:*" : ""),
      // Allow embedding Google Maps iframes while keeping other framing locked down
      "frame-src 'self' https://www.google.com https://www.google.co.uk",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: csp,
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
