import {BsFillMoonFill, BsTranslate} from "react-icons/bs";
import {IconButton} from "@mui/material";
import {useTheme} from "next-themes";
import {useEffect} from "react";
import {useRouter} from "next/router";
import LanguageSwitchComp from "../../elements/languageSwitch/languageSwitchComp";

const HeaderComp = ({children,}) => {
    const {theme, setTheme} = useTheme()
    const router = useRouter()
    const currentLocale = router.query.locale

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem("theme") === "system" || localStorage.getItem("theme") == null) {
                setTheme("dark")
            }
        }
    }, [])
    const themeSwitching = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    return (
        <>
            <header>
                <div className={"fixed top-10 right-10 flex flex-row w-28 justify-between z-40"}>
                    {currentLocale === "ru" ?
                        <LanguageSwitchComp locale={"en"} key={"en"}>
                            <IconButton className={"blue-500 hover:blue-600 w-12 h-12"}>
                                <BsTranslate className={"w-7 h-7"}/>
                            </IconButton>
                        </LanguageSwitchComp> :
                        <LanguageSwitchComp locale={"ru"} key={"ru"}>
                            <IconButton className={"blue-500 hover:blue-600 w-12 h-12"}>
                                <BsTranslate className={"w-7 h-7"}/>
                            </IconButton>
                        </LanguageSwitchComp>}

                    <IconButton className={"blue-500 hover:blue-600 w-12 h-12"} onClick={themeSwitching}>
                        <BsFillMoonFill className={"w-7 h-7"}/>
                    </IconButton>
                </div>
            </header>
            {children}
        </>
    )
}

export {HeaderComp}