import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LinkComp = ({ children, skipLocaleHandling, ...rest }) => {
    const router = useRouter()
    const locale = rest.locale || router.query.locale || ''

    let href = rest.href || router.asPath
    if (href.indexOf('http') === 0) skipLocaleHandling = true
    if (locale && !skipLocaleHandling) {
        href = href
            ? `/${locale}${href}`
            : router.pathname.replace('[locale]', locale)
    }

    return (
        <>
            <Link href={href}>
                <div {...rest}>{children}</div>
            </Link>
        </>
    )
}

export default LinkComp