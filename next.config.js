/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['react-icons/hi2', 'react-icons/fa'],
  },
  // CSP is set in proxy.js with a per-request nonce (strict CSP, no unsafe-eval in production).
  // Do not add Content-Security-Policy here to avoid overriding the proxy policy.
}

module.exports = nextConfig
