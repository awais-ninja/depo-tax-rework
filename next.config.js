/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    // Next.js uses inline scripts and eval in places; allow both so the app runs.
    const scriptSrc = "script-src 'self' 'unsafe-eval' 'unsafe-inline'"
    const csp = [
      "default-src 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline'", // Next.js and Tailwind need inline styles
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://fonts.googleapis.com ws: wss:",
      "frame-ancestors 'none'",
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
