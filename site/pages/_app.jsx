import '../styles/globals.scss'
import NextNProgress from 'nextjs-progressbar';
import {ParticleComp} from "../components/elements/particle/particleComp";
import {ContentComp} from "../components/layouts/content/contentComp";

export default function App({Component, pageProps}) {
    return (
        <>
            <NextNProgress color="#3b82f6" showOnShallow={true}/>
            <ParticleComp/>
            <ContentComp>
                <Component {...pageProps} />
            </ContentComp>
        </>)
}
