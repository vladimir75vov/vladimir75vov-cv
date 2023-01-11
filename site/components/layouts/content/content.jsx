import {Header} from "../header/header";
import {Footer} from "../footer/footer";

const Content = ({children, title, keywords, description, viewport, robots}) => {
    return (
        <>
            <Header title={title} keywords={keywords} description={description} viewport={viewport} robots={robots}/>
            <main className={"bg-gray-100"}>
                <div className={"container px-5 py-24 mx-auto"}>
                    {children}
                </div>
            </main>
            <Footer/>
        </>
    )
}

export {Content}

//container mx-auto bg-gray-100 items-center p-8 border rounded-b-lg border-b-indigo-600 shadow-2xl rounded-3xl