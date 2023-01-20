import {MdOutlineRemoveRedEye} from "react-icons/md";
import Link from "next/link";
import {FiGithub} from "react-icons/fi";
import {HeadingComp} from "../../components/elements/heading/headingComp";

export default function Portfolio() {
    return (
        <>
            <HeadingComp title={"Portfolio CV page"}
                         description={"Vladimir Budaev, Front-End developer with React/Next and Tailwind, Back-End developer with Java/Python and Node"}/>
            <div className={"flex flex-col"}>
                <div className={"flex-wrap flex gap-2 items-center"}>
                    <span className={"text-xl mainText"}>
                        Scanner hub for pickup
                    </span>
                    <span className={"shadow text-xs text-gray-400 py-1 px-4 rounded-full"}>
                        1 Jan 2021
                    </span>
                </div>
                <div className={"flex-wrap flex gap-2 mb-2.5 items-center"}>
                     <span className={"text-xl secondText"}>
                        with React,Tailwind,JavaScript and Mobile dev
                    </span>
                </div>
                <div className={"flex flex-row flex-wrap gap-4 justify-start"}>
                    <div className={"flex flex-row items-center gap-1"}>
                        <div className={"ml-0.5 text-gray-700"}>
                            <MdOutlineRemoveRedEye/>
                        </div>
                        <span className="mainText">
                            View 
                            <Link href={"https://cos-leroymerlin.web.app/"} className={"switch-blue-500 hover:switch-blue-600"}>
                                Demo
                            </Link>
                        </span>
                    </div>
                    <div className={"flex flex-row items-center gap-1"}>
                        <div className={"ml-0.5 text-gray-700"}>
                            <FiGithub/>
                        </div>
                        <span className="mainText">
                            View 
                            <Link href={"https://github.com/vladimir75vov/COS-LeroyMerlin"} className={"switch-blue-500 hover:switch-blue-600"}>
                                Demo
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="h-1 bg-gray-200 rounded overflow-hidden my-3">
                    <div className="h-full bg-blue-500"/>
                </div>
            </div>
        </>
    )
}