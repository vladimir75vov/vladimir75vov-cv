import {BsFillMoonFill, BsTranslate} from "react-icons/bs";
import {IconButton} from "@mui/material";
import {useRouter} from "next/router";

const HeaderComp = ({children,}) => {
    const {locale, push, pathname} = useRouter()
    const languageSwitching = () => {
        locale === "en" ? push(pathname, undefined, {locale: "ru"}) : push(pathname, undefined, {locale: "en"})
    }

    return (
        <>
            <header>
                <div className={"fixed top-10 right-10 flex flex-row w-28 justify-between z-40"}>
                    <IconButton className={"bg-blue-500 hover:bg-blue-600 w-12 h-12"} onClick={languageSwitching}>
                        <BsTranslate className={"w-7 h-7"}/>
                    </IconButton>
                    <IconButton className={"bg-blue-500 hover:bg-blue-600 w-12 h-12"}>
                        <BsFillMoonFill className={"w-7 h-7"}/>
                    </IconButton>
                </div>
            </header>
            {children}
        </>
    )
}

export {HeaderComp}