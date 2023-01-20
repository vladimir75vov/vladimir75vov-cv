import '../styles/globals.scss'
import NextNProgress from 'nextjs-progressbar';
import {ParticleComp} from "../components/elements/particle/particleComp";
import {ContentComp} from "../components/layouts/content/contentComp";
import {ThemeProvider} from "next-themes";

function App({Component, pageProps}) {
    return (
        <>
            <ThemeProvider enableSystem={true} attribute="class">
                <NextNProgress color="#3b82f6" showOnShallow={true}/>
                <ParticleComp/>
                <ContentComp>
                    <Component {...pageProps} />
                </ContentComp>
            </ThemeProvider>
        </>)
}

export default App