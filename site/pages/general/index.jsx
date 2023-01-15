import {Content} from "../../components/layouts/content/content";
import {SlSocialVkontakte} from "react-icons/sl"
import Link from "next/link";

export default function General() {
    return (
        <>
            <Content title={"General CV"}>
                <h1 className={"text-5xl text-gray-700 text-center leading-tight"}>
                    Vladimir Budaev
                </h1>
                <h3 className={"mt-2 text-lg text-gray-500 text-center"}>
                    Web Develo
                </h3>
                <ul className={"flex flex-row flex-wrap justify-center mt-5 gap-2"}>
                    <Link href={"https://vk.com/vladimir75vov"}>
                        <li className={"flex flex-col items-center py-16 shadow-2xl rounded-3xl"}>
                            <SlSocialVkontakte/>
                        </li>
                    </Link>
                </ul>
                <div className="mx-auto w-56 h-1 bg-gray-200 rounded overflow-hidden mb-4">
                    <div className="w-1/3 h-full bg-blue-500 "></div>
                </div>

            </Content>
        </>
    )
}
//h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden