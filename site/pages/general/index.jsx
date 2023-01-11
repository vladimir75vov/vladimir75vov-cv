import {Content} from "../../components/layouts/content/content";
import Image from "next/image";
import vladimir75vov from "../../public/vladimir75vov.png"
import {AiFillHome} from "react-icons/ai"

export default function General() {
    return (
        <>
            <Content>

                <div className={"flex flex-row gap-8 w-11/12 mx-auto"}>
                    <div className={"w-72"}>
                        <div className={"flex flex-col items-center py-16 shadow-2xl rounded-3xl w-72"}>
                            <div>
                                <div className="mb-8 w-48 shadow-2xl p-2 rounded-full">
                                    <div className="shadow-2xl p-2 rounded-full">
                                        <Image src={vladimir75vov} alt={"Budaev Vladimir"} className={"rounded-full"}/>
                                    </div>
                                </div>
                                <h2 className="text-center text-3xl mb-2 text-gray-700">Ali
                                    Rahmani</h2>
                                <h5 className="text-center text-gray-500 mb-2 text-lg">Front-End
                                    Developer</h5>
                                <div className=" h-1 bg-gray-200 rounded overflow-hidden mb-4">
                                    <div className="w-1/2 h-full bg-blue-500"></div>
                                </div>
                                <ul className={"flex flex-col gap-4 w-full items-center"}>
                                    <li className="w-full">
                                        <div
                                            className={"flex flex-col items-center shadow-2xl rounded-3xl px-5 bg-blue-500"}>
                                            <button
                                                className="flex flex-row justify-between items-center rounded-full hover:shadow-light-inner w-full  py-2 transition duration-300 shadow-light-inner ">
                                                <span>General</span>
                                                <AiFillHome/>
                                            </button>
                                        </div>
                                    </li>
                                    <li className="w-full">
                                        <div
                                            className={"flex flex-col items-center shadow-2xl rounded-3xl px-5 bg-blue-500"}>
                                            <button
                                                className="flex flex-row justify-between items-center rounded-full hover:shadow-light-inner w-full  py-2 transition duration-300 shadow-light-inner ">
                                                <span>About</span>
                                                <AiFillHome/>
                                            </button>
                                        </div>
                                    </li>
                                    <li className="w-full">
                                        <div
                                            className={"flex flex-col items-center shadow-2xl rounded-3xl px-5 bg-blue-500"}>
                                            <button
                                                className="flex flex-row justify-between items-center rounded-full hover:shadow-light-inner w-full  py-2 transition duration-300 shadow-light-inner ">
                                                <span>Portfolio</span>
                                                <AiFillHome/>
                                            </button>
                                        </div>
                                    </li>
                                    <li className="w-full">
                                        <div
                                            className={"flex flex-col items-center shadow-2xl rounded-3xl px-5 bg-blue-500"}>
                                            <button
                                                className="flex flex-row justify-between items-center rounded-full hover:shadow-light-inner w-full  py-2 transition duration-300 shadow-light-inner ">
                                                <span>Contact</span>
                                                <AiFillHome/>
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-col w-full "}>
                        <div className={"flex flex-col items-center py-16 shadow-2xl rounded-3xl"}>
aaaaa
                        </div>
                    </div>
                </div>
            </Content>
        </>
    )
}
//h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden