import Head from "next/head";
import {Section} from "../../elements/section/section";
import Image from "next/image";
import vladimir75vov from "../../../public/vladimir75vov.png"

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
            <header className={"sidebar"}>
                <Section>
                    <div className="mb-8 w-48 shadow-2xl p-2 rounded-full">
                        <div className="shadow-2xl p-2 rounded-full">
                            <Image src={vladimir75vov} alt={"Budaev Vladimir"} className={"rounded-full"}/>
                        </div>
                    </div>
                    <h2>Budaev Vladimir</h2>
                    <h5>Dev</h5>
                    <ul className={"flex flex-col gap-4 w-full items-center"}>
                    </ul>
                </Section>
            </header>
            {children}
        </>
    )
}

export {Header}