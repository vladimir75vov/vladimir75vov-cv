import {HeadingComp} from "../../components/elements/heading/headingComp";
import {Paper} from "@mui/material";

export default function About() {
    return (
        <>
            <HeadingComp title={"About me CV page"}
                         description={"Vladimir Budaev, Front-End developer with React/Next and Tailwind, Back-End developer with Java/Python and Node"}/>
            <h1 className={"text-4xl text-gray-700 mt-8"}>Vladimir Budaev</h1>
            <h3 className={"mt-2.5 text-lg text-gray-500"}>Front-End Developer</h3>

            <p className={"mt-6 text-md text-gray-500 leading-7"}>Vladimir Budaev, Front-End developer with React and
                tailwind</p>

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
        </>
    )
}
