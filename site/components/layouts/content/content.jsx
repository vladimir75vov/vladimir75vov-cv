import {Header} from "../header/header";
import {Footer} from "../footer/footer";

const Content = ({children, title, keywords, description, viewport, robots}) => {
    return (
        <>
            <Header title={title} keywords={keywords} description={description} viewport={viewport} robots={robots}/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export {Content}