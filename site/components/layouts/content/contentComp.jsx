import {HeaderComp} from "../header/headerComp";
import {FooterComp} from "../footer/footerComp";
import Image from "next/image";
import vladimir75vov from "../../../public/vladimir75vov.png";
import {AiFillCamera, AiFillContacts, AiFillHome, AiFillPhone} from "react-icons/ai";
import Link from "next/link";
import {FabComp} from "../../elements/fab/fabComp";
import {Paper} from "@mui/material";

const ContentComp = ({children}) => {
    return (
        <>
            <div className={"bg-gray-100"}>
                <HeaderComp/>
                <main>
                    <div className={"container px-5 py-24 mx-auto"}>
                        <div
                            className={"flex lg:flex-row flex-col gap-4 xl:max-w-screen-xl sm:max-w-screen-sm w-11/12 mx-auto"}>
                            <div className={"lg:mb-14 xl:w-96 lg:w-72 w-full"}>
                                <Paper className={"flex flex-col items-center py-16 shadow-2xl rounded-3xl"}>
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
                                                    <FabComp>
                                                        <span>General</span>
                                                        <AiFillHome className={"w-5 h-5"}/>
                                                    </FabComp>
                                                </Link>
                                            </li>
                                            <li className="w-full">
                                                <Link href={"/about"}>
                                                    <FabComp>
                                                        <span>About</span>
                                                        <AiFillContacts className={"w-5 h-5"}/>
                                                    </FabComp>
                                                </Link>
                                            </li>
                                            <li className="w-full">
                                                <Link href={"/portfolio"}>
                                                    <FabComp>
                                                        <span>Portfolio</span>
                                                        <AiFillCamera className={"w-5 h-5"}/>
                                                    </FabComp>
                                                </Link>
                                            </li>
                                            <li className={"w-full"}>
                                                <Link href={"/contact"}>
                                                    <FabComp>
                                                        <span>Contact</span>
                                                        <AiFillPhone className={"w-5 h-5"}/>
                                                    </FabComp>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Paper>
                            </div>
                            <div className={"flex flex-col w-full gap-8"}>
                                <Paper className={"flex flex-col items-center  py-16 shadow-2xl rounded-3xl"}>
                                    <div className={"flex flex-col w-full shadow-light-outer bg-light rounded-3xl p-9"}>
                                        {children}
                                    </div>
                                </Paper>
                                <Paper
                                    className={"flex flex-col items-center py-4 shadow-2xl px-6 rounded-3xl mx-auto"}>
                                    <a className={"text-sm text-gray-600"}>Develop By Vladimir Budaev</a>
                                </Paper>
                            </div>
                        </div>
                    </div>
                </main>
                <FooterComp/>
            </div>
        </>
    )
}

export {ContentComp}

//container mx-auto bg-gray-100 items-center p-8 border rounded-b-lg border-b-indigo-600 shadow-2xl rounded-3xl

