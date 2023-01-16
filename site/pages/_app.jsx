import '../styles/globals.scss'
import NextNProgress from 'nextjs-progressbar';
import {Particle} from "../components/elements/particle/particle";
import {Content} from "../components/layouts/content/content";

export default function App({Component, pageProps}) {
    return (
        <>
            <NextNProgress color="#3b82f6" showOnShallow={true}/>
            <Particle/>
            <Content>
                <Component {...pageProps} />
            </Content>
        </>)
}
