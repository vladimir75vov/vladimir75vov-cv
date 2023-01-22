import {Head, Html, Main, NextScript} from 'next/document'
import i18nextConfig from "../next-i18next.config";

export default function Document() {
    const currentLocale =  i18nextConfig.i18n.defaultLocale
    return (
        <Html lang={currentLocale}>
            <Head/>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}