import Head from "next/head";

const _title = "Curriculum vitae vladimir75vov"
const _keywords = "Curriculum vitae vladimir75vov keywords"
const _description = ""
const _viewport = "width=device-width, initial-scale=1"
const _robots = "all"

const Header = ({
                    children,
                    title = _title,
                    keywords = _keywords,
                    description = _description,
                    viewport = _viewport,
                    robots = _robots
                }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={"description"} content={description}/>
                <meta name={"keywords"} content={keywords}/>
                <meta name={"viewport"} content={viewport}/>
                <meta name={"robots"} content={robots}/>
                <link rel={"icon"} href={"/favicon.ico"}/>
            </Head>
            <header>
                header
            </header>
            {children}
        </>
    )
}

export {Header}