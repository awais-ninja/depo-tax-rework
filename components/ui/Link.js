import NextLink from 'next/link'

const EXTERNAL_PREFIXES = ['http://', 'https://', 'mailto:', 'tel:']

function isExternal(href) {
  if (!href || typeof href !== 'string') return false
  return EXTERNAL_PREFIXES.some((prefix) => href.startsWith(prefix))
}

export default function Link({ href, target, rel, children, ...rest }) {
  if (isExternal(href)) {
    return (
      <a
        href={href}
        target={target ?? '_blank'}
        rel={rel ?? 'noopener noreferrer'}
        {...rest}
      >
        {children}
      </a>
    )
  }
  return (
    <NextLink href={href} {...rest}>
      {children}
    </NextLink>
  )
}
