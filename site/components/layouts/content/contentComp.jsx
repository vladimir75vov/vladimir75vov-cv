import {HeaderComp} from "../header/headerComp";
import {FooterComp} from "../footer/footerComp";
import Image from "next/image";
import vladimir75vov from "../../../public/vladimir75vov.png";
import {AiFillCamera, AiFillContacts, AiFillHome, AiFillPhone, AiFillPrinter, AiOutlineDownload} from "react-icons/ai";
import {FabComp} from "../../elements/fab/fabComp";
import {Paper} from "@mui/material";
import LinkComp from "../../elements/link/linkComp";
import {useTranslation} from "next-i18next";
const ContentComp = ({children}) => {
    const { t } = useTranslation(["layout"])

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
                                    <LinkComp href={"/general"}>
                                        <div className=" mb-8 shadow-2xl p-2 rounded-full">
                                            <div className="shadow-2xl p-2 rounded-full">
                                                <Image src={vladimir75vov} alt={"Budaev Vladimir"}
                                                       className={"rounded-full w-48"}/>
                                            </div>
                                        </div>
                                    </LinkComp>
                                    <h2 className="text-center text-3xl mb-2 mainText">
                                        {t("layout:lastFirstName")}
                                    </h2>
                                    <h5 className="text-center secondText mb-2 text-lg">
                                        {t("layout:description")}
                                    </h5>
                                    <div className=" h-1 bg-gray-200 rounded overflow-hidden mb-4">
                                        <div className="w-1/2 h-full blue-500"></div>
                                    </div>
                                    <ul className={"flex flex-col gap-4 w-full items-center"}>
                                        <li className="w-full">
                                            <LinkComp href={"/general"}>
                                                <FabComp>
                                                    <span className={"mainText"}>
                                                        {t("layout:menu1")}
                                                    </span>
                                                    <AiFillHome className={"w-5 h-5 mainText"}/>
                                                </FabComp>
                                            </LinkComp>
                                        </li>
                                        <li className="w-full">
                                            <LinkComp href={"/about"}>
                                                <FabComp>
                                                    <span className={"mainText"}>
                                                        {t("layout:menu2")}
                                                    </span>
                                                    <AiFillContacts className={"w-5 h-5 mainText"}/>
                                                </FabComp>
                                            </LinkComp>
                                        </li>
                                        <li className="w-full">
                                            <LinkComp href={"/portfolio"}>
                                                <FabComp>
                                                    <span className={"mainText"}>
                                                        {t("layout:menu3")}
                                                    </span>
                                                    <AiFillCamera className={"w-5 h-5 mainText"}/>
                                                </FabComp>
                                            </LinkComp>
                                        </li>
                                        {/*
                                        <li className={"w-full"}>
                                            <LinkComp href={"/contact"}>
                                                <FabComp>
                                                    <span className={"mainText"}>
                                                        {t("layout:menu4")}
                                                    </span>
                                                    <AiFillPhone className={"w-5 h-5 mainText"}/>
                                                </FabComp>
                                            </LinkComp>
                                        </li>
                                        */}
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
                                            <LinkComp href={""}>
                                                <FabComp>
                                                    <AiFillPrinter className={"w-5 h-5 mainText"}/>
                                                    <span className={"mainText"}>
                                                        {t("layout:print")}
                                                    </span>
                                                </FabComp>
                                            </LinkComp>
                                        </div>
                                        <div className={"flex flex-row"}>
                                            <LinkComp href={""}>
                                                <FabComp>
                                                    <AiOutlineDownload className={"w-5 h-5 mainText"}/>
                                                    <span className={"mainText"}>
                                                        {t("layout:download")}
                                                    </span>
                                                </FabComp>
                                            </LinkComp>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                            <Paper
                                className={"flex flex-col items-center py-4 shadow-2xl px-6 rounded-3xl mx-auto paper-white "}>
                                <a className={"text-sm secondText"}>
                                    {t("layout:develop")}
                                </a>
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
