import {SlSocialGithub, SlSocialGoogle, SlSocialInstagram, SlSocialVkontakte} from "react-icons/sl"
import Link from "next/link";
import {HeadingComp} from "../../components/elements/heading/headingComp";
import {RxDiscordLogo} from "react-icons/rx";

export default function General() {
    return (
        <>
            <HeadingComp title={"General CV page"}
                         description={"Vladimir Budaev, Front-End developer with React/Next and Tailwind, Back-End developer with Java/Python and Node"}/>
            <h1 className={"text-5xl mainText text-center leading-tight"}>
                Vladimir Budaev
            </h1>
            <h3 className={"mt-2 text-lg secondText text-center"}>
                Web Developer
            </h3>
            <ul className={"flex flex-row flex-wrap justify-center mt-5 gap-2"}>
                <Link href={"https://vk.com/vladimir75vov"}>
                    <li className={"flex flex-col items-center shadow-2xl rounded-3xl px-2 blue-500 hover:blue-600 py-2"}>
                        <SlSocialVkontakte className={"w-5 h-5 mainText"}/>
                    </li>
                </Link>
                <Link href={"https://github.com/vladimir75vov"}>
                    <li className={"flex flex-col items-center shadow-2xl rounded-3xl px-2 blue-500 hover:blue-600 py-2"}>
                        <SlSocialGithub className={"w-5 h-5 mainText"}/>
                    </li>
                </Link>
                <Link href={"https://www.instagram.com/vladimir75vov/"}>
                    <li className={"flex flex-col items-center shadow-2xl rounded-3xl px-2 blue-500 hover:blue-600 py-2"}>
                        <SlSocialInstagram className={"w-5 h-5 mainText"}/>
                    </li>
                </Link>
                <Link href={"mailto:vladimir75vov@gmail.com"}>
                    <li className={"flex flex-col items-center shadow-2xl rounded-3xl px-2 blue-500 hover:blue-600 py-2"}>
                        <SlSocialGoogle className={"w-5 h-5 mainText"}/>
                    </li>
                </Link>
                <Link href={"Vladimir75VoV#7480"}>
                    <li className={"flex flex-col items-center shadow-2xl rounded-3xl px-2 blue-500 hover:blue-600 py-2"}>
                        <RxDiscordLogo className={"w-5 h-5 mainText"}/>
                    </li>
                </Link>
            </ul>
            <div className="mx-auto w-56 h-1 bg-gray-200 rounded overflow-hidden mb-4 mt-5">
                <div className="w-1/3 h-full blue-500 "></div>
            </div>
        </>
    )
}