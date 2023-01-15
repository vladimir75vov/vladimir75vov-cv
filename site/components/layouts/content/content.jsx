import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import Image from "next/image";
import vladimir75vov from "../../../public/vladimir75vov.png";
import {AiFillCamera, AiFillContacts, AiFillHome, AiFillPhone} from "react-icons/ai";
import Link from "next/link";
import {Particle} from "../../elements/particle/particle";

const Content = ({children, title, keywords, description, viewport, robots}) => {
    return (
        <>
            <Particle/>
            <div className={"bg-gray-100"}>
                <Header title={title} keywords={keywords} description={description} viewport={viewport}
                        robots={robots}/>
                <main>
                    <div className={"container px-5 py-24 mx-auto"}>
                        <div className={"flex flex-row gap-8 w-11/12 mx-auto"}>
                            <div className={""}>
                                <div className={"flex flex-col items-center py-16 shadow-2xl rounded-3xl w-72"}>
                                    <div>
                                        <Link href={"/general"}>
                                            <div className="mb-8 w-48 shadow-2xl p-2 rounded-full">
                                                <div className="shadow-2xl p-2 rounded-full">
                                                    <Image src={vladimir75vov} alt={"Budaev Vladimir"}
                                                           className={"rounded-full"}/>
                                                </div>
                                            </div>
                                        </Link>
                                        <h2 className="text-center text-3xl mb-2 text-gray-700">
                                            Budaev Vladimir
                                        </h2>
                                        <h5 className="text-center text-gray-500 mb-2 text-lg">Front-End
                                            Developer</h5>
                                        <div className=" h-1 bg-gray-200 rounded overflow-hidden mb-4">
                                            <div className="w-1/2 h-full bg-blue-500"></div>
                                        </div>
                                        <ul className={"flex flex-col gap-4 w-full items-center"}>
                                            <li className="w-full">
                                                <Link href={"/general"}>
                                                    <div
                                                        className={"flex flex-col items-center shadow-2xl rounded-3xl px-5 bg-blue-500 hover:bg-blue-600"}>
                                                        <button
                                                            className="flex flex-row justify-between items-center rounded-full w-full py-2 transition duration-300 shadow-light-inner ">
                                                            <span>General</span>
                                                            <AiFillHome/>
                                                        </button>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="w-full">
                                                <Link href={"/about"}>
                                                    <div
                                                        className={"flex flex-col items-center shadow-2xl rounded-3xl px-5 bg-blue-500 hover:bg-blue-600"}>
                                                        <button
                                                            className="flex flex-row justify-between items-center rounded-full w-full  py-2 transition duration-300 shadow-light-inner ">
                                                            <span>About</span>
                                                            <AiFillContacts/>
                                                        </button>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="w-full">
                                                <Link href={"/portfolio"}>
                                                    <div
                                                        className={"flex flex-col items-center shadow-2xl rounded-3xl px-5 bg-blue-500 hover:bg-blue-600"}>
                                                        <button
                                                            className={"flex flex-row justify-between items-center rounded-full w-full  py-2 transition duration-300 shadow-light-inner"}>
                                                            <span>Portfolio</span>
                                                            <AiFillCamera/>
                                                        </button>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className={"w-full"}>
                                                <Link href={"/contact"}>
                                                    <div
                                                        className={"flex flex-col items-center shadow-2xl rounded-3xl px-5 bg-blue-500 hover:bg-blue-600"}>
                                                        <button
                                                            className={"flex flex-row justify-between items-center rounded-full w-full py-2 transition duration-300 shadow-light-inner"}>
                                                            <span>Contact</span>
                                                            <AiFillPhone/>
                                                        </button>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={"flex flex-col w-full gap-8"}>
                                <div className={"flex flex-col items-center  py-16 shadow-2xl rounded-3xl"}>
                                    <div className={"flex flex-col w-full shadow-light-outer bg-light rounded-3xl p-9"}>
                                        {children}
                                    </div>
                                </div>
                                <div className={"flex flex-col items-center py-4 shadow-2xl px-6 rounded-3xl mx-auto"}>
                                    <a className={"text-sm text-gray-600"}>Develop By Vladimir Budaev</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export {Content}

//container mx-auto bg-gray-100 items-center p-8 border rounded-b-lg border-b-indigo-600 shadow-2xl rounded-3xl

