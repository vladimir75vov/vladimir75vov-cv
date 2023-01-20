import {HeadingComp} from "../../components/elements/heading/headingComp";
import {Paper, Slider} from "@mui/material";
import {BsCalendarWeek} from "react-icons/bs";

export default function About() {
    const marks = [
        {
            value: 0,

        },
        {
            value: 20,

        },
        {
            value: 40,
        },
        {
            value: 60,
        },
        {
            value: 80,
        },
        {
            value: 100,
        },
    ];

    return (
        <>
            <HeadingComp title={"About me CV page"}
                         description={"Vladimir Budaev, Front-End developer with React/Next and Tailwind, Back-End developer with Java/Python and Node"}/>
            <h1 className={"text-4xl text-gray-700 mt-8"}>
                Vladimir Budaev
            </h1>
            <h3 className={"mt-2.5 text-lg text-gray-500"}>
                Front-End Developer
            </h3>

            <p className={"mt-6 text-md text-gray-500 leading-7"}>
                Vladimir Budaev, Front-End developer with React and tailwind
            </p>

            <div className={"flex flex-col lg:flex-row mt-6 gap-5 justify-center"}>
                <Paper className={"w-full rounded-2xl bg-gray-100 p-2 shadow-xl"}>
                    <li className={"flex flex-col lg:flex-row border-b justify-between"}>
                        <span className={"w-full lg:w-1/3 text-center py-2.5 pb-0 font-semibold"}>
                            Name
                        </span>
                        <span className={"w-full lg:w-2/3 text-center py-2.5"}>
                            Vladimir Budaev
                        </span>
                    </li>
                    <li className={"flex flex-col lg:flex-row border-b justify-between"}>
                        <span className={"w-full lg:w-1/3 text-center py-2.5 pb-0 font-semibold"}>
                            Age
                        </span>
                        <span className={"w-full lg:w-2/3 text-center py-2.5"}>
                            19
                        </span>
                    </li>
                    <li className={"flex flex-col lg:flex-row justify-between"}>
                        <span className={"w-full lg:w-1/3 text-center py-2.5 pb-0 font-semibold"}>
                            City
                        </span>
                        <span className={"w-full lg:w-2/3 text-center py-2.5"}>
                            Moscow, Russia
                        </span>
                    </li>
                </Paper>
                <Paper className={"w-full rounded-2xl bg-gray-100 p-2 shadow-xl"}>
                    <li className={"flex flex-col lg:flex-row border-b justify-between"}>
                        <span className={"w-full lg:w-1/3 text-center py-2.5 pb-0 font-semibold"}>
                            Email
                        </span>
                        <span className={"w-full lg:w-2/3 text-center py-2.5"}>
                            vladimir75vov@gmail.com
                        </span>
                    </li>
                    <li className={"flex flex-col lg:flex-row border-b justify-between"}>
                        <span className={"w-full lg:w-1/3 text-center py-2.5 pb-0 font-semibold"}>
                            Phone
                        </span>
                        <span className={"w-full lg:w-2/3 text-center py-2.5"}>
                            +7(903)709-51-73
                        </span>
                    </li>
                    <li className={"flex flex-col lg:flex-row justify-between"}>
                        <span className={"w-full lg:w-1/3 text-center py-2.5 pb-0 font-semibold"}>
                            Remote
                        </span>
                        <span className={"w-full lg:w-2/3 text-center py-2.5"}>
                            Yes
                        </span>
                    </li>
                </Paper>
            </div>

            <div className={"flex flex-col gap-6 lg:gap-0 items-center lg:flex-row mt-8"}>
                <div className={"flex flex-col lg:w-11/12 w-11/12"}>
                    <p className={"uppercase text-gray-700 mb-2 ml-2 cursor-default font-semibold"}>javascript</p>
                    <div
                        className={"flex flex-row items-center justify-start mb-5 py-1 px-2 rounded-full w-full h-4"}>
                        <Slider
                            aria-label="Restricted values"
                            defaultValue={70}
                            valueLabelDisplay="auto"
                            marks={marks}
                            className={"text-blue-500 h-2"}
                            disabled
                        />
                    </div>
                    <p className={"uppercase text-gray-700 mb-2 ml-2 cursor-default font-semibold"}>react/next</p>
                    <div
                        className={"flex flex-row items-center justify-start mb-5 py-1 px-2 rounded-full w-full h-4"}>
                        <Slider
                            aria-label="Restricted values"
                            defaultValue={60}
                            valueLabelDisplay="auto"
                            marks={marks}
                            className={"text-blue-500 h-2"}
                            disabled
                        />
                    </div>
                    <p className={"uppercase text-gray-700 mb-2 ml-2 cursor-default font-semibold"}>tailwind</p>
                    <div
                        className={"flex flex-row items-center justify-start mb-5 py-1 px-2 rounded-full w-full h-4"}>
                        <Slider
                            aria-label="Restricted values"
                            defaultValue={50}
                            valueLabelDisplay="auto"
                            marks={marks}
                            className={"text-blue-500 h-2"}
                            disabled
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-start items-center lg:w-1/12 w-full">
                    <p className="uppercase lg:w-80 w-full text-center bg-blue-600 shadow-light-outer lg:shadow-light-innerpy-2.5 px-2 rounded-full font-semibold lg:-rotate-90 lg:rotate-90">
                        Front
                    </p>
                </div>
            </div>

            <div className={"flex flex-col gap-6 lg:gap-0 items-center lg:flex-row mt-8"}>
                <div className={"flex flex-col lg:w-11/12 w-11/12"}>
                    <p className={"uppercase text-gray-700 mb-2 ml-2 cursor-default font-semibold"}>java</p>
                    <div
                        className={"flex flex-row items-center justify-start mb-5 py-1 px-2 rounded-full w-full h-4"}>
                        <Slider
                            aria-label="Restricted values"
                            defaultValue={40}
                            valueLabelDisplay="auto"
                            marks={marks}
                            className={"text-blue-500 h-2"}
                            disabled
                        />
                    </div>
                    <p className={"uppercase text-gray-700 mb-2 ml-2 cursor-default font-semibold"}>spring</p>
                    <div
                        className={"flex flex-row items-center justify-start mb-5 py-1 px-2 rounded-full w-full h-4"}>
                        <Slider
                            aria-label="Restricted values"
                            defaultValue={30}
                            valueLabelDisplay="auto"
                            marks={marks}
                            className={"text-blue-500 h-2"}
                            disabled
                        />
                    </div>
                    <p className={"uppercase text-gray-700 mb-2 ml-2 cursor-default font-semibold"}>python</p>
                    <div
                        className={"flex flex-row items-center justify-start mb-5 py-1 px-2 rounded-full w-full h-4"}>
                        <Slider
                            aria-label="Restricted values"
                            defaultValue={50}
                            valueLabelDisplay="auto"
                            marks={marks}
                            className={"text-blue-500 h-2"}
                            disabled
                        />
                    </div>
                    <p className={"uppercase text-gray-700 mb-2 ml-2 cursor-default font-semibold"}>flask</p>
                    <div
                        className={"flex flex-row items-center justify-start mb-5 py-1 px-2 rounded-full w-full h-4"}>
                        <Slider
                            aria-label="Restricted values"
                            defaultValue={50}
                            valueLabelDisplay="auto"
                            marks={marks}
                            className={"text-blue-500 h-2"}
                            disabled
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-start items-center lg:w-1/12 w-full">
                    <p className="uppercase lg:w-80 w-full text-center bg-blue-600 shadow-light-outer lg:shadow-light-innerpy-2.5 px-2 rounded-full font-semibold lg:-rotate-90 lg:rotate-90">
                        Back
                    </p>
                </div>
            </div>

            <div className={"flex flex-col gap-6 lg:gap-0 items-center lg:flex-row mt-8"}>
                <div className={"flex flex-col lg:w-11/12 w-11/12"}>
                    <p className={"uppercase text-gray-700 mb-2 ml-2 cursor-default font-semibold"}>java/kotlin</p>
                    <div
                        className={"flex flex-row items-center justify-start mb-5 py-1 px-2 rounded-full w-full h-4"}>
                        <Slider
                            aria-label="Restricted values"
                            defaultValue={60}
                            valueLabelDisplay="auto"
                            marks={marks}
                            className={"text-blue-500 h-2"}
                            disabled
                        />
                    </div>
                    <p className={"uppercase text-gray-700 mb-2 ml-2 cursor-default font-semibold"}>layout/xml</p>
                    <div
                        className={"flex flex-row items-center justify-start mb-5 py-1 px-2 rounded-full w-full h-4"}>
                        <Slider
                            aria-label="Restricted values"
                            defaultValue={60}
                            valueLabelDisplay="auto"
                            marks={marks}
                            className={"text-blue-500 h-2"}
                            disabled
                        />
                    </div>
                    <p className={"uppercase text-gray-700 mb-2 ml-2 cursor-default font-semibold"}>jetpack compose</p>
                    <div
                        className={"flex flex-row items-center justify-start mb-5 py-1 px-2 rounded-full w-full h-4"}>
                        <Slider
                            aria-label="Restricted values"
                            defaultValue={50}
                            valueLabelDisplay="auto"
                            marks={marks}
                            className={"text-blue-500 h-2"}
                            disabled
                        />
                    </div>
                    <p className={"uppercase text-gray-700 mb-2 ml-2 cursor-default font-semibold"}>React Native</p>
                    <div
                        className={"flex flex-row items-center justify-start mb-5 py-1 px-2 rounded-full w-full h-4"}>
                        <Slider
                            aria-label="Restricted values"
                            defaultValue={60}
                            valueLabelDisplay="auto"
                            marks={marks}
                            className={"text-blue-500 h-2"}
                            disabled
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-start items-center lg:w-1/12 w-full">
                    <p className="uppercase lg:w-80 w-full text-center bg-blue-600 shadow-light-outer lg:shadow-light-innerpy-2.5 px-2 rounded-full font-semibold lg:-rotate-90 lg:rotate-90">
                        mobile
                    </p>
                </div>
            </div>

            <div className={"flex flex-row mt-41"}>
                <div className={"w-11/12 mt-5"}>
                    <div className={"flex gap-10 flex-col w-full"}>
                        <div className={"flex flex-row gap-4 lg:gap-0"}>
                            <div className={"w-1/12"}>
                                <div className={"w-2.5 h-2.5 mt-1.5 mx-auto bg-blue-500 rounded-full"}></div>
                            </div>
                            <div className={"w-11/12"}>
                                <div className="flex-wrap flex gap-2 mb-1.5">
                                    <span className="text-md text-gray-700">
                                        LeroyMerlin
                                    </span>
                                    <span
                                        className="shadow bg-gray-100 text-blue-500 py-1 px-4 rounded-full text-xs text-gray-400">
                                        1 year 2 month
                                    </span>
                                </div>
                                <div className={"flex flex-row items-center text-gray-500 text-sm w-full"}>
                                    <span className={"text-lg"}>
                                        <BsCalendarWeek/>
                                    </span>
                                    <span className="ml-2">
                                        Aug 2021 - Until now
                                    </span>
                                </div>
                                <div className="mt-3 text-md text-gray-500 leading-7">
                                    Customer Service Specialist
                                </div>
                                <div className="text-md text-gray-500 leading-7">
                                    - Employee delivery of online and offline goods at the pick-up point;
                                </div>
                                <div className="text-md text-gray-500 leading-7">
                                    - Improving employee communication with information systems and their interaction;
                                </div>
                                <div className="text-md text-gray-500 leading-7">
                                    - Establishing systems and supporting them;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}