import {SlSocialGithub, SlSocialGoogle, SlSocialInstagram, SlSocialVkontakte} from "react-icons/sl"
import Link from "next/link";
import {Heading} from "../../components/elements/heading/heading";
import {AiFillPrinter, AiOutlineDownload} from "react-icons/ai";
import {RxDiscordLogo} from "react-icons/all";

export default function General() {
    return (
        <>
            <Heading title={"test"}/>
            <h1 className={"text-5xl text-gray-700 text-center leading-tight"}>
                Vladimir Budaev
            </h1>
            <h3 className={"mt-2 text-lg text-gray-500 text-center"}>
                Web Develo
            </h3>
            <ul className={"flex flex-row flex-wrap justify-center mt-5 gap-2"}>
                <Link href={"https://vk.com/vladimir75vov"}>
                    <li className={"flex flex-col items-center shadow-2xl rounded-3xl px-2 bg-blue-500 hover:bg-blue-600 py-2"}>
                        <SlSocialVkontakte className={"w-5 h-5"}/>
                    </li>
                </Link>
                <Link href={"https://github.com/vladimir75vov"}>
                    <li className={"flex flex-col items-center shadow-2xl rounded-3xl px-2 bg-blue-500 hover:bg-blue-600 py-2"}>
                        <SlSocialGithub className={"w-5 h-5"}/>
                    </li>
                </Link>
                <Link href={"https://www.instagram.com/vladimir75vov/"}>
                    <li className={"flex flex-col items-center shadow-2xl rounded-3xl px-2 bg-blue-500 hover:bg-blue-600 py-2"}>
                        <SlSocialInstagram className={"w-5 h-5"}/>
                    </li>
                </Link>
                <Link href={"mailto:vladimir75vov@gmail.com"}>
                    <li className={"flex flex-col items-center shadow-2xl rounded-3xl px-2 bg-blue-500 hover:bg-blue-600 py-2"}>
                        <SlSocialGoogle className={"w-5 h-5"}/>
                    </li>
                </Link>
                <Link href={"Vladimir75VoV#7480"}>
                    <li className={"flex flex-col items-center shadow-2xl rounded-3xl px-2 bg-blue-500 hover:bg-blue-600 py-2"}>
                        <RxDiscordLogo className={"w-5 h-5"}/>
                    </li>
                </Link>
            </ul>
            <div className="mx-auto w-56 h-1 bg-gray-200 rounded overflow-hidden mb-4 mt-5">
                <div className="w-1/3 h-full bg-blue-500 "></div>
            </div>
            <div className={"flex flex-row flex-wrap justify-between mt-14 gap-3"}>
                <div className={"flex flex-row"}>
                    <div
                        className={"flex flex-col items-center shadow-2xl rounded-3xl px-5 bg-blue-500 hover:bg-blue-600"}>
                        <button
                            className="flex flex-row justify-between items-center rounded-full w-full py-2 transition duration-300 shadow-light-inner ">
                            <AiFillPrinter/>
                            <span>Print My Cv</span>
                        </button>
                    </div>
                </div>
                <div className={"flex flex-row"}>
                    <div
                        className={"flex flex-col items-center shadow-2xl rounded-3xl px-5 bg-blue-500 hover:bg-blue-600"}>
                        <button
                            className="flex flex-row justify-between items-center rounded-full w-full py-2 transition duration-300 shadow-light-inner ">
                            <AiOutlineDownload/>
                            <span>Download My Cv</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
//h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden