import {HeaderComp} from "../header/headerComp";
import {FooterComp} from "../footer/footerComp";
import Image from "next/image";
import vladimir75vov from "../../../public/vladimir75vov.png";
import {AiFillCamera, AiFillContacts, AiFillHome, AiFillPhone, AiFillPrinter, AiOutlineDownload} from "react-icons/ai";
import Link from "next/link";
import {FabComp} from "../../elements/fab/fabComp";
import {Paper} from "@mui/material";

const ContentComp = ({children}) => {
    return (
        <>
            <HeaderComp/>
            <main>
                <div className={"container px-5 py-24 mx-auto"}>
                    <div
                        className={"flex lg:flex-row flex-col gap-4 xl:max-w-screen-xl sm:max-w-screen-sm w-11/12 mx-auto"}>
                        <div className={"lg:mb-14 xl:w-96 lg:w-72 w-full"}>
                            <Paper className={"flex flex-col items-center py-16 shadow-2xl rounded-3xl paper-white"}>
                                <div>
                                    <Link href={"/general"}>
                                        <div className="mb-8 w-48 shadow-2xl p-2 rounded-full">
                                            <div className="shadow-2xl p-2 rounded-full">
                                                <Image src={vladimir75vov} alt={"Budaev Vladimir"}
                                                       className={"rounded-full"}/>
                                            </div>
                                        </div>
                                    </Link>
                                    <h2 className="text-center text-3xl mb-2 mainText">
                                        Vladimir Budaev
                                    </h2>
                                    <h5 className="text-center secondText mb-2 text-lg">Front-End
                                        Developer</h5>
                                    <div className=" h-1 bg-gray-200 rounded overflow-hidden mb-4">
                                        <div className="w-1/2 h-full blue-500"></div>
                                    </div>
                                    <ul className={"flex flex-col gap-4 w-full items-center"}>
                                        <li className="w-full">
                                            <Link href={"/general"}>
                                                <FabComp>
                                                    <span className={"mainText"}>General</span>
                                                    <AiFillHome className={"w-5 h-5 mainText"}/>
                                                </FabComp>
                                            </Link>
                                        </li>
                                        <li className="w-full">
                                            <Link href={"/about"}>
                                                <FabComp>
                                                    <span className={"mainText"}>About</span>
                                                    <AiFillContacts className={"w-5 h-5 mainText"}/>
                                                </FabComp>
                                            </Link>
                                        </li>
                                        <li className="w-full">
                                            <Link href={"/portfolio"}>
                                                <FabComp>
                                                    <span className={"mainText"}>Portfolio</span>
                                                    <AiFillCamera className={"w-5 h-5 mainText"}/>
                                                </FabComp>
                                            </Link>
                                        </li>
                                        <li className={"w-full"}>
                                            <Link href={"/contact"}>
                                                <FabComp>
                                                    <span className={"mainText"}>Contact</span>
                                                    <AiFillPhone className={"w-5 h-5 mainText"}/>
                                                </FabComp>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Paper>
                        </div>
                        <div className={"flex flex-col w-full gap-8"}>
                            <Paper className={"flex flex-col items-center py-16 shadow-2xl rounded-3xl paper-white"}>
                                <div className={"flex flex-col w-full shadow-light-outer bg-light rounded-3xl p-9"}>
                                    {children}

                                    <div className={"flex flex-row flex-wrap justify-between mt-14 gap-3"}>
                                        <div className={"flex flex-row"}>
                                            <FabComp>
                                                <AiFillPrinter className={"w-5 h-5 mainText"}/>
                                                <span className={"mainText"}>Print My Cv</span>
                                            </FabComp>
                                        </div>
                                        <div className={"flex flex-row"}>
                                            <FabComp>
                                                <AiOutlineDownload className={"w-5 h-5 mainText"}/>
                                                <span className={"mainText"}>Download My Cv</span>
                                            </FabComp>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                            <Paper
                                className={"flex flex-col items-center py-4 shadow-2xl px-6 rounded-3xl mx-auto paper-white "}>
                                <a className={"text-sm secondText"}>Develop By Vladimir Budaev</a>
                            </Paper>
                        </div>
                    </div>
                </div>
            </main>
            <FooterComp/>
        </>
    )
}

export {ContentComp}
//container mx-auto bg-gray-100 items-center p-8 border rounded-b-lg border-b-indigo-600 shadow-2xl rounded-3xl

